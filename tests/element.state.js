module.exports = {
    'demo Test': async function(browser) {
        await browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        .getText('button[name="et_builder_submit_button"]', async (resultText) => {
            console.log(resultText.value);
        })
        .setValue('#et_pb_contact_message_0', 'This is a message.')
        .getValue('#et_pb_contact_message_0', async (resultValue) => {
            console.log(resultValue.value);
        })
        .isVisible('#et_pb_contact_message_0', async (result) => {
            console.log(result.value);
        })

    },
}