const elements = {
    bttnSearch: '.et_pb_menu__search-button',
    //txtSearch: '#header-sec form.et_pb_menu__search-form input.et_pb_menu__search-input'
    txtSearch: 'input[type=search]'
}

const commands = [
    {

        /**
         * Enters the searchTerm into the search field and clicks the search button
         * 
         * @param {String} searchTerm - Term that will be searched for
         * @returns 
         */
        search(searchTerm) {
            return this
            .assert.visible('@bttnSearch', 'Search button should be visible')
            .pause(5000)
            .click('@bttnSearch')
            .assert.visible('@txtSearch', 'Search input field should be visible')
            .click('@txtSearch')
            //.setValue('@txtSearch', searchTerm)
            .sendKeys('@txtSearch', [searchTerm, browser.Keys.ENTER])
        }
    }
]

module.exports = {
    elements: elements,
    commands: commands,
    url: function() {
        return `${this.api.baseUrl}/complicated-page/`
    }
}