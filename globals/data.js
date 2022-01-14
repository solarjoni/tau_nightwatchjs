module.exports = [
    {
        testCase: 'Should verify that thr name error message is shown',
        name: '',
        message: 'Lorem Ipsum',
        expected: 'Please, fill in the following fields:\nName'
    },
    {
        testCase: 'Should verify that the message roor is shown',
        name: 'John Doe',
        message: '',
        expected: 'Please, fill in the following fields:\nMessage'
    },
    {
        testCase: 'Should verify that the name and message errors are shown',
        name: '',
        message: '',
        expected: 'Please, fill in the following fields:\nName\nMessage'
    }

]
