describe('Forms Suite', () => {
    it('Should fill out form successfully', (browser) => {
        const FormPage = browser.page.FormPage()

        FormPage
            .navigate()
            //throws stale element reference error
            .assert.title('Filling Out Forms | Ultimate QA')
            .enterNameAndMessage('John Doe', 'Lorem Ipsum')
            .submitLeftForm()
            .verify.containsText('@lblLeftFormMessage', 'Thanks for contacting us')
    })
})