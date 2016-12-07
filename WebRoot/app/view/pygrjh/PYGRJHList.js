Ext.define('App.view.pygrjh.PYGRJHList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.pygrjhList',
	id:'pygrjhList',
	store: 'PYGRJHStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    frame:true,
    layout:'auto',
	title:'个人计划',
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
    		id:'序号',xh:'学号',xm:'姓名',nj:'年级',yxsh:'院系所号',fymc:'学院名称',zydm:'专业代码',zymc:'专业名称',
    		pyccm:'培养层次码',pycc:'培养层次',dsh:'导师号',dsxm:'导师姓名',ztm:'状态码',zt:'状态',
    		xwlb:'学位类别',jylb:'教育类别',xslx:'学生类型',pyfah:'培养方案号'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['xh'], width:100, dataIndex:'xh', sortable: true},
    			{text:exportCols['xm'], width:70, dataIndex:'xm', sortable: true},
    			{text:exportCols['nj'], width:70, dataIndex:'nj', sortable: true},
    			{text:exportCols['yxsh'], width:70, dataIndex:'yxsh', hidden:true,sortable: true},
    			{text:exportCols['fymc'], width:150, dataIndex:'fymc', sortable: true},
    			{text:exportCols['zymc'], width:150, dataIndex:'zymc', sortable: true},
    			{text:exportCols['pycc'], width:80, dataIndex:'pycc', sortable: true},
    			{text:exportCols['jylb'], width:100, dataIndex:'jylb', sortable: true},
    			{text:exportCols['xwlb'], width:80, dataIndex:'xwlb', sortable: true},
    			{text:exportCols['xslx'], width:80, dataIndex:'xslx', sortable: true,hidden:true},
    			{text:exportCols['dsh'], width:70, dataIndex:'dsh', sortable: true,hidden:true},
    			{text:exportCols['dsxm'], width:70, dataIndex:'dsxm', sortable: true,hidden:true},
//    			{text:exportCols['ztm'], width:70, dataIndex:'ztm', sortable: true,hidden:true},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: true}
    		],
    		
   	        dockedItems: [
   	        	Ext.create('App.view.main.GridToolbar',{
   	        		itemId:'gridtoolbar',
   	        		dock:'top',
   	        		insertBtns:['-'
	        		,{
		                itemId: 'withdrawBtn',
		                text:'提交撤回',
		                tooltip:'提交撤回',
		                iconCls:'leftArrow',
		                action:'withdraw'
	         	   }]
   	        	}),
		    Ext.create('Ext.PagingToolbar', {
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
