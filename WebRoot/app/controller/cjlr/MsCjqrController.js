Ext.define('App.controller.cjlr.MsCjqrController', {
    extend: 'Ext.app.Controller',
    
    models: ['cjlr.KcztModel','cjlr.JxCjmxbModel'],
    stores: ['cjlr.MsCjqrStore','cjlr.JxCjmxbStore'],
    views:  ['cjlr.MsCjqrConPan'],
//        refs: [{  
//        selector: 'kcxxForm',  
//        ref: 'kcxxForm'  
//    }],
    
    init: function() {
		this.control({
//			'cjlrForm button[action=save]':{
//				click:this.saveKcxx
//			},
//			
//			'cjlrForm button[action=submit]':{
//				click:this.subKcxx
//			},
//			
//			'kcztList button[action=import]':{
//				click:this.impo
//			},
//			
//			'kcztList button[action=display]':{
//				click:this.display
//			},
//			
//			'kcztList' : {
//				itemdblclick: this.itemDblClick
//			}
			
			
			'msCjqrList gridtoolbar combo[itemId=numCmb]':{
				render: this.initPageSize,
				select: this.setPageSize
			},
			
			'msCjqrList gridtoolbar button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'msCjqrList gridtoolbar button[action=showSearch]': {
				click: this.showSearch
			},
			
			'msCjqrList button[action=display]':{
				click:this.display
			},
			
			'msCjqrList button[action=reback]':{
				click:this.reback
			},
			
			'msCjqrList' : {
				itemdblclick: this.itemDblClick
			},
			
			'cjqrSearchForm button[action=search]': {
				click: this.search
			},
			
			'cjqrSearchForm button[action=searchAll]': {
				click: this.searchAll
			}
			
			
		});
    },
    
    onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.cjlr.MsCjqrConPan',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll: true
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
	   },
	   
    initStore:function(){
    	var me = this;
    },
    
    
//    reback: function(o, e, eOpts){
//    	var me = this;
//		var rec = getSelRec(o.up('gridpanel'));
//		var grid = o.up('gridpanel');
//		if(rec != undefined){
//			var sjzt = rec.data.sjzt;
//			var kkkh = rec.data.kkkh;
//			if(sjzt == '1'){
//				Ext.Ajax.request({
//			    		url:'cjlrReback.action',
//			    		method: 'get',
//			    		params: { kkkh: kkkh},
//			    		success: function (response) {
//			    			var result = Ext.decode(response.responseText)
//			    			if(result.result.success){
//			    				Ext.Msg.show({title:'提示', msg:'撤回成功！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//			    				grid.getStore().load();
//		        				return false;
//			    			}
//						},
//			            failure: function (response) {          	
//			    		}});
//			}else{
//				Ext.Msg.show({title:'提示', msg:'本门课程信息不是提交状态，无法进行撤回！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//		        return false;
//			}
//		}
//    },
    
//    reback: function(o, e, eOpts){
//    	var me = this;
//			var rec = getSelRec(o.up('gridpanel'));
//			var grid = o.up('gridpanel');
//			if(rec != undefined){
//				var sjzt = rec.data.sjzt;
//				var kkkh = rec.data.kkkh;
//				if(sjzt == '1'){
//					Ext.Ajax.request({
//				    		url:'cjlrCallback.action',
//				    		method: 'get',
//				    		params: { kkkh: kkkh},
//				    		success: function (response) {
//				    			var result = Ext.decode(response.responseText)
//				    			if(result.result.success){
//				    				Ext.Msg.show({title:'提示', msg:'置回成功！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//				    				grid.getStore().load();
//			        				return false;
//				    			}
//							},
//				            failure: function (response) {          	
//				    		}});
//				}else{
//					Ext.Msg.show({title:'提示', msg:'本门课程信息不是确认状态，无法进行置回！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//			        return false;
//				}
//			}
//    },

	reback: function(o, e, eOpts){
	    	var me = this;
			var rec = getSelRec(o.up('gridpanel'));
			var grid = o.up('gridpanel');
			if(rec != undefined){
				var sjzt = rec.data.sjzt;
				var kkkh = rec.data.kkkh;
				if(sjzt == '1'){
					Ext.Ajax.request({
				    		url:'cjlrReback.action',
				    		method: 'get',
				    		params: { kkkh: kkkh},
				    		success: function (response) {
				    			var result = Ext.decode(response.responseText)
				    			if(result.result.success){
				    				Ext.Msg.show({title:'提示', msg:'置回成功！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
				    				grid.getStore().load();
			        				return false;
				    			}
							},
				            failure: function (response) {          	
				    		}});
				}else{
					Ext.Msg.show({title:'提示', msg:'本门课程信息不是提交状态，无法进行撤回！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
			        return false;
				}
			}
    },
    
    
  	display: function(o, e, eOpts){
  		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var kkkh = rec.data.kkkh;
			var kcxf =  rec.data.kcxf;
			var kch = rec.data.kch;
			var kcmc = rec.data.kcmc;
			var sjzt = rec.data.sjzt;
			var zjjs = rec.data.zjjs;
			var zjjsh = rec.data.zjjsh;
			var xn = rec.data.xn;
			var xq = rec.data.xq;
			var zt = null;
			if(sjzt == '1'){
				
				var tabPan = Ext.create('App.view.cjlr.DisCjlrPan',{
				    	itemId: 'disCjlrPan',
				        pageGrid:o.up('gridpanel')
				});
				
				var cjmxList = tabPan.down('#cjmxList');
				var kcxxForm = tabPan.down('#disKcxxForm');
				kcxxForm.setViewForm();
//			    kcxxForm.down('#kcxf').setValue(kcxf);
				kcxxForm.down('#kkkh').setValue(kkkh);
				kcxxForm.down('#kch').setValue(kch);
				kcxxForm.down('#kcmc').setValue(kcmc);
				kcxxForm.down('#zjjsh').setValue(zjjsh);
				kcxxForm.down('#zjjs').setValue(zjjs);
				kcxxForm.down('#xn').setValue(xn);
				kcxxForm.down('#xq').setValue(xq);
			    
				var applyWin = Ext.create('Ext.window.Window',{
					itemId: 'enterWin',
					frame:true,
					layout: 'fit',
					autoShow: true,
					width:1000,
					height:600,
					closeAction:'hide',
					resizable:false,
					maximizable: true,
					constrainHeader:true,
					collapsible:false,
					enableDrag:true,
					shadow:false,
					modal:true,
					closable:true,
					bodyStyle:'padding:5',
					animCollapse:true,
					title:kch+"  "+ kcmc + "  "+'成绩录入',
					items:[tabPan],
					dockedItems : [{
						dock : 'top',
						xtype : 'toolbar',
						items : [{
				                xtype: 'FileDownloader',
				                itemId: 'fileDownloader',
				                width: 0,
				                height: 0
				            },
							{	
								itemId : 'pdfDownloader',
								text : '打印预览',
								tooltip : '打印预览 ',
								iconCls : 'download_16',
//								hidden: (sjzt == '2'?false:true),
							    listeners: {
							        click: {
							            fn: function(){ 
							            	Ext.Ajax.request({
									    		url:'cjlrtoPDF.action',
									    		method: 'get',
									    		params: { kkkh: kkkh},
									    		success: function (response) {
									    			var result = Ext.decode(response.responseText);
									    			window.open(result.msg); 
												},
									            failure: function (response) {    
									    		}});
//											var pdfParam = {kkkh:kkkh};
//											var downloader = this.up('window').down('#fileDownloader');
//											downloader.load({
//												params : pdfParam,
//												url: 'cjlrtoPDF.action',
//												success: function (response) {
//			    										alert("hehe");
//												},
//									            failure: function (response) {  
//									            		alert("meme");
//									    		}});
//											
//											window.open(o.params); 
							            }
							        }
					    }},'-',
							{					
							text: '关闭',
						    iconCls:'return_16',
							tooltip: '关闭',
							handler:function(){
								this.up('window').close();
							}
						}]
				    }]
				});
				var cjmxList = tabPan.down('#disCjmxList');
				var store = cjmxList.getStore();
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
				};
				searchParams.search['kkkh'] = "= '" + kkkh + "'";
			    var proxy =  store.getProxy();
			    proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			    store.load();
			
			}else{
				Ext.Msg.show({title:'提示', msg:'本门课程信息未提交，无法查看详情！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
		        return false;
			}
			
			Ext.Ajax.request({
			    		url:'cjlrGetData.action',
			    		method: 'get',
			    		params: { kkkh: kkkh},
			    		success: function (response) {
			    			var result = Ext.decode(response.responseText)
			    			var cjxxData = result.result.list[0];
			    			var cjjlData = cjxxData.jxCjjlbData;
			    			
//			    			kcxxForm.down('#ksxsm').setValue(cjjlData.ksxsm);
//			    			kcxxForm.down('#ksxs').setValue(cjjlData.ksxs);
			    			var ksrq = cjjlData.ksrq;
			    			if(ksrq != null){
			    				var year = ksrq.substring(0,4);
	     						var month = ksrq.substring(4,6);
	     						var day = ksrq.substring(6,8);
	     						ksrq = year+ "-" +month+ "-" +day;
			    				kcxxForm.down('#ksrq').setValue(ksrq);
			    			}
			    			kcxxForm.down('#ksdd').setValue(cjjlData.ksdd);
			    			kcxxForm.down('#ksfsm').setValue(cjjlData.ksfsm);
			    			kcxxForm.down('#ksfs').setValue(cjjlData.ksfs);
			    			kcxxForm.down('#cjlx').setValue(cjjlData.cjlx);
			    			kcxxForm.down('#cjlxm').setValue(cjjlData.cjlxm);
			    			kcxxForm.down('#sjzt').setValue(cjjlData.sjzt);
			    			kcxxForm.down('#pscjbl').setValue(cjjlData.pscjbl);
			    			if(sjzt != 1){
			    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
			    			}else{
			    				if(cjjlData.ywpscj == 1){
			    					kcxxForm.down('#pscj').setValue('有');
			    				}else if(cjjlData.ywpscj == 0){
			    					kcxxForm.down('#pscj').setValue('无');
			    				}
			    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
			    			}
			    			
			    				
			    			
			    			
						},
			            failure: function (response) {          	
			    		}});
		}
  	},
    
  	
  	itemDblClick: function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	me.display(o,e,eOpts);
	},
	
   
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
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
    
     search: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pGrid = tab.down('#msCjqrList'), store = me.getStore('msCjqrStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
		}
		
//		var isValid = searchForm.down('#isPass').getValue();
//		if(isValid)
//			searchParams.search['isPass'] = "#= " + isValid;
		
		var njValue = searchForm.down('#xn').getRawValue();
		if (njValue)
	 		searchParams.search['xn'] = "#= '" + njValue+ "'";
	 	
	 	var njValue = searchForm.down('#xq').getRawValue();
		if (njValue)
	 		searchParams.search['xq'] = "#= '" + njValue+ "'";
		
		var kch = searchForm.down('#kch').getValue();
		if(kch)
			searchParams.search['kch'] = "#= '" + kch + "'";
		
		var sjzt = searchForm.down('#sjzt').getValue();
		if(sjzt == '0' || sjzt == '1'|| sjzt == '3')
			searchParams.search['sjzt'] = "#= '" + sjzt + "'";
//		else if(sjzt == '' || sjzt == null || sjzt == '3'){
//			var sjzt = '3';
//			searchParams.search['sjzt'] = "#= '" + sjzt + "'";	
//		}
		
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
    	var pGrid = tab.down('#auditFlowList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('msCjqrStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    }
	   
});
