const sel = require('../../data/selectors/cards_page/selectors.json');

function loginAngGetToCardsPage(email, password) {
    $(sel.emailStudent).setValue(email);
    $(sel.passwordStudent).setValue(password);
    const loginButton = $(sel.loginButton);
    loginButton.waitForClickable();
    loginButton.click();
    const cardsLinkOnMainPage = $(sel.cardsLinkMainPage);
    cardsLinkOnMainPage.waitForDisplayed();
    cardsLinkOnMainPage.click();
}

module.exports = loginAngGetToCardsPage;
