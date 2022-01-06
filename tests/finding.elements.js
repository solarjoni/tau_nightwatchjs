module.exports = {
    'demo Test': async function(browser) {
        await browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('button[name="et_builder_submit_button"]',
          'Submit button is visible')
        .elements('css selector', 'input[type="text"]', function (result) {
            console.log(result.value)
        });
    },
}