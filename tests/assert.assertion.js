module.exports = {
    'Assert and Verify Library demo tests': async (browser) => {
        /**
         * Assert stops on failure, Verify - proceeds, informing about failure
         */
        await browser.url('https://ultimateqa.com/filling-out-forms')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },

    'Should assert form field value': async (browser) => {
        await browser
        .setValue('#et_pb_contact_name_0', 'Chaton baton')
        .assert.valueContains('#et_pb_contact_name_0', 'baton')
        //.assert.value('#et_pb_contact_name_0', 'baton') //baton fails but Chaton baton - passes
    },

    'Should assert current url': async (browser) => {
        await browser
        .assert.urlEquals('https://ultimateqa.com/filling-out-forms')
    }
}