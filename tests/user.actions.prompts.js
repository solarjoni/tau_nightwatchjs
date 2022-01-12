module.exports = {
    'Should perform the Key Strokes': async (browser) => {
        await browser
        .url('https://ultimateqa.com/filling-out-forms/') /*, async () => {
            console.log(JSON.stringify(client.Keys, null, '\t'))*/ 
        .setValue('#et_pb_contact_message_0', 'testing key strokes')
        //.click('#et_pb_contact_message_0')
        .pause(3000)
        .sendKeys('#et_pb_contact_message_0', browser.Keys.LEFT)
        .sendKeys('#et_pb_contact_message_0', browser.Keys.LEFT)
        .sendKeys('#et_pb_contact_message_0', browser.Keys.LEFT)
        .sendKeys('#et_pb_contact_message_0', browser.Keys.ENTER)
        .sendKeys('#et_pb_contact_message_0', browser.Keys.SUBTRACT)
        //.mouseButtonClick('right')
        .pause(3500)
    },

    'Should perform right click (not working or wrong test implementation)': async (browser) => {
        await browser
            .moveToElement('#et_pb_contact_message_0', 10, 10)
            .pause(3000)
        await browser
            .perform(async () => {
                const actions = await this.actions( {async: true} )
            
                return actions
                    //.click('button[name="et_builder_submit_button"]:nth-child(1)')
                    .contextClick('#et_pb_contact_message_0')
                    .pause(5000)
        })
    },

    'Should perform window actions': async (browser) => {
        await browser
        .openNewWindow('tab')
        .fullscreenWindow()
        .windowHandles(async (results) => {
            const newWindow = await results.value[0]
            //console.log(results.value);
            await browser.switchWindow(newWindow)
        })
        .pause(3500)
    },

    'Should interact with alerts': async (browser) => {
        await browser
        .url('http://demo.automationtesting.in/Alerts.html')
        .click('#OKTab button')
        .getAlertText(async (results) => console.log(results.value))
        .pause(3000)
        .acceptAlert()
        .pause(3000)
    }

}

/**
 * 
 * {
        "NULL": "",
        "CANCEL": "",
        "HELP": "",
        "BACK_SPACE": "",
        "TAB": "",
        "CLEAR": "",
        "RETURN": "",
        "ENTER": "",
        "SHIFT": "",
        "CONTROL": "",
        "ALT": "",
        "PAUSE": "",
        "ESCAPE": "",
        "SPACE": "",
        "PAGE_UP": "",
        "PAGE_DOWN": "",
        "END": "",
        "HOME": "",
        "ARROW_LEFT": "",
        "LEFT": "",
        "ARROW_UP": "",
        "UP": "",
        "ARROW_RIGHT": "",
        "RIGHT": "",
        "ARROW_DOWN": "",
        "DOWN": "",
        "INSERT": "",
        "DELETE": "",
        "SEMICOLON": "",
        "EQUALS": "",
        "NUMPAD0": "",
        "NUMPAD1": "",
        "NUMPAD2": "",
        "NUMPAD3": "",
        "NUMPAD4": "",
        "NUMPAD5": "",
        "NUMPAD6": "",
        "NUMPAD7": "",
        "NUMPAD8": "",
        "NUMPAD9": "",
        "MULTIPLY": "",
        "ADD": "",
        "SEPARATOR": "",
        "SUBTRACT": "",
        "DECIMAL": "",
        "DIVIDE": "",
        "F1": "",
        "F2": "",
        "F3": "",
        "F4": "",
        "F5": "",
        "F6": "",
        "F7": "",
        "F8": "",
        "F9": "",
        "F10": "",
        "F11": "",
        "F12": "",
        "COMMAND": "",
        "META": "",
        "ZENKAKU_HANKAKU": ""
}
*
*/