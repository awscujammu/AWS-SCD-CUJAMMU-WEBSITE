const MEETUP = 'https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/316878843/';
const navPages = [['About', 'about.html'], ['Agenda', 'agenda.html'], ['Speakers', 'speakers.html'], ['Organisers', 'organisers.html'], ['Partners', 'partners.html'], ['Venue', 'venue.html'], ['Register', 'registration.html']];
const footerPages = [['About', 'about.html'], ['Tracks', 'tracks.html'], ['Agenda', 'agenda.html'], ['Speakers', 'speakers.html'], ['Organisers', 'organisers.html'], ['Partners', 'partners.html'], ['Venue', 'venue.html'], ['FAQs', 'faqs.html'], ['Registration', 'registration.html']];
const nav = document.querySelector('#site-nav');
if (nav)
    nav.innerHTML = '<div class="nav"><div class="wrap navin"><a class="brand eventBrand" href="index.html" aria-label="AWS Community Day Jammu 2026 home"><img class="eventBrandMark" src="assets/aws-community-day-chip-gold.png" alt=""><span class="eventBrandText"><strong>AWS COMMUNITY DAY</strong><em>JAMMU 2026</em></span></a><div class="navlinks">' + navPages.map(([n, h]) => '<a href="' + h + '">' + n + '</a>').join('') + '<a class="btn" href="registration.html">Register free <span class="gold-arrow" aria-hidden="true">↗</span></a></div></div></div>';
const pre = document.querySelector('#community-cta');
if (pre)
    pre.innerHTML = '<section class="communityCta"><div class="wrap"><div><div class="eyebrow">20 November 2026 · Central University of Jammu</div><h2>See you at<br><span>Student</span><br>Community Day.</h2></div><div class="ctaRight"><div class="ctaSocials"><a href="https://www.instagram.com/aws_sbg_cu_jammu" target="_blank" rel="noopener">Instagram <span class="gold-arrow" aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/company/aws-sbg-cujammu/posts/" target="_blank" rel="noopener">LinkedIn <span class="gold-arrow" aria-hidden="true">↗</span></a><a href="https://www.meetup.com/aws-sbg-at-central-university-of-jammu/" target="_blank" rel="noopener">Meetup <span class="gold-arrow" aria-hidden="true">↗</span></a><a href="https://bit.ly/3S8YEXM" target="_blank" rel="noopener">Builder Center <span class="gold-arrow" aria-hidden="true">↗</span></a></div></div></div></section>';
const footer = document.querySelector('#site-footer');
if (footer)
    footer.innerHTML = '<div class="footer"><div class="wrap"><div class="footerTop"><div><h3>AWS Student Community Day<br>Jammu 2026</h3><p class="muted">Organised by</p><div class="sbgBrandLockup" aria-label="AWS Student Builder Group at Central University of Jammu"><img src="assets/cta-landmark.png" alt=""><span><strong>AWS Student Builder Group</strong><em>at Central University of Jammu</em></span></div></div><div class="footerLinks">' + footerPages.map(([n, h]) => '<a href="' + h + '"' + (h.startsWith('http') ? ' target="_blank" rel="noopener"' : '') + '>' + n + '</a>').join('') + '</div></div><div class="footerContact">Questions or registration issues? Contact the organisers. <a href="mailto:contact.aws.sbg.cujammu@gmail.com">contact.aws.sbg.cujammu@gmail.com</a></div><div class="footerBottom"><span>© 2026 AWS Student Community Day Jammu. All rights reserved.</span><span class="footerCredits">Made by <b>Mrigank Jaiswal</b> <a class="footerLinkedIn" href="https://www.linkedin.com/in/mrigank-jaiswal/" target="_blank" rel="noopener noreferrer" aria-label="Mrigank Jaiswal on LinkedIn" title="Mrigank Jaiswal on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.34H5.02V9.01h2.99v9.33ZM6.52 7.74a1.73 1.73 0 1 1 .02-3.46 1.73 1.73 0 0 1-.02 3.46Zm11.82 10.6h-2.98v-4.54c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.12V9.01h2.86v1.28h.04c.4-.74 1.37-1.51 2.82-1.51 3.02 0 3.58 1.99 3.58 4.58v4.98h-.08Z"/></svg></a> and <b>Nadim Akhtar</b> <a class="footerLinkedIn" href="https://www.linkedin.com/in/nadim-akhtar-05125b396/" target="_blank" rel="noopener noreferrer" aria-label="Nadim Akhtar on LinkedIn" title="Nadim Akhtar on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.34H5.02V9.01h2.99v9.33ZM6.52 7.74a1.73 1.73 0 1 1 .02-3.46 1.73 1.73 0 0 1-.02 3.46Zm11.82 10.6h-2.98v-4.54c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.12V9.01h2.86v1.28h.04c.4-.74 1.37-1.51 2.82-1.51 3.02 0 3.58 1.99 3.58 4.58v4.98h-.08Z"/></svg></a> · Powered by <b>SupplyMesh AI Smart Solutions</b></span></div></div></div>';
const eventAt = new Date('2026-11-20T09:00:00+05:30');
function updateCountdown() { const gap = Math.max(0, eventAt - Date.now()), d = 864e5, h = 36e5, m = 6e4; const put = (id, v) => { const el = document.getElementById(id); if (el)
    el.textContent = String(v).padStart(2, '0'); }; put('days', Math.floor(gap / d)); put('hours', Math.floor(gap % d / h)); put('mins', Math.floor(gap % h / m)); put('secs', Math.floor(gap % m / 1000)); }
updateCountdown();
setInterval(updateCountdown, 1000);
const city = document.querySelector('[data-city-cycle]');
if (city && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    const words = ['जम्मू', 'JAMMU'];
    let wi = 0;
    setInterval(() => { wi = (wi + 1) % 2; const target = words[wi], chars = 'JAMMUजम्मू01<>/'; let step = 0; const timer = setInterval(() => { city.textContent = [...target].map((ch, i) => i < step ? ch : chars[Math.floor(Math.random() * chars.length)]).join(''); if (step++ >= target.length) {
        city.textContent = target;
        clearInterval(timer);
    } }, 70); }, 2400);
}
document.querySelectorAll('[data-add-calendar]').forEach(button => button.addEventListener('click', () => { const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//AWS SCD Jammu//EN', 'BEGIN:VEVENT', 'UID:aws-scd-jammu-2026', 'DTSTAMP:20261020T000000Z', 'DTSTART:20261120T033000Z', 'DTEND:20261120T113000Z', 'SUMMARY:AWS Student Community Day Jammu', 'LOCATION:Aryabhatt Block Auditorium, Central University of Jammu', 'DESCRIPTION:AWS sessions, Skill Builder, Cloud Tournament and community experiences.', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'AWS-SCD-Jammu-2026.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }));
const rows = [...document.querySelectorAll('[data-start][data-end]')], status = document.querySelector('[data-timeline-status]');
function updateTimeline() { if (!rows.length)
    return; const now = Date.now(); rows.forEach(r => r.classList.remove('active')); const current = rows.find(r => now >= new Date(r.dataset.start).getTime() && now < new Date(r.dataset.end).getTime()); const next = rows.find(r => now < new Date(r.dataset.start).getTime()); if (current) {
    current.classList.add('active');
    if (status)
        status.textContent = 'Happening now: ' + current.querySelector('h3').textContent;
}
else if (next) {
    next.classList.add('active');
    if (status)
        status.textContent = 'Up next: ' + next.querySelector('h3').textContent;
}
else if (status)
    status.textContent = 'Programme completed — thank you for joining AWS SCD Jammu.'; }
updateTimeline();
setInterval(updateTimeline, 30000);
const filters = document.querySelectorAll('[data-filter]'), sessions = document.querySelectorAll('[data-track]');
filters.forEach(b => b.addEventListener('click', () => { filters.forEach(x => x.classList.remove('active')); b.classList.add('active'); sessions.forEach(s => s.hidden = b.dataset.filter !== 'all' && s.dataset.track !== b.dataset.filter); }));
