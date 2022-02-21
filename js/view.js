const actionOpenBtn = document.querySelector('[data-toolOpen]');
const actionBox = document.querySelector('#view-tool');
const actionCloseBtn = document.querySelector('[data-toolClose]');

actionOpenBtn.addEventListener('click', function() {
    actionBox.classList.add("view-tool-action");
});

actionCloseBtn.addEventListener('click', function() {
    actionBox.classList.remove("view-tool-action");
});