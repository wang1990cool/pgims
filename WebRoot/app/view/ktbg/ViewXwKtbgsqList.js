Ext.define('App.view.ktbg.ViewXwKtbgsqList', {
	extend: 'Ext.grid.Panel',
//	alias: 'widget.viewXwKtbgsqList',
	
	store: 'ViewXwKtbgsqStore',
    columnLines: true,
    title: '开题申请信息',
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
        	
        	xh:'学号',xm:'学生姓名',nj:'年级',fymc:'学院名称',zymc:'专业名称',xwlb:'学位类型',
        	pycc:'培养层次',xslx:'学生类型',lwtm:'论文题目',lwjj:'论文简介',jhktrq:'计划开题日期',jhktsj:'计划开题时间',
        	jhktdd:'计划开题地点',dsgh:'导师工号',dsxm:'导师姓名',shztm:'审核状态码',shzt:'审核状态',shyj:'审核意见',
        	shsj:'审核时间',shr:'审核人',xslxm:'学生类型码',yxsh:'学院代号',zydm:'专业码',xwlbm:'学位类型码',shrgh:'审核人工号'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                { text: exportCols['xh'], width: 100, dataIndex: 'xh', sortable: true },
                { text: exportCols['xm'], width: 100, dataIndex: 'xm', sortable: true},
                { text: exportCols['fymc'], width: 130, dataIndex: 'fymc', sortable: false ,hidden:false},
                { text: exportCols['zymc'], width: 130, dataIndex: 'zymc', sortable: false,hidden:false },
                { text: exportCols['xwlb'], width: 100, dataIndex: 'xwlb', sortable: false ,hidden:true},
                { text: exportCols['pycc'], width: 85, dataIndex: 'pycc', sortable: false,hidden:true},
                { text: exportCols['xslx'], width: 85, dataIndex: 'xslx', sortable: false,hidden:true },
                { text: exportCols['lwtm'], width: 130, dataIndex: 'lwtm', sortable: false },
                { text: exportCols['lwjj'], width: 80, dataIndex: 'lwjj', sortable: false,hidden:true },
                { text: exportCols['jhktrq'], width: 100, dataIndex: 'jhktrq', sortable: true },
                { text: exportCols['jhktsj'], width: 100, dataIndex: 'jhktsj', sortable: true },
    	        { text: exportCols['jhktdd'], width: 100, dataIndex: 'jhktdd', sortable: false },
    	        { text: exportCols['dsgh'], width: 85, dataIndex: 'dsgh', sortable: false,hidden:true },
    	        { text: exportCols['dsxm'], width: 85, dataIndex: 'dsxm', sortable: false,hidden:true },
    	        { text: exportCols['shztm'], width: 80, dataIndex: 'shztm', sortable: false,hidden:true },
                { text: exportCols['shzt'], width: 100, dataIndex: 'shzt', sortable: true, renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '审核通过'){
              				return  "<span style='color:green;font-weight:bold;'>审核通过</span>";
                		}else if(value == '待审状态'){
                			return  "<span style='color:blue;font-weight:bold;'>待审状态</span>";
                		}else if(value == '草稿状态'){
                			return  "<span style='color:red;font-weight:bold;'>草稿状态</span>";
                		}else{
                			return  "<span style='color:red;font-weight:bold;'>审核未通过</span>";
                		}
              	}},
    	        { text: exportCols['shyj'], width: 130, dataIndex: 'shyj', sortable: false,hidden:true },
    	        { text: exportCols['shsj'], width: 85, dataIndex: 'shsj', sortable: false ,hidden:true},
    	        { text: exportCols['shr'], width: 100, dataIndex: 'shr', sortable: false ,hidden:true},
//    	        { text: exportCols['fymc'], width: 100, dataIndex: 'fymc', sortable: false ,hidden:true},
    	        { text: exportCols['nj'], width: 100, dataIndex: 'nj', sortable: false ,hidden:false}
		    ],
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
					        }/*,'-',{
   							    	text:'修改',
   							    	itemId:'editsj',
   							    	iconCls:'edit_16',
   							    	action:'editsj'
   						    }*/,'-',{
   							    	text:'审核',
   							    	itemId:'edit',
   							    	iconCls:'edit_16',
   							    	action:'edit'
   						    },'-',{
					            itemId: 'withdrawBtn',													
					            text:'撤销审核',
					            tooltip:'撤销审核',
					            iconCls:'leftArrow',
					            action:'withdraw'
					     	 },
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
