Ext.define('App.view.pygrjh.ViewXsJcxxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.viewXsJcxxList',
	itemId:'viewXsJcxxList',
	store: 'viewXsJcxxStore',
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
    		id:'序号',xh:'学号',xm:'姓名',nj:'年级',yxsh:'院系所号',fymc:'分院名称',zydm:'专业代码',
    		zymc:'专业名称',pycc:'培养层次',pyccm:'培养层次码',jylb:'教育类别',jylbm:'教育类别码',
    		xwlbm:'学位类别码',xwlb:'学位类别',xslxm:'学生类型码',xslx:'学生类型',dsh:'导师号',dsmc:'导师'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['xh'], width:100, dataIndex:'xh', sortable: true},
    			{text:exportCols['xm'], width:100, dataIndex:'xm', sortable: true},
    			{text:exportCols['nj'], width:50, dataIndex:'nj', sortable: true},
    			{text:exportCols['fymc'], width:160,dataIndex:'fymc', sortable: true},
    			{text:exportCols['yxsh'], width:100, hidden:true,dataIndex:'yxsh', sortable: true},
    			{text:exportCols['zydm'], width:70,hidden:true, dataIndex:'zydm', sortable: true},
    			{text:exportCols['zymc'], width:120, dataIndex:'zymc', sortable: true},
    			{text:exportCols['pycc'], width:70, dataIndex:'pycc', sortable: true},
    			{text:exportCols['pyccm'], width:150, hidden:true,dataIndex:'pyccm', sortable: true},
    		 	{text:exportCols['jylb'], width:100, dataIndex:'jylb', sortable: true},
    	    	{text:exportCols['jylbm'], width:70, dataIndex:'jylbm',hidden:true, sortable: true},
    			{text:exportCols['xwlbm'], width:70, dataIndex:'xwlbm',hidden:true,sortable: true},
    			{text:exportCols['xwlb'], width:100, dataIndex:'xwlb', sortable: true},
    			{text:exportCols['xslxm'], width:70, dataIndex:'xslxm',hidden:true, sortable: true},
    			{text:exportCols['xslx'], width:150, dataIndex:'xslx', sortable: true,hidden:true},
    			{text:exportCols['dsh'], width:70, dataIndex:'dsh',hidden:true, sortable: true},
    			{text:exportCols['dsmc'], width:70, dataIndex:'dsmc', sortable: true}
    		],
    		
	        	dockedItems:[{
            		dock: 'top',
				     xtype: 'toolbar',
				     items:[{
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
						        pageSize: pSize,
						        dock: 'bottom',
						        store:  'viewXsJcxxStore',
						        displayInfo: true,
						        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
						        emptyMsg: '没有数据',
						        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
				   })]
        });
          me.callParent(arguments);
    }
});
