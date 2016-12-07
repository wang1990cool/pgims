Ext.define('App.view.jxkkjh.KKJHContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.kkjhContentPanel',
	
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
    	    	   itemId:'pyfaNav',
    	    	   labelText:'开课计划'
    	       }),
    	       Ext.create('App.view.jxkkjh.KKJHSearchForm',{
    	       		itemId:'searchForm',
    	       		hidden:true
    	       }),
    	       Ext.create('App.view.jxkkjh.KKJHList',{
    	    	   itemId:'kkjhList',
    	    	   layout:'auto'
        	})
//        	,
//        	  Ext.create('App.view.jxkkjh.KKJHList',{
//    	    	   itemId:'kkjhTgList',
//    	    	   store:'KKJHTGStore',
//    	    	   title:'审核通过的开课计划',
//    	    	   collapsible :true,
//    	    	   collapsed:true,
//    	    	   layout:'auto',
//    	    	 dockedItems: [{
//    	    	 	dock: 'top',
//				     xtype: 'toolbar',
//				     items:[{
//				     	itemId:'detailTg',
//				     	text:'详情',
//				     	iconCls:'detail_16',
//				     	action:'detailTg'
//				     }]
//				   },
//				   Ext.create('Ext.PagingToolbar', {
//				        pageSize: pSize,
//				        dock: 'bottom',
//				        store: 'KKJHTGStore',
//				        displayInfo: true,
//				        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
//				        emptyMsg: '没有数据',
//				        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
//				    })]
//        		})
        		]
        });
        me.callParent(arguments);
    }
});