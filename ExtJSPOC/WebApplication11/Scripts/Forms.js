Ext.require([
    'Ext.form.*',
    'Ext.tip.QuickTipManager'
]);

Ext.onReady(function () {

    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var win;

    Ext.QuickTips.init();

    function showContactForm() {
        if (!win) {
            var form = Ext.widget('form', {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },
                items: [{
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Naam',
                    labelStyle: 'font-weight:bold;padding:0',
                    layout: 'hbox',
                    defaultType: 'textfield',

                    fieldDefaults: {
                        labelAlign: 'top'
                    },

                    items: [{
                        flex: 1,
                        name: 'Voornaam',
                        afterLabelTextTpl: required,
                        fieldLabel: 'Voornaam',
                        allowBlank: false
                    },
                    {
                        flex: 2,
                        name: 'Achternaam',
                        afterLabelTextTpl: required,
                        fieldLabel: 'Achternaam',
                        allowBlank: false,
                        margins: '0 0 0 5'
                    }]
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Emailadres',
                    afterLabelTextTpl: required,
                    vtype: 'email',
                    allowBlank: false
                },radio],

                buttons: [{
                    text: 'Cancel',
                    handler: function () {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }, {
                    text: 'Send',
                    handler: function () {
                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form to the configured url
                            // this.up('form').getForm().submit();
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                }]
            });

            win = Ext.widget('window', {
                title: 'Contact Form',
                closeAction: 'hide',
                width: 400,
                height: 400,
                layout: 'fit',
                resizable: true,
                modal: true,
                items: form
            });
        }
        win.show();
    }

    var mainPanel = Ext.widget('panel', {
        renderTo: Ext.getBody(),
        title: 'Welcome!',
        width: 500,
        bodyPadding: 20,

        items: [{
            xtype: 'component',
            html: 'Binnen ExtJS zijn er simpele contactforms zoals deze:',
            style: 'margin-bottom: 20px;'
        }, {
            xtype: 'container',
            style: 'text-align:center',
            items: [{
                xtype: 'button',
                cls: 'contactBtn',
                scale: 'large',
                text: 'Contactform',
                handler: showContactForm
            }]
        }]
    });

    var radio = {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 10',
        items: [{
            xtype: 'fieldset',
            flex: 1,
            title: 'Individual Checkboxes',
            defaultType: 'checkbox', // each item will be a checkbox
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                fieldLabel: 'Check',
                boxLabel: 'Check Button',
                name: 'CheckButton',
                inputValue: 'CheckButton'
            }]
        }, {
            xtype: 'component',
            width: 10
        },{
            xtype: 'fieldset',
            flex: 1,
            title: 'Groep radio&#039;s',
            defaultType: 'checkbox', // each item will be a checkbox
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                xtype: 'radiogroup',
                fieldLabel: 'Auto Layout',
                cls: 'x-check-group-alt',
                items: [
                    { boxLabel: 'Man', name: 'rb-auto', inputValue: 1, checked: true },
                    { boxLabel: 'Vrouw', name: 'rb-auto', inputValue: 2}
                ]
            }]
        }]
    };

});