describe('Filling out a Form using Mocha test runner', () => {
    it('should be filled out successfully', (client) => {
        client
            .url('https://www.ultimateqa.com/filling-out-forms')
            .waitForElementVisible('body', 1000)
            .assert.title('Filling Out Forms | Ultimate QA')
            .waitForElementVisible('#et_pb_contact_name_0')
            .updateValue('#et_pb_contact_name_0', 'John')
            .updateValue('#et_pb_contact_message_0', 'this is a paragraph')
            .pause(3000)
            .click('.et_pb_contact_submit')
            .waitForElementVisible('#et_pb_contact_form_0')
            //.pause(3000)
            .expect.element('#et_pb_contact_form_0').text.to.equal('Thanks for contacting us')
    })
})