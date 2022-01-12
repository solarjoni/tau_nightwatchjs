module.exports = {
    'Assert and Verify Library demo tests': async (browser) => {
        /**
         * Assert stops on failure, Verify - proceeds, informing about failure
         */
        await browser.url('https://ultimateqa.com/filling-out-forms')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        await browser
        .verify.containsText('button[name="et_builder_submit_button"]:nth-child(1)', 'Submit')
    },

    'Should assert form field value': async (browser) => {
        await browser
        .sendKeys('#et_pb_contact_name_0', 'Chaton baton')
        .assert.valueContains('#et_pb_contact_name_0', 'baton')
        //.assert.value('#et_pb_contact_name_0', 'baton') //baton fails but Chaton baton - passes
    },

    'Should assert current url': async (browser) => {
        await browser
        .assert.urlEquals('https://ultimateqa.com/filling-out-forms')
    },

    'Should assert the title': async (browser) => {
        await browser.
        verify.title('Filling Out Forms | Ultimate QA')
    },

    'Should assert attribute contains expected value': async (browser) => {
        await browser
        .verify.attributeContains('#et_pb_contact_name_0', 'placeholder', 'Name')
    },

    'Should assert css Classs Property': async (browser) => {
        await browser
        .verify.cssClassPresent('#et_pb_contact_name_0', 'input')
    }
 }