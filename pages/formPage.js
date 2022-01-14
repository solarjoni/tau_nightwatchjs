const elements = {
    leftFormName: '#et_pb_contact_name_0',

    leftFormMessage: {
        selector: '#et_pb_contact_message_0',
        locateStraategy: 'css selector'
    },
    
    form: '#et_pb_contact_form_0 form',
    
    bttnSubmit: '#et_pb_contact_form_0 form button',
    //bttnSubmit: '.et_pb_contact_submit',
    lblLeftFormMessage: '#et_pb_contact_form_0 > div:nth-child(1)'
}

const commands = [
    {
        /**
         * Enters the given name and message into the form fields
         * @param {String} name 
         * @param {String} message 
         * @returns 
         */
        enterNameAndMessage(name, message) { 
            return this
                    .setValue('@leftFormName', name)
                    .setValue('@leftFormMessage', message)
                    .pause(1000)  
        },

        submitLeftForm() {
            browser.pause(1000)
            return this.click('@bttnSubmit')
        }

    }
]

module.exports = {
    elements: elements, //or elements: {}, if not defined above
    commands: commands, //or commands: [], if not defined above
    url: function () {
        return `${this.api.launchUrl}/filling-out-forms/`
    },
    sections: {
        rightForm: {
            selector: '#et_pb_contact_form_1',
            elements: {
                txtName: '#et_pb_contact_name_1',
                txtMessage: '#et_pb_contact_message_1',
                bttnSubmit: 'button'
            },
            commands: [
                {
                    enterName(name) {
                        return this
                            .updateValue('@txtName', name)
                    },
                    enterMessage(message) {
                        return this
                            .updateValue('@txtMessage', message)
                    }
                }
            ]
        }
    }
}