Ext.define('App.controller.yx.YxXsjbxxController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.YxXsjbxxbModel','main.PageModel'],
    stores:['yx.YxXsjbxxbStore','main.PageStore','zd.ZdXslxmStore','zd.ZdXbmStore','zd.ZdMzmStore',
    		'zd.ZdZzmmmStore','zd.ZdHyzkmStore'],

    
    init: function() {
		this.control({
			'yxXsjbxxList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'yxXsjbxxList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'yxXsjbxxList button[action=detail]': {
				click: this.detailData
			},
			
			'yxXsjbxxList button[action=edit]': {
				click: this.editData
			},
			
			'yxXsjbxxList  button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'yxXsjbxxList  button[action=toDownTemp]': {
				click: this.toDownTemp
			},
			
			'yxXsjbxxList  button[action=backupData]': {
				click: this.backupData
			},
			
			'yxXsjbxxList  button[action=deleteData]': {
				click: this.deleteData
			},
			
			'yxXsjbxxList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'yxXsjbxxSearchForm button[action=search]': {
				click: this.search
			},
			
			'yxXsjbxxSearchForm button[action=searchAll]': {
				click: this.searchAll
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
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.yx.YxXsjbxxContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
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
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pGrid = tab.down('#yxXsjbxxList'), store = me.getStore('YxXsjbxxbStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
		var lqxyValue = searchForm.down('#lqxy').getRawValue();
		if (lqxyValue)
		      searchParams.search['lqxy'] = "#= '" + lqxyValue+ "'"; 
		
		var bdztm = searchForm.down('#bdztm').getValue();
		if (bdztm)
		      searchParams.search['bdztm'] = "#= '" + bdztm+ "'"; 
//		var bdztm = searchForm.down('#bdztm').getValue();
//		if(bdztm == '1'){
//			searchParams.search['bdztm'] = "#= '" + bdztm + "'";
//		}else{
//			searchParams.search['bdztm'] = "#is null";
//		}	
		      
//		var lqzyValue = searchForm.down('#lqzy').getValue();
//		if (lqzyValue)
//		      searchParams.search['lqzy'] = "#= '" + lqzyValue+ "'";
//		       
//		var xslxmValue = searchForm.down('#xslxm').getValue();
//		if (xslxmValue)
//	 		searchParams.search['xslxm'] = "#= '" + xslxmValue+ "'";
	 		
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
    	var pGrid = tab.down('#yxXsjbxxList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('YxXsjbxxbStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    
	detailData:function(o, e, eOpts){ 
		var me = this;
		var application = me.getApplication();
		var controller = application.getController('App.controller.yx.YxXsjbxxDetailController');
	    controller.onLaunch(o);
	},
	
	
	editData: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var xsxxWins1 = Ext.ComponentQuery.query('#xsxxWin1');
        	if(xsxxWins1.length > 0) {
        		var win = xsxxWins1[0];
        		win.setTitle('修改新生信息');
        		win.setIconCls('edit_16');
        		win.show();
        	}else{
        		var xsxxForm1 = Ext.create('App.view.yx.EditXsxxForm',{
                    itemId:'xsxxForm1',
                    layout:'form',
                    showType:'panel',
                    bodyStyle:'padding:5',
                    isAdd: false,
                    imgUrl:'yxXsjbxxgetImage.action',
        	        imgId:'zkzh',
        	        postUrl:"yxXsjbxx",
                    autoScroll:true
                    
                });
            
            	var win = Ext.create('Ext.window.Window',{
            		frame:true,
            		itemId:'xsxxWin1',
        			layout:'fit',
        			width:900,
        			height:600,
        			autoShow: true,
        			closeAction:'hide',
        			resizable:false,
        			maximizable: false,
        			constrainHeader:true,
        			collapsible:false,
        			enableDrag:true,
        			shadow:false,
        			modal:true,
        			closable:true,
        			bodyStyle:'padding:5',
        			animCollapse:true,
        			title:'修改新生信息',
            		items:[xsxxForm1]
            		
            	});
        	}
        	
        	var xsxxForm1 = win.down('form');
        	xsxxForm1.isAdd = false;
				xsxxForm1.edit(rec);
 	        	xsxxForm1.loadRecord(rec);
		      
    	}
    },
	
	
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'yxXsjbxxtoExcel.action'
    },
    
    toDownTemp: function(o, e, eOpts){
    	Ext.Msg.wait('提示','正在导出，请稍后...');
    	Ext.Ajax.request({
    		url : 'yxXsjbxxtoDownTemp.action',
    		success : function(res){
					window.open()
    			}
    	})
    },
    
    backupData: function( o, e, eOpts){
    	var me = this;
    	Ext.MessageBox.confirm('数据转储', '确定要转储所有记录吗？', function(btn) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url : 'yxXsjbxxBackupData.action',
					method:'POST',
					async : false,
					waitMsg : '正在转储数据,请稍候...',
					success:function(response, action){
						var result = Ext.JSON.decode(response.responseText);
						if(result.result.success){
							var msg = "转储数据成功！";
							Ext.MessageBox.show({
					           title: '提示',
					           msg: msg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.INFO
					        });
						}else{
							var errmsg = "数据已转储，无法重复转储！";
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
					failure:function(response, action){
						var errmsg = "数据已转储，无法重复转储！";
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
		}, this);
    },
    
    deleteData: function( o, e, eOpts){
    	var me = this;
    	Ext.MessageBox.confirm('清空', '确定要清空所有记录吗？', function(btn) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url : 'yxXsjbxxDeleteData.action',
					method:'POST',
					async : false,
					waitMsg : '正在清空数据,请稍候...',
					success:function(response, action){
						var result = Ext.JSON.decode(response.responseText);
						if(result.result.success){
							var msg = "清空数据成功！";
							Ext.MessageBox.show({
					           title: '提示',
					           msg: msg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.INFO,
					           fn: function(id, msg){
					        	  Ext.StoreMgr.lookup('YxXsjbxxbStore').reload();
							    }
					        });
						}else{
							var errmsg = "清空数据失敗，请先转储数据！";
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
					failure:function(response, action){
						var errmsg = "清空数据失敗，请先转储数据！";
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
		}, this);
    }
});
