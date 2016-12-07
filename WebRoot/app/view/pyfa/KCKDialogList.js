Ext.onReady(function(){

Ext.define('App.view.pyfa.KCKDialogList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kckDialogList',
	itemId:'kckDialogList',
	store: 'KCKStore',
	columnLines: true,
//    autoScroll:true,
    layout : 'auto',
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
    		id:'序号',kch:'课程号',kcmc:'课程名称',kcywmc:'课程英文名称',kcjj:'课程简介',
    		kcxf:'课程学分',xslxm:'学时类型码',xslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',
    		pyccm:'培养层次码',pycc:'培养层次',kkdw:'开课单位',ggkbzm:'公共课标志码',ggkbz:'是否公共课',bz:'备注'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch', sortable: true},
    			{text:exportCols['kcmc'], width:200, dataIndex:'kcmc', sortable: true},
    			{text:exportCols['kkdw'], width:164, dataIndex:'kkdw', sortable: true},
    			{text:exportCols['zxs'], width:70,dataIndex:'zxs', sortable: true},
    			{text:exportCols['kcxf'], width:70,dataIndex:'kcxf', sortable: true},
    			{text:exportCols['xslx'], width:100, hidden:true,dataIndex:'xslx', sortable: true},
    			{text:exportCols['zxs'], width:70,hidden:true, dataIndex:'zxs', sortable: true},
    			{text:exportCols['llxs'], width:70, hidden:true,dataIndex:'llxs', sortable: true},
    			{text:exportCols['syxs'], width:70, hidden:true,dataIndex:'syxs', sortable: true},
    			{text:exportCols['pycc'], width:150, hidden:true,dataIndex:'pycc', sortable: true},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz', sortable: true}
    		],
    		
	        	dockedItems:[{
            		dock: 'top',
				     xtype: 'toolbar',
				     items:[{
				     	itemId:'detail',
				     	text:'详情',
				     	iconCls:'detail_16',
				     	action:'detail'
				     },'-',{
				     	itemId:'submit',
				     	text:'确定',
				     	iconCls:'ok_16',
				     	action:'ok'
				     },'-',{
				     	itemId:'return',
				     	text:'返回',
				     	iconCls:'return_16',
 				      	handler: function () {
		                	var me = this;
		                    me.up('window').close();
		                }
				     }]},
            	    Ext.create('Ext.PagingToolbar', {
            	    			itemId:'toolbar',
						        pageSize: pSize,
						        dock: 'bottom',
						        store:  'KCKStore',
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
})
