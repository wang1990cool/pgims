Ext.define('App.view.pygrjh.PYGRJHKCList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.pygrjhkcList',
	itemId:'pygrjhkcList',
	store: 'PYGRJHKCStore',
	columnLines: true,
	autoScroll:true,
	layout:'fit',
	title:'方案课程',
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
    		id:'序号',xh:'学号',nj:'年级',zydm:'专业代码',bbh:'版本号',pyfah:'培养方案号',kch:'课程号',kcmc:'课程名称',kclbm:'课程类别码',kclb:'课程类别',
    		kcxzm:'课程性质码',kcxz:'课程性质',kcsxm:'课程属性码',kcsx:'课程属性',kcxf:'课程学分',
    		xslxm:'学时类型码',xslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',ksxsm:'考试形式码',
    		ksxs:'考试形式',kkxq:'开课学期',kkdwh:'开课单位号',dwmc:'开课单位'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{text: exportCols['id'], width: 50,dataIndex: 'id', sortable: true,hidden:true},
    			{text:exportCols['xh'], width:100,  dataIndex:'xh', hidden:true,sortable: true},
    			{text:exportCols['nj'], width:100,  dataIndex:'nj', hidden:true,sortable: true},
    			{text:exportCols['zydm'], width:100, hidden:true, dataIndex:'zydm', sortable: true},
    			{text:exportCols['bbh'], width:100, hidden:true, dataIndex:'bbh', sortable: true},
    			{text:exportCols['pyfah'], width:100, dataIndex:'pyfah', hidden:true,sortable: true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch', sortable: true	},
    			{text:exportCols['kcmc'], width:150, sortable: true,dataIndex:'kcmc'},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs', sortable: true},
    			{text:exportCols['kcxf'], width:80, dataIndex:'kcxf', sortable: true},
    			{text:exportCols['kclb'], width:80, dataIndex:'kclb', sortable: true},
    			{text:exportCols['kcxz'], width:80, dataIndex:'kcxz', sortable: true},
    			{text:exportCols['kcsx'], width:80, dataIndex:'kcsx', sortable: true},
    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs', sortable: true,hidden:true},
    			{text:exportCols['dwmc'], width:160, dataIndex:'dwmc', sortable: true,hidden:true},
    			{text:exportCols['xslx'], width:80, dataIndex:'xslx', sortable: true,hidden:true},
    			{text:exportCols['kkxq'], width:70, dataIndex:'kkxq', sortable: true,
    			editor:{
    				   xtype:'textfield',
    				   allowBlank: false,
					  regex:/^[1-5]$/
    			}}
    		],
			    selType: 'cellmodel',
			    plugins: [
			        Ext.create('Ext.grid.plugin.CellEditing', {
			            clicksToEdit: 2
			        })
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
   							    	text:'增加',
   							    	itemId:'addKc',
   							    	iconCls:'add_16',
   							    	action:'addKc'
   							    },'-',{
   							    	text:'课程导入',
   							    	itemId:'importKc',
   							    	iconCls:'add_16',
   							    	action:'importKc'
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
   							    }]
   						}]
   	   });
       me.callParent(arguments);
    }
});
