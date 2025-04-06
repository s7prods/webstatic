// base.js

window.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') try {
        const link = ev.target.href;
        const currentDomain = window.location.hostname;
        const linkDomain = new URL(link).hostname;

        if (linkDomain !== currentDomain) {
            ev.preventDefault();
            window.open(link, '_blank');
        }
    } catch {}
});