Ext.define('App.controller.yx.ViewYxBdqkController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.ViewYxBdqkModel'],
    stores:['yx.ViewYxBdqkStore'],
    
//    refs: [{  
//        selector: 'yxXsjbxxList > yxXsjbxxSearchForm',  
//        ref: 'yxXsjbxxSearchForm'  
//    }],
    
    init: function() {
		this.control({
			'viewYxBdqkList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'viewYxBdqkList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'viewYxBdqkList button[action=detail]': {
				click: this.detailData
			},
			
			'viewYxBdqkList  button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			
			'viewYxBdqkList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'viewYxBdqkSearchForm button[action=search]': {
				click: this.search
			},
			
			'viewYxBdqkSearchForm button[action=searchAll]': {
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
    	var store = me.getStore('ViewYxBdqkStore'), 
    	proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    
    onLaunch : function(record) {
				var me = this;
//				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.yx.ViewYxBdqkContentPanel',
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
		
		var pGrid = tab.down('#viewYxBdqkList'), store = me.getStore('ViewYxBdqkStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
		var njValue = searchForm.down('#nj').getRawValue();
		if (njValue)
	 		searchParams.search['nj'] = "#= '" + njValue+ "'";
		
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
    	var pGrid = tab.down('#viewYxBdqkList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('ViewYxBdqkStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    
	detailData:function(o, e, eOpts){ 
		
	},
	
	
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'viewYxBdqktoExcel.action'
    }
    
    
});
