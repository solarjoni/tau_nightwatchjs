module.exports = {
    
    beforeEach: async (browser) => {
        await browser
        .url(`${browser.launch_url}/filling-out-forms/`)
    },

    'Should successfully fill out the left form': async (browser) => {
        await browser
        .updateValue('#et_pb_contact_name_0', 'John Doe')
        .updateValue('#et_pb_contact_message_0', 'Lorem Ipsum')
        .pause(100) //to make it slower so can submit the form
        .submitForm('#et_pb_contact_form_0 form')
        //.click('.et_pb_contact_submit')
        //.waitForElementVisible('#et_pb_contact_form_0')
        .expect.element('#et_pb_contact_form_0').text.to.be.equal('Thanks for contacting us')
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