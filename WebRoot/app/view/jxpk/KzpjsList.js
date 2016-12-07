Ext.define('App.view.jxpk.KzpjsList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kzpjsList',
	store: 'KzpjsStore',
	columnLines: true,
	autoHeight: true,
    autoWidth: true,
    layout : 'auto',
    frame:true,
	title:'',
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
    		id:'序号',xn:'学年',xq:'学期',jsbh:'教室编号',jsmc:'教室名称',
    		sydwbh:'使用单位编号',sydwmc:'使用单位名称',bz:'备注'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['xn'], width:100, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:100, dataIndex:'xq', sortable: true},
    			{text:exportCols['jsbh'], width:80, dataIndex:'jsbh', sortable: true,hidden:true},
    			{text:exportCols['jsmc'], width:120, dataIndex:'jsmc', sortable: true},
    			{text:exportCols['sydwbh'], width:120, dataIndex:'sydwbh', sortable: true},
    			{text:exportCols['sydwmc'], width:150, dataIndex:'sydwmc', sortable: true},
    			{text:exportCols['bz'], width:130, dataIndex:'bz', sortable: true,flex:1}
    		],

			dockedItems : [
				Ext.create('App.view.main.GridToolbar', {
							itemId : 'gridtoolbar',
							dock : 'top'
							/*insertBtns : ['-', {
										itemId : 'detailBtn',
										text : '查看',
										tooltip : '查看',
										iconCls : 'assign_16',
										action : 'detail'
									}]*/
						}),
				Ext.create('Ext.PagingToolbar', {
							pageSize : pSize,
							dock : 'bottom',
							store : me.store,
							displayInfo : true,
							displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
							emptyMsg : '没有数据',
							plugins : Ext.create('Ext.ux.ProgressBarPager',{})
						})],
    		
//      	    dockedItems: [
//      	    {
//      	    	dock:'top',
//      	    	xtype:'toolbar',
//      	    	items:[{
//							itemId : 'detailBtn',
//							text : '详情',
//							tooltip : '详情',
//							iconCls : 'detail_16',
//							action : 'detail'
//						},'-', {
//							itemId : 'addBtn',
//							text : '增加',
//							tooltip : '增加',
//							iconCls : 'add_16',
//							action : 'add'
//						},
//						'-', {
//							itemId : 'editBtn',
//							text : '修改',
//							tooltip : '修改',
//							iconCls : 'edit_16',
//							action : 'edit'
//						},
//						'-', {
//							itemId : 'deleteBtn',
//							text : '删除',
//							tooltip : '删除',
//							iconCls : 'delete_16',
//							action : 'delete'
//						},'-', {
//							itemId : 'eportBtn',
//							xtype : 'excelExport',
//							action : 'toExcel'
//						}, '-', '->', '-', {
//							itemId : 'schShowBtn',
//							iconCls : 'searchForm',
//							action : 'showSearch'
//						}, '-', '每页', {
//							itemId : 'numCmb',
//							name : 'numCmb',
//							xtype : 'combo',
//							width : 50,
//							blankText : '必须选择页面大小!',
//							store : Ext.StoreMgr.lookup('main.PageStore'),
//							value : pSize,
//							editable : false,
//							displayField : 'abbr',
//							valueField : 'value',
//							queryMode : 'local'
//						}, '条']
//      	    },
//   
//		    Ext.create('Ext.PagingToolbar', {
//		        pageSize: pSize,
//		        dock: 'bottom',
//		        store:  me.store,
//		        displayInfo: true,
//		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
//		        emptyMsg: '没有数据',
//		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
//		    })],
		    
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
