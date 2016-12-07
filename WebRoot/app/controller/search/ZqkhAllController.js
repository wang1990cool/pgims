Ext.define('App.controller.search.ZqkhAllController', {
			extend : 'Ext.app.Controller',

			models : ['zqkh.ViewXwZqkhModel','zqkh.XwZqkhbModel','zqkh.XwZqkhzlbModel','xs.XsJcxxbModel','main.PageModel'],
			stores : ['zd.ZdFwqbStore','zqkh.ViewXwZqkhStore','zqkh.XwZqkhbStore','xs.XsJcxxbStore','zqkh.XwZqkhzlbStore','zd.ZdShztmStore','main.PageStore'],

			refs : [{
						selector : 'zqkhAllList > zqkhAllSearchForm',
						ref : 'zqkhAllSearchForm'
					}],

	init : function() {
				this.control({
				'zqkhAllList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  'zqkhAllList button[itemId=schShowBtn]' : {
						render : this.setSchShowText
				   },
				   'zqkhAllList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'zqkhAllList button[action=detail]':{
						click:this.detail
					},
					
					'zqkhAllSearchForm button[action=search]' : {
						click : this.search
					},
					
					'zqkhAllSearchForm button[action=searchAll]' : {
						click : this.searchAll
					},
					'zqkhAllList button[action=toExcel]': {
						render: this.excelBtnRender
			 }
					
				})
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
			
	setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#zqkhAllSearchForm');
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
				var searchForm = tab.down('#zqkhAllSearchForm');
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
		var searchForm = tab.down('#zqkhAllSearchForm');
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		var pGrid = tab.down('#zqkhAllList'), store = pGrid.getStore();
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
			
	 		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
		}
		var njValue = searchForm.down('#sznj').getRawValue();
		if (njValue)
	 		searchParams.search['nj'] = "#= '" + njValue+ "'";
	 		
//	 	var xnValue = searchForm.down('#xn').getRawValue();
//		if (xnValue)
//	 		searchParams.search['xn'] = "#= '" + xnValue+ "'";
//	 		
//	 	var xqValue = searchForm.down('#xq').getRawValue();
//		if (xqValue)
//	 		searchParams.search['xq'] = "#= '" + xqValue+ "'";
	 		
		var fymcValue = searchForm.down('#fymc').getRawValue();
		if (fymcValue)
		      searchParams.search['fymc'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue)
		      searchParams.search['zydm'] = "#= '" + zymcValue+ "'";
		       
		var xslxValue = searchForm.down('#xslx').getRawValue();
		if (xslxValue)
	 		searchParams.search['xslx'] = "#= '" + xslxValue+ "'";
	 	var khrqBTime = Ext.Date.format(searchForm.down('#khrqBTime').getValue(),'Y-m-d').replace(/\-/g, "");
		var khrqETime = Ext.Date.format(searchForm.down('#khrqETime').getValue(),'Y-m-d').replace(/\-/g, "");
		if(khrqBTime && khrqETime  ){
			if(parseInt(khrqBTime) <= parseInt(khrqETime)){
			searchParams.search['khrq']="#between '" + khrqBTime + "' and '" + khrqETime + "'";
			}else{
				Ext.Msg.show({title:"提示",msg:"结束时间不得小于起始时间！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
			}
		}else if(khrqBTime && khrqETime == "" ){
			 	Ext.Msg.show({title:"提示",msg:"结束时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
		}else if(khrqBTime == ""  && khrqETime){
			 	Ext.Msg.show({title:"提示",msg:"开始时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
		}
	
		var shztValue = searchForm.down('#shzt').getRawValue();
		if (shztValue)
	 		searchParams.search['shzt'] = "#= '" + shztValue+ "'";
	 		
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
				
				var searchForm = tab.down('#zqkhAllSearchForm');
				var pGrid = tab.down('#zqkhAllList');
				searchForm.getForm().reset();

				var store = pGrid.getStore(), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},
			
	 detail: function( o, e, eOpts ){
		    	var rec = getSelRec(o.up('gridpanel'));
		    	if(rec != undefined){
		        	var win = new Ext.Window({
		        		itemId:'zqkhDetailWin',
		        		iconCls:'detail_16',
		        		autoShow: true,
		        		title:'详情',
		                layout: 'fit',
		                
		                width: 780,
		                height: 600,
		                closeAction:'destroy',
		        		resizable:false,
		        		shadow:true,
		        		modal:true,
		        		closable:true,
		        		animCollapse:true,
		        		autoShow:true,
		                items: [Ext.create('App.view.zqkh.ZqkhDetail')]
		            });
		        	var zqkhDetail = win.down('form');
		        	zqkhDetail.loadForm(rec)
		        	 var  rq = rec.data.khrq;
		          	 var year = rq.substring(0,4);
			      	 var month = rq.substring(4,6);
			      	 var day = rq.substring(6,8);
			      	 khrq = year+ "-" +month+ "-" +day;
		 	      	 zqkhDetail.down('#khrq').setValue(khrq);
		 	      	 
		 	      	 if(rec.data.shsj){
			 	      	 var  shsj = rec.data.shsj;
			 	      	 var yearsj = shsj.substring(0,10);
			 	      	 var monthsj = shsj.substring(11,19);
			 	      	 shsj = yearsj+ " " +monthsj;
			 	      	 zqkhDetail.down('#shsj').setValue(shsj);
			 	     }
		 	      	 
		    		var textfields =  zqkhDetail.query('textfield');
		    		for(var i in textfields){
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
				    textfields[i].setFieldStyle(style);
					}
		    	var me = this;
		    	var xh = rec.data.xh
				var xwZqkhzlbStore = me.getStore('XwZqkhzlbStore');
				var xwZqkhzlbProxy = xwZqkhzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['xh'] = "#= '" + xh + "'";
				xwZqkhzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwZqkhzlbStore.load({
					callback : function(records, operation, success) {
						var tab = me.getCenter().getActiveTab();
						var zqkhshForm = tab.down('#zqkhshForm');
						if (records[0] != undefined && zqkhshForm != null )
							zqkhshForm.loadForm(records[0]);
					}
				})
		    	}
		    },
	excelBtnRender: function(o, e, eOpts){
				o.operation = 'add';
			    o.actionUrl = 'viewxwzqkhtoExcel.action';
			 },	    
    
		     
	getCenter : function() {
			return this.application.getController('main.MainController').getCenter();
	 },

  initStore:function(){
    	var me = this;
    	
    	var store = me.getStore('ViewXwZqkhStore'), proxy = store.getProxy();
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
			var contentPanel = Ext.create('App.view.search.ZqkhAllContentPanel',
					{
						itemId : 'content',
						parentId : record.get('id')
					});

			tab.add(contentPanel);
			center.setActiveTab(tab);
		}
		
			
			
		})
  
    
  