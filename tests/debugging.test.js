module.exports = {
    'Should find results for "applitools': (browser) => {
        const ComplicatedPage = browser.page.ComplicatedPage()
        const SearchPage = browser.page.SearchPage()

        ComplicatedPage
            .navigate()
            .search('applitools')
            .pause(3000)
            .verify.urlContains('/?s')

        SearchPage
            .getText('@post', (result) => {
                //browser.pause
                browser.assert.equal(result.value, 'Applitools Bugs and Test Steps')
            })
    }
}
