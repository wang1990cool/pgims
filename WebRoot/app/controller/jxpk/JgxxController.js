Ext.define('App.controller.jxpk.JgxxController',{
	extend:'Ext.app.Controller',
	
			models : ['rs.JgxxModel'],
			stores : ['zd.ZdXzqhmStore','zd.ZdXbmStore',
			          'zd.ZdMzmStore','zd.ZdZzmmmStore','zd.ZdXlmStore',
			          'zd.ZdXwmStore','zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore',
			          'zd.ZdDslbmStore','zd.ZdDsztmStore','rs.JgxxAllStore'],

	
	init:function(){
		this.control({
				'jgxxJgxxDialog button[action=search]':{
					click:this.search
				},
				'jgxxJgxxDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'jgxxJgxxDialog  button[action=detail]':{
					click:this.detailJs
				},
				'jgxxJgxxDialog  button[action=ok]':{
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
          		var win = o.up('#jgxxDialogWin');
          		var pkWin = win.pkWin;
          		var jslxValue = win.jslxValue;
          		
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length >= 1) {
					if(jslxValue == 'zjjs' ){
						if(recs.length > 1){
							Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
						}else if(recs.length == 1){
							pkWin.down('#zjjsh').setValue(recs[0].data.gh);
					    	pkWin.down('#zjjs').setValue(recs[0].data.xm);
					    	o.up('#jgxxDialogWin').close();
						}
					}else if(jslxValue == 'zkjs' ){
							if(recs.length > 1){
								Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
							}else if(recs.length == 1){
								pkWin.down('#zkjsh').setValue(recs[0].data.gh);
							    pkWin.down('#zkjs').setValue(recs[0].data.xm);
							    o.up('#jgxxDialogWin').close();
							}
					}else if(jslxValue == 'syjs'){
						var syjsh = recs[0].data.gh;
						var syjs = recs[0].data.xm
						for(var i = 1; i < recs.length; i++){
							syjsh += '/' + recs[i].data.gh;
							syjs += '/' + recs[i].data.xm;
						}
						pkWin.down('#syjsh').setValue(syjsh);
					    pkWin.down('#syjs').setValue(syjs);
					    win.close();
					}
					
				}
          },
         
          
  		detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var jgxxWins = Ext.ComponentQuery.query('#jgxxDetailWin');
					if (jgxxWins.length > 0) {
						var win = jgxxWins[0];
						win.setTitle('教工详情');
						win.setIconCls('detail_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'jgxxDetailWin',
									title : '教工详情',
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
									items : [Ext.create(
											'App.view.search.JgxxForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'jgxxgetImage.action',
												imgId : 'gh',
												postUrl : "jgxx"
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
					
					/*var xnjgbForm = win.down('form');
					if(detailTime == 0){
						Ext.defer(function() {
								xnjgbForm.loadForm(rec);
								xnjgbForm.edit(rec);
								xnjgbForm.down('#upImgBtn').hide();
							}, 500);
							detailTime ++;
					}else{
						xnjgbForm.loadRecord(rec);
						xnjgbForm.edit(rec);
					    xnjgbForm.down('#upImgBtn').hide();
					}*/
					
					
					
					
					var jgxxForm = win.down('form');
					jgxxForm.edit(rec);
					jgxxForm.loadForm(rec);
						var zjhm = jgxxForm.down('#zjhm');
					var zjhmValue = zjhm.getValue();
					zjhm.setValue(zjhmValue.replace(zjhmValue.substr(6,17),'************'))
					jgxxForm.down('#upImgBtn').hide();
					/*Ext.defer(function() {
								xnjgbForm.loadForm(rec);
								xnjgbForm.edit(rec);
								xnjgbForm.down('#upImgBtn').hide();
							}, 400);*/
							//加载过程中设置延时

					var textfields = jgxxForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},
		
			onLaunch : function(pkWin,jslxValue) {
					var win = new Ext.Window({
				   		itemId:'jgxxDialogWin',
						title:'教师信息',
						iconCls:'add_16',
						width: 905,
						height: 515,
						layout:'fit',
						constrainHeader:true,
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						pkWin:pkWin,
						jslxValue:jslxValue,
						items:[
						Ext.create('App.view.jxpk.JGXXDialog',{
							itemId:'jgxxDialog'
						})]
					});
					 var searchForm = win.down('#searchForm');
           			 searchForm.getForm().reset();
					var pGrid = win.down('#jgxxList');
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
