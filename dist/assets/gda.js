/* ====== EDIT THIS BLOCK: payment + pass settings ====== */
const CFG = {
    upiId: 'YOUR-UPI-ID@bank', // TODO: organiser UPI ID
    payee: 'AWS SBG CU Jammu',
    endpoint: '', // TODO: Formspree/Google-Apps-Script URL that receives the registration (POST JSON)
    whatsapp: '91XXXXXXXXXX', // TODO: organiser WhatsApp number (fallback when endpoint is empty)
    passes: [
        { id: 'student', name: 'Student Pass', price: 199, per: '/ person', tag: 'Most popular', hot: 1, pts: ['Full-day event access', 'Lunch & refreshments', 'Cloud Tournament entry', 'Participation certificate'] },
        { id: 'squad', name: 'Squad Pass', price: 699, per: '/ squad of 4', tag: 'Best value', squad: 1, pts: ['4 full-day passes', 'Team seating for the Tournament', 'Lunch & refreshments for all 4', 'Participation certificates'] },
        { id: 'guest', name: 'Educator / Guest', price: 299, per: '/ person', tag: 'Non-students', pts: ['Full-day event access', 'Lunch & refreshments', 'Networking sessions', 'Participation certificate'] }
    ]
};
/* ======================================================= */
const $ = (s, r = document) => r.querySelector(s), money = n => '₹' + n.toLocaleString('en-IN');
// preloader (home page only)
if ($('.hero') && !sessionStorage.gdaPre) {
    sessionStorage.gdaPre = 1;
    const p = document.createElement('div');
    p.id = 'pre';
    p.innerHTML = '<div><img src="assets/aws-community-day-chip-gold.png" alt="AWS Student Community Day Jammu 2026"><p>STUDENT COMMUNITY DAY · JAMMU 2026</p><i><b></b></i></div>';
    document.body.appendChild(p);
    const d = () => { p.classList.add('out'); setTimeout(() => p.remove(), 700); };
    setTimeout(d, 1400);
    p.onclick = d;
}
// scroll reveal
const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) {
    x.target.classList.add('in');
    io.unobserve(x.target);
} }), { threshold: .12 });
document.querySelectorAll('.feature,.card,.timeRow,.speakerCard,.sponsor,.passCard,.faqList details').forEach(el => { el.classList.add('rv'); io.observe(el); });
// passes + checkout
const grid = $('#passGrid');
if (grid) {
    grid.innerHTML = CFG.passes.map(p => `<article class="passCard${p.hot ? ' hot' : ''}"><span class="tag">${p.tag}</span><h3>${p.name}</h3><div class="price">${money(p.price)}<small>${p.per}</small></div><ul>${p.pts.map(x => '<li>' + x + '</li>').join('')}</ul><button class="btn" data-pass="${p.id}">Book ${p.name} <span class="gold-arrow" aria-hidden="true">→</span></button></article>`).join('');
    grid.querySelectorAll('.passCard').forEach(el => { el.classList.add('rv', 'in'); });
    const m = $('#pm'), f = $('#pf'), steps = [...m.querySelectorAll('.step')];
    let pass, ref;
    const go = n => steps.forEach((s, i) => s.classList.toggle('on', i === n)), close = () => m.classList.remove('open');
    grid.onclick = e => { const b = e.target.closest('[data-pass]'); if (!b)
        return; pass = CFG.passes.find(p => p.id === b.dataset.pass); $('#pn').textContent = pass.name + ' · ' + money(pass.price); $('#sq').style.display = pass.squad ? 'block' : 'none'; go(0); $('#e1').textContent = ''; m.classList.add('open'); };
    $('.x', m).onclick = close;
    m.onclick = e => { if (e.target === m)
        close(); };
    f.onsubmit = e => {
        e.preventDefault();
        const v = new FormData(f);
        if (!/^[6-9]\d{9}$/.test(v.get('phone'))) {
            $('#e1').textContent = 'Enter a valid 10-digit mobile number.';
            return;
        }
        ref = 'SCDJ-' + Date.now().toString(36).toUpperCase().slice(-6);
        const link = `upi://pay?pa=${encodeURIComponent(CFG.upiId)}&pn=${encodeURIComponent(CFG.payee)}&am=${pass.price}&cu=INR&tn=${ref}`;
        $('#am').textContent = money(pass.price);
        $('#ui').textContent = CFG.upiId + ' · Ref ' + ref;
        $('#ul').href = link;
        const q = $('#qr');
        q.innerHTML = '';
        if (window.QRCode)
            new QRCode(q, { text: link, width: 176, height: 176 });
        go(1);
    };
    $('#pg').onsubmit = async (e) => {
        e.preventDefault();
        const utr = $('#utr').value.trim();
        if (!/^\d{12}$/.test(utr)) {
            $('#e2').textContent = 'UTR / transaction ID must be 12 digits.';
            return;
        }
        const d = { ref, pass: pass.name, amount: pass.price, utr, ...Object.fromEntries(new FormData(f)) };
        try {
            if (CFG.endpoint) {
                const r = await fetch(CFG.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
                if (!r.ok)
                    throw 0;
            }
            else
                window.open('https://wa.me/' + CFG.whatsapp + '?text=' + encodeURIComponent(`AWS SCD Jammu registration\nRef: ${ref}\nPass: ${pass.name} (${money(pass.price)})\nName: ${d.name}\nCollege: ${d.college}\nUTR: ${utr}`), '_blank');
            $('#rf').textContent = ref;
            go(2);
        }
        catch (x) {
            $('#e2').textContent = 'Could not submit. Please try again or WhatsApp the organisers with your UTR.';
        }
    };
}
