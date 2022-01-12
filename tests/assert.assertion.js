module.exports = {
    'Assert and Verify Library demo tests': async () => {
        await browser.url('https://ultimateqa.com/filling-out-forms')
        await browser
        .verify.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        await browser
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    }
}