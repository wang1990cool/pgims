Ext.define('App.controller.xsxk.ViewJxXsxkallController', {
    extend: 'Ext.app.Controller',
    
    models: ['xsxk.ViewJxXsxkallModel','main.PageModel'],
    stores: ['xsxk.ViewJxXsxkallStore','main.PageStore'],
    
    refs: [{  
        selector: 'viewJxXsxkallList > viewJxXsxkallSearchForm',  
        ref: 'viewJxXsxkallSearchForm'  
    }],
    
    init: function() {
		this.control(
			{
//			'viewJxXsxkallList':{
//				itemdblclick: this.itemDblClick
//			},
					
			'viewJxXsxkallList  combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			'viewJxXsxkallList  button[action=detail]':{
						click:this.detail
					},
			'viewJxXsxkallList  button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'viewJxXsxkallList button[itemId=schShowBtn]' : {
						render : this.setSchShowText
			},
			'viewJxXsxkallList button[action=showSearch]' : {
					      click : this.showSearch
			},
			
			'viewJxXsxkallSearchForm button[action=search]': {
				click: this.search
			},
			'viewJxXsxkallSearchForm button[action=searchAll]': {
				click: this.searchAll
			}
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    initStore:function(){
    	var me = this;
    	var store = me.getStore('ViewJxXsxkallStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'viewJxXsxkalltoExcel.action'
    },

    onLaunch:function(record){
    	var me = this;
    	var center = me.getCenter();
		var tab = center.down('#M'+record.get('parentId'));
		
    	var removePanel = tab.down('#content');
    	tab.remove(removePanel);
    	var contentPanel = Ext.create('App.view.xsxk.ViewJxXsxkallContentPanel',{
        	itemId:'content',
        	parentId:record.get('id')
        });
    	tab.add(contentPanel);
//    	if(roleCode == 'Academy'){
//    		var searchForm = tab.down('#searchForm');
//    		searchForm.down('#fymc').setValue(dept)
//    		searchForm.down('#fyh').setValue(szdwh)
//    	}
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
//    itemDblClick: function(o, record, item, index, e, eOpts){
//    	var me = this;
//    	me.detail(o,e,eOpts);
//	},
	
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

	
    detail: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var win = new Ext.Window({
        		itemId:'viewJxXsxkallWin',
        		iconCls:'detail_16',
        		autoShow: true,
        		title:'详情',
                layout: 'fit',
                width: 750,
                height: 360,
                closeAction:'destroy',
        		resizable:false,
        		shadow:true,
        		modal:true,
        		closable:true,
        		animCollapse:true,
        		autoShow:true,
                items: [Ext.create('App.view.xsxk.ViewJxXsxkallForm')]
            });
        	var viewJxXsxkallForm = win.down('form');
        	viewJxXsxkallForm.loadForm(rec)
        	viewJxXsxkallForm.setViewForm();
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
		var pGrid = tab.down('#viewJxXsxkallList'), store = me.getStore('ViewJxXsxkallStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
		}
//		var zjjsValue = searchForm.down('#zjjs').getRawValue();
//		if (zjjsValue)
//		      searchParams.search['zjjs'] = "#= '" +zjjsValue+ "'";
//		var kchValue = searchForm.down('#kch').getRawValue();
//		if (kchValue)
//		      searchParams.search['kch'] = "#= '" + kchValue+ "'";
		
		 var fymcValue = searchForm.down('#fymc').getRawValue();
		if (fymcValue)
		      searchParams.search['fymc'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue)
		      searchParams.search['zydm'] = "#= '" + zymcValue+ "'";
		       
		var xnValue = searchForm.down('#xn').getRawValue();
		if (xnValue)
	 		searchParams.search['xn'] = "#= '" + xnValue+ "'";
	 		
	 	var xqValue = searchForm.down('#xq').getRawValue();
		if (xqValue)
	 		searchParams.search['xq'] = "#= '" + xqValue+ "'";
		      
		var xslxValue = searchForm.down('#xslx').getValue();
		if (xslxValue)
			 searchParams.search['xslxm'] = "#= '" + xslxValue+ "'";
			 
		var proxy= store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		}});
    },

    	searchAll : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				
				var searchForm = tab.down('#searchForm');
				var pGrid = tab.down('#viewJxXsxkallList');
				searchForm.getForm().reset();

				var store = pGrid.getStore(), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			}
    
});
