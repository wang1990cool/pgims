Ext.define('App.controller.jxkkjh.PYFAController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.PYFAModel'],	
    stores: ['pyfa.PYFAStore','pyfa.PYFAAllStore'],
	
	init:function(){
		this.control({
				'pyfaDialog button[action=search]':{
					click:this.search
				},
				'pyfaDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'pyfaList  button[action=detail]':{
					click:this.detailPyfa
				},
				'pyfaList  button[action=ok]':{
					click:this.addPyfa
				}
			});
	},
			search:function(o, e, eOpts){
					var pyfaDialog = o.up('#pyfaDialog');
					var searchForm = pyfaDialog.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = pyfaDialog.down('#pyfaList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" +Ext.String.trim( tFields[i].value )  + "%'";
					}
					var dwmcValue = searchForm.down('#dwmc').getValue();
					if(dwmcValue){
						searchParams.search['dwh']="#= '" + dwmcValue + "'";
					}
					var fymcValue = searchForm.down('#zymc').getValue();
					if(fymcValue){
						searchParams.search['zydm']="#= '" + fymcValue + "'";
					}
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
			},
			
			searchAll:function(o, e, eOpts){
				var pyfaDialog = o.up('#pyfaDialog');
				var searchForm = pyfaDialog.down('#searchForm');
            	var pGrid = pyfaDialog.down('#pyfaList');
            	searchForm.getForm().reset();
            	
            	var store = pGrid.getStore(), proxy = store.getProxy();
            	proxy.setExtraParam('params', '');
            	store.load();
			},
			 
          addPyfa:function( o, e, eOpts ){
          	 	var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					 var operationValue = o.up('#pyfaDialogWin').down('#operation').getValue();//获得操作类型
//					 if(operationValue == 'addGrjh' || operationValue == 'editGrjh'){
					 	 var kkjhForms = Ext.ComponentQuery.query('#kkjhForm');
			    		 var kkjhForm = kkjhForms[kkjhForms.length - 1];
			    		 kkjhForm.down('#pyfah').setValue(recs[0].data.pyfah);
			    		 kkjhForm.down('#pyfa').setValue(recs[0].data.pyfamc);
			    		 kkjhForm.down('#bbh').setValue(recs[0].data.bbh);
			    		 kkjhForm.down('#pyfs').setValue(recs[0].data.pyfs);
			    		 kkjhForm.down('#pyfsm').setValue(recs[0].data.pyfsm);
//					 }else if(operationValue == 'addGrjhkc' || operationValue == 'importGrjhkc'){
//					 	  var grjhkcDialogs = Ext.ComponentQuery.query('#grjhkcDialog');
//					 	  var grjhkcDialog = grjhkcDialogs[grjhkcDialogs.length - 1];
//					 	  grjhkcDialog.down('#pyfah').setValue(recs[0].data.pyfah);
//					 	  me.searchKcByPyfah(recs[0].data.pyfah)
//					 }
			    	 var pyfaDialogWin = o.up('#pyfaDialogWin')
			    	 pyfaDialogWin.close();
				}
          },
          
          searchKcByPyfah:function(pyfahValue){
          	 var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
				var store = Ext.StoreMgr.lookup('FAKCAllStore')
				searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
          },
          
         detailPyfa:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
//		            	var win = new Ext.Window({
//		            		itemId:'pyfaDetailWin1',
//		            		title:'培养方案详情',
//		            		iconCls:'detail_16',
//		                    layout: 'fit',
//		                    width: 755,
//		                    height: 445,
//		                    closeAction:'destory',
//		            		resizable:false,
//		            		shadow:true,
//		            		modal:true,
//		            		closable:true,
//		            		constrainHeader:true,
//		            		animCollapse:true,
//		            		autoShow:true,
//		                    items: [Ext.create('App.view.pyfa.PYFADetailForm',{
//		                    	itemId:'pyfaDetailForm'
//		                    })],
//		                    buttons: [
//							 	{
//				        	    text: '退出',
//				        	    iconCls:'return_16',
//				                handler: function () {
//				                		var me = this;
//					                    me.up('window').close();
//				                }
//				            }]
//		          });
//		        	var fakcListTab = win.down('#fakcListTab');
//		        	fakcListTab.down('#pyfah').setValue(rec.data.pyfah);
//		        	var pyfaDetail = win.down('#pyfaDetailForm').down('#pyfaDetail');
//		        	pyfaDetail.loadForm(rec);
//		        	pyfaDetail.setViewForm();
					var pyfaAllDetailWin;
					var pyfaAllDetailWins = Ext.ComponentQuery.query('#pyfaAllDetailWin');
					if(pyfaAllDetailWins.length > 0){
						pyfaAllDetailWin = pyfaAllDetailWins[pyfaAllDetailWins.length - 1];
					}else{
						pyfaAllDetailWin = Ext.create('App.view.search.PYFADetailWindow',{
		 			 		itemId:'pyfaAllDetailWin'
		 				 });
					}
					 var pyfaDetailForm = pyfaAllDetailWin.down('#pyfaDetailForm');
					 
					 var  pyfaDetail = pyfaDetailForm.down('#pyfaDetail')
					 pyfaDetail.loadForm(rec);
	        		 pyfaDetail.setViewForm();
		 			 pyfaAllDetailWin.show();
		  	 }
		},
		
		searchPyfa:function(pydwhValue,zydmValue,xslxmValue,pyfaDialogWin){
		     var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
			 };
			//查看所有的培养方案，则显示查询条件
//			    var searchForm = pyfaDialogWin.down('#pyfaDialog').down('#searchForm');
//			    searchForm.setVisible(false);
			    searchParams.search['dwh'] = "= '" + pydwhValue + "'";
				searchParams.search['zydm'] = "= '" + zydmValue + "'";
				searchParams.search['xslxm'] = "= '" + xslxmValue + "'";
		    	searchParams.search['ztm'] = "= 'TG'";
	        	var pGrid = pyfaDialogWin.down('#pyfaDialog').down('#pyfaList');
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			},
		
			onLaunch : function(pydwhValue,zydmValue,xslxmValue) {
				var win;
				var me = this;
				var pyfaDialogWins = Ext.ComponentQuery.query('#pyfaDialogWin');
	        	if(pyfaDialogWins.length > 0) {
		        		win = pyfaDialogWins[0];
		        		win.setTitle('培养方案');
		        		win.setIconCls('add_16');
		        		win.show();
	        	}else{
			     	win = new Ext.Window({
				   		itemId:'pyfaDialogWin',
						title:'培养方案',
						iconCls:'add_16',
						width: 625,
						height: 520,
						x:620,
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
						items:[{
							xtype:'textfield',
							fieldLabel:'操作',
							width:50,
							itemId:'operation',
							hidden:true
						},Ext.create('App.view.jxkkjh.PYFADialog',{
							itemId:'pyfaDialog'
						})]
					});
	        	}
//	        	var pGrid = win.down('#pyfaDialog').down('#pyfaList');
//	        	pGrid.getStore().load();
	        	me.searchPyfa(pydwhValue,zydmValue,xslxmValue,win)
			}
	})
