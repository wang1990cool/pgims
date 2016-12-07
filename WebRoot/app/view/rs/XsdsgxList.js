Ext.define('App.view.rs.XsdsgxList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.xsdsgxList',
	store : 'XsdsgxXsJcxxStore',
	columnLines : true,
	title : '学生信息',
	frame : true,
	layout:'auto',
	loadMask : true,
	viewConfig : {
		stripeRows : true
	},
	selModel : {
		selType : 'checkboxmodel'
	},

	initComponent : function() {
		var me = this;
		var exportCols = {
			xh: '学号',
			xm: '学生姓名',
			nj: '所在年级',
			yxsh:'分院号',
			fymc:'所在学院',
			zydm: '专业代码',
			zymc: '所在专业',
			pyccm: '培养层次码',
			jylbm: '教育类别码',
			xwlb: '学位类别',
			jylb: '教育类别',
			xwlbm: '学位类别',
			pycc: '培养层次',
			xslx: '学生类型',
			xslxm: '学生类型码',
			dsh: '导师工号',
			dsxm: '导师姓名'
		};

		Ext.applyIf(me, {
		exportCols : exportCols,
		columns : [ 
				   {text : exportCols['xm'],width : 80,dataIndex : 'xm',sortable : true},
				   {text : exportCols['xh'],width : 90,dataIndex : 'xh',sortable : true},
				   {text : exportCols['dsxm'],width : 85,dataIndex : 'dsxm',sortable : true,
				   	 renderer : function(value,cellmeta,record, rowIndex, columnIndex, store){
				   			if(value == undefined){
				   				var returnValue = "<span style='color:green;font-style:oblique'>未添加导师</span>";
				   				return returnValue;
				   			}else{
				   				return value;
				   			}
				   	   	}
				   }, 
				   {text : exportCols['dsh'],width : 90,dataIndex : 'dsh',sortable : true},
				   {text : exportCols['nj'],width : 60,dataIndex : 'nj',sortable : true},
				   {text : exportCols['fymc'],width : 200,dataIndex : 'fymc',sortable : true},
				   {text : exportCols['zymc'],width : 120,dataIndex : 'zymc',sortable : true},
				   {text : exportCols['xwlb'],width : 80,dataIndex : 'xwlb',sortable : true, hidden: true},
				   {text : exportCols['jylb'],width : 80,dataIndex : 'jylb',sortable : true, hidden: true}, 
				   {text : exportCols['pycc'],width : 80,dataIndex : 'pycc',sortable : true, hidden: true},
				   {text : exportCols['xslx'],width : 90,dataIndex : 'xslx',sortable : true,flex:1}
				 ],
		dockedItems : [
			Ext.create('App.view.main.GridToolbar', {
				itemId : 'gridtoolbar',
				dock : 'top',
	    	   items:[{
					itemId : 'detailBtn',
					text : '详情',
					tooltip : '详情',
					iconCls : 'detail_16',
					action : 'detail'
				},'-', {
					itemId : 'addBtn',
					text : '添加导师',
					tooltip : '添加导师',
					iconCls : 'add_16',
					action : 'add'
				}, '-', {
					itemId : 'editBtn',
					text : '修改导师',
					tooltip : '修改导师',
					iconCls : 'edit_16',
					action : 'edit'
				}, '-', '->', '-', {
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
				}, '条']
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
			})]
		});

		me.callParent(arguments);
	}

});
