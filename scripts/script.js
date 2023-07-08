// const pageBody = document.querySelector('body');
// pageBody.style.backgroundColor = 'rgb(0, 0, 0)';

const contentBlock = document.querySelector('.centerblock-wrapper');
if (contentBlock) {
    contentBlock.style.width = 'auto';
}

const contentWrapper = document.querySelector('.page-root');
const playerBar = document.querySelector('.bar');
if (contentWrapper && playerBar) {
    contentWrapper.style.maxWidth = 'initial';
    playerBar.style.maxWidth = 'initial';
}