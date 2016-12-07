Ext.define('App.controller.zqkh.ZqkhController', {
			extend : 'Ext.app.Controller',

			models : ['zqkh.ViewXwZqkhModel','zqkh.XwZqkhbModel','zqkh.XwZqkhzlbModel','xs.XsJcxxbModel','main.PageModel'],
			stores : ['zd.ZdFwqbStore','zqkh.ViewXwZqkhStore','zqkh.XwZqkhbStore','xs.XsJcxxbStore','zqkh.XwZqkhzlbStore','zd.ZdKhdjbStore','zd.ZdShztmStore','main.PageStore'],

			refs : [{
						selector : 'zqkhList > zqkhSearchForm',
						ref : 'zqkhSearchForm'
					}],

	init : function() {
				this.control({
				'zqkhList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  'zqkhList button[itemId=schShowBtn]' : {
						render : this.setSchShowText
				   },
				   'zqkhList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'zqkhList button[action=detail]':{
						click:this.detail
					},
					'zqkhList button[action=audit]':{
						click:this.auditSave
					},
					
					'zqkhList button[action=withdraw]':{
						click:this.withdrawKkjh
					},
					'zqkhList button[action=edit]':{
						click:this.edit
					},
					
					'zqkhSearchForm button[action=search]' : {
						click : this.search
					},
					
					'zqkhSearchForm button[action=searchAll]' : {
						click : this.searchAll
					},
					
					'zqkhshForm button[action=preview]' : {
						click : this.previewZl
					}
				})
			},
			
//			flowCode:'Zqkh',
	initPageSize: function(o, e, eOpts){
		    	o.setValue(pSize);
		    },

	setPageSize: function(o, e, eOpts){
		    	var pGrid = o.up('gridpanel');
		        pSize = o.getValue();
		        pGrid.store.pageSize = pSize;
		        pGrid.store.load({callback:function(){
							var toolbar = pGrid.down('#toolbar');
							toolbar.moveFirst()
				}});
		    },
			
	setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#searchForm');
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
				var searchForm = tab.down('#searchForm');
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

		  
	 search: function( o, e, eOpts){
    	var me = this;
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		var searchParams = {
				start:0, 
				limit:15, 
				page: 1, 
				searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		var pGrid = tab.down('#zqkhList'), store = pGrid.getStore();
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
			
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
		}
		var njValue = searchForm.down('#sznj').getRawValue();
		if (njValue)
	 		searchParams.search['nj'] = "#= '" + njValue+ "'";
	 		
//	 	var xnValue = searchForm.down('#xn').getRawValue();
//		if (xnValue)
//	 		searchParams.search['xn'] = "#= '" + xnValue+ "'";
	 		
//	 	var xqValue = searchForm.down('#xq').getRawValue();
//		if (xqValue)
//	 		searchParams.search['xq'] = "#= '" + xqValue+ "'";
	 		
		 var fymcValue = searchForm.down('#fymc').getRawValue();
		if (fymcValue)
		      searchParams.search['fymc'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue)
		      searchParams.search['zydm'] = "#= '" + zymcValue+ "'";
		       
		var xslxValue = searchForm.down('#xslx').getRawValue();
		if (xslxValue)
	 		searchParams.search['xslx'] = "#= '" + xslxValue+ "'";
	 		
	 	var shztValue = searchForm.down('#shzt').getRawValue();
		if (shztValue)
	 		searchParams.search['shzt'] = "#= '" + shztValue+ "'";

		
		var proxy= store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		}});
    },

    searchAll : function(o, e, eOpts) {
		var me = this;
		var tab = me.getCenter().getActiveTab();
		
		var searchForm = tab.down('#searchForm');
		var pGrid = tab.down('#zqkhList');
		searchForm.getForm().reset();

		var store = me.getStore('ViewXwZqkhStore', {});
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		searchParams.search['shztm'] = "#in (" + "\'TG\'" + ',' + "\'DSH\'"
				+ ")";
		searchParams.search['yxsh'] = "#= '" + szdwh + "'";
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
		
//		var store = pGrid.getStore(), proxy = store.getProxy();
//		proxy.setExtraParam('params', '');
//		store.load();
	},
    
			
	 detail: function( o, e, eOpts ){
		    	var rec = getSelRec(o.up('gridpanel'));
		    	if(rec != undefined){
		        	var win = new Ext.Window({
		        		itemId:'zqkhDetailWin',
		        		iconCls:'detail_16',
		        		autoShow: true,
		        		title:'详情',
		                layout: 'fit',
		                constrainHeader : true,
		                x:300,
		                y:3,
		                 constrain :true,
		                width: 780,
		                height: 600,
		                closeAction:'destroy',
		        		resizable:false,
		        		shadow:true,
		        		modal:true,
		        		closable:true,
		        		animCollapse:true,
		        		autoShow:true,
		                items: [Ext.create('App.view.zqkh.ZqkhDetail')]
		            });
		        	var zqkhDetail = win.down('form');
		        	zqkhDetail.loadForm(rec)
		        	 var  rq = rec.data.khrq;
		          	 var year = rq.substring(0,4);
			      	 var month = rq.substring(4,6);
			      	 var day = rq.substring(6,8);
			      	 khrq = year+ "-" +month+ "-" +day;
		 	      	 zqkhDetail.down('#khrq').setValue(khrq);
		 	      	 
		 	      	 if(rec.data.shsj){
			 	      	 var  shsj = rec.data.shsj;
			 	      	 var yearsj = shsj.substring(0,10);
			 	      	 var monthsj = shsj.substring(11,19);
			 	      	 shsj = yearsj+ " " +monthsj;
			 	      	 zqkhDetail.down('#shsj').setValue(shsj);
			 	     }
		 	      	 
		    		var textfields =  zqkhDetail.query('textfield');
		    		for(var i in textfields){
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
				    textfields[i].setFieldStyle(style);
					}
		    	var me = this;
		    	var xh = rec.data.xh
				var xwZqkhzlbStore = me.getStore('XwZqkhzlbStore');
				var xwZqkhzlbProxy = xwZqkhzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['xh'] = "#= '" + xh + "'";
				xwZqkhzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwZqkhzlbStore.load({
					callback : function(records, operation, success) {
						var tab = me.getCenter().getActiveTab();
						var zqkhshForm = tab.down('#zqkhshForm');
						if (records[0] != undefined && zqkhshForm != null )
							zqkhshForm.loadForm(records[0]);
					}
				})
		    	}
		    },
		    
    
     auditSave: function( o, e, eOpts ){
		    	var rec = getSelRec(o.up('gridpanel'));
		    	if(rec.data.shzt == '审核通过'){
		    	 Ext.MessageBox.alert('提示', '审核已通过！');
		    	}else if(rec.data.shzt == '草稿状态'||rec.data.shzt == null||rec.data.shztm == null)
		    	{Ext.MessageBox.alert('提示', '该报告未提交，不能进行审核操作！');}
		    	else if(rec != undefined){
		        	var win = new Ext.Window({
		        		itemId:'zqkhWin',
		        		iconCls:'detail_16',
		        		autoShow: true,
		        		title:'审核信息',
		                layout: 'fit',
		                x:300,
		                y:3,
		                width: 780,
		                height: 600,
		                closeAction:'destroy',
		        		resizable:false,
		        		shadow:true,
		        		modal:true,
		        		closable:true,
		        		animCollapse:true,
		        		autoShow:true,
		                items: [Ext.create('App.view.zqkh.ZqkhShForm')]
		            });
		        	var zqkhshForm = win.down('form');
		        	zqkhshForm.loadForm(rec)

                               var zt = '审核通过';
		               var  rq = rec.data.khrq;
		               var year = rq.substring(0,4);
			       var month = rq.substring(4,6);
			       var day = rq.substring(6,8);
			       khrq = year+ "-" +month+ "-" +day;
		 	       zqkhshForm.down('#khrq').setValue(khrq);
		 	       
		 	       shrgh = userName;
		 	       zqkhshForm.down('#shrgh').setValue(shrgh);
		 	       shr = userCName;
		 	       zqkhshForm.down('#shr').setValue(shr);
		 	       shsj = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
		 	       zqkhshForm.down('#shsj').setValue(shsj);
                               zqkhshForm.down('#shzt').setValue(zt);
		 	       
		        	var me = this;
		    		var textfields =  zqkhshForm.query('textfield');
		    		for(var i in textfields){
		    			if(textfields[i].itemId == 'xn'|| textfields[i].itemId == 'xq' || 
//		    			textfields[i].itemId == 'lwtm' || textfields[i].itemId == 'khrq' ||
//		    			textfields[i].itemId == 'jczz' || textfields[i].itemId == 'dlxz' ||
		    			textfields[i].itemId == 'shr' || textfields[i].itemId == 'shsj' 
//		    			textfields[i].itemId == 'xzkhdj' || textfields[i].itemId == 'xykhdj' ||
//		    			textfields[i].itemId == 'dskhdj' 

		    			)
		    			{
							textfields[i].setReadOnly(true);
							var style = "background:none; border:0px";
						    textfields[i].setFieldStyle(style);
		    			}
					}
					
//				var me = this;
				var xh = rec.data.xh
				var xwZqkhzlbStore = me.getStore('XwZqkhzlbStore');
				var xwZqkhzlbProxy = xwZqkhzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['xh'] = "#= '" + xh + "'";
				xwZqkhzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwZqkhzlbStore.load({
					callback : function(records, operation, success) {
						var tab = me.getCenter().getActiveTab();
						var zqkhshForm = tab.down('#zqkhshForm');
						if (records[0] != undefined && zqkhshForm != null )
							zqkhshForm.loadForm(records[0]);
					}
				})

		    	}
		     },
		     
		     
		edit: function( o, e, eOpts ){
		    	var rec = getSelRec(o.up('gridpanel'));
		    	if(rec.data.shzt == '审核通过'){
		    	 Ext.MessageBox.alert('提示', '审核已通过，无法修改！');
		    	}else if(rec.data.shzt == '草稿状态'){
		    	 Ext.MessageBox.alert('提示', '草稿状态，未提交，无法修改！');
		    	}else if(rec != undefined){
		        	var win = new Ext.Window({
		        		itemId:'zqkhdjWin',
		        		iconCls:'edit_16',
		        		autoShow: true,
		        		title:'等级成绩信息',
		                layout: 'fit',
		                x:300,
		                y:200,
		                width: 750,
		                height: 450,
		                closeAction:'destroy',
		        		resizable:false,
		        		shadow:true,
		        		modal:true,
		        		closable:true,
		        		animCollapse:true,
		        		autoShow:true,
		                items: [Ext.create('App.view.zqkh.ZqkhDjForm')]
		            });
		            
		        	var zqkhdjForm = win.down('form');
		        	zqkhdjForm.loadForm(rec)
		            
		    		var textfields =  zqkhdjForm.query('textfield');
		    		for(var i in textfields){
		    			
							textfields[i].setReadOnly(false);
							var style = "border: 1px solid rgb(170, 170, 230);";
						    textfields[i].setFieldStyle(style);
		    			
					}
		    	}
		     },
		     
	 previewZl:function(o,e,eOpts){
			var me = this;
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if(recs.length == 0){
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
				var zlwjdz = recs[0].get('zlwjdz');
					alert(zlwjdz)
		   	    window.open(zlwjdz)
			}
		},
		     
	getCenter : function() {
			return this.application.getController('main.MainController').getCenter();
	 },

	initStore : function() {
			var me = this;
			var searchParams = {
				start : 0,
				limit : 15,
				page : 1,
				searchMode : 'simple',
				fieldNames : [],
				order : '',
				search : {}
			};
			var store = me.getStore('ViewXwZqkhStore',{});
			searchParams.search['shztm'] = "#in (" + "\'TG\'" +',' +  "\'DSH\'" + ")";
			searchParams.search['yxsh'] = "#= '" + szdwh + "'";
			proxy = store.getProxy();
//				proxy.setExtraParam('params', '');
			proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			store.load();
			
			var store = me.getStore('ZdFwqbStore'), proxy = store.getProxy();
    		proxy.setExtraParam('params', '');
    		store.load();
			
		},

withdrawKkjh : function(o, e, eOpts) {
		//			if(!isSuperRight){
		var rec = getSelRec(o.up('gridpanel'));
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
			if (rec.data.shztm == 'CG' || rec.data.shztm == 'DSH') {
				Ext.MessageBox.alert('提示', '草稿或待审状态！无法撤回');
			} else if (rec.data.shztm == 'TG') {
				var xh = rec.data.xh;
				var shztm = 'DSH';
				var shzt = encodeURI(encodeURI("待审状态"));
				var shyj = encodeURI(encodeURI(""));
				var shr = encodeURI(encodeURI(""));
				var shrgh = encodeURI(encodeURI(""));
				var dskhdjm = '';
				var xzkhdjm = '';
				var xykhdjm = '';
				var dskhdj = encodeURI(encodeURI(""));
				var xzkhdj = encodeURI(encodeURI(""));
				var xykhdj = encodeURI(encodeURI(""));
//				var shsj = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'zqkhUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&shyj=' + shyj + '&shr=' + shr+ '&shrgh=' + shrgh+ '&dskhdjm=' + dskhdjm
									+ '&xzkhdjm=' + xzkhdjm+ '&xykhdjm=' + xykhdjm
									+ '&dskhdj=' + dskhdj+ '&xzkhdj=' + xzkhdj+ '&xykhdj=' + xykhdj,
							method : 'post',
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if (success) {
									var msg = "撤回成功！";
									Ext.MessageBox.show({
												title : '提示',
												msg : msg,
												buttons : Ext.MessageBox.OK,
												icon : Ext.MessageBox.INFO,
												fn : function(id, msg) {
													Ext.StoreMgr
															.lookup('ViewXwZqkhStore')
															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#zqkhList');
										if (viewXwKtbgsqLists.length > 0) {
											var viewXwKtbgsqList = viewXwKtbgsqLists[0];
											var store = viewXwKtbgsqList.getStore();
											store.load();
										}
								}
							},
							failure : function(form, action) {
								var errmsg = "撤回失败！";
								Ext.MessageBox.show({
											title : '错误',
											msg : errmsg,
											buttons : Ext.MessageBox.OK,
											icon : Ext.MessageBox.ERROR,
											fn : function(id, msg) {
											}
										});
							}
						})
			}else if (rec.data.shztm == 'WTG') {
				var xh = rec.data.xh;
				var shztm = 'DSH';
				var shzt = encodeURI(encodeURI("待审状态"));
				var shyj = encodeURI(encodeURI(""));
				var shr = encodeURI(encodeURI(""));
				var shrgh = encodeURI(encodeURI(""));
				var dskhdjm = '';
				var xzkhdjm = '';
				var xykhdjm = '';
				var dskhdj = encodeURI(encodeURI(""));
				var xzkhdj = encodeURI(encodeURI(""));
				var xykhdj = encodeURI(encodeURI(""));
//				var shsj = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'zqkhUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&shyj=' + shyj + '&shr=' + shr+ '&shrgh=' + shrgh+ '&dskhdjm=' + dskhdjm
									+ '&xzkhdjm=' + xzkhdjm+ '&xykhdjm=' + xykhdjm
									+ '&dskhdj=' + dskhdj+ '&xzkhdj=' + xzkhdj+ '&xykhdj=' + xykhdj,
							method : 'post',
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if (success) {
									var msg = "撤回成功！";
									Ext.MessageBox.show({
												title : '提示',
												msg : msg,
												buttons : Ext.MessageBox.OK,
												icon : Ext.MessageBox.INFO,
												fn : function(id, msg) {
													Ext.StoreMgr
															.lookup('ViewXwZqkhStore')
															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#zqkhList');
										if (viewXwKtbgsqLists.length > 0) {
											var viewXwKtbgsqList = viewXwKtbgsqLists[0];
											var store = viewXwKtbgsqList.getStore();
											store.load();
										}
								}
							},
							failure : function(form, action) {
								var errmsg = "撤回失败！";
								Ext.MessageBox.show({
											title : '错误',
											msg : errmsg,
											buttons : Ext.MessageBox.OK,
											icon : Ext.MessageBox.ERROR,
											fn : function(id, msg) {
											}
										});
							}
						})
			}
		}
	},	
	onLaunch : function(record) {
			var me = this;
			me.initStore();
			var center = me.getCenter();
			var tab = center.down('#M' + record.get('parentId'));
			var removePanel = tab.down('#content');
			tab.remove(removePanel);
			var contentPanel = Ext.create('App.view.zqkh.ZqkhContentPanel',
					{
						itemId : 'content',
						parentId : record.get('id')
					});

			tab.add(contentPanel);
			center.setActiveTab(tab);
		}
		})