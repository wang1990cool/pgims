Ext.define('App.controller.system.JGXXController',{
	extend:'Ext.app.Controller',
	
	models : ['rs.JgxxModel'],
	stores : ['rs.JgxxAllStore','zd.ZdXzqhmStore','zd.ZdXbmStore',
			          'zd.ZdMzmStore','zd.ZdZzmmmStore','zd.ZdXlmStore',
			          'zd.ZdXwmStore','zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore'],
	
	init:function(){
		this.control({
				'jgxxSkxxDialog button[action=search]':{
					click:this.search
				},
				'jgxxSkxxDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'jgxxSkxxDialog  button[action=detail]':{
					click:this.detailJs
				},
				'jgxxSkxxDialog  button[action=ok]':{
					click:this.addJs
				}
			});
	},
			search:function(o, e, eOpts){
					var dialog = o.up('#jgxxDialog');
					var searchForm = dialog.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = dialog.down('#jgxxList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value )+ "%'";
					}
					var szdwValue = searchForm.down('#szdw').getValue();
					if(szdwValue){
						searchParams.search['szdwh']="#= '" + szdwValue + "'";
					}
					var xbValue = searchForm.down('#xb').getValue();
					if(xbValue){
						searchParams.search['xbm']="#= '" + xbValue + "'";
					}
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
			},
			
			searchAll:function(o, e, eOpts){
				var dialog = o.up('#jgxxDialog');
				var searchForm = dialog.down('#searchForm');
            	var pGrid = dialog.down('#jgxxList');
            	searchForm.getForm().reset();
            	
            	var store = pGrid.getStore(), proxy = store.getProxy();
            	proxy.setExtraParam('params', '');
            	store.load();
			},
			 
          addJs:function( o, e, eOpts ){
          	 	var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
          		
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else{
					var forms = Ext.ComponentQuery.query('#userForm');
				    var form = forms[forms.length - 1];
				   	form.down('#userCName').setValue(recs[0].data.xm);
					form.down('#gh').setValue(recs[0].data.gh);
				    form.down('#xm').setValue(recs[0].data.xm);
				    form.down('#szdwh').setValue(recs[0].data.szdwh);
				    form.down('#szdw').setValue(recs[0].data.szdw);
				    o.up('#jgxxDialogWin').close();
				}
          },
         
          
  		detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var xnjgbWins = Ext.ComponentQuery.query('#xnjgbWin1');
					if (xnjgbWins.length > 0) {
						var win = xnjgbWins[0];
						win.setTitle('教师详情');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'xnjgbWin1',
									title : '教师详情',
									iconCls : 'add_16',
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
									items : [Ext.create(
											'App.view.rs.XnjgbForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'XnjgbgetImage.action',
												imgId : 'gh',
												postUrl : "xnjgb"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '取消',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					var xnjgbForm = win.down('form');
					xnjgbForm.edit(rec);
					xnjgbForm.loadForm(rec);
					xnjgbForm.down('#upImgBtn').hide();
					
					var textfields = xnjgbForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},
		
			onLaunch : function(o,jslx,winType) {
					var win = new Ext.Window({
				   		itemId:'jgxxDialogWin',
						title:'教师信息',
						iconCls:'add_16',
						width: 925,
						height: 520,
//						x:620,
//						y:30,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						items:[Ext.create('App.view.skxx.JGXXDialog',{
							itemId:'jgxxDialog'
						})]
					});
					
				  var pGrid = win.down('#jgxxDialog').down('#jgxxList');
				  var store = pGrid.getStore(), proxy = store.getProxy();
          		  proxy.setExtraParam('params', '');
				  store.load();
//				if(jslx == 'zjjs'){
//					win.setPosition(70,30,true);
//				}else {
//					win.setPosition(620,30,true);
//				}
				
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
			}
	})
