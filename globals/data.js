module.exports = [
    {
        testCase: 'Should verify that the name error message is shown',
        name: '',
        message: 'Lorem Ipsum',
        screenFileName: './screens/err_name.png',
        expected: 'Please, fill in the following fields:\nName'
    },
    {
        testCase: 'Should verify that the message error is shown',
        name: 'John Doe',
        message: '',
        screenFileName: './screens/err_msg.png',
        expected: 'Please, fill in the following fields:\nMessage'
    },
    {
        testCase: 'Should verify that the name and message errors are shown',
        name: '',
        message: '',
        screenFileName: './screens/err.png',
        expected: 'Please, fill in the following fields:\nName\nMessage'
    }

]
