(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce)
        return;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover)
        return;
    document.querySelectorAll('[data-tilt]').forEach((el) => {
        el.addEventListener('pointermove', (event) => {
            const r = el.getBoundingClientRect();
            const x = (event.clientX - r.left) / r.width;
            const y = (event.clientY - r.top) / r.height;
            const rx = (.5 - y) * 11, ry = (x - .5) * 15;
            el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
        });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
    const visual = document.querySelector('.heroCampus');
    if (visual) {
        const hero = visual.closest('.heroVisual');
        hero?.addEventListener('pointermove', (event) => {
            const r = hero.getBoundingClientRect();
            const x = (event.clientX - r.left) / r.width - .5;
            const y = (event.clientY - r.top) / r.height - .5;
            visual.style.transform = `rotateY(${-15 + x * 18}deg) rotateX(${5 - y * 12}deg) rotateZ(-1deg) translateZ(30px)`;
        });
        hero?.addEventListener('pointerleave', () => { visual.style.transform = ''; });
    }
})();
// Spatial Rail scroll reveal and depth response
(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveal = document.querySelectorAll('.section,.pageHero,.agendaHero,.communityCta,.footerTop');
    reveal.forEach(el => el.setAttribute('data-rail-reveal', ''));
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('rail-visible');
                observer.unobserve(entry.target);
            }
        }), { threshold: .08, rootMargin: '0px 0px -45px 0px' });
        reveal.forEach(el => observer.observe(el));
    }
    else
        reveal.forEach(el => el.classList.add('rail-visible'));
    if (reduce)
        return;
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (fine) {
        document.querySelectorAll('.feature,.packageCard,.speakerCard,.sponsor,.benefitGrid article').forEach(el => {
            el.addEventListener('pointermove', event => {
                const r = el.getBoundingClientRect(), x = (event.clientX - r.left) / r.width - .5, y = (event.clientY - r.top) / r.height - .5;
                el.style.transform = `perspective(1100px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg) translateY(-5px) translateZ(8px)`;
            });
            el.addEventListener('pointerleave', () => { el.style.transform = ''; });
        });
    }
})();
