Ext.define('App.controller.kttjshcx.ViewXwKtbgzlzbController', {
    extend: 'Ext.app.Controller',
    
    models: ['kttjsh.ViewXwKtbgzlzbModel','kttjsh.XwKtbgzlbModel'],
    stores: ['kttjsh.ViewXwKtbgzlzbStore','kttjsh.XwKtbgzlbStore','zd.ZdFwqbStore'],
    
    refs: [{  
        selector: 'viewXwKtbgzlzbSearchForm',  
        ref: 'viewXwKtbgzlzbSearchForm'  
    }],
    init: function() {
		this.control(
			{
				
			'#viewXwKtbgzlzbList':{
				itemdblclick: this.itemDblClick
			},
					
			'#viewXwKtbgzlzbList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			'#viewXwKtbgzlzbList gridtoolbar button[action=detail]': {
				click: this.detail
			},
//			'viewXwKtbgsqList gridtoolbar button[action=edit]': {
//				click: this.editClass
//			},
			
			'viewXwKtbgzlzbList gridtoolbar button[action=edit]': {
				click: this.editClass
			},
			'viewXwKtbgzlzbList gridtoolbar button[action=withdraw]': {
				click:  this.withdrawKkjh
			},
			'viewXwKtbgzlzbList gridtoolbar button[action=refresh]': {
				click: this.refreshClass
			},
			'#viewXwKtbgzlzbList gridtoolbar button[action=toExcel]': {
				render: this.excelBtnRender
			},
			'#viewXwKtbgzlzbList gridtoolbar button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'#viewXwKtbgzlzbList gridtoolbar button[action=showSearch]': {
				click: this.showSearch
			},
			
			'viewXwKtbgzlzbSearchForm button[action=search]': {
				click: this.search
			},
			'viewXwKtbgzlzbSearchForm button[action=searchAll]': {
				click: this.searchAll
			}
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    initStore:function(){
    	var me = this;
    	var store = me.getStore('ViewXwKtbgzlzbStore');
//    	var searchParams = {
//				start:0, limit:15, page: 1, searchMode:'simple',
//				fieldNames:[], order:'',
//				search:{}
//    	};
//    	var ztmll= 'TG';
//    	searchParams.search['shztm'] = "#= '" + ztmll + "'";
    	proxy = store.getProxy();
    	proxy.setExtraParam('params','');
    	store.load();
    },
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'viewXwKtbgzlzbtoExcel.action'
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

    onLaunch:function(record){
    	var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create(
					'App.view.kttjshcx.ViewXwKtbgzlzbContentPanel', {
						itemId : 'content',
						parentId : record.get('id')
					});
		tab.add(contentPanel);
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
    itemDblClick: function(o, record, item, index, e, eOpts){
    	var me = this;
    	me.detail(o,e,eOpts);
	},
	
    detail: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var win = new Ext.Window({
        		itemId:'viewXwKtbgzlzbWin',
        		iconCls:'detail_16',
        		autoShow: true,
        		title:'详情',
                layout: 'fit',
//                x:300,
//                y:150,
               	 x : 300,
				y : 3,
                width: 850,
                height: 550,
                closeAction:'destroy',
        		resizable:false,
        		shadow:true,
        		modal:true,
        		closable:true,
constrain :true,  
        		animCollapse:true,
        		autoShow:true,
                items: [Ext.create('App.view.kttjshcx.ViewXwKtbgzlzbForm')]
            });
        	var viewXwKtbgzlzbForm = win.down('form');
        	viewXwKtbgzlzbForm.loadForm(rec)
        	 var  rq = rec.data.ktrq;
//        	 var sj = rec.data.dsshsj;
          	 var year = rq.substring(0,4);
	      	 var month = rq.substring(4,6);
	      	 var day = rq.substring(6,8);
	      	 ktrq = year+ "-" +month+ "-" +day;
 	      	 viewXwKtbgzlzbForm.down('#ktrq').setValue(ktrq);
 	      	 if(rec.data.dsshsj){
 	      	 var  dsshsj = rec.data.dsshsj;
 	      	 var yearsj = dsshsj.substring(0,10);
 	      	 var monthsj = dsshsj.substring(11,19);
 	      	     dsshsj = yearsj+ " " +monthsj;
 	      	     viewXwKtbgzlzbForm.down('#dsshsj').setValue(dsshsj);
 	      	  }
    		var textfields =  viewXwKtbgzlzbForm.query('textfield');
    		for(var i in textfields){
			textfields[i].setReadOnly(true);
			var style = "background:none; border:0px";
		    textfields[i].setFieldStyle(style);
			}
    	}
    	var me = this;
		var xh = rec.data.xh
		var xwKtbgzlbStore = me.getStore('XwKtbgzlbStore');
		var xwKtbgzlbProxy = xwKtbgzlbStore.getProxy();
		var searchParams = {
			searchMode : 'simple',
			search : {}
		};
		searchParams.search['xh'] = "#= '" + xh + "'";
		xwKtbgzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xwKtbgzlbStore.load({
			callback : function(records, operation, success) {
				var tab = me.getCenter().getActiveTab();
				var viewXwKtbgzlzbForm = tab.down('#viewXwKtbgzlzbForm');
				if (records[0] != undefined && viewXwKtbgzlzbForm != null )
					viewXwKtbgzlzbForm.loadForm(records[0]);
			}
		})
    },
    
  refreshClass: function(o, e, eOpts){
	   var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgsqList');
	   if(viewXwKtbgsqLists.length > 0) {
		   var viewXwKtbgsqList = viewXwKtbgsqLists[0];
    	   var store = viewXwKtbgsqList.getStore();
    	   store.load();
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
		var pGrid = tab.down('#viewXwKtbgzlzbList'), store = me.getStore('ViewXwKtbgzlzbStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
			
	 		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
		}
		var njValue = searchForm.down('#xn').getRawValue();
		if (njValue)
	 		searchParams.search['xn'] = "#= '" + njValue+ "'";
	 	
	 	var njValue = searchForm.down('#xq').getRawValue();
		if (njValue)
	 		searchParams.search['xq'] = "#= '" + njValue+ "'";
	 		
		 var fymcValue = searchForm.down('#fymc').getValue();
		if (fymcValue)
		      searchParams.search['yxsh'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getRawValue();
		if (zymcValue)
		      searchParams.search['zymc'] = "#= '" + zymcValue+ "'";
		       
		var xslxValue = searchForm.down('#xslx').getRawValue();
		if (xslxValue)
	 		searchParams.search['xslx'] = "#= '" + xslxValue+ "'";
	 	
	 		var shztValue = searchForm.down('#shzt').getRawValue();
		if (shztValue)
	 		searchParams.search['shzt'] = "#= '" + shztValue+ "'";
	 		
	 	var ktrqBTime = Ext.Date.format(searchForm.down('#ktrqBTime').getValue(),'Y-m-d').replace(/\-/g, "");
		var ktrqETime = Ext.Date.format(searchForm.down('#ktrqETime').getValue(),'Y-m-d').replace(/\-/g, "");
		if(ktrqBTime && ktrqETime  ){
			if(parseInt(ktrqBTime) <= parseInt(ktrqETime)){
			searchParams.search['ktrq']="#between '" + ktrqBTime + "' and '" + ktrqETime + "'";
			}else{
				Ext.Msg.show({title:"提示",msg:"结束时间不得小于起始时间！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
			}
		}else if(ktrqBTime && ktrqETime == "" ){
			 	Ext.Msg.show({title:"提示",msg:"结束时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
		}else if(ktrqBTime == ""  && ktrqETime){
			 	Ext.Msg.show({title:"提示",msg:"开始时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
		}
//	 	alert(Ext.JSON.encode(searchParams))
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
				var pGrid = tab.down('#viewXwKtbgzlzbList');
				searchForm.getForm().reset();

				var store = pGrid.getStore(), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			}
    
});
