Ext.define('App.view.jxkkjh.KKJHList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kkjhList',
	store: 'KKJHStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'开课计划',
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
    		id:'序号',kkjhh:'开课计划号',xn:'学年',xq:'学期',pydwh:'培养单位号',pydw:'培养单位',
    		xkzym:'学科专业码',xkzy:'学科专业',nj:'年级',xslxm:'学生类型码',xslx:'学生类型',pyccm:'培养层次码',
    		pycc:'培养层次',jylbm:'教育类别码',jylb:'教育类别',xwlbm:'学位类别码',xwlb:'学位类别',
    		bbh:'版本号',pyfah:'培养方案号',pyfa:'培养方案名称',
    		pyfs:'培养方式',jhrs:'计划人数',kch:'课程号',kcmc:'课程名称',
    		ggkbz:'公共课标志',kclb:'课程类别',kcxz:'课程性质',kcsx:'课程属性',
    		ksxs:'考试形式',kcxf:'课程学分',kcxslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',
    		mzxs:'每周学时',qzz:'起至周',kkdw:'开课单位',
    		zt:'状态',bzrgh:'编制人工号',bzr:'编制人',	ztm:'状态码'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kkjhh'], width:200, dataIndex:'kkjhh', sortable: true},
    			{text:exportCols['xn'], width:100, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:70, dataIndex:'xq', sortable: true},
    			{text:exportCols['nj'], width:70, dataIndex:'nj', sortable: true},
    			{text:exportCols['pydwh'], width:100, dataIndex:'pydwh', hidden:true,sortable: true},
    			{text:exportCols['pydw'], width:150, dataIndex:'pydw', sortable: true},
    			{text:exportCols['xkzy'], width:150, dataIndex:'xkzy', sortable: true},
    			{text:exportCols['xslx'], width:150, dataIndex:'xslx', sortable: true},
    			{text:exportCols['pyfs'], width:100, dataIndex:'pyfs', sortable: true},
//    			{text:exportCols['ztm'], width:70, dataIndex:'ztm',hidden:true, sortable: true},
    			{text:exportCols['zt'], width:120, dataIndex:'zt', sortable: true}
    		],
    		
    		    dockedItems:[{
            		dock: 'top',
				    xtype: 'toolbar',
				    items:[
				    	{
							itemId : 'detailBtn',
							text : '详情',
							tooltip : '详情',
							iconCls : 'detail_16',
							action : 'detail'
						}, {
							itemId : 'addBtn',
							text : '增加',
							tooltip : '增加',
							iconCls : 'add_16',
							action : 'add'
						},{
							itemId : 'editBtn',
							text : '修改',
							tooltip : '修改',
							iconCls : 'edit_16',
							action : 'edit'
						}, {
							itemId : 'deleteBtn',
							text : '删除',
							tooltip : '删除',
							iconCls : 'delete_16',
							action : 'delete'
						}
						,{
	         	   		itemId:'submitBtn',
	         	   		text:'审核',
	         	   		tooltip:'审核',
	         	   		iconCls:'ok_16',
	         	   		action:'submit'
	         	   } ,{
		                itemId: 'withdrawBtn',
		                text:'撤回',
		                tooltip:'撤回',
		                iconCls:'leftArrow',
		                action:'withdraw'
	         	   }
	         	   ,{
		                itemId: 'auditDetailBtn',
		                text:'审核记录',
		                tooltip:'审核记录',
		                iconCls:'detail_16',
		                action:'auditDetail'
	         	   }, {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						}, '->', '-', {
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
						}, '条'
				    ]},
    		 Ext.create('Ext.PagingToolbar', {
    		 	itemId:'toolbar',
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
