Ext.define('App.view.rs.XsdsgxDsxxList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.xsdsgxDsxxList',
	store : 'ViewRsDsxxStore',
	columnLines : true,
	title : '导师信息',
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
			gh: '导师工号',
			xm: '导师姓名',
			xb: '性别',
			mz:'民族',
			zzmm:'政治面貌',
			zc: '职称',
			gzdw: '工作单位',
			szdwh: '所在单位号',
			szdw: '所在部门',
			dslbm: '导师类别',
			dslb: '导师类别',
			jslym: '教师来源码',
			jsly: '教师来源',
			dszt: '导师状态'
		};

		Ext.applyIf(me, {
		exportCols : exportCols,
		columns : [{text : exportCols['gh'],width : 60,dataIndex : 'gh',sortable : true}, 
				   {text : exportCols['xm'],width : 60,dataIndex : 'xm',sortable : true},
				   {text : exportCols['xb'],width : 40,dataIndex : 'xb',sortable : true, hidden:true},
				   {text : exportCols['mz'],width : 60,dataIndex : 'mz',sortable : true, hidden:true},
				   {text : exportCols['zzmm'],width : 80,dataIndex : 'zzmm',sortable : true, hidden:true},
				   {text : exportCols['gzdw'],width : 90,dataIndex : 'gzdw',sortable : true},
				   {text : exportCols['szdw'],width : 80,dataIndex : 'szdw',sortable : true, flex:1}, 
				   {text : exportCols['zc'],width : 60,dataIndex : 'zc',sortable : true},
				   {text : exportCols['dslb'],width : 80,dataIndex : 'dslb',sortable : true},
				   {text : exportCols['jsly'],width : 60,dataIndex : 'jsly',sortable : true}, 
				   {text : exportCols['dszt'],width : 60,dataIndex : 'dszt',sortable : true, hidden:true}
				 ],
		dockedItems : [
			Ext.create('App.view.main.GridToolbar', {
				itemId : 'gridtoolbar',
				dock : 'top',
	    	    items:[{
					itemId : 'detailBtn',
					text : '教师详情',
					tooltip : '教师详情',
					iconCls : 'detail_16',
					action : 'detail',
					listeners: {
						click: function(o, e, eOpts){
							var rec = getSelRec(o.up('gridpanel'));
							if (rec != undefined) {
								var gh = rec.data.gh;
								me.dsxxDetail(gh);
							}
						}
					}
				},'-', {
					itemId : 'addBtn',
					text : '确定',
					tooltip : '确定',
					iconCls : 'ok_16',
					action : 'add',
					listeners: {
						click: function(o, e, eOpts){
							var rec = getSelRec(o.up('gridpanel'));
							if (rec != undefined) {
								me.xsdsgxConfirm(rec);
							}
						}
					}
				}]
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
	},
	
	dsxxDetail: function(gh){
		var me = this;
		var searchParams = {searchMode: 'simple', search: {}};
    	searchParams.search['gh'] = "#= '" + gh + "'";
    	var store = Ext.StoreMgr.lookup('XsdsgxJgxxStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
    	store.load({
			callback: function(records, operation, success) {
				if(success){
					var rec = records[0];
					var dsxxWins = Ext.ComponentQuery.query('#dsxxDetailWin');
					if (dsxxWins.length > 0) {
						var win = dsxxWins[0];
						win.setTitle('导师详情');
						win.setIconCls('detail_16');
						win.show();
					} else {
						var win = new Ext.Window({
							itemId : 'dsxxDetailWin',
							title : '导师详情',
							iconCls : 'detail_16',
							layout : 'fit',
							width : 900,
							height : 600,
							closeAction : 'hide',
							resizable : false,
							shadow : true,
							modal : true,
							closable : true,
							animCollapse : true,
							autoShow : true,
							items : [
								Ext.create('App.view.rs.JgxxForm', {
									autoScroll : true,
									isAdd : false,// 测试
									imgUrl : 'jgxxgetImage.action',
									imgId : 'gh',
									postUrl : "jgxx"
								})
							],
							buttons : [{
								itemId : 'cancelBtn',
								text : '退出',
							    iconCls:'return_16',
								handler : function() {
									this.up('window').close();
								}
							}]
						});
					}
					
					var dsxxForm = win.down('form');
					dsxxForm.edit(rec);
					dsxxForm.loadForm(rec);
					var zjhm = dsxxForm.down('#zjhm');
					var zjhmValue = zjhm.getValue();
					zjhm.setValue(zjhmValue.replace(zjhmValue.substr(6,17),'************'))
					dsxxForm.down('#upImgBtn').hide();

					var textfields = dsxxForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			}
		});
	},
	
	xsdsgxConfirm:function(rec){
		var me = this;
		var win = me.up('window');
		var xh = win.down('#xh').getValue();
		var xm = win.down('#xm').getValue();
		var nj = win.down('#nj').getValue();
		var fymc = win.down('#fymc').getValue();
		var zymc = win.down('#zymc').getValue();
		var xwlb = win.down('#xwlb').getValue();
		var jylb = win.down('#jylb').getValue();
		var pycc = win.down('#pycc').getValue();
		var xslx = win.down('#xslx').getValue();
		
		var xsdsgxConfirmWin = new Ext.Window({
			itemId : 'xsdsgxConfirmWin',
			xtype: 'tabpanel',
			title : '信息确认',
			iconCls : 'add_16',
			width : 520,
			height : 525,
			constrainHeader : true,
//			layout : 'fit',
			closeAction : 'destroy',
			resizable : false,
			shadow : true,
			modal : true,
			closable : true,
			animCollapse : true,
//			autoScroll : true,
			autoShow : true,
			items : [
				Ext.create('App.view.rs.XsdsgxConfirmForm', {
					itemId : 'xsdsgxConfirmForm',
					fatherWin: win
				})
			],
			buttons : [{
				itemId : 'saveBtn',
				text : '保存',
				iconCls:'save_16',
				handler : function() {
					this.up('window').down('#xsdsgxConfirmForm')
							.submit();
				}
			}, {
				itemId : 'cancelBtn',
				text : '取消',
				 iconCls:'return_16',
				handler : function() {
					this.up('window').close();
				}
			}]
		});
		var xsdsgxConfirmForm = xsdsgxConfirmWin.down('#xsdsgxConfirmForm');
		xsdsgxConfirmForm.down('#xsxm').setValue(xm);
		xsdsgxConfirmForm.down('#xh').setValue(xh);
		xsdsgxConfirmForm.down('#nj').setValue(nj);
		xsdsgxConfirmForm.down('#fymc').setValue(fymc);
		xsdsgxConfirmForm.down('#zymc').setValue(zymc);
		xsdsgxConfirmForm.down('#xwlb').setValue(xwlb);
		xsdsgxConfirmForm.down('#jylb').setValue(jylb);
		xsdsgxConfirmForm.down('#pycc').setValue(pycc);
		xsdsgxConfirmForm.down('#xslx').setValue(xslx);
		xsdsgxConfirmForm.loadRecord(rec);
	}

});
