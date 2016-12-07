Ext.define('App.controller.jxrw.JxrwController', {
			extend : 'Ext.app.Controller',

			models : ['jxpk.JxPkjlModel','main.PageModel'],
			stores : ['jxrw.JxrwStore','main.PageStore'],
    
//    refs: [{  
//        selector: 'xsJcxxbList > xsJcxxbSearchForm',  
//        ref: 'xsJcxxbSearchForm'  
//    }],
    
   		init: function() {
		this.control({
			'jxrwList  combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'jxrwList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'jxrwList button[action=detail]':{
				click:this.detailClass
					},
			
			'jxrwList button[action=showSearch]': {
				click: this.showSearch
			},
			
					
			'jxrwList button[action=print]': {
				click: this.print
			},
							
			'jxrwList button[action=printAll]': {
				click: this.printAll
			},
			'jxrwList' : {
				itemdblclick: this.showDetailedInfo
			},
			
			'jxrwSearchForm button[action=search]': {
				click: this.search
			},
			
			'jxrwSearchForm button[action=searchAll]': {
				click: this.searchAll
			}

			
		});
    },
    
		   getCenter : function() {
						return this.application.getController('main.MainController').getCenter();
					},
		
					initStore : function() {
						var me = this;
						var store = me.getStore('JxrwStore');
						proxy = store.getProxy();
						proxy.setExtraParam('params', '');
						store.load();
					},

			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.jxrw.JxrwContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			},
			
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
				var searchForm = me.getCenter().down('#jxrwSearchForm');
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
				var searchForm = tab.down('#jxrwSearchForm');
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
	detailClass:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var win;
				var jxrwDetailWins = Ext.ComponentQuery.query('#jxrwDetailWin');
				if(jxrwDetailWins.length > 0){
					win = jxrwDetailWins[0];
				}else{
		            	var win = new Ext.Window({
		            		itemId:'jxrwDetailWin',
		            		autoShow: true,
		            		title:'教学任务详情',
		            		iconCls:'detail_16',
		                    width: 800,
							height: 600,
		                    closeAction:'hide',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		            	    bodyStyle :"overflow-x:hidden;overflow-y:auto",
		                    items: [Ext.create('App.view.jxrw.JxrwDetail')],
		                    buttons: [{
				        	    text: '退出',
				        	    iconCls:'return_16',
				                handler: function () {
				                	var me = this;
				                    me.up('window').close();
				                }
				            }] 
		                });
				}
		        	var detailForm = win.down('#jxrwDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		        	win.show();
		  	  }
			},
			
    
  	search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#jxrwSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#jxrwList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
				}
				
				var pydwValue = searchForm.down('#pydw').getValue();
				if(pydwValue){
					searchParams.search['pydwh']="#like '%" + pydwValue + "%'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#like '%" + zymcValue + "%'";
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
		
		var searchForm = tab.down('#jxrwSearchForm');
		var pGrid = tab.down('#jxrwList');
		searchForm.getForm().reset();

		var store = pGrid.getStore(), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},
	
	 print: function(o, e, eOpts){
	 		var me = this;
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length >= 1) {
				var kkkh = recs[0].data.kkkh
				for(var i = 1; i < recs.length;i++){
					kkkh += "," + recs[i].get('kkkh')
				}
		       	Ext.Ajax.request({
		    		url:'jxrwtoPDF.action',
		    		method: 'get',
		    		params: { kkkh: kkkh},
		    		success: function (response) {
		    			var result = Ext.decode(response.responseText);
		    			window.open(result.msg); 
					},
		            failure: function (response) {    
		    		
		    	}});
			}
	 },
	 
	 printAll:function(o, e, eOpts){
	 		var me = this;
	       	Ext.Ajax.request({
	    		url:'jxrwtoPDFAll.action',
	    		method: 'get',
	    		success: function (response) {
	    			var result = Ext.decode(response.responseText);
	    			window.open(result.msg); 
				},
	            failure: function (response) {    
	    		
	    	}});
	 
	 }
	 	
});
