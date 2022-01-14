module.exports = {
    
    beforeEach: async (browser) => {
        await browser
        .url(`${browser.launch_url}/filling-out-forms/`)
    },

    'Should successfully fill out the left form': async (browser) => {
        await browser
        .updateValue('#et_pb_contact_name_0', 'John Doe')
        .updateValue('#et_pb_contact_message_0', 'Lorem Ipsum')
        .pause(1000) //to make it slower so can submit the form
        .submitForm('#et_pb_contact_form_0 form')
        //.click('.et_pb_contact_submit')
        //.waitForElementVisible('#et_pb_contact_form_0')
        .expect.element('#et_pb_contact_form_0').text.to.be.equal('Thanks for contacting us')
    },

    'Should successfully fill out the left form using Page Object': (browser) => {
        const FormPage = browser.page.formPage()
        const rightForm = FormPage.section.rightForm

        FormPage
        .navigate()
        .verify.title('Filling Out Forms | Ultimate QA')
        //Error while running .getElementText() protocol action: stale element reference: element is not attached to the page document
        //(Session info: chrome=97.0.4692.71)
        .enterNameAndMessage('John Doe', 'Lorem Ipsum')
        .submitLeftForm()
        .verify.containsText('@lblLeftFormMessage:nth-child(1)', 'Thanks for contacting us') //:nth-child(1) could be in definition also
        
        rightForm.expect.element('@txtName').to.be.visible
        rightForm
        .enterName('Sam')
        .enterMessage('Is a nice guy.')
        .verify.value('@txtName', 'Sam')
        .verify.value('@txtMessage', 'Is a nice guy.')
    },

    'Should verify error message when left form is filled no fully': async (browser) => {
        await browser
            //.refresh() //refreshes page if there is no url defined in beforeEach hook 
            .pause(3000)
            .submitForm('#et_pb_contact_form_0 form')
            .expect.element('#et_pb_contact_form_0 > div:nth-child(1)')
                .text.contain('Please, fill in the following fields:')
    },

    after: async () => {
        await browser.end()
    } 
}