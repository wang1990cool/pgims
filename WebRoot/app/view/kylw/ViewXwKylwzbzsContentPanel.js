Ext.define('App.view.kylw.ViewXwKylwzbzsContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKylwzbzsContentPanel',
	
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
					itemId:'viewXwKylwzbzsNav',
					labelText:'科研论文登记信息'
				}),
    	       Ext.create('App.view.kylw.ViewXwKylwzbSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.kylw.ViewXwKylwzbzsList',{
    	    	   itemId:'viewXwKylwzbzsList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});