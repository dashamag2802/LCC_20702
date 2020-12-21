describe('Local Coding', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('');
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('Local Coding');
        });

    });

});
