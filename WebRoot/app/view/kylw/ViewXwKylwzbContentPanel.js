Ext.define('App.view.kylw.ViewXwKylwzbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKylwzbContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	autoScroll:true,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items:[
        	  Ext.create('App.view.main.NavBar',{
					itemId:'viewXwKylwzbNav',
					labelText:'科研论文登记信息'
				}),
    	       Ext.create('App.view.kylw.ViewXwKylwzbSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.kylw.ViewXwKylwzbList',{
    	    	   itemId:'viewXwKylwzbList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});