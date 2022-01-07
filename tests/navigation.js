module.exports = {
    'Should navigate to default URL': async (client) => {
        await client.init('https://ultimateqa.com') //not working without implicit url !?
        .getTitle(async (title) => console.log(title))
        .url('https://ultimateqa.com/filling-out-forms/')
        .getTitle(async (title) => console.log(title))
        .back()
        .getTitle(async (title) => console.log(title))
        .forward()
        .getTitle(async (title) => console.log(title))
        .urlHash('#random')
    }
}