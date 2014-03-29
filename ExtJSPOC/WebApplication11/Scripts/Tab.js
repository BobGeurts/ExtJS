Ext.require('Ext.tab.*');

Ext.onReady(function () {
    // basic tabs 1, built from existing content
    var tabs = Ext.widget('tabpanel', {
        renderTo: 'tabs',
        width: 450,
        activeTab: 0,
        tabPosition: 'bottom',
        defaults: {
            bodyPadding: 10
        },
        items: [{
            contentEl: 'WebForms',
            title: 'WebForms',
            closable: true
        }, {
            contentEl: 'MVC',
            title: 'MVC'
        }, {
            contentEl: 'ExtJS',
            title: 'ExtJS'
        }, {
            contentEl: 'Ext.NET',
            title: 'Ext.NET'
        }]
    });
});