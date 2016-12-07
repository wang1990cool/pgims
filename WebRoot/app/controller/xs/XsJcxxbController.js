Ext.define('App.controller.xs.XsJcxxbController', {
    extend: 'Ext.app.Controller',
    
    models: ['xs.XsJcxxbModel'],
    stores: ['xs.XsJcxxbStore','zd.ZdXslxmStore','zd.ZdXbmStore','zd.ZdYxdmStore',
            'zd.ZdGjdqmStore','zd.ZdMzmStore','zd.ZdSfzjlxmStore','zd.ZdZzmmmStore',
            'zd.ZdHyzkmStore','zd.ZdRxfsStore','zd.ZdRxfsmStore','zd.ZdJylbmStore','zd.ZdXwlbmStore',
            'zd.ZdPyccmStore','zd.ZdXsdqztmStore','zd.ZdSfbdmStore','zd.ZdSfzxmStore'
    ],
    
    refs: [{  
        selector: 'xsJcxxbList > xsJcxxbSearchForm',  
        ref: 'xsJcxxbSearchForm'  
    }],
    
    init: function() {
		this.control({
			'xsJcxxbList gridtoolbar combo[itemId=numCmb]': {
					render: this.initPageSize,
					select: this.setPageSize
			},
			
			'xsJcxxbList button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'xsJcxxbList button[action=detail]': {
				click: this.detailXsJcxxb
			},
			
			'xsJcxxbList button[action=add]': {
				click: this.addXsJcxxb
			},
			
			'xsJcxxbList button[action=edit]': {
				click: this.editXsJcxxb
			},
			
			'xsJcxxbList button[action=delete]': {
				click: this.deleteXsJcxxb
			},
			
//			'xsJcxxbList button[action=ds]': {
//				click: this.dataTB
//			},
			
			'xsJcxxbList gridtoolbar button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'xsJcxxbList button[action=showSearch]': {
				click: this.showSearch
			},
			
			'xsJcxxbList' : {
				itemdblclick: this.showDetailedInfo
			},
			
			'xsJcxxbSearchForm button[action=search]': {
				click: this.search
			},
			
			'xsJcxxbSearchForm button[action=searchAll]': {
				click: this.searchAll
			},
			
			'xsJcxxbSearchForm button[action=advacedSearch]':{
				click: this.advacedSearch
			}
			
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    initStore:function(){
    	var me = this;
    	
    	var store = me.getStore('XsJcxxbStore'), 
    	proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'xsJcxxbtoExcel.action'
    },
    
    onLaunch:function(record){
    	var me = this;
    	me.initStore();
		
		Ext.Ajax.request({
			url:'getTreeData.action',
			method:'POST',
			autosync: true,
			params:{dicTabName:'ZD_XZQHM'},
			scope: this,
			success: function(response){
				var responseMessage = Ext.JSON.decode(response.responseText);
                var data = responseMessage.result.list[0].children;
                var treeStore = Ext.create('Ext.data.TreeStore',{
                	storeId:'treestore',
                	proxy:{
                		type:'memory',
                		data:data,
                		render: {
                			type: 'json'
                		}
                	},
                	root:{expanded: true}
                });
                if (responseMessage.success) 
                {
                	this.store = treeStore;
                }
                else
                    Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
			},
			failure: function (response) {
                	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
                }
			});
			
    	var center = me.getCenter();
		var tab = center.down('#M'+record.get('parentId'));
		
    	var removePanel = tab.down('#content');
    	tab.remove(removePanel);
    	var contentPanel = Ext.create('App.view.xs.XsJcxxbContentPanel',{
        	itemId:'content',
        	parentId:record.get('id')
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
    
    detailXsJcxxb: function( o, e, eOpts ){
    	
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var xsxxPersonalWins = Ext.ComponentQuery.query('#xsxxPersonalWin');
        	if(xsxxPersonalWins.length > 0) {
        		var win = xsxxPersonalWins[0];
        		win.setTitle('学生信息');
        		win.setIconCls('detail_16');
        		
        		win.show();
        	}else{
        		var xsxxPersonalForm = Ext.create('App.view.xs.XsxxPersonalForm',{
                    itemId:'xsxxPersonalForm',
                    layout:'form',
                    showType:'panel',
                    bodyStyle:'padding:5',
                    isAdd: false,
                    imgUrl:'xsJcxxbgetImage.action',
        	        imgId:'xh',
        	        postUrl:"xsJcxxb",
//                    autoScroll:true,
                    readOnly:true
                    
                });
            
            	var win = Ext.create('Ext.window.Window',{
            		frame:true,
            		itemId:'xsxxPersonalWin',
            		iconCls : 'detail_16',
//        			layout:'fit',
    				width : 900,
					height : 600,
					closeAction : 'hide',
					resizable : false,
					shadow : true,
					modal : true,
					closable : true,
					animCollapse : true,
					autoShow : true,
        			constrainHeader:true,
        			 autoScroll:true,
        			title:'学生信息',
            		items:[xsxxPersonalForm],
					buttons : [{
						itemId : 'cancelBtn',
						text : '退出',
					    iconCls:'return_16',
						handler : function() {
							this.up('window').close();
						}
					}]
            	});
            	var xsxxPersonalForm = win.down('form');
        		xsxxPersonalForm.isAdd = false;
        	
   			    var textfields =  xsxxPersonalForm.query('textfield');
   			    for(var i in textfields)
    	       {
   					textfields[i].setReadOnly(true);
   			   		var style = "background:none; border : 0px;";
   			  		textfields[i].setFieldStyle(style);
    	       }
   			  
//   			  		var buttons = xsxxPersonalForm.query('button');
//   			  		for(var i in buttons)
//   				  	buttons[i].setDisabled(true);
        	}
        	
        	var xsxxPersonalForm = win.down('form');
// 			 Ext.defer(function(){
// 				xsxxForm.edit(rec);
// 	        	xsxxForm.loadRecord(rec);
//		        }, 1200);
        	    xsxxPersonalForm.edit(rec);
 	        	xsxxPersonalForm.loadRecord(rec);
    	}
    },
       
    addXsJcxxb: function( o, e, eOpts ){
    	
    	var xsxxForm = Ext.create('App.view.xs.XsxxForm',{
            itemId:'xsxxForm',
            layout:'auto',
            showType:'panel',
            bodyStyle:'padding:5',
            isAdd: true,
            autoScroll:true,
            imgUrl:'xsJcxxbgetImage.action',
	        imgId:'xh',
	        postUrl:"xsJcxxb"
            
        });
    	
    	var win = Ext.create('Ext.window.Window',{
    		frame:true,
    		itemId:'xsxxWin',
			layout:'fit',
			autoShow: true,
			width:900,
			height:600,
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
			title:'增加学生信息',
    		items:[xsxxForm]
    		
    	});
    	
    	win.setIconCls('add_16');
    	
    },
    
    editXsJcxxb: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var xsxxWins1 = Ext.ComponentQuery.query('#xsxxWin1');
        	if(xsxxWins1.length > 0) {
        		var win = xsxxWins1[0];
        		win.setTitle('修改学生信息');
        		win.setIconCls('edit_16');
        		win.show();
        	}else{
        		var xsxxForm1 = Ext.create('App.view.xs.XsxxForm',{
                    itemId:'xsxxForm1',
                    layout:'form',
                    showType:'panel',
                    bodyStyle:'padding:5',
                    isAdd: false,
                    imgUrl:'xsJcxxbgetImage.action',
        	        imgId:'xh',
        	        postUrl:"xsJcxxb",
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
        			title:'修改学生信息',
            		items:[xsxxForm1]
            		
            	});
        	}
        	
        	var xsxxForm1 = win.down('form');
        	xsxxForm1.isAdd = false;
//        	var textfields =  xsxxForm.query('textfield');
// 			  for(var i in textfields){
// 				  textfields[i].setReadOnly(false);
// 			  }
// 			  var buttons = xsxxForm.query('button');
// 			  for(var i in buttons)
// 				  buttons[i].setDisabled(false);
 			  
// 			 Ext.defer(function(){
// 				xsxxForm.edit(rec);
// 	        	xsxxForm.loadRecord(rec);
//		        }, 1200);
				xsxxForm1.edit(rec);
 	        	xsxxForm1.loadRecord(rec);
		      
    	}
    },
    
    
    
    showDetailedInfo: function( grid, record, item, index){
    	
    	if(record != undefined){
        	var xsxxPersonalWins = Ext.ComponentQuery.query('#xsxxPersonalWin');
        	if(xsxxPersonalWins.length > 0) {
        		var win = xsxxPersonalWins[0];
        		win.setTitle('查看学生信息');
//        		win.setIconCls('edit_16');
        		win.show();
        	}else{
        		var xsxxPersonalForm = Ext.create('App.view.xs.XsxxPersonalForm',{
                    itemId:'xsxxPersonalForm',
                    layout:'form',
                    showType:'panel',
                    bodyStyle:'padding:5',
                    isAdd: false,
                    imgUrl:'xsJcxxbgetImage.action',
        	        imgId:'xh',
        	        postUrl:"xsJcxxb",
                    autoScroll:true,
                    readOnly:true
                    
                });
            
            	var win = Ext.create('Ext.window.Window',{
            		frame:true,
            		itemId:'xsxxPersonalWin',
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
        			title:'查看学生信息',
            		items:[xsxxPersonalForm]            		
            	});
        	
        	
        	var xsxxPersonalForm = win.down('form');
        	xsxxPersonalForm.isAdd = false;
        	
   			   var textfields =  xsxxPersonalForm.query('textfield');
   			    for(var i in textfields)
    	       {
   					textfields[i].setReadOnly(true);
   			   		var style = "background:none; border : 0px;";
   			  		textfields[i].setFieldStyle(style);
    	       }
   			  
        	}
        	
        	var xsxxPersonalForm = win.down('form');
        	    xsxxPersonalForm.edit(record);
 	        	xsxxPersonalForm.loadRecord(record);
    	}
    },
    
    deleteXsJcxxb: function( o, e, eOpts ){
        var me = this;
    	
		var action = "xsJcxxbDel.action";
		var ids = getSelIds(o.up('gridpanel'),'xh');
		if(ids.length ==0) return;
		var store = me.getStore('XsJcxxbStore');
		DoDelete(action,'xh',ids, store);
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
		
		var pGrid = tab.down('#xsJcxxbList'), store = me.getStore('XsJcxxbStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}	
		
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
    	var pGrid = tab.down('#xsJcxxbList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('XsJcxxbStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    advacedSearch: function( o, e, eOpts){
    	
    }
    
});
