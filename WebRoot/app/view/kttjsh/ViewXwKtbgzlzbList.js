Ext.define('App.view.kttjsh.ViewXwKtbgzlzbList', {
	extend: 'Ext.grid.Panel',
	
	store: 'ViewXwKtbgzlzbStore',
    columnLines: true,
    title: '开题报告信息',
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
        	
        	xh:'学号',xm:'姓名',xn:'学年',xq:'学期',lwtm:'论文题目',ktlym:'开题来源吗',
        	ktly:'开题来源',ktmc:'开题名称',ktfzr:'开题负责人',lwlxm:'论文类型码',lwlx:'论文类型',ktrq:'开题日期',
        	ktdd:'开题地点',pszzz:'评审组组长',shztm:'审核状态码',shzt:'审核状态',dsshyj:'导师审核意见',dsshsj:'导师审核时间',
        	bz:'备注',zllxm:'资料类型码',zllx:'资料类型',zlwj:'资料文件',zlwjmc:'资料文件名称',zlwjdz:'资料文件地址',zlscsj:'资料上传时间'
        	,zlscr:'资料上传人',zlscip:'资料上传ip',ztm:'资料上传状态码',zt:'资料上传状态'
        	,xslxm:'学生类型码',yxsh:'学院代号',zydm:'专业码',xwlbm:'学位类型码',dsgh:'导师工号',dsxm:'导师姓名'
        	,fymc:'学院名称',zymc:'专业名称',xwlb:'学位类型',xslx:'学生类型'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                { text: exportCols['xh'], width: 100, dataIndex: 'xh', sortable: true },
                { text: exportCols['xm'], width: 100, dataIndex: 'xm', sortable: true},
                { text: exportCols['fymc'], width: 130, dataIndex: 'fymc', sortable: false ,hidden:true },
                { text: exportCols['zymc'], width: 130, dataIndex: 'zymc', sortable: false},
                { text: exportCols['xwlb'], width: 100, dataIndex: 'xwlb', sortable: false ,hidden:true},
                { text: exportCols['pycc'], width: 85, dataIndex: 'pycc', sortable: false,hidden:true},
                { text: exportCols['xslx'], width: 85, dataIndex: 'xslx', sortable: false,hidden:true },
                { text: exportCols['lwtm'], width: 110, dataIndex: 'lwtm', sortable: false },
                { text: exportCols['ktmc'], width: 110, dataIndex: 'ktmc', sortable: false},
                { text: exportCols['lwlx'], width: 100, dataIndex: 'lwlx', sortable: true},
                { text: exportCols['zllx'], width: 100, dataIndex: 'zllx', sortable: true},
                { text: exportCols['ktrq'], width: 100, dataIndex: 'ktrq', sortable: true },
    	        { text: exportCols['ktdd'], width: 100, dataIndex: 'ktdd', sortable: false},
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
    	        { text: exportCols['zlscr'], width: 100, dataIndex: 'zlscr', sortable: false,hidden:true },
//    	        { text: exportCols['fymc'], width: 100, dataIndex: 'fymc', sortable: false ,hidden:true},
    	        { text: exportCols['zt'], width: 100, dataIndex: 'zt', sortable: false }
		    ],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbarl',
    	    	   dock: 'top',
    	    	   items:[{
				            itemId: 'detailBtn',
							text:'报告详情',
							tooltip:'报告详情',
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
