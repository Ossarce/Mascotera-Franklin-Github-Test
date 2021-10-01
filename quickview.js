const popupViews = document.querySelectorAll('.popup-view');
const popupBtns = document.querySelectorAll('.price-tag-btn');
const closeBtns = document.querySelectorAll('.closepop-btn');

let popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
};

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
    });
});
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        })
    });
});