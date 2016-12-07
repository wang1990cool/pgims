Ext.define('App.view.pyfa.PYFAContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.pYFAContentPanel',
	
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
    	    	   labelText:'培养方案'
    	       }),
    	       Ext.create('App.view.pyfa.PYFASearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.pyfa.PYFAList',{
    	    	   itemId:'pyfaList',
    	    	   layout:'auto'
        	})
//        	,
//        		  Ext.create('App.view.pyfa.PYFAList',{
//    	    	   itemId:'pyfaTgList',
//    	    	   store:'PYFATGStore',
//    	    	   title:'审核通过的培养方案',
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
//				        store: 'PYFATGStore',
//				        displayInfo: true,
//				        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
//				        emptyMsg: '没有数据',
//				        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
//				    })]
//        		})
        		]
        });
                	
        me.callParent(arguments);
//		var searchParams = {
//				start : 0,
//				page : 1,
//				searchMode : 'simple',
//				order : '',
//				search : {}
//		};
//    	var pGrid = me.down('#pyfaTgList');
//		searchParams.search['ztm'] = "= 'TG'";
//    	var store = pGrid.getStore();
//    	var proxy =  store.getProxy();
//    	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//    	proxy.setExtraParam('init', '');
//    	store.load();
    }
});