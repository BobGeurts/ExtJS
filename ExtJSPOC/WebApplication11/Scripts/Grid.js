Ext.require([
    'Ext.direct.*',
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.define('VSAUren', {
    extend: 'Ext.data.Model',
    fields: ['Onderdeel', 'Uren']
});

Ext.onReady(function () {
    var myData = [
        ['Onderzoek','Ontiegelijk veel uren'],
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
            dataIndex: 'Uren',
            width: 400,
            text: 'Uren'
        }],
        height: 450,
        width: 700,
        title: 'Besteding Uren VSA',
        renderTo: Ext.getBody()
    });
});