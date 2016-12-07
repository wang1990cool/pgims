Ext.define('App.view.main.SecMenuPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.secMenuPanel',
	
	config: { parentId: 0 ,navTitle:''},
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[Ext.create('App.view.main.NavBar',{
 	    	   itemId:'secMenuNav',
	    	   labelText: me.navTitle
	       }),
	       Ext.create('App.view.main.SecMenuView',{
                padding:'5 0 0 100',
                height: 100,
                autoWidth:true,
                store: Ext.create('Ext.data.Store', {
                	autoLoad:true,
                	model: 'App.model.main.MenuTreeModel',
                    proxy: {
                        type: 'ajax',
                        url: 'getMenus.action',
                        actionMethods: 'post',
                        reader: {type: 'json'},
                        extraParams:{node:me.getParentId()}
                    }
            	})
			})]
        });
        me.callParent(arguments);
    }
});