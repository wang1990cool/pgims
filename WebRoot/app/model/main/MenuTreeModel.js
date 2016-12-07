Ext.define('App.model.main.MenuTreeModel', {
    extend: 'Ext.data.Model',
    fields: [{ name: "id"},{ name: "orderid"},{ name: "parentid"},{ name: "text"},{ name: "qtip"},
            { name: "url"},{ name: "iconCls"},{ name: "src"},{ name: "leaf"},{ name: "showflag"},{name:"param"}]
});