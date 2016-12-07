Ext.define('App.view.skxx.ViewFSkxxmxContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewFSkxxmxContentPanel',
	
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
    	    	   labelText:'课程任务安排'
    	       }),
    	       Ext.create('App.view.skxx.SKXXMXSearchForm',{
    	       		itemId:'fggkSearchForm',
    	       		hidden:true
    	       }),
    	       Ext.create('App.view.skxx.ViewFSkxxmxList',{
    	    	   itemId:'viewFSkxxmxList',
    	    	   layout:'auto'
        	}),   
        	Ext.create('App.view.skxx.SKXXList',{
        	   		margin:'5 0 0 0',
    	    	   itemId:'skxxListFGGK',
    	    	   layout:'auto',
    	    	   title:'非公共课授课信息',      		
					dockedItems:[{
		        	            		dock: 'top',
		   							    xtype: 'toolbar',
		   							    items:[{
		   							    	text:'详情',
		   							    	itemId:'detail',
		   							    	iconCls:'detail_16',
		   							    	action:'detail'
		   							    },{
		   							    	text:'删除',
		   							    	itemId:'delete',
		   							    	iconCls:'delete_16',
		   							    	action:'delete'
		   							 	   },'-',{
		   							    	text:'教师安排',
		   							    	itemId:'arrangeTeacher',
		   							    	iconCls:'add_16',
		   							    	action:'arrangeTeacher'
		   							    }]
		   						},
		   	        	
							    Ext.create('Ext.PagingToolbar', {
							        pageSize: pSize,
							        dock: 'bottom',
							        store:  'SKXXStore',
							        displayInfo: true,
							        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
							        emptyMsg: '没有数据',
							        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
							    })]
        	})]
        });
        me.callParent(arguments);
    }
});