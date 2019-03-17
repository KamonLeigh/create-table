
function setUpTabs() {

    const buttons = document.querySelectorAll('.tab__button');

    buttons.forEach( button => {

        button.addEventListener('click', () => {

            const sideBar = button.parentElement;
            const tabContainer = document.querySelector('.tab__container');
            const tabNumber = button.dataset.forTab;
            const activatedTab = tabContainer.querySelector(`.tab__content[data-for-content='${tabNumber}']`);

            // Clear active states.
            sideBar.querySelectorAll('.tab__button').forEach(button => {

                button.classList.remove('tab__button--active');
            });

            tabContainer.querySelectorAll('.tab__content').forEach(content => {

                content.classList.remove('tab__content--active');
            });

            // Add class to selected button and content.
            button.classList.add('tab__button--active');

            activatedTab.classList.add('tab__content--active');


        });

    });

}



// Call funtion on page load 
document.addEventListener('DOMContentLoaded', () => {
    setUpTabs();
    document.querySelector(".tab__button").click();
});