module.exports = {

    before: async () => {
        console.log('Starting up')
    },
    after: async () => {
        console.log('Closing down');
    },
    beforeEach: async (browser) => {
        await browser.url('https:/ultimateqa.com/filling-out-forms')
        .pause(1000)
    },
    afterEach: async () => {
        console.log('Test completed');
    },

    'Should verify page title': async (browser) => {
        await browser
        .expect.title().to.contain('Filling Out')
    },

    'Should verify page url': async (browser) => {
        await browser
        .expect.url().to.contain('filling-out-forms')
    }

}