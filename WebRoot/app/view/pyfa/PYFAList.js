Ext.define('App.view.pyfa.PYFAList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.pyfaList',
	store: 'PYFAStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'培养方案',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
// 	     getRowClass : function(record,rowIndex,rowParams,store){
//            if(record.data.ztm=="2"){
//                return 'x-grid-record-color';
//            }  
//	   }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',bbh:'年度',pyfah:'培养方案号',pyfamc:'培养方案名称',zydm:'专业代码',
    		zymc:'专业名称',pyfs:'培养方式',xz:'学制',xxnx:'学习年限',xslxm:'学生类型码',xslx:'学生类型',dwh:'单位号',
    		dwmc:'培养单位',xwkxf:'学位课学分',zxf:'总学分',kch:'课程号',kcmc:'课程名称',
    		kclb:'课程类别',kcxz:'课程性质',kcsx:'课程属性',kkxq:'学期',kcxf:'课程学分',kcxslx:'学时类型',
    		zxs:'总学时',llxs:'理论学时',syxs:'实验学时',ggkbz:'公共课标志',ztm:'状态码',zt:'状态',bz:'备注'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['bbh'], width:50, dataIndex:'bbh', sortable: true},
    			{text:exportCols['pyfah'], width:160, dataIndex:'pyfah', sortable: true},
    			{text:exportCols['pyfamc'], width:200, dataIndex:'pyfamc', sortable: true},
    			{text:exportCols['zydm'], width:100, dataIndex:'zydm', hidden:true,sortable: true},
    			{text:exportCols['dwmc'], width:150, dataIndex:'dwmc', sortable: true},
    			{text:exportCols['zymc'], width:150, dataIndex:'zymc', sortable: true},
    			{text:exportCols['xslx'], width:150, dataIndex:'xslx', sortable: true},
    			{text:exportCols['xz'], width:70, dataIndex:'xz', sortable: true},
    			{text:exportCols['xxnx'], width:70, dataIndex:'xxnx', sortable: true},
    			{text:exportCols['zxf'], width:70, dataIndex:'zxf', sortable: true},
    			{text:exportCols['xwkxf'], width:70, dataIndex:'xwkxf',hidden:true, sortable: true},
    			{text:exportCols['zt'], width:80, dataIndex:'zt', sortable: true},
    			{text:exportCols['ztm'], width:70, dataIndex:'ztm', sortable: true,hidden:true}
    			,
    			{text:exportCols['fjdz'], width:70, dataIndex:'fjdz', sortable: true,hidden:true}
//    			,
//    			{ menuDisabled: true,
//		        	width: 20,
//		            sortable: false,
//		            xtype: 'actioncolumn',
//		
//		            items: [{
//		            	iconCls:'download_16',
//		            	tooltip: '文件下载',
//		            	text: '下载',
//		            	handler: function (grid, rowIndex, colIndex) {
//		            		var rec = grid.getStore().getAt(rowIndex);
//		            		if(rec.data.fjdz == null){
//								Ext.MessageBox.alert('提示', '该培养方案没有附件！');
//							}else{
//			            		var downloader = this.up('grid').down('#fileDownloader');
//			            		downloader.load({
//			            			params: {fjdz: rec.data.fjdz},
//			            			url: 'pyfaDownFj.action'
//			            		});
//							}
//		            	}
//		            }]
//		          }
//    			,
//    			{ 		text:'操作',
//			        	width: 50,
//			            sortable: false,
//			            align:'center',
//			            xtype: 'actioncolumn',
//			            items: [{
//			            	iconCls:'add_16',
//			            	tooltip: '课程设置',
//			            	text: '课程设置',
//			            	 handler: function(grid, rowIndex, colIndex) {
//			            	 	  var rec = grid.getStore().getAt(rowIndex);
//			            	 	  var me = this;
//						          var controller = Ext.create('App.controller.pyfa.FAKCController');
//						          controller.onLaunch(rec)
//			            	 }
//			          	  }]
//			          }
    		],
    		
    				dockedItems:[{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
		       },{
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
							itemId : 'addBtn',
							text : '增加',
							tooltip : '增加',
							iconCls : 'add_16',
							action : 'add'
						},{
						    	text:'培养方案导入',
						    	tooltip:'培养方案导入',
						    	itemId:'import',
						    	iconCls:'add_16',
						    	action:'import'
						},{
							itemId : 'editBtn',
							text : '修改',
							tooltip : '修改',
							iconCls : 'edit_16',
							action : 'edit'
						}, {
							itemId : 'deleteBtn',
							text : '删除',
							tooltip : '删除',
							iconCls : 'delete_16',
							action : 'delete'
						},{
			                itemId: 'chooseCourseBtn',
			                text:'课程设置',
			                tooltip:'课程设置',
			                iconCls:'add_16',
			                action:'addCourse'
	         	   		},{
		         	   		itemId:'submitBtn',
		         	   		text:'审核',
		         	   		tooltip:'审核',
		         	   		iconCls:'ok_16',
		         	   		action:'submit'
	         	  		 } ,{
			                itemId: 'withdrawBtn',
			                text:'撤回',
			                tooltip:'撤回',
			                iconCls:'leftArrow',
			                action:'withdraw'
	         	   }
	         	   ,{
		                itemId: 'auditDetailBtn',
		                text:'审核记录',
		                tooltip:'审核记录',
		                iconCls:'detail_16',
		                action:'auditDetail'
	         	   }
	         	   , {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						}, '->', '-', {
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
				    ]
    				},
    		 Ext.create('Ext.PagingToolbar', {
    		 	itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store:  me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })],
    		
		  listeners:{  
			itemdblclick: function(o, record, item, index, e, eOpts){
				var detailBtn = o.up('grid').down('#detailBtn');
				if(!detailBtn.disabled && !detailBtn.hidden)
					detailBtn.fireEvent('click',detailBtn);
			}
		}
        });
          me.callParent(arguments);
    }
});
