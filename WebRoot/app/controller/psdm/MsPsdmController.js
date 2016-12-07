Ext.define('App.controller.psdm.MsPsdmController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.SKXXModel'],
			stores : ['psdm.PsdmStore'],
    
//    refs: [{  
//        selector: 'xsJcxxbList > xsJcxxbSearchForm',  
//        ref: 'xsJcxxbSearchForm'  
//    }],
    
   		init: function() {
		this.control({
			'msPsdmList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'msPsdmList button[itemId=schShowBtn]' : {
					render : this.setSchShowText
			       },
		    'msPsdmList button[action=showSearch]' : {
				    click : this.showSearch
				   },
				   
			'msPsdmList button[action=detail]':{
				click:this.detailClass
					},
			
			'msPsdmList button[action=printPDF]': {
				click: this.printPDF
			},
			
			'msPsdmList button[action=printExcle]': {
				click: this.printExcle
			},
							
			'msPsdmList' : {
				itemdblclick: this.showDetailedInfo
			},
			
			'psdmSearchForm button[action=search]': {
				click: this.search
			},
			
			'psdmSearchForm button[action=searchAll]': {
				click: this.searchAll
			}
			
		});
    },
    
		getCenter : function() {
						return this.application.getController('main.MainController').getCenter();
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
		    
		
	 setSchShowText: function(o, eOpts){
    	var me = this;
    	
		var searchForm = me.getCenter().down('#searchForm');
		if(searchForm)
			if(!searchForm.hidden){
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
			}else{
				o.setText('显示查询');
				o.setTooltip('显示查询');
			}
	},
    
    showSearch: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		if(searchForm)
			if(searchForm.hidden){
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
				searchForm.show();
			}else{
				o.setText('显示查询');
				o.setTooltip('显示查询');
				searchForm.hide();
			}
    },
    
     search: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pGrid = tab.down('#msPsdmList'), store = pGrid.getStore();
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
		}
		
		var njValue = searchForm.down('#xn').getRawValue();
		if (njValue)
	 		searchParams.search['xn'] = "#= '" + njValue+ "'";
	 	
	 	var njValue = searchForm.down('#xq').getRawValue();
		if (njValue)
	 		searchParams.search['xq'] = "#= '" + njValue+ "'";
		
		var kch = searchForm.down('#kch').getValue();
		if(kch)
			searchParams.search['kch'] = "#= '" + kch + "'";
		
		var kcmc = searchForm.down('#kcmc').getValue();
		if(kcmc)
			searchParams.search['kcmc'] = "#like '%" + kcmc + "%'";	
			
		var zjjs = searchForm.down('#zjjs').getValue();
		if(zjjs)
			searchParams.search['zjjs'] = "#like '%" + zjjs + "%'";	
	
		var proxy= store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
				}});
    },
    
    searchAll: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
    	var pGrid = tab.down('#msPsdmList');
    	searchForm.getForm().reset();
    	
    	var store = pGrid.getStore(), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
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
				var psdmDetailWins = Ext.ComponentQuery.query('#psdmDetailWin');
				if(psdmDetailWins.length > 0){
					win = psdmDetailWins[0];
				}else{
		            	var win = new Ext.Window({
		            		itemId:'psdmDetailWin',
		            		autoShow: true,
		            		title:'教学课程详情',
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
		                    items: [Ext.create('App.view.psdm.PsdmDetail')],
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
		        	var detailForm = win.down('#psdmDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		        	win.show();
		  	  }
			},
			
	 	printPDF: function(o, e, eOpts){
		 		var me = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length >= 1) {
					var JSONList = [];
					for(var i = 0; i < recs.length;i++){
						var jsonObject = JSON.parse(Ext.encode(recs[i].data)); //将每条数据转为json对象
						var psdmJson = {};
						for(var item in jsonObject){
							psdmJson[item] = jsonObject[item];
						}
						JSONList.push(Ext.encode(psdmJson));
					}

//			if (recs.length == 0) {
//					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
//				} else if (recs.length > 1) {
//					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
//				} else if (recs.length == 1) {
//				var kkkh = recs[0].get('kkkh')
////				alert(kkkh)
		       	Ext.Ajax.request({
//		    		url:'psdmtoPDF.action?kkkh=' + kkkh,
		       		url:'psdmtoPDF.action',
		    		method: 'get',
		    		params: { datas:JSONList},
		    		success: function (response) {
		    			var result = Ext.decode(response.responseText);
		    			var msg = result.msg;
		    			var array = msg.split(',');
		    			for(var i = 0;i < array.length;i++)
		    				window.open(array[i]); 
					},
		            failure: function (response) {    
		    		
		    	}});
			}
	 },
	 initStore : function() {
						var me = this;
						var store = me.getStore('PsdmStore');
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
				var contentPanel = Ext.create('App.view.psdm.MsPsdmContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
	 
	 
});
