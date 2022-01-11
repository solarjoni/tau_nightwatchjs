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

    it.skip('demo test (not working or incorrect test)', function() {
        //Not working or incorrect test
        browser
            .navigateTo('https://nightwatchjs.org')
            .perform(function() {
              const actions = this.actions({async: true});
      
              return actions
               .keyDown(Keys.SHIFT)
               .keyUp(Keys.SHIFT)
               .move('#navigation ul:nth-child(1) li:nth-child(2)')
               .click()
               .pause(3000)
            });
    })
      
      
})