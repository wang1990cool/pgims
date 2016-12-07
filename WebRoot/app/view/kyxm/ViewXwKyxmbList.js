Ext.define('App.view.kyxm.ViewXwKyxmbList', {
	extend: 'Ext.grid.Panel',
//	alias: 'widget.viewXwKtbgsqList',
	
	store: 'ViewXwKyxmbStore',
    columnLines: true,
    title: '参与科研项目信息',
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
        	
        		  id:'序号',xh:'学号',xm:'学生姓名',xn:'学年',xq:'学期',xmmc:'项目名称',xmlx:'项目类型'
        	        	,zt:'状态'};

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                      { text: exportCols['id'], width: 100, dataIndex: 'id', sortable: true,hidden:true },
                      { text: exportCols['xh'], width: 100, dataIndex: 'xh', sortable: true,hidden:true },
                      { text: exportCols['xm'], width: 100, dataIndex: 'xm', sortable: true},
                      { text: exportCols['xmmc'], width: 300, dataIndex: 'xmmc', sortable: false,flex:1 },
                      { text: exportCols['xmlx'], width: 120, dataIndex: 'xmlx', sortable: false},
          	        
          	        { text: exportCols['zt'], width: 120, dataIndex: 'zt', sortable: false,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                      	{
                      		if(value == '初审通过'){
                    				return  "<span style='color:green;font-weight:bold;'>初审通过</span>";
                      		}else if(value == '已提交'){
                      			return  "<span style='color:blue;font-weight:bold;'>已提交</span>";
                      		}else if(value == '未提交'){
                      			return  "<span style='color:red;font-weight:bold;'>未提交</span>";
                      		}else if(value == '终审通过'){
                      			return  "<span style='color:green;font-weight:bold;'>终审通过</span>";
                      		}else if(value == '初审未通过'){
                      			return  "<span style='color:red;font-weight:bold;'>初审未通过</span>";
                      		}else if(value == '终审未通过'){
                      			return  "<span style='color:red;font-weight:bold;'>终审未通过</span>";
                      		}
                    	}}],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbarl',
    	    	   dock: 'top',
    	    	   items:[{
				            itemId: 'detailBtn',
							text:'申请详情',
							tooltip:'申请详情',
							iconCls:'detail_16',
							action:'detail'
					        }/*,'-', {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						}*/,
					   '-','->','-',{
						itemId : 'schShowBtn',
						iconCls : 'searchForm',
						action:'showSearch'
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
