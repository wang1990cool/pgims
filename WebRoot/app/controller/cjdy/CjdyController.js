Ext.define('App.controller.cjdy.CjdyController', {
			extend : 'Ext.app.Controller',

			models : ['xs.XsJcxxbModel','cjdy.ViewJxCjcxAllModel'],
			stores : ['cjdy.CjdyStore','cjdy.ViewJxCjcxAllStore'],
    
   		init: function() {
		this.control({
			'cjdyList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			
			'cjdyList button[itemId=schShowBtn]' : {
					render : this.setSchShowText
			       },
		    'cjdyList button[action=showSearch]' : {
				    click : this.showSearch
				   },
			
			'cjdyList button[action=detail]':{
				click:this.detailClass
					},
			
					
			'cjdyList button[action=printPDF]': {
				click: this.printPDF
			},
			
			'cjdyList button[action=print]': {
				click: this.print
			},
			
			'cjdySearchForm button[action=search]': {
				click: this.search
			},
			
			'cjdySearchForm button[action=searchAll]': {
				click: this.searchAll
			},
		
			'cjdyList' : {
				itemdblclick: this.showDetailedInfo
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
		
		var pGrid = tab.down('#cjdyList'), store = me.getStore('CjdyStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
		var njValue = searchForm.down('#sznj').getRawValue();
		if (njValue)
	 		searchParams.search['sznj'] = "#= '" + njValue+ "'";
		var xslxValue = searchForm.down('#xslx').getValue();
		if (xslxValue) {
			searchParams.search['xslxm'] = "#= '" + xslxValue + "'";
		}
		var fymcValue = searchForm.down('#fymc').getValue();
		if (fymcValue) {
			searchParams.search['fyh'] = "#= '" + fymcValue + "'";
		}
		var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue) {
			searchParams.search['zydm'] = "#= '" + zymcValue + "'";
		}
		
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
    	var pGrid = tab.down('#cjdyList');
    	searchForm.getForm().reset();
    	
    	var store = pGrid.getStore(), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },

    detailClass: function( o, e, eOpts ){
		    	var rec = getSelRec(o.up('gridpanel'));
		    	if(rec != undefined){
		        	var win = new Ext.Window({
		        		itemId:'cjDetailWin',
		        		iconCls:'detail_16',
		        		autoShow: true,
		        		title:'详情',
		                layout: 'fit',
		                
		                width: 780,
		                height: 600,
		                closeAction:'destroy',
		        		resizable:false,
		        		shadow:true,
		        		modal:true,
		        		closable:true,
		        		animCollapse:true,
		        		autoShow:true,
		                items: [Ext.create('App.view.cjdy.CjDetail')]
		            });
		        	var cjDetail = win.down('form');
		        	cjDetail.loadForm(rec)
		        	 
		    		var textfields =  cjDetail.query('textfield');
		    		for(var i in textfields){
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
				    textfields[i].setFieldStyle(style);
					}
		    	var me = this;
		    	var xh = rec.data.xh
				var cjStore = me.getStore('ViewJxCjcxAllStore');
				var cjProxy = cjStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['xh'] = "#= '" + xh + "'";
				cjProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				cjStore.load({
					callback : function(records, operation, success) {}
				})
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
						var cjdyJson = {};
						for(var item in jsonObject){
							if(item == 'rxzp')
								continue;
							cjdyJson[item] = jsonObject[item];
						}
						JSONList.push(Ext.encode(cjdyJson));
						
					}

		       	Ext.Ajax.request({
		       		url:'cjdytoPDF.action',
		    		method: 'post',
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
	 
	 print: function(o, e, eOpts){
		 		var me = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length >= 1) {
					var JSONList = [];
					for(var i = 0; i < recs.length;i++){
						var jsonObject = JSON.parse(Ext.encode(recs[i].data)); //将每条数据转为json对象
						var cjdyJson = {};
						for(var item in jsonObject){
							if(item == 'rxzp')
								continue;
							cjdyJson[item] = jsonObject[item];
						}
						JSONList.push(Ext.encode(cjdyJson));
						
					}

		       	Ext.Ajax.request({
		       		url:'cjdytoPrint.action',
		    		method: 'post',
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
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};
				var store = me.getStore('CjdyStore',{});
				searchParams.search['sfbd'] = "#in (" + "\'已报到\'" + ")";
				proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
			},

		onLaunch : function(record) {
			
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.cjdy.CjdyContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
			
	 	
});
