Ext.define('App.view.main.GridToolbar', {
			extend : 'Ext.toolbar.Toolbar',
			alias : 'widget.gridtoolbar',

			insertBtns : [],

			initComponent : function() {
				var me = this;

				var pFixedBtnArray = [{
							itemId : 'detailBtn',
							text : '详情',
							tooltip : '详情',
							iconCls : 'detail_16',
							action : 'detail'
						},'-', {
							itemId : 'addBtn',
							text : '增加',
							tooltip : '增加',
							iconCls : 'add_16',
							action : 'add'
						}, '-', {
							itemId : 'editBtn',
							text : '修改',
							tooltip : '修改',
							iconCls : 'edit_16',
							action : 'edit'
						}, '-', {
							itemId : 'deleteBtn',
							text : '删除',
							tooltip : '删除',
							iconCls : 'delete_16',
							action : 'delete'
						}];

				var tFixedBtnArray = ['-', {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
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
						}, '条'];

				var toolbarBtns = pFixedBtnArray.concat(me.insertBtns
						.concat(tFixedBtnArray));

				Ext.applyIf(me, {
							items : toolbarBtns
						});

				me.callParent(arguments);
			}
		});
