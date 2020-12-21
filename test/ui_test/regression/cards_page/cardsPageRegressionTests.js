const data = require('../../../../data/test_data/cards_page/testData.json');
const sel = require('../../../../data/selectors/cards_page/selectors.json');
const exp = require('../../../../data/exspected_result/cards_page/expected.json');
const loginAngGetToCardsPage = require('../../../../helpers/cards_page/loginAngGetToCardsPage');

describe('Regression tests for the Cards page', function () {

    describe('LCC-TC-002 Validate that Cards page has a Local Coding link and if clicked, it will take a user to Main pager', function () {

        it('LCC-002 Validate that Local Coding link exists on the Cards page', function () {
            browser.url('');
            loginAngGetToCardsPage(data.emailStudent, data.passwordStudent);
            const localCodingLink = $$(sel.localCodingLink)[0].isExisting();
            expect(localCodingLink).toEqual(true);
        });

        it('LCC-003 Validate that Local Coding link has a text "Local Coding"', function () {
            const localCodingName = $(sel.localCodingLink).getText();
            const result = (localCodingName === exp.localCodingName);
            expect(result).toEqual(true);
        });

        it('LCC-004 Validate that Local Coding link is clickable', function () {
            const localCodingClickable = $$(sel.localCodingLink)[0].isClickable();
            expect(localCodingClickable).toEqual(true);
        })

        it('LCC-005 Validate than when click on the Local Coding link user will be redirected to the Main page', function () {
            $$(sel.localCodingLink)[0].click();
            const cardsLinkOnMainPage = $(sel.cardsLinkMainPage).isExisting();
            expect(cardsLinkOnMainPage).toEqual(true);
        });

    });

});
