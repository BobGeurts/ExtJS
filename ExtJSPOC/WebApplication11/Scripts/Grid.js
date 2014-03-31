Ext.require([
    'Ext.direct.*',
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.define('VSAUren', {
    extend: 'Ext.data.Model',
    fields: ['Onderdeel', 'Dag', 'Tijd']
});

Ext.onReady(function () {
    var myData = [
        ['Onderzoek', '17-2', '2'],
        ['', '18-2', '1'],
        ['', '19-2', '3'],
        ['', '20-2', '2'],
        ['', '21-2', '2'],
        ['', '17-3', '2'],
        ['', '18-3', '1'],
        ['', '19-3', '2'],
        ['Applicaties', '20-3', '3'],
        ['', '24-3', '2'],
        ['', '29-3', '3'],
        ['Verslag', '30-3', '2'],
    ];

    var store = Ext.create('Ext.data.ArrayStore', {
        model: 'VSAUren',
        data: myData
    });

    // Create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store : store,
        columns: [{
            dataIndex: 'Onderdeel',
            width: 200,
            text: 'Onderdeel'
        }, {
            dataIndex: 'Dag',
            width: 200,
            text: 'Dag'
        }, {
            dataIndex: 'Tijd',
            width: 200,
            text: 'Tijd(u)'
        }],
        height: 450,
        width: 602,
        title: 'Besteding Uren VSA',
        renderTo: Ext.getBody()
    });
});