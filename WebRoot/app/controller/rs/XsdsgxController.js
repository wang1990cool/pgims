Ext.define('App.controller.rs.XsdsgxController', {
	extend : 'Ext.app.Controller',

	models : ['pygrjh.ViewXsJcxxModel', 'rs.ViewRsDsxxModel','rs.JgxxModel', 'xs.XsJcxxbModel'],
	stores : ['rs.XsdsgxXsJcxxStore', 'rs.ViewRsDsxxStore','rs.XsdsgxJgxxStore', 'rs.XsdsgxXsGrxxStore',
			/*'zd.ViewXxDwxxStore',*/ 'zd.ZdDslbmStore','zd.ZdXbmStore','zd.ZdMzmStore',
			'zd.ZdZzmmmStore','zd.ZdSfzjlxmStore','zd.ZdXlmStore','zd.ZdXwmStore',
			'zd.ZdDslbmStore','zd.ZdDsztmStore'],

	refs : [{
				selector : 'xsdsgxList > xsdsgxSearchForm',
				ref : 'xsdsgxSearchForm'
			}],

	init : function() {
		this.control({
			'xsdsgxList gridtoolbar combo[itemId=numCmb]' : {
				render : this.initPageSize,
				select : this.setPageSize
			},

			'xsdsgxList gridtoolbar button[action=toExcel]' : {
				render : this.excelBtnRender
			},
			'xsdsgxList gridtoolbar button[itemId=schShowBtn]' : {
				render : this.setSchShowText
			},
			'xsdsgxList gridtoolbar button[action=showSearch]' : {
				click : this.showSearch
			},
			'xsdsgxList gridtoolbar button[action=add]' : {
				click : this.addXsdsgx
			},
			'xsdsgxList gridtoolbar button[action=edit]' : {
				click : this.editXsdsgx
			},
			'xsdsgxList button[action=detail]' : {
				click : this.detailXsdsgx
			},
			'xsdsgxList' : {
				itemdblclick : function(o, record, item, index,
						e, eOpts) {
					var detailBtn = o.up('grid')
							.down('#detailBtn');
					if (!detailBtn.disabled
							&& !detailBtn.hidden)
						detailBtn.fireEvent('click', detailBtn);
				}
			},
			'xsdsgxSearchForm button[action=search]' : {
				click : this.search
			},
			'xsdsgxSearchForm button[action=searchAll]' : {
				click : this.searchAll
			},
			'xsdsgxSearchForm button[action=advacedSearch]' : {
				click : this.advacedSearch
			}
		});
	},

	getCenter : function() {
		return this.application.getController('main.MainController')
				.getCenter();
	},

	initStore : function() {
		var me = this;
		if(roleCode == 'Academy'){//各学院角色只能查看本学院学生信息
			var searchParams = {searchMode : 'simple',search : {}};
			var store = me.getStore('XsdsgxXsJcxxStore');
			searchParams.search['yxsh'] = "#= '" + szdwh + "'";
			var proxy = store.getProxy();
			proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
			store.load();
		}else{//其他角色可以查看所有学生信息
			var store = me.getStore('XsdsgxXsJcxxStore'), proxy = store.getProxy();
			proxy.setExtraParam('params', '');
			store.load();
		}
	},
	
	viewXxDwxxLoad: function(){
		Ext.create('Ext.data.Store',{
		   	autoLoad: true,
		   	storeId: 'ViewXxDwxxStore',
		   	fields: [{name : 'dwh'},
		   	         {name : "dwmc"}],
		   	proxy: {
		   		type: 'ajax',
		   		url: 'zdGetZD.action',
		   		actionMethods : 'post',
		   		reader: {
		   			root: 'result.list',
		   			totalProperty: 'totalProperty'
		   		},
		   		extraParams: {zdName:'ViewXxDwxx'},
		   		simpleSortMode : true
		   	},
		   	listeners:{    
		        load : function(store, records, options ){    
		            var data ={dwh:'',dwmc:''};    
		            store.insert(0,data); 
		        }    
	  	    },
		   	sorters : [{
		   		property : 'dwh',
		   		direction : 'ASC'
		   	}]
		})
	},
	
	xsdsgxDsxxLoad: function(){
		var me = this;
		var store = me.getStore('ViewRsDsxxStore'), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},

	onLaunch : function(record) {
		var me = this;
		me.initStore();
		me.viewXxDwxxLoad();

		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));

		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		Ext.Ajax.request({
            url: 'xzqhm.action',
            method: 'post',
            autosync: true,
            params:{dicTabName:'ZD_XZQHM'},
            scope: this,
            success: function (response) {
                var responseMessage = Ext.JSON.decode(response.responseText);
                var data = responseMessage.result.list[0].children;
                var treeStore = Ext.create('Ext.data.TreeStore', {
				    storeId: 'ZdXzqhmStore',
				    proxy: {
				        type: 'memory',
				        data:data,
				        reader: {
				            type: 'json'
				        }
				    },
				    root:{expanded: true}
				});
                if (responseMessage.success) 
					this.store = treeStore;
                else
                    Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
            },
            failure: function (response) {
            	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
            }
        })

		var contentPanel = Ext.create('App.view.rs.XsdsgxContentPanel',
				{
					itemId : 'content',
					parentId : record.get('id'),
					autoScroll : true
				});

		tab.add(contentPanel);
		center.setActiveTab(tab);
		contentPanel.down('#xsdsgxSearchForm').fymcSet();//学院用户登录情况下无法信息学院的选择
	},

	excelBtnRender : function(o, e, eOpts) {
		o.actionUrl = 'xsdsgxtoExcel.action'
	},

	setSchShowText : function(o, eOpts) {
		var me = this;
		var searchForm = me.getCenter().down('#xsdsgxSearchForm');
		if (searchForm)
			if (!searchForm.hidden) {
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
			} else {
				o.setText('显示查询');
				o.setTooltip('显示查询');
			}
	},
	showSearch : function(o, e, eOpts) {
		var me = this;
		var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#xsdsgxSearchForm');
		if (searchForm) {
			if (searchForm.hidden) {
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
				searchForm.show();
			} else {
				o.setText('显示查询');
				o.setTooltip('显示查询');
				searchForm.hide();
			}
		}
	},

	initPageSize : function(o, e, eOpts) {
		o.setValue(pSize);
	},

	setPageSize : function(o, e, eOpts) {
		var pGrid = o.up('gridpanel');
		pSize = o.getValue();
		pGrid.store.pageSize = pSize;
		pGrid.store.load({callback:function(){
				var toolbar = pGrid.down('#toolbar');
				toolbar.moveFirst()
		}});
	},

	addXsdsgx : function(o, e, eOpts) {
		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var dsh = rec.data.dsh;
			if(dsh){
				Ext.MessageBox.show({
		   			title: '提示',
		   			msg: '该学生已添加导师！',
		   			buttons: Ext.MessageBox.OK,
		  			icon: Ext.MessageBox.WARNING
	        	});
			}else{
				me.xsdsgxDsxxLoad();
				me.add_editXsdsgx(rec);
			}
			
			/*var xh = rec.data.xh;
			var xm = rec.data.xm;
			var nj = rec.data.nj;
			var fymc = rec.data.fymc;
			var zymc = rec.data.zymc;
			var xwlb = rec.data.xwlb;
			var jylb = rec.data.jylb;
			var pycc = rec.data.pycc;
			var xslx = rec.data.xslx;
			var xsdsgxDsxxWin = new Ext.Window({
				itemId : 'xsdsgxDsxxWin',
				xtype: 'tabpanel',
				title : '导师选择',
				iconCls : 'add_16',
				width : 625,
				height : 555,
				constrainHeader : true,
				closeAction : 'destroy',
				resizable : false,
				shadow : true,
				modal : true,
				closable : true,
				animCollapse : true,
				autoShow : true,
				items : [
					{ xtype: 'hiddenfield', value:xh ,itemId:'xh' },
					{ xtype: 'hiddenfield', value:xm ,itemId:'xm' },
					{ xtype: 'hiddenfield', value:nj ,itemId:'nj' },
					{ xtype: 'hiddenfield', value:fymc ,itemId:'fymc' },
					{ xtype: 'hiddenfield', value:zymc ,itemId:'zymc' },
					{ xtype: 'hiddenfield', value:xwlb ,itemId:'xwlb' },
					{ xtype: 'hiddenfield', value:jylb ,itemId:'jylb' },
					{ xtype: 'hiddenfield', value:pycc ,itemId:'pycc' },
					{ xtype: 'hiddenfield', value:xslx ,itemId:'xslx' },
					{
						region : 'west',
						items : [
							Ext.create('App.view.rs.XsdsgxDsxxSearchForm', {
								itemId : 'xsdsgxDsxxSearchForm'
							})
						]
					},{
	                    region: 'center',
	                    items: [
	                    	Ext.create('App.view.rs.XsdsgxDsxxList',{
								itemId:'xsdsgxDsxxList'
							})
	                    ]
					}
				]
			});*/
		}
	},
	
	editXsdsgx: function(o, e, eOpts){
		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var dsh = rec.data.dsh;
			if(dsh){
				me.xsdsgxDsxxLoad();
				me.add_editXsdsgx(rec);
			}else{
				Ext.MessageBox.show({
		   			title: '提示',
		   			msg: '该学生未添加导师，请先添加导师！',
		   			buttons: Ext.MessageBox.OK,
		  			icon: Ext.MessageBox.WARNING
	        	});
			}
		}
	},
	
	add_editXsdsgx: function(rec){
		var xh = rec.data.xh;
		var xm = rec.data.xm;
		var nj = rec.data.nj;
		var fymc = rec.data.fymc;
		var zymc = rec.data.zymc;
		var xwlb = rec.data.xwlb;
		var jylb = rec.data.jylb;
		var pycc = rec.data.pycc;
		var xslx = rec.data.xslx;
		var xsdsgxDsxxWin = new Ext.Window({
			itemId : 'xsdsgxDsxxWin',
			xtype: 'tabpanel',
			title : '导师选择',
			iconCls : 'add_16',
			width : 625,
			height : 555,
			constrainHeader : true,
			closeAction : 'destroy',
			resizable : false,
			shadow : true,
			modal : true,
			closable : true,
			animCollapse : true,
			autoShow : true,
			items : [
				{ xtype: 'hiddenfield', value:xh ,itemId:'xh' },
				{ xtype: 'hiddenfield', value:xm ,itemId:'xm' },
				{ xtype: 'hiddenfield', value:nj ,itemId:'nj' },
				{ xtype: 'hiddenfield', value:fymc ,itemId:'fymc' },
				{ xtype: 'hiddenfield', value:zymc ,itemId:'zymc' },
				{ xtype: 'hiddenfield', value:xwlb ,itemId:'xwlb' },
				{ xtype: 'hiddenfield', value:jylb ,itemId:'jylb' },
				{ xtype: 'hiddenfield', value:pycc ,itemId:'pycc' },
				{ xtype: 'hiddenfield', value:xslx ,itemId:'xslx' },
				{
					region : 'west',
					items : [
						Ext.create('App.view.rs.XsdsgxDsxxSearchForm', {
							itemId : 'xsdsgxDsxxSearchForm'
						})
					]
				},{
                    region: 'center',
                    items: [
                    	Ext.create('App.view.rs.XsdsgxDsxxList',{
							itemId:'xsdsgxDsxxList'
						})
                    ]
				}
			]
		});
	},
	
	detailXsdsgx : function(o, e, eOpts) {
		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var xh = rec.data.xh;
			var gh = rec.data.dsh;
			
			var searchParams = {searchMode : 'simple',search : {}};
			var store = me.getStore('XsdsgxXsGrxxStore');
			searchParams.search['xh'] = "#= '" + xh + "'";
			var proxy = store.getProxy();
			proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
			store.load({
				callback: function(records, operation, success) {
					var rec1 = records[0];
					if(success){
						if(gh){
							me.xsDsDetail(rec1, gh);
						}else{
							me.xsDetail(rec1);
						}
					}
				}
			});
			
		}
	},
	
	xsDetail: function(rec1){
		var xsDetailWins = Ext.ComponentQuery.query('#xsDetailWin1');
		if (xsDetailWins.length > 0) {
			var win = xsDetailWins[0];
			win.setTitle('学生详情');
			win.setIconCls('edit_16');
			win.show();
		} else {
			var win = new Ext.Window({
				itemId : 'xsDetailWin1',
                title : '学生信息',
				iconCls : 'detail_16',
//        		layout:'fit',
				width : 900,
				height : 600,
				closeAction : 'hide',
				resizable : false,
				shadow : true,
				modal : true,
				closable : true,
				animCollapse : true,
				autoShow : true,
    			constrainHeader:true,
    			 autoScroll:true,
                items: [
                	Ext.create('App.view.xs.XsxxPersonalForm',{
	                    itemId:'xsDetailForm',
	                    layout:'form',
	                    showType:'panel',
	                    bodyStyle:'padding:5',
	                    isAdd: false,
	                    imgUrl:'xsJcxxbgetImage.action',
	        	        imgId:'xh',
	        	        postUrl:"xsJcxxb",
//                      autoScroll:true,
	                    readOnly:true
	                    
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
		var xsDetail = win.down('form');
		xsDetail.edit(rec1);
		xsDetail.loadRecord(rec1);
		var textfields = xsDetail.query('textfield');
		for (var i in textfields) {
			textfields[i].setReadOnly(true);
			var style = "background:none; border : 0px;";
			textfields[i].setFieldStyle(style);
		}
	},
	
	xsDsDetail: function(rec1, gh){
		var me= this;
		var searchParams = {searchMode : 'simple',search : {}};
		var store = me.getStore('XsdsgxJgxxStore');
		searchParams.search['gh'] = "#= '" + gh + "'";
		var proxy = store.getProxy();
		proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
		store.load({
			callback: function(records, operation, success) {
				var rec2 = records[0];
				if(success){
					var xsDsDetailWins = Ext.ComponentQuery.query('#xsDsDetailWin1');
					if (xsDsDetailWins.length > 0) {
						var win = xsDsDetailWins[0];
						win.setTitle('详细信息');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
							itemId : 'xsDsDetailWin1',
			                title : '详细信息',
							iconCls : 'detail_16',
			//        		layout:'fit',
							width : 900,
							height : 600,
							closeAction : 'hide',
							resizable : false,
							shadow : true,
							modal : true,
							closable : true,
							animCollapse : true,
							autoShow : true,
			    			constrainHeader:true,
			    			autoScroll:true,
			                items: [{
			                	region: 'center',
			                	xtype: 'tabpanel',
			                	items:[{
			                		title:'学生详情',
			                		autoScroll: true,
			                		items:[
			                			Ext.create('App.view.xs.XsxxPersonalForm',{
						                    itemId:'xsDetailForm',
						                    layout:'form',
						                    showType:'panel',
						                    bodyStyle:'padding:5',
						                    isAdd: false,
						                    imgUrl:'xsJcxxbgetImage.action',
						        	        imgId:'xh',
						        	        postUrl:"xsJcxxb",
//					                        autoScroll:true,
						                    readOnly:true
						                })
			                		]
			                	},{
			                		title:'导师详情',
			                		autoScroll: true,
			                		items:[
			                			Ext.create('App.view.rs.JgxxForm', {
			                				itemId:'dsDetailForm',
											isAdd : false,// 测试
											imgUrl : 'jgxxgetImage.action',
											imgId : 'gh',
											postUrl : "jgxx"
										})
			                		]
			                	}]
			                }],
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
					var xsDetailForm = win.down('#xsDetailForm');
					xsDetailForm.edit(rec1);
					xsDetailForm.loadRecord(rec1);
					var textfields = xsDetailForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
					
					var dsDetailForm = win.down('#dsDetailForm');
					dsDetailForm.edit(rec2);
					dsDetailForm.loadForm(rec2);
					var zjhm = dsDetailForm.down('#zjhm');
					var zjhmValue = zjhm.getValue();
					zjhm.setValue(zjhmValue.replace(zjhmValue.substr(6,17),'************'))
					dsDetailForm.down('#upImgBtn').hide();
					var textfields = dsDetailForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			}
		})
	},

	search : function(o, e, eOpts) {
		var me = this;
		var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#xsdsgxSearchForm');

		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};

		var pGrid = tab.down('#xsdsgxList'), store = me
				.getStore('XsdsgxXsJcxxStore');/* store = pGrid.getStore(); */
		for (var col in pGrid.exportCols) {
			searchParams.fieldNames.push(col);
		}

		var tFields = searchForm.query('textfield(true)');
		for (var i in tFields) {
			if (tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%"
						+ tFields[i].value + "%'";
		}
		
		var xslxValue = searchForm.down('#xslx').getValue();
		if (xslxValue) {
			searchParams.search['xslxm'] = "#= '" + xslxValue + "'";
		}
		var fymcValue = searchForm.down('#fymc').getValue();
		if (fymcValue) {
			searchParams.search['yxsh'] = "#= '" + fymcValue + "'";
		}
		var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue) {
			searchParams.search['zydm'] = "#= '" + zymcValue + "'";
		}

		var proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		}});
	},

	searchAll : function(o, e, eOpts) {
		
		
		var me = this;
		var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#xsdsgxSearchForm');
		var pGrid = tab.down('#xsdsgxList'), store = me.getStore('XsdsgxXsJcxxStore');
		var proxy = store.getProxy();
		if(roleCode == 'Academy'){//各学院角色只能查看本学院学生信息
			var searchParams = {searchMode : 'simple',search : {}};
			searchParams.search['yxsh'] = "#= '" + szdwh + "'";
			proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
			searchForm.formReset();
			store.load();
		}else{//其他角色可以查看所有学生信息
			proxy.setExtraParam('params', '');
			store.load();
			searchForm.getForm().reset();
		}
	},

	advacedSearch : function(o, e, eOpts) {

	}
});
