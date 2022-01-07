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
        .pause(9000)
    
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