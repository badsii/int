// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text-block');

    const revealOnScroll = () => {
        textBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockTop < windowHeight - 100) {
                block.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
