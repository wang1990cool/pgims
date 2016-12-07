Ext.define('App.controller.yx.XsbdCxController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.YxXsjbxxbModel'],
    stores:['yx.YxXsjbxxbStore'],
    
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
			
			'xsbdCxSearchForm button[action=search]': {
				click: this.search
			},
			
			'xsbdCxSearchForm button[action=searchAll]': {
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
				var contentPanel = Ext.create('App.view.yx.XsbdCxContentPanel',
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
		
		var pGrid = tab.down('#xsbdCxList'), store = me.getStore('YxXsjbxxbStore');
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
		
		/*var bdztm = searchForm.down('#bdztm').getValue();
		if(bdztm == '1'){
			searchParams.search['bdztm'] = "#= '" + bdztm + "'";
		}else{
			searchParams.search['bdztm'] = "#is null";
		}*/
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
    	var pGrid = tab.down('#xsbdCxList');
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
	
	
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'yxXsjbxxtoExcel.action'
    }
    
    
});
