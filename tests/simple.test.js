module.exports = {
    
    'Should successfully fill out the left form using Page Object': (browser) => {
        const FormPage = browser.page.formPage()

        FormPage
        .navigate()
        //Error while running .getElementText() protocol action: stale element reference: element is not attached to the page document
        //(Session info: chrome=97.0.4692.71)
        .verify.title('Filling Out Forms | Ultimate QA')
        .enterNameAndMessage('John Doe', 'Lorem Ipsum')
        .submitLeftForm()
        .verify.containsText('@lblLeftFormMessage', 'Thanks for contacting us') //:nth-child(1) could be in definition also (really ?!)
        //works
        //.verify.containsText('#et_pb_contact_form_0 > div:nth-child(1)', 'Thanks for contacting us') //:nth-child(1) could be in definition also
    }
}