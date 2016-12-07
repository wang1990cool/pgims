Ext.define('App.view.skxx.FGgkZxkkjhContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.fGgkZxkkjhContentPanel',
	
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
    	       Ext.create('App.view.skxx.FGgkZxkkjhList',{
    	    	   itemId:'fGgkZxkkjhList',
//    	    	   anchor:'100% 50%',
    	    	   layout:'auto'
        	}),   
       		 Ext.create('App.view.skxx.SKXXSearchForm',{
    	       		itemId:'fggkSkxxSearchForm',
    	       		hidden:true
    	       }),
        	Ext.create('App.view.skxx.SKXXList',{
        	   		margin:'1 0 0 0',
    	    	   itemId:'skxxListFGGK',
//    	    	   anchor:'100% 50%',
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
		   							    },'-',{
		   							    	 text:'修改',
		   							    	itemId:'edit',
		   							    	iconCls:'edit_16',
		   							    	action:'edit'
		   							    },'-',{
		   							    	text:'删除',
		   							    	itemId:'delete',
		   							    	iconCls:'delete_16',
		   							    	action:'delete'
		   							 	   },'-',{
		   							    	text:'教师安排',
		   							    	itemId:'arrangeTeacher',
		   							    	iconCls:'add_16',
		   							    	action:'arrangeTeacher',
		   							    	hidden:true
		   							    },  '->', '-', {
											itemId : 'schSkxxShowBtn',
											iconCls : 'searchForm',
											action : 'showSearch'
										}, '-', '每页', {
											itemId : 'numSkxxCmb',
											name : 'numCmb',
											xtype : 'combo',
											width : 50,
											blankText : '必须选择页面大小!',
											store : Ext.StoreMgr.lookup('main.PageStore'),
											value : pSize,
											editable : false,
											displayField : 'abbr',
											valueField : 'value',
											queryMode : 'local'
										}, '条']
		   						},
		   	        	
							    Ext.create('Ext.PagingToolbar', {
							    	itemId:'toolbar',
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