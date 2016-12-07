Ext.define('App.controller.cjcx.ViewXsCjcxController', {
    extend: 'Ext.app.Controller',
    
    models: ['cjcx.ViewJxCjcxModel'],
    stores: ['cjcx.CjcxStore'],
    
//        refs: [{  
//        selector: 'kcxxForm',  
//        ref: 'kcxxForm'  
//    }],
//    
    init: function() {
		this.control({
			'cjcxList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'cjcxList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'cjcxList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'cjcxList button[action=display]':{
				click:this.display
			},
			
			'cjcxList button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'cjcxList' : {
				itemdblclick: this.itemDblClick
			},
			
			'cjcxSearchForm button[action=search]': {
				click: this.search
			},
			
			'cjcxSearchForm button[action=searchAll]': {
				click: this.searchAll
			}
		});
    },
    
    initStore:function(record){
    	var me = this;
    },
    
   
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
     getPanel:function(){
    	var me = this;
    	return me.getCjcxConPanView();
    },
    
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
  
    setFormData:function(contentPanel){
//    	contentPanel.down('#xn').setValue(xn);
//    	contentPanel.down('#xq').setValue(xq);
    	
    },
    
     excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'viewJxCjcxtoExcel.action'
    },
    
    onLaunch:function(record){
    	var me = this;
    	me.initStore();
    	
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create('App.view.cjcx.CjcxConPan',
				{
					itemId : 'content',
					parentId : record.get('id'),
					autoScroll: true
				});
		tab.add(contentPanel);
		center.setActiveTab(tab);
		me.setFormData(contentPanel);
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
		
		var pGrid = tab.down('#cjcxList'), store = me.getStore('cjcxStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
		var xnValue = searchForm.down('#xn').getRawValue();
		if (xnValue)
	 		searchParams.search['xn'] = "#= '" + xnValue+ "'";
	 	var xqValue = searchForm.down('#xq').getRawValue();
		if (xqValue)
	 		searchParams.search['xq'] = "#= '" + xqValue+ "'";
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
//		var szdwValue = searchForm.down('#szdwh').getValue();
//		if (szdwValue) {
//			searchParams.search['szdwh'] = "#= '" + szdwValue + "'";
//		}
//		
		
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
    	var pGrid = tab.down('#cjcxList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('cjcxStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    display: function( o, e, eOpts){
    	var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var form = Ext.create('App.view.cjcx.CjcxForm',{
				    	itemId: 'cjcxForm',
				        pageGrid:o.up('gridpanel')
			});
			
			form.loadForm(rec);
			form.setEditView();
				
			var win = Ext.create('Ext.window.Window',{
					itemId: 'enterWin',
					frame:true,
					layout: 'fit',
					autoShow: true,
					width:1000,
					height:400,
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
					title:'成绩详情',
					items:[form],
					dockedItems : [{
						dock : 'top',
						xtype : 'toolbar',
						items : [{					
							text: '关闭',
						    iconCls:'return_16',
							tooltip: '关闭',
							handler:function(){
								this.up('window').close();
							}
						}]
				    }]
				});
		}
    },
    
    itemDblClick: function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	me.display(o,e,eOpts);
	}
	   
});
