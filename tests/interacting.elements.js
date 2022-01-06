module.exports = {
    'Interacting with elements': async function(browser) {
        await browser
        .url('https://ultimateqa.com/filling-out-forms/')
        .waitForElementVisible('button[name="et_builder_submit_button"]:nth-child(1)')
        .moveToElement('button[name="et_builder_submit_button"]:nth-child(1)', 10, 10)
        .pause(5000)
    }
}