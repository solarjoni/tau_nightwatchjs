module.exports = {
    'Expect Library demo tests': async () => {
        await browser.url('https://ultimateqa.com/filling-out-forms')
        .expect.element('button[name="et_builder_submit_button"]:nth-child(1)')
        .text.to.equal('Submit')
    }
}