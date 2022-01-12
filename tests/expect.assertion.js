module.exports = {
    'Expect Library demo tests': async (browser) => {
        await browser.url('https://ultimateqa.com/filling-out-forms')
        .expect.element('button[name="et_builder_submit_button"]:nth-child(1)')
        .visible
    },

    'Should expect specified form field value': async (browser) => {
        await browser
        .setValue('#et_pb_contact_name_0', 'Antoin Deboix')
        .pause(3000)
        await browser
        .assert.value('#et_pb_contact_name_0', 'Antoin Deboix') //works
        //.expect.element('#et_pb_contact_name_0').text.to.contain('Antoin Deboix') //does not working
    },

    'Should expect curent url as specified': async (browser) => {
        await browser
        .expect.url().equal('https://ultimateqa.com/filling-out-forms')
    },

    'Should expect title of current page': async (browser) => {
        await browser
        .expect.title().contains('Filling Out Forms')
    },

    'Should expect attribute contains specified value': async (browser) => {
        await browser
        .expect.element('#et_pb_contact_name_0').attribute('placeholder').contains('Name')
    },

    'Should expect specified text': async (browser) => {
        await browser
        .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit')
    }
}