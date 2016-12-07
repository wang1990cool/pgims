Ext.define('App.view.kyzz.ViewXwKyzzbzsList', {
	extend: 'Ext.grid.Panel',
//	alias: 'widget.viewXwDbmsbList',
	
	store: 'ViewXwKyzzbStore',
    columnLines: true,
    title: '科研著作登记信息',
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
        	
        	id:'序号',xh:'学号',xm:'学生姓名',xn:'学年',xq:'学期',cglx:'成果类型',zzmc:'著作名称',
        	cbs:'出版社',cbrq:'出版日期',shr:'学院审核人',shsj:'学院审核时间',zsr:'终审审核人',zssj:'终审时间',
        	shjg:'审核结果',ztt:'资料状态',zt:'状态'};

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
               { text: exportCols['id'], width: 100, dataIndex: 'id', sortable: true,hidden:true },
                { text: exportCols['xh'], width: 80, dataIndex: 'xh', sortable: true,hidden:true },
                { text: exportCols['xm'], width: 70, dataIndex: 'xm', sortable: true},
                { text: exportCols['cglx'], width: 70, dataIndex: 'cglx', sortable: false },
                { text: exportCols['zzmc'], width: 150, dataIndex: 'zzmc', sortable: false},
                { text: exportCols['cbs'], width: 150, dataIndex: 'cbs', sortable: false},
                { text: exportCols['cbrq'], width: 85, dataIndex: 'cbrq', sortable: false},
                { text: exportCols['shr'], width: 85, dataIndex: 'shr', sortable: false},
                { text: exportCols['shsj'], width: 110, dataIndex: 'shsj', sortable: false },
                { text: exportCols['zsr'], width: 80, dataIndex: 'zsr', sortable: false},
                { text: exportCols['zssj'], width: 110, dataIndex: 'zssj', sortable: true },
                { text: exportCols['shjg'], width: 70, dataIndex: 'shjg', sortable: true },
    	        { text: exportCols['ztt'], width: 70, dataIndex: 'ztt', sortable: false,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '已上传'){
              				return  "<span style='color:green;font-weight:bold;'>已上传</span>";
                		}else if(value == '未上传'){
                			return  "<span style='color:red;font-weight:bold;'>未上传</span>";
                		}
              	} },
    	        { text: exportCols['zt'], width: 85, dataIndex: 'zt', sortable: false,flex:1,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
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
              	}}
//    	        { text: exportCols['dsxm'], width: 85, dataIndex: 'dsxm', sortable: false,hidden:true },
//    	        { text: exportCols['shztm'], width: 80, dataIndex: 'shztm', sortable: false,hidden:true },
//                { text: exportCols['shzt'], width: 100, dataIndex: 'shzt', sortable: true,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
//                	{
//                		if(value == '审核通过'){
//              				return  "<span style='color:green;font-weight:bold;'>审核通过</span>";
//                		}else if(value == '待审状态'){
//                			return  "<span style='color:blue;font-weight:bold;'>待审状态</span>";
//                		}else if(value == '草稿状态'){
//                			return  "<span style='color:red;font-weight:bold;'>草稿状态</span>";
//                		}else{
//                			return  "<span style='color:red;font-weight:bold;'>审核未通过</span>";
//                		}
//              	}},
//    	        { text: exportCols['shyj'], width: 130, dataIndex: 'shyj', sortable: false,hidden:true },
//    	        { text: exportCols['shsj'], width: 150, dataIndex: 'shsj', sortable: false ,
//    	               renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
//	                    return value.replace('T',' ');
//	          	  }},
//    	        { text: exportCols['shr'], width: 100, dataIndex: 'shr', sortable: false /*,hidden:true*/},
//    	        { text: exportCols['nj'], width: 80, dataIndex: 'nj', sortable: false ,hidden:true}
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
   							    	text:'审核',
   							    	itemId:'editsj',
   							    	iconCls:'edit_16',
   							    	action:'editsj'
   						    }/*,'-',{
   							    	text:'增加',
   							    	itemId:'addBtn',
   							    	iconCls:'add_16',
   							    	action:'add'
   						    }*//*,'-',{
   							    	text:'提交',
   							    	itemId:'editbtn',
   							    	iconCls:'edit_16',
   							    	action:'tjedit'
   						    }*/,'-',{
					            itemId: 'tjeditBtn',													
					            text:'撤回',
					            tooltip:'撤回',
					            iconCls:'leftArrow',
					            action:'tjedit'
					     	 }/*,'-',{
					       		 itemId: 'delBtn',
						        text: '删除',
						        iconCls : 'delete_16',
								action : 'delete'
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
