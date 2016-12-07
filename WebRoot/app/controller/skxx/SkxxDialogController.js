Ext.define('App.controller.skxx.SkxxDialogController',{
	extend:'Ext.app.Controller',
	
	models:['skxx.SKXXModel'],	
    stores: ['skxx.SKXXStore'],
	
	init:function(){
		this.control({
				'skxxDialog button[action=search]':{
					click:this.search
				},
				'skxxDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'skxxDialog button[action=detail]':{
					click:this.detail
				}
//				,
//				'skxxDialog  button[action=ok]':{
//					click:this.addXsJcxx
//				}
		});
	},
		detail:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
		            	var win = new Ext.Window({
		            		itemId:'skxxDetailWin',
		            		autoShow: true,
		            		title:'授课信息详情',
		            		iconCls:'detail_16',
		                    layout: 'fit',
		                    width: 800,
							height: 540,
		                    closeAction:'hide',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		                    items: [Ext.create('App.view.skxx.SKXXDetail')],
		                    buttons: [{
				        	    text: '退出',
				        	    iconCls:'return_16',
				                handler: function () {
				                	var me = this;
				                    me.up('window').close();
				                }
				            }] 
		                });
		        	var detailForm = win.down('#skxxDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		  	  }
		},
	
			search:function(o, e, eOpts){
					var skxxDialog = o.up('#skxxDialog');
					var searchForm = skxxDialog.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = skxxDialog.down('#skxxList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
					}

//					var fymcValue = searchForm.down('#fymc').getValue();
//					if(fymcValue){
//						searchParams.search['yxsh']="#= '" + fymcValue + "'";
//					}
//					
//					var zydmValue = searchForm.down('#zymc').getValue();
//					if(zydmValue){
//						searchParams.search['zydm']="#= '" + zydmValue + "'";
//					}
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
			},
			
			searchAll:function(o, e, eOpts){
				var skxxDialog = o.up('#skxxDialog');
				var searchForm = skxxDialog.down('#searchForm');
            	var pGrid = skxxDialog.down('#skxxList');
            	
            	searchForm.getForm().reset();
            	var store = pGrid.getStore(), proxy = store.getProxy();
            	proxy.setExtraParam('params', '');
            	store.load();
			},
          
			onLaunch : function(o) {
				   var win = new Ext.Window({
				   		itemId:'skxxWin',
						title:'授课信息',
						iconCls:'add_16',
						width: 825,
						height: 560,
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
						items:[Ext.create('App.view.skxx.SKXXDialog',{
							itemId:'skxxDialog'
						})]
					});
				var pGrid = win.down('skxxDialog').down('#skxxList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', '');
	            store.load();				
			}
})
