Ext.define('App.view.pyfa.KCKContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.kCKContentPanel',
	
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
    	    	   itemId:'kckNav',
    	    	   labelText:'课程管理'
    	       }),
    	       Ext.create('App.view.pyfa.KCKSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.pyfa.KCKList',{
    	    	   itemId:'kckList'
        	})]
        });
        me.callParent(arguments);
    }
});