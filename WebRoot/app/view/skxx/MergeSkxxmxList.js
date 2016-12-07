Ext.define('App.view.skxx.MergeSkxxmxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.MergeSkxxmxList',
	store:'MergeSkxxmxStore',
	itemId:'mergeSkxxmxList',
	title:'合班课程',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
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
    		id:'序号',kkjhh:'开课计划号',ggkbzm:'公共课标志码',ggkbz:'公共课标志',
    		kch:'课程号',kcmc:'课程名称',
    		xn:'学年',xq:'学期',jhrs:'计划人数',llxs:'理论学时',syxs:'实验学时',
    		zxs:'总学时',ksz:'开始周',jsz:'结束周',qzz:'起至周',xslxm:'学时 类型码',
    		xslx:'学生类型',xkzym:'学科专业码',xkzy:'学科专业',mzxs:'每周学时',
    		pydwh:'培养单位号',pydw:'培养单位',kkdwh:'开课单位号',kkdw:'开课单位',
    		kcxf:'课程学分'};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kkjhh'], width:160, dataIndex:'kkjhh', sortable: false},
    			{text:exportCols['kch'],width:80,dataIndex:'kch',sortable:false,hidden:true},
    			{text:exportCols['kcmc'],width:200,dataIndex:'kcmc',sortable:false},
    			{text:exportCols['jhrs'],width:80,dataIndex:'jhrs',sortable:false},
    			{text:exportCols['kkdw'],width:180,dataIndex:'kkdw',sortable:false},
    			{text:exportCols['pydw'], width:170, dataIndex:'pydw', sortable: false},
    			{text:exportCols['xkzy'],width:160,dataIndex:'xkzy',sortable:false},
    			{text:exportCols['xn'], width:100, dataIndex:'xn', sortable: false},
    			{text:exportCols['xq'], width:60, dataIndex:'xq', sortable: false},
    			{text:exportCols['xslx'], width:130, dataIndex:'xslx', sortable: false}
    		],
    		
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },{
   							    	text:'增加',
   							    	itemId:'addBtn',
   							    	iconCls:'add_16',
   							    	action:'add'
   							    },{
   							    	text:'删除',
   							    	itemId:'deleteBtn',
   							    	iconCls:'delete_16',
   							    	action:'delete'
   							    }]
   						}]
        });
          me.callParent(arguments);
    }
});
