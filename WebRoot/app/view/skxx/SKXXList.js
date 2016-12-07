Ext.define('App.view.skxx.SKXXList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.skxxList',
	store: 'SKXXStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'授课信息管理',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
//   		 ,
// 	     getRowClass : function(rec,rowIndex,rowParams,store){
// 	     	var kkkhTemp = new Array(); 
// 	     	var skjhgxStore = Ext.StoreMgr.lookup('SKJHGXStore');
//			skjhgxStore.each(function(record){
//					if(rec.data.kkkh == record.get('kkkh')){
//						kkkhTemp.push(record.get('kkkh'))
//					}
//				})
//				if(kkkhTemp.length > 1){// 合班
//					return 'x-grid-record-merge-color';
//				}else if(kkkhTemp.length == 1){
//						var skjhRec = skjhgxStore.findRecord('kkkh', rec.data.kkkh);
//						// 判断是否有其他分班
//						var kkkhArray = new Array();//若分班存在，保存分班，若长度为1表示没有分班
//						skjhgxStore.each(function(record){
//							if(skjhRec.get('kch') == record.get('kch')
//								&& skjhRec.get('kkjhh') == record.get('kkjhh'))	{
//									kkkhArray.push(record.get('kkkh'))
//							}
//						})
//						if(kkkhArray.length > 1){
//								return 'x-grid-record-divide-color';
//						}else if(kkkhArray.length = 1){
//								return 'x-grid-record-independent-color';
//						}
//				}
//		 }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	
    	var exportCols = {
    		id:'序号',kkkh:'开课课号',ggkbzm:'公共课标志码',ggkbz:'公共课标志',
    		kch:'课程号',kcmc:'课程名称',xn:'学年',xq:'学期',jhrs:'计划人数',
    		llxs:'理论学时',syxs:'实验学时',zjjs:'主讲教师',kcxf:'学分',
    		zxs:'总学时',ksz:'开始周',jsz:'结束周',qzz:'起至周',xslxm:'学时类型码',
    		xslx:'学时类型',zydm:'专业代码',zymc:'专业名称',mzxs:'每周学时',
    		pydwh:'培养单位号',pydw:'培养单位',kkdwh:'开课单位号',kkdw:'开课单位',
    		kcxf:'课程学分'};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kkkh'], width:180, dataIndex:'kkkh', sortable: true},
    			{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true},
    			{text:exportCols['kcmc'],width:180,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['kkdw'],width:170,dataIndex:'kkdw',sortable:true},
    			{text:exportCols['pydw'], width:170, dataIndex:'pydw', sortable: true},
    			{text:exportCols['zymc'],width:170,dataIndex:'zymc',sortable:true},
    				{text:exportCols['ggkbz'],width:100,dataIndex:'ggkbz',sortable:true},
    			{text:exportCols['xslx'], width:70, dataIndex:'xslx', sortable: true},
    			{text:exportCols['jhrs'],width:70,dataIndex:'jhrs',sortable:true},
    			{text:exportCols['kcxf'],width:70,dataIndex:'kcxf',sortable:true},
    			{text:exportCols['zjjs'],width:70,dataIndex:'zjjs',sortable:true},
//    			{text:exportCols['xn'], width:70, dataIndex:'xn', sortable: true},
//    			{text:exportCols['xq'], width:70, dataIndex:'xq', sortable: true},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: true,hidden:true}
    		],
    		
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
//   							    	hidden:true,
   							    	action:'arrangeTeacher'
   							    },'-',{
								itemId : 'eportBtn',
								xtype : 'excelExport',
								action : 'toExcel'
					         }, '-', '->', '-', {
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
								}, '条']
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
				var detailBtn = o.up('grid').down('#detail');
				if(!detailBtn.disabled && !detailBtn.hidden)
					detailBtn.fireEvent('click',detailBtn);
			}
		}
        });
          me.callParent(arguments);
    }
});
