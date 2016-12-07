Ext.define('App.view.zqkh.JxZqkhsjbList', {
	extend: 'Ext.grid.Panel',
//	alias: 'widget.viewXwKtbgsqList',
	
	store: 'JxZqkhsjbStore',
    columnLines: true,
    title: '中期考核时间信息',
//  autoScroll:true,
    layout:'auto',
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	
        	id:'学号',xn:'学年',xq:'学期',fyh:'学院号',fymc:'学院名称',zydm:'专业代码',zymc:'专业名称',
        	xslxm:'学生类型码',xslx:'学生类型',kssj:'开始时间',jssj:'结束时间',bz:'备注',sznj:'所在年级',
        	xwbz:'是否有效'};

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                { text: exportCols['id'], width: 100, dataIndex: 'id', sortable: true ,hidden:true},
                { text: exportCols['sznj'], width: 100, dataIndex: 'sznj', sortable: true},
                { text: exportCols['xn'], width: 85, dataIndex: 'xn', sortable: false ,hidden:false},
                { text: exportCols['xq'], width: 85, dataIndex: 'xq', sortable: false,hidden:false },
                { text: exportCols['fymc'], width: 150, dataIndex: 'fymc', sortable: false },
                { text: exportCols['zymc'], width: 120, dataIndex: 'zymc', sortable: false},
                { text: exportCols['xslx'], width: 130, dataIndex: 'xslx', sortable: false},
                { text: exportCols['kssj'], width: 150, dataIndex: 'kssj', sortable: false,renderer : function(value) {
											return value.substr(0, 10);
										}},
                { text: exportCols['jssj'], width: 150, dataIndex: 'jssj', sortable: false,renderer : function(value) {
											return value.substr(0, 10);
										}},
                { text: exportCols['xwbz'], width: 80, dataIndex: 'xwbz', sortable: false,flex:1, renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '1' ){
              				return  "<span style='color:green;font-weight:bold;'>有效</span>";
                		}else if(value == '0'){
                			return  "<span style='color:blue;font-weight:bold;'>无效</span>";
                		}
              	}}
                ],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbarl',
    	    	   dock: 'top',
    	    	   items:[{
				            itemId: 'detailBtn',
							text:'详情',
							tooltip:'详情',
							iconCls:'detail_16',
							action:'detail'
					        },'-',{
   							    	text:'增加',
   							    	itemId:'Add',
   							    	iconCls:'add_16',
   							    	action:'Add'
   						   },'-',{
   							    	text:'修改',
   							    	itemId:'editsj',
   							    	iconCls:'edit_16',
   							    	action:'editsj'
   						    },'-',{
					            itemId: 'del',													
					            text:'删除',
					            iconCls:'delete_16',
					            action:'del'
					     	 },'-',{
   							    	text:'设置有效',
   							    	itemId:'editbtn',
   							    	iconCls:'edit_16',
   							    	action:'tjedit'
   						    },'-',{
					            itemId: 'tjcheditBtn',													
					            text:'设置无效',
					            tooltip:'设置无效',
					            iconCls:'leftArrow',
					            action:'tjchedit'
					     	 },
					     	'-','->','-',{/*
						itemId : 'schShowBtn',
						iconCls : 'searchForm',
						action:'showSearch'*/
				 		},'-','每页',{
					    itemId: 'numCmb',
					    name: 'numCmb',
					    xtype: 'combo',
					    width: 50,
					    blankText: '必须选择页面大小!',
						store: Ext.StoreMgr.lookup('main.PageStore'),
					    value: pSize,
					    editable: false,
					    displayField: 'abbr',
					    valueField: 'value',
					    queryMode: 'local'
					}, '条'
               	   ]
    	       }),
    	       Ext.create('Ext.PagingToolbar', {
    	    	   itemId:'toolbar',
    	    	   pageSize: pSize,
    	    	   dock: 'bottom',
    	    	   store: me.store,
    	    	   displayInfo: true,
    	    	   displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
    	    	   emptyMsg: '没有数据',
    	    	   plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });

        me.callParent(arguments);
    }
});
