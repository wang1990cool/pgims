Ext.define('App.view.skxx.FGgkZxkkjhList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.fGgkZxkkjhList',
	store: 'FGgkZxkkjhStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'课程任务安排',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
//   		 ,
// 	     getRowClass : function(record,rowIndex,rowParams,store){
//            if(record.data.ztm=="2"){
//                return 'x-grid-record-color';
//            }  
//	 }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kkjhh:'开课计划号',ggkbzm:'公共课标志码',ggkbz:'公共课标志',
    		kch:'课程号',kcmc:'课程名称',
    		xn:'学年',xq:'学期',jhrs:'计划人数',llxs:'理论学时',syxs:'实验学时',
    		zxs:'总学时',ksz:'开始周',jsz:'结束周',qzz:'起至周',xslxm:'学时 类型码',
    		xslx:'学生类型',xkzym:'学科专业码',xkzy:'学科专业',mzxs:'每周学时',
    		pydwh:'培养单位号',pydw:'培养单位',kkdwh:'开课单位号',kkdw:'开课单位',
    		kcxf:'课程学分',kcxslx:'学时类型'};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kkjhh'], width:160, dataIndex:'kkjhh', sortable: true},
    			{text:exportCols['kch'],width:100,dataIndex:'kch',sortable:true},
    			{text:exportCols['kcmc'],width:200,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['kkdw'],width:180,dataIndex:'kkdw',sortable:true},
    			{text:exportCols['pydw'], width:180, dataIndex:'pydw', sortable: true},
    			{text:exportCols['xkzy'],width:160,dataIndex:'xkzy',sortable:true},
    			{text:exportCols['xslx'], width:130, dataIndex:'xslx', sortable: true},
    			{text:exportCols['jhrs'],width:80,dataIndex:'jhrs',sortable:true},
    			{text:exportCols['kcxslx'], width:70, dataIndex:'kcxslx', sortable: true},
    			{text:exportCols['xn'], width:100, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:60, dataIndex:'xq', sortable: true},
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
   							    	text:'合班',
   							    	itemId:'merge',
   							    	iconCls:'add_16',
   							    	action:'merge'
   							    },'-',{
   							    	text:'分班',
   							    	itemId:'divide',
   							    	iconCls:'add_16',
   							    	action:'divide'
   							    },'-',{
   							    	text:'独立',
   							    	itemId:'independent',
   							    	iconCls:'add_16',
   							    	action:'independent'
   							    }
//   							    ,'-',{
//   							    	text:'授课信息',
//   							    	itemId:'skxx',
//   							    	iconCls:'detail_16',
//   							    	action:'skxx'
//   							    }
   							    , '->', '-', {
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
		    })]
        });
          me.callParent(arguments);
    }
});
