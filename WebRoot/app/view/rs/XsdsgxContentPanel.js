Ext.define('App.view.rs.XsdsgxContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jbxxbContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId:'xsdsgxNav',
    	    	   labelText:'导师设置'
    	       }),
    	       Ext.create('App.view.rs.XsdsgxSearchForm',{
    	    	   itemId:'xsdsgxSearchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.rs.XsdsgxList',{
    	    	   itemId:'xsdsgxList',
    	    	   layout:'auto'
        	})
        	]
        });
        me.callParent(arguments);
    }
});