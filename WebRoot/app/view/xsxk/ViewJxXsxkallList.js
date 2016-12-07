Ext.define('App.view.xsxk.ViewJxXsxkallList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.viewJxXsxkallList',
	store: 'ViewJxXsxkallStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'选课查询信息',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		xh:'学号',xm:'学生姓名',fymc:'所在学院',kksj:'开课时间',kkdd:'开课地点',kcxf:'课程学分',
        	kch:'课程号',kcmc:'课程名称',zymc:'专业名称',xslx:'学生类型',zxs:'总学时',llxs:'理论学时',
        	syxs:'实验学时',ggkbz:'公共课',zjjsh:'主讲教师号',zjjs:'主讲教师',kcxslx:'学时类型',xn:'学年',
        	xq:'学期'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['xh'], width: 100, dataIndex: 'xh', sortable: true },
                { text: exportCols['xm'], width: 85, dataIndex: 'xm', sortable: true},
                { text: exportCols['kch'], width: 85, dataIndex: 'kch', sortable: true },
                { text: exportCols['kcmc'], width: 150, dataIndex: 'kcmc', sortable: true },
                { text: exportCols['fymc'], width: 150, dataIndex: 'fymc', sortable: true },
                { text: exportCols['zymc'], width: 120, dataIndex: 'zymc', sortable: true },
                { text: exportCols['kksj'], width: 85, dataIndex: 'kksj', sortable: true,hidden:true},
                { text: exportCols['kkdd'], width: 85, dataIndex: 'kkdd', sortable: true,hidden:true },
                { text: exportCols['xslx'], width: 130, dataIndex: 'xslx', sortable: true },
                { text: exportCols['ggkbz'], width: 80, dataIndex: 'ggkbz', sortable: true },
                { text: exportCols['zxs'], width: 80, dataIndex: 'zxs', sortable: true },
                { text: exportCols['kcxf'], width: 80, dataIndex: 'kcxf', sortable: true },
    	        { text: exportCols['zjjs'], width: 85, dataIndex: 'zjjs', sortable: true },
    	       { text: exportCols['xn'], width: 85, dataIndex: 'xn', sortable: true },
    	       { text: exportCols['xq'], width: 85, dataIndex: 'xq', sortable: true }
    		],
    		
    		    dockedItems:[{
            		dock: 'top',
				    xtype: 'toolbar',
				    items:[
				    	{
							itemId : 'detailBtn',
							text : '详情',
							tooltip : '详情',
							iconCls : 'detail_16',
							action : 'detail'
	         	   }, {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						},'->', '-', {
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action : 'showSearch'
						}, '-', '每页', {
							itemId : 'numCmb',
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
						}, '条'
				    ]},
    		 Ext.create('Ext.PagingToolbar', {
		        itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store:  me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
    		
        });
          me.callParent(arguments);
    }
});

