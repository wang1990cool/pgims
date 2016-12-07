Ext.define('App.view.yx.YxSjkzList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.yxSjkzList',
	store: 'YxSjkzbStore',
    columnLines: true,
    autoHeight: true,
    autoWidth: true,
    title: '迎新时间控制',
    frame: true,
    loadMask: true,
    layout : 'auto',
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
					nj : '年级',
					kssj : '开始时间',
					jssj : '结束时间'
				};

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
            	{ text: exportCols['nj'], width: 150, dataIndex: 'nj', sortable: false},
//            	{ text: exportCols['kssj'], width: 150, dataIndex: 'kssj', sortable: false},
//            	{ text: exportCols['jssj'], width: 150, dataIndex: 'jssj', sortable: false}
            	{ text: exportCols['kssj'], width: 60, dataIndex: 'kssj', flex: 1,
            		renderer:function(value,meta,record){
//            			return value.substring(0,10);
			      		var year = value.substring(0,4);
			      		var mon = value.substring(4,6);
			      		var day = value.substring(6,8);
			      		return year+ "-" +mon + "-" +day;
			      	} 
            	},
            	{ text: exportCols['jssj'], width: 60, dataIndex: 'jssj', flex: 1,
            		renderer:function(value,meta,record){
//            			return value.substring(0,10);
			      		var year = value.substring(0,4);
			      		var mon = value.substring(4,6);
			      		var day = value.substring(6,8);
			      		return year+ "-" +mon + "-" +day;
			      	} 
            	}
		    ],
	        dockedItems: [Ext.create('App.view.main.GridToolbar',{
	    	   itemId:'gridtoolbar',
	    	   dock: 'top',
	    	   items:[{
			            itemId: 'editBtn',
			            text:'修改',
			            tooltip:'修改',
			            iconCls:'edit_16',
			            action:'edit'
			        },'->','每页',{
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
					}, '条']
	       }),
		    Ext.create('Ext.PagingToolbar', {
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
