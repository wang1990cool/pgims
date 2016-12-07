Ext.define('App.view.pyfa.FAKCDetailList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.fakcDetailList',
	store: 'FAKCStore',
	columnLines: true,
	itemId:'fakcDetailList',
	title:'方案课程',
	sortable:false,
    loadMask: true,
    autoScroll:true,
   	isDetail:true,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',bbh:'版本号',pyfah:'培养方案号',kch:'课程号',kcmc:'课程名称',kclbm:'课程类别码',kclb:'课程类别',
    		kcxzm:'课程性质码',kcxz:'课程性质',kcsxm:'课程属性码',kcsx:'课程属性',kcxf:'课程学分',
    		xslxm:'学时类型码',xslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',ksxsm:'考试形式码',
    		ksxs:'考试形式',kkxq:'开课学期',kkdwh:'开课单位号',dwmc:'开课单位',ggkbzm:'公共课程编码',ggkbz:'公共课程'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{text: exportCols['id'], width: 50,dataIndex: 'id',hidden:true},
    			{text:exportCols['bbh'], width:100, hidden:true, dataIndex:'bbh'},
    			{text:exportCols['pyfah'], width:60, hidden:true, dataIndex:'pyfah'},
    			{text:exportCols['kch'], width:100, dataIndex:'kch',sortable:true},
    			{text:exportCols['kcmc'], width:180,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['kclbm'], width:70, dataIndex:'kclbm',hidden:true},
    			{text:exportCols['kclb'], width:80, dataIndex:'kclb',sortable:true},
    			{text:exportCols['kcxzm'], width:70, dataIndex:'kcxzm',hidden:true},
    			{text:exportCols['kcxz'], width:80, dataIndex:'kcxz',sortable:true},
    			{text:exportCols['kcsxm'], width:80, dataIndex:'kcsxm',hidden:true},
    			{text:exportCols['kcsx'], width:80, dataIndex:'kcsx',sortable:true},
    			{text:exportCols['ksxsm'], width:80, dataIndex:'ksxsm', hidden:true},
    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs',sortable:true},
    			{text:exportCols['kkxq'], width:70, dataIndex:'kkxq',sortable:true},
    			{text:exportCols['dwmc'], width:160, dataIndex:'dwmc',sortable:true},
    			{text:exportCols['xslx'], width:80, dataIndex:'xslx',sortable:true},
    			{text:exportCols['kcxf'], width:80, dataIndex:'kcxf',sortable:true},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs',sortable:true},
    			{text:exportCols['llxs'], width:70, dataIndex:'llxs',sortable:true},
    			{text:exportCols['syxs'], width:70, dataIndex:'syxs',sortable:true},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz',sortable:true}
    		],
    		
    				dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情', 
   							    	tooltip:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    }]
   						}],
   						
			  listeners:{  
//				itemdblclick: function(o, record, item, index, e, eOpts){
//					var detailBtn = o.up('grid').down('#detail');
//					if(!detailBtn.disabled && !detailBtn.hidden)
//						detailBtn.fireEvent('click',detailBtn);
//				}
			}
   	   });

       me.callParent(arguments);
    }
});
