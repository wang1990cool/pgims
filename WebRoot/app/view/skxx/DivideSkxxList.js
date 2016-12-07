Ext.define('App.view.skxx.DivideSkxxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.divideSkxxList',
	store: 'DivideSkxxStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'其他分班',
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
    			{text:exportCols['kkkh'], width:180, dataIndex:'kkkh', sortable: false},
    			{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:false},
    			{text:exportCols['kcmc'],width:180,dataIndex:'kcmc',sortable:false},
    			{text:exportCols['kkdw'],width:170,dataIndex:'kkdw',sortable:false},
    			{text:exportCols['pydw'], width:170, dataIndex:'pydw', sortable: false},
    			{text:exportCols['zymc'],width:170,dataIndex:'zymc',sortable:false},
    			{text:exportCols['xslx'], width:70, dataIndex:'xslx', sortable: false},
    			{text:exportCols['jhrs'],width:70,dataIndex:'jhrs',sortable:false},
    			{text:exportCols['kcxf'],width:70,dataIndex:'kcxf',sortable:false},
    			{text:exportCols['zjjs'],width:70,dataIndex:'zjjs',sortable:false},
//    			{text:exportCols['xn'], width:70, dataIndex:'xn', sortable: true},
//    			{text:exportCols['xq'], width:70, dataIndex:'xq', sortable: true},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: false,hidden:true}
    		],
    		
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },{
   							    	text:'修改',
   							    	itemId:'edit',
   							    	iconCls:'edit_16',
   							    	action:'edit'
   							    }]
   						}]
        });
          me.callParent(arguments);
    }
});
