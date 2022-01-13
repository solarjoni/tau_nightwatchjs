module.exports = {
    //Executed before Selenium session is created
    before: async (done) => {
        console.log('before');
        await done();
    },

    //Executed after cosing the Selenium session
    after: async (done) => {
        console.log('after');
        await done()
    },

    beforeEach: async (browser, done) => {
        console.log('beforeEach');
        await browser.status(async (result) => {
            console.log(result.value)
            await done()
        })
    },

    afterEach: async (browser, done) => {
        console.log('afterEach');
        console.log(await browser.currentTest);
        await done()
    }
}