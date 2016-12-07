Ext.define('App.controller.yx.YxXsjbxxHController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.YxXsjbxxbHModel'],
    stores:['yx.YxXsjbxxbHStore'],
//    stores: ['yx.YxXsjbxxbStore','zd.ZdXslxmStore','zd.ZdXbmStore','zd.ZdYxdmStore',
//            'zd.ZdGjdqmStore','zd.ZdMzmStore','zd.ZdSfzjlxmStore','zd.ZdZzmmmStore',
//            'zd.ZdHyzkmStore','zd.ZdRxfsStore','zd.ZdRxfsmStore','zd.ZdJylbmStore','zd.ZdXwlbmStore',
//            'zd.ZdPyccmStore','zd.ZdXsdqztmStore','zd.ZdSfbdmStore','zd.ZdSfzxmStore'
//    ],
    
//    refs: [{  
//        selector: 'yxXsjbxxList > yxXsjbxxSearchForm',  
//        ref: 'yxXsjbxxSearchForm'  
//    }],
    
    init: function() {
		this.control({
			'yxXsjbxxHList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'yxXsjbxxHList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'yxXsjbxxHList button[action=detail]': {
				click: this.detailData
			},
			
			'yxXsjbxxHList  button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'yxXsjbxxHList  button[action=deleteData]': {
				click: this.deleteData
			},
			
			'yxXsjbxxHList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'yxXsjbxxHSearchForm button[action=search]': {
				click: this.search
			},
			
			'yxXsjbxxHSearchForm button[action=searchAll]': {
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
    	var store = me.getStore('YxXsjbxxbHStore'), 
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
				var contentPanel = Ext.create('App.view.yx.YxXsjbxxHContentPanel',
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
		
		var pGrid = tab.down('#yxXsjbxxHList'), store = me.getStore('YxXsjbxxbHStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
//		var bdztm = searchForm.down('#bdztm').getValue();
//		if(bdztm)
//			searchParams.search['bdztm'] = "#= '" + bdztm + "'";
		
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
    	var pGrid = tab.down('#yxXsjbxxHList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('YxXsjbxxbHStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    detailData:function(o, e, eOpts){ 
		var me = this;
		var application = me.getApplication();
		var controller = application.getController('App.controller.yx.YxXsjbxxDetailController');
	    controller.onLaunch(o);
	},
	
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'lsXsjbxxtoExcel.action'
    },
    
    deleteData: function( o, e, eOpts){
    	var me = this;
    	Ext.MessageBox.confirm('清空', '确定要清空所有记录吗？', function(btn) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url : 'lsXsjbxxDeleteData.action',
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
					        	  Ext.StoreMgr.lookup('YxXsjbxxbHStore').reload();
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
