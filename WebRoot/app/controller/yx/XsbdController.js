Ext.define('App.controller.yx.XsbdController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.YxXsjbxxbModel','yx.ViewYxCwModel'],
    stores:['yx.YxXsjbxxbStore','yx.ViewYxCwStore'],

    
    init: function() {
		this.control({
			'xsbdCxList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'xsbdCxList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'xsbdCxList button[action=detail]': {
				click: this.detailData
			},
			
			'xsbdCxList  button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			
			'xsbdCxList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'xsbdSubmitForm button[action=submit]': {
				click: this.submit
			},
			
			'xsbdSubmitForm button[action=print]': {
				click: this.printPDF
			}
			
			
			
			
		});
    },
    
    getCenter: function(){
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
    
    
    initStore:function(){
    	var me = this;
    	var store = me.getStore('YxXsjbxxbStore'), 
    	proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    
    onLaunch : function(record) {
    	var me = this;
    	Ext.Ajax.request({
    		url:'yxSjkzgetYxsj.action',
    		method: 'get',
//    		params: { nj: nj },
    		success: function (response) {
    	 		var responseMessage = Ext.JSON.decode(response.responseText);
    	 		var success = responseMessage.result.success;
    	 		if(success){
    	 			me.initStore();
					var center = me.getCenter();
					var tab = center.down('#M' + record.get('parentId'));
					var removePanel = tab.down('#content');
					tab.remove(removePanel);
					var contentPanel = Ext.create('App.view.yx.XsbdContentPanel',
							{
								itemId : 'content',
								parentId : record.get('id')
							});
					tab.add(contentPanel);
					center.setActiveTab(tab);

    	 		}else{
    	 			Ext.Msg.show({title:'提示', msg:responseMessage.result.msg,buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
					return false;
    	 		}
			},
            failure: function (response) {   
            	
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
    
	detailData:function(o, e, eOpts){ 
		var me = this;
		var application = me.getApplication();
		var controller = application.getController('App.controller.yx.YxXsjbxxDetailController');
	    controller.onLaunch(o);
	},
	
	
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'yxXsjbxxtoExcel.action'
    },
   
    submit: function( o, e, eOpts){
        var me = this;
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#xsbdSubmitForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pForm = tab.down('#xsbdForm');
		var xsxxStore = me.getStore('YxXsjbxxbStore');
		var cwxxStore = me.getStore('ViewYxCwStore');
		for(var item in pForm.itemId){
			searchParams.fieldNames.push(item);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value){
				searchParams.search[tFields[i].name] = "#= '" +  Ext.String.trim( tFields[i].value ) + "'";
			}
		}	
		
		var cwxxProxy= cwxxStore.getProxy();
		var xsxxProxy= xsxxStore.getProxy();
		
		cwxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xsxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		cwxxStore.load({
		       callback: function(records, operation, success) {
	    			if(records[0]!= null){
		    			var tab = me.getCenter().getActiveTab();
						var xsbdForm = tab.down('#xsbdForm');
		    			var cwxx = xsbdForm.down('#cwxx'); 
						var json = {}
						var items = cwxx.items;
						cwxx.items.each(function(fsItem){
							
							if(fsItem.itemId!='xh'&&fsItem.itemId!='xm' && records[0].get(fsItem.itemId)!=null){
								cwxx.down('#' + fsItem.itemId).setValue(Ext.util.Format.number(records[0].get(fsItem.itemId),'00.00'));
							}
						})
						
						xsbdForm.setViewForm();
					}
	    	}});
		
		xsxxStore.load({
		  callback: function(records, operation, success) {
		  	    if(records[0]!= null){
	    			var tab = me.getCenter().getActiveTab();
					var xsbdForm = tab.down('#xsbdForm');
	    		
	    			var xsxx = xsbdForm.down('#xsxx'); 
					var json = {}
					var items = xsxx.items;
					xsxx.items.each(function(fsItem){
						if(fsItem.itemId!='id' && records[0].get(fsItem.itemId)!=null){
							xsxx.down('#' + fsItem.itemId).setValue(records[0].get(fsItem.itemId));
						}
						
						if(fsItem.itemId=='bdztm'&& records[0].get(fsItem.itemId)=='1'){
							    Ext.Msg.show({title:'提示', msg:"该新生已报到！",buttons: Ext.Msg.OK,icon: Ext.Msg.INFO});
								xsxx.down('#bdztm').setValue('已报到');
						}else if(fsItem.itemId=='bdztm'&& (records[0].get(fsItem.itemId)=='0'||records[0].get(fsItem.itemId)==null)){
							xsxx.down('#bdztm').setValue('未报到');
							Ext.MessageBox.confirm('提示', '确定该新生要报到吗？', function(btn) {
									if (btn == 'yes') {
										var xsJson = {};		
										var jsonObject = JSON.parse(Ext.encode(records[0].data));
										for(var item in jsonObject){
											xsJson[item] = jsonObject[item];
										}
											 xsJson['bdztm'] = '1';
										
										Ext.Ajax.request({
											url : 'yxXsjbxxEditZt.action',
//											waitTitle : '提示',
											actionMethods : 'post',
											params:{datas:Ext.encode(xsJson)},
//											waitMsg : '正在提交数据请稍候...',
											success : function(response, opts) {
												var result = Ext.decode(response.responseText);
												var success = result.result.success;
												if(success){
//													var msg = "报到成功！";
//													Ext.MessageBox.show({
//											           title: '提示',
//											           msg: msg,
//											           buttons: Ext.MessageBox.OK,
//											           icon: Ext.MessageBox.INFO,
//											           fn: function(id){
											        	  Ext.StoreMgr.lookup('YxXsjbxxbStore').reload();
//													    }
//											        });
												}else{
													var errmsg = "报到失败！";
													Ext.MessageBox.show({
											           title: '错误',
											           msg: errmsg,
											           buttons: Ext.MessageBox.OK,
											           icon: Ext.MessageBox.ERROR,
											           fn: function(id, msg){  
													    }  
											        });
												}
											},
											failure : function(form, action) {
												var errmsg = "报到失败！";
												 Ext.MessageBox.show({
										           title: '错误',
										           msg: errmsg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.ERROR,
										           fn: function(id, msg){  
												    }  
										       });
											}
										});
									}
								})
							}
					})
	    			xsbdForm.setViewForm();
	    		 }else{
		       	    Ext.Msg.show({title:'提示', msg:"该新生不存在，请重新输入学号和姓名！",buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING}); 
		       	    }
	    	}});
    },
    
    printPDF:function(o, e, eOpts){
        var me = this;
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#xsbdSubmitForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pForm = tab.down('#xsbdForm');
		var xsxxStore = me.getStore('YxXsjbxxbStore');
		var cwxxStore = me.getStore('ViewYxCwStore');
		for(var item in pForm.itemId){
			searchParams.fieldNames.push(item);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value){
				searchParams.search[tFields[i].name] = "#= '" +  Ext.String.trim( tFields[i].value ) + "'";
			}
		}	
		var xh =  Ext.String.trim( tFields[0].value);
		var cwxxProxy= cwxxStore.getProxy();
		var xsxxProxy= xsxxStore.getProxy();
		
		cwxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xsxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		cwxxStore.load({
		       callback: function(records, operation, success) {
	    			if(records[0]!= null){
		    			var tab = me.getCenter().getActiveTab();
						var xsbdForm = tab.down('#xsbdForm');
		    			var cwxx = xsbdForm.down('#cwxx'); 
						var json = {}
						var items = cwxx.items;
						cwxx.items.each(function(fsItem){
							
							if(fsItem.itemId!='xh'&&fsItem.itemId!='xm' && records[0].get(fsItem.itemId)!=null){
								cwxx.down('#' + fsItem.itemId).setValue(Ext.util.Format.number(records[0].get(fsItem.itemId),'00.00'));
							}
						})
						
						xsbdForm.setViewForm();
					}
	    	}});
		
		xsxxStore.load({
		  callback: function(records, operation, success) {
		  	    if(records[0]!= null){
	    			var tab = me.getCenter().getActiveTab();
					var xsbdForm = tab.down('#xsbdForm');
	    		
	    			var xsxx = xsbdForm.down('#xsxx'); 
					var json = {}
					var items = xsxx.items;
					xsxx.items.each(function(fsItem){
						if(fsItem.itemId!='id' && records[0].get(fsItem.itemId)!=null){
							xsxx.down('#' + fsItem.itemId).setValue(records[0].get(fsItem.itemId));
						}
						
						if(fsItem.itemId=='bdztm'&& records[0].get(fsItem.itemId)=='1'){
							    xsxx.down('#bdztm').setValue('已报到');
							    Ext.Ajax.request({
						//			url:'xjzmtoPDF.action?userName=' + userName,
						    		url:'viewYxCwtoPDF.action',
						    		method: 'get',
						    		params: { xh: xh},
						    		success: function (response) {
						    			var result = Ext.decode(response.responseText);
						    			window.open(result.msg); 
									}});
								
						}else if(fsItem.itemId=='bdztm'&& (records[0].get(fsItem.itemId)=='0'||records[0].get(fsItem.itemId)==null)){
							xsxx.down('#bdztm').setValue('未报到');
							Ext.MessageBox.confirm('提示', '该新生未报到，确定要打印报到单吗？', function(btn) {
									if (btn == 'yes') {
										Ext.Ajax.request({
							//			url:'xjzmtoPDF.action?userName=' + userName,
							    		url:'viewYxCwtoPDF.action',
							    		method: 'get',
							    		params: { xh: xh},
							    		success: function (response) {
							    			var result = Ext.decode(response.responseText);
							    			window.open(result.msg); 
										}});
									}
								})
							}
					})
	    			xsbdForm.setViewForm();
	    		 }else{
		       	    Ext.Msg.show({title:'提示', msg:"该新生不存在，请重新输入学号和姓名！",buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING}); 
		       	    }
	    	}});
    }
    
    /*printPDF:function(o, e, eOpts){
	    	var me = this;
	    	var tab = me.getCenter().getActiveTab();
			var searchForm = tab.down('#xsbdSubmitForm');
			
			var searchParams = {
					start:0, limit:15, page: 1, searchMode:'simple',
					fieldNames:[], order:'',
					search:{}
	    	};
			
			var pForm = tab.down('#xsbdForm');
			for(var item in pForm.itemId){
				searchParams.fieldNames.push(item);
			}
			
			var tFields = searchForm.query('textfield(true)');
			for(var i in tFields){
				if(tFields[i].value){
					searchParams.search[tFields[i].name] = "#= '" +  Ext.String.trim( tFields[i].value ) + "'";
				}
			}	
			var xh =  Ext.String.trim( tFields[0].value);
		
	    	Ext.Ajax.request({
	//			url:'xjzmtoPDF.action?userName=' + userName,
	    		url:'viewYxCwtoPDF.action',
	    		method: 'get',
	    		params: { xh: xh},
	    		success: function (response) {
	    			var result = Ext.decode(response.responseText);
	    			window.open(result.msg); 
				}});
    }*/
});
    
