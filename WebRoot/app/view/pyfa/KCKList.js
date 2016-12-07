Ext.define('App.view.pyfa.KCKList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kckList',
	store: 'KCKStore',
	columnLines: true,
	autoHeight: true,
    autoWidth: true,
//    autoScroll:true,
    layout : 'auto',
    frame:true,
	title:'课程信息',
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
    		pycc:'培养层次码',pycc:'培养层次',kkdw:'开课单位',ggkbzm:'公共课标志码',ggkbz:'公共课程',bz:'备注'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch', sortable: true},
    			{text:exportCols['kcmc'], width:180, dataIndex:'kcmc', sortable: true},
    			{text:exportCols['kkdw'], width:200, dataIndex:'kkdw', sortable: true},
    			{text:exportCols['pycc'], width:80, dataIndex:'pycc', sortable: true},
    			{text:exportCols['xslx'], width:70, dataIndex:'xslx', sortable: true},
    			{text:exportCols['kcxf'], width:70, dataIndex:'kcxf', sortable: true},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs', sortable: true},
    			{text:exportCols['llxs'], width:70, dataIndex:'llxs', sortable: true},
    			{text:exportCols['syxs'], width:70, dataIndex:'syxs', sortable: true},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz', sortable: true,flex:1}
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
							itemId:'toolbar',
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
