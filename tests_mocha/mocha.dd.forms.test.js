const data = require('../globals/data')

describe('Forms Suite', () => {
    data.forEach(({testCase, name, message, expected}) => {
        it(testCase, (browser) => {
            const FormPage = browser.page.formPage()

            FormPage
                .navigate()
                .verify.title('Filling Out Forms | Ultimate QA')
                .enterNameAndMessage(name, message)
                .submitForm('@form')
                .verify.containsText('@lblLeftFormMessage', expected)
        })       

    })
})