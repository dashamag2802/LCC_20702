const data = require('../../../../data/test_data/cards_page/testData.json');
const sel = require('../../../../data/selectors/cards_page/selectors.json');
const loginAngGetToCardsPage = require('../../../../helpers/cards_page/loginAngGetToCardsPage');

describe('Smoke tests for the Cards page', function () {

    describe('LCC-TC-001 Validate that after Student login and click on the Cards link on the Main page Cards page will be appear', function () {

        it('LCC-001 Cards page is exist after Student login and click Cards link', function () {
            browser.url('');
            loginAngGetToCardsPage(data.emailStudent, data.passwordStudent);
            const cardsLinkOfCardsPage = $(sel.cardsLinkCardsPage).isDisplayed();
            expect(cardsLinkOfCardsPage).toEqual(true);
        });

    });

});
