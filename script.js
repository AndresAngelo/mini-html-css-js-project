const envelope = document.querySelector('.envelope-wrapper');
const body = document.body;
const text = document.querySelector('p.hidden');
const audio = document.getElementById('background-music');

envelope.addEventListener('click', () => {
    audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
    envelope.classList.toggle('flap');

    if (envelope.classList.contains('flap')) {
        setTimeout(() => {
            body.style.background = '#000';
            envelope.style.opacity = '0';
            setTimeout(() => {
                text.classList.remove('hidden');
                text.classList.add('visible');
                setTimeout(() => {
                    text.classList.add('show');
                }, 10);
            }, 2000);
        }, 10000);
    } else {
        body.style.background = 'var(--bg-color)';
        envelope.style.opacity = '1';
        text.classList.remove('show');
        setTimeout(() => {
            text.classList.remove('visible');
            text.classList.add('hidden');
        }, 1000);
    }
});

envelope.addEventListener('mouseover', () => {
    
});
