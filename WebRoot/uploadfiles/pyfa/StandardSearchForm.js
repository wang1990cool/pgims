Ext.define('App.standard.StandardSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.standardSearchForm',
    
	itemId:'searchForm',
    autoWidth: true,
    bodyPadding: 5,
    layout:'form',
    defaults: {
		xtype: 'textfield',
		readOnlyCls: 'x-item-disabled',
		autoHeight : true,
		labelAlign : "right",
		width:260,
		labelWidth:80,
		padding:'3 0 0 0',
		size:20
	},
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        items: [{
    		xtype: 'fieldcontainer',
		    layout:'hbox',
			defaults:{labelAlign: 'right',width:260,labelWidth:120,},
	        items: [{
		        xtype: 'treepicker',
		      	itemId:'catType',
		      	name:'catType',
		        fieldLabel: '<font color="red">*</font>标准类别',
		        displayField: 'text',
		        value:'',
		        selectLeaf: true,
		        store:Ext.create('Ext.data.TreeStore', {
				    root: {expanded: true}
				}),
		        listeners: {
		        	'render': function(){
						Ext.Ajax.request({
		                    url: 'getTreeData.action',
		                    actionMethods: 'post',
		                    autosync: true,
		                    params: {dicTabName:'STD_CAT'},
		                    scope: this,
		                    success: function (response) {
		                        var responseMessage = Ext.JSON.decode(response.responseText);
		                        var data = responseMessage.result.list[0].children;
		                        var treeStore = Ext.create('Ext.data.TreeStore', {
								    storeId: 'treestore',
								    proxy: {
								        type: 'memory',
								        data:data,
								        reader: {
								            type: 'json'
								        }
								    },
								    root:{expanded: true}
								});
		                        if (responseMessage.success)
									this.store = treeStore;
		                        else
		                            Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    },
		                    failure: function (response) {
		                    	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    }
		                })
		        	}
		        }
			},{
            	xtype: 'combo',
            	itemId: 'propType',
            	name: 'propType',
            	fieldLabel: '标准性质',
            	width:260,
            	labelWidth:120,
                editable:false,
                queryMode: 'local',
                displayField:'codeName',
                valueField:'codeId',
                store:Ext.create('Ext.data.Store',{
                	autoLoad: true,
                	proxy:{
                		type:'ajax',
                		url:'getDicValue.action',
                		actionMethods: 'post',
                		reader:{
                			root:'result.list',
                			totalProperty:'result.total'
                		},
                		extraParams:{dicTabName:'ZB_TY_BZXZ'}
                	},
                	fields:[{name:'codeId',type:'string'},{name:'codeName',type:'string'}]
                })
			},{
				xtype : 'combo',
				itemId : 'typeType',
				name : 'typeType',
				fieldLabel : '标准种类',
				width:260,
				labelWidth:120,
	            editable: false,
				queryMode : 'remote',
				displayField : 'codeName',
				valueField : 'codeId',
				store:Ext.create('Ext.data.Store',{
					autoLoad:true,
					proxy: {
						type: 'ajax',
						url: 'getDicValue.action',
						actionMethods: 'post',
          				reader: {
			                root: 'result.list',
			                totalProperty: 'totalProperty'
			            },
						extraParams: {dicTabName:'ZB_TY_BZZL'}	          				
					},  
			 		fields:[{name:'codeId',type:'string'},{name:'codeName',type:'string'}]
				}) 
			},{
		        xtype: 'treepicker',
		      	itemId:'classifyType',
		      	name:'classifyType',
		        fieldLabel: '<font color="red">*</font>标准分类',
		        displayField: 'text',
		        value:'',
		        selectLeaf: true,
		        store:Ext.create('Ext.data.TreeStore', {
				    root: {expanded: true}
				}),
		        listeners: {
		        	'render': function(){
						Ext.Ajax.request({
		                    url: 'getTreeData.action',
		                    actionMethods: 'post',
		                    autosync: true,
		                    params: {dicTabName:'STD_CLASSIFY'},
		                    scope: this,
		                    success: function (response) {
		                        var responseMessage = Ext.JSON.decode(response.responseText);
		                        var data = responseMessage.result.list[0].children;
		                        var treeStore = Ext.create('Ext.data.TreeStore', {
								    storeId: 'treestore',
								    proxy: {
								        type: 'memory',
								        data:data,
								        reader: {
								            type: 'json'
								        }
								    },
								    root:{expanded: true}
								});
		                        if (responseMessage.success)
									this.store = treeStore;
		                        else
		                            Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    },
		                    failure: function (response) {
		                    	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    }
		                })
		        	}
		        }
			}]
        	},{	
        		xtype: 'fieldcontainer',
			    layout:'hbox',
				defaults:{labelAlign: 'right'},
				items:[{
					xtype: 'textfield',
	            	itemId: 'stdIcs',
	            	name: 'stdIcs',
	            	width:260,
					labelWidth:120,
	            	fieldLabel: '国际标准分类',
	            	allowBlank: false,
	            	blankText : '格式 XX XXX XX'
				},{
					xtype: 'textfield',
	            	itemId: 'stdCss',
	            	name: 'stdCss',
	            	width:260,
	            	labelWidth:120,
	            	fieldLabel: '中国标准分类',
	            	blankText : '格式 XX XXX XX'
			   },{
					xtype: 'textfield',
	            	itemId: 'stdCode',
	            	name: 'stdCode',
	            	width:260,
	            	labelWidth:120,
	            	fieldLabel: '标准号',
	            	blankText : '必填！'
			  },{
					xtype: 'textfield',
	            	itemId: 'stdCname',
	            	name: 'stdCname',
	            	width:260,
	            	labelWidth:120,
	            	fieldLabel: '标准名称'
			  }]
			},{
				xtype: 'fieldcontainer',
			    layout:'hbox',
				defaults:{labelAlign: 'right'},
				items:[{
					xtype: 'textfield',
	            	itemId: 'stdEname',
	            	name: 'stdEname',
	            	width:260,
	            	labelWidth:120,
	            	fieldLabel: '标准英文名称'
				},{
					xtype: 'textfield',
	            	itemId: 'stdTechmagUnit',
	            	name: 'stdTechmagUnit',
	            	fieldLabel: '标准技术归口单位',
	            	width:260,
	            	labelWidth:120
				},{
					xtype: 'textfield',
	            	itemId: 'stdDraftUnit',
	            	name: 'stdDraftUnit',
	            	fieldLabel: '标准起草单位',
	            	width:260,
	            	labelWidth:120
				},{
					xtype: 'textfield',
	            	itemId: 'stdDrafters',
	            	name: 'stdDrafters',
	            	fieldLabel: '标准主要起草人',
	            	width:260,
	            	labelWidth:120
				}]
	        }],
			dockedItems: [{
			    xtype: 'toolbar',
			    dock: 'bottom',
			    style:'background:transparent;',
			    layout:{type:'hbox',align:'center',pack:'center'},
			    items: [{
	                itemId: 'schBtn',
	                text: '查询',
	                tooltip: '查询',
	                iconCls: 'search',
	              handler:function( o, e, eOpts){
	                	var tab = Ext.getCmp('mainContent').getActiveTab();
	            		var searchForm = tab.down('#searchForm');
	            		
	            		var searchParams = {
	            				start:0, limit:15, page: 1, searchMode:'simple',
	            				fieldNames:[], order:'',
	            				search:{}
	                	};
	            		
	            		var pGrid = tab.down('#StandardGrid'), store = pGrid.getStore();
	            		for(var col in pGrid.exportCols){
	            			searchParams.fieldNames.push(col);
	            		}
	            		
	            		var tFields = searchForm.query('textfield(true)');
	            		for(var i in tFields){
	            			if(tFields[i].value)
	            				searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'"
	            		}
	            		
	            		var catTypeValue = searchForm.down('#catType').getValue();
	            		if(catTypeValue)
	            			searchParams.search['catType']="#= '" + catTypeValue + "'";
	            		var propTypeValue = searchForm.down('#propType').getValue();
	            		if(propTypeValue)
	            			searchParams.search['propType']="#= '" + propTypeValue + "'";
	            		var typeTypeValue = searchForm.down('#typeType').getValue();
	            		if(typeTypeValue)
	            			searchParams.search['typeType']="#= '" + typeTypeValue + "'";
	            		var classifyTypeValue = searchForm.down('#classifyType').getValue();
	            		if(classifyTypeValue)
	            			searchParams.search['classifyType']="#= '" + classifyTypeValue + "'";
	            		var proxy= store.getProxy();
	            		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	            		store.load();
	                }
	            },{
	               itemId: 'searchAllBtn',
	                text: '全部',
	                tooltip: '全部',
	                iconCls: 'searchAll',
	                handler:function( o, e, eOpts){
	                	var tab = Ext.getCmp('mainContent').getActiveTab();
	            		var searchForm = tab.down('#searchForm');
	                	var ProGrid = tab.down('#StandardGrid');
	                	searchForm.getForm().reset();
	                	
	                	var store = ProGrid.getStore(), proxy = store.getProxy();
	                	proxy.setExtraParam('params', '');
	                	store.load();
	                }
	            }]
			}]
        });
        me.callParent(arguments);
    }
});