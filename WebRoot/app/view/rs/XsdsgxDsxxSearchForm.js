Ext.define('App.view.rs.XsdsgxDsxxSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.xsdsgxDsxxSearchForm',
    
	title:'查询条件',
    autoWidth: true,
    bodyPadding: 5,
    layout:'form',
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me,{
        	items:[{
	        	xtype: 'fieldcontainer',
	        	layout:'hbox',
	        	defaults:{labelAlign: 'right'},
	        	items:[{
			    	xtype: 'textfield',
			    	itemId:'gh',
			    	name:'gh',
			    	fieldLabel: '导师工号',
	        	    width:210,
					labelWidth:70
		        }, {
	        	    xtype: 'textfield',
	        	    itemId:'xm',
	        	    name:'xm',
	        	    fieldLabel: '导师姓名',
	    	  	    width:210,
					labelWidth:70
	        	}]
        	},{
        		xtype: 'fieldcontainer',
            	layout:'hbox',
            	defaults:{labelAlign: 'right'},
            	items:[{
					xtype : 'combo',
				    itemId : 'szdw',
				    name : 'szdw',
				    fieldLabel : '所在部门',
				    editable : false,
				    width:210,
				    matchFieldWidth : false,
					labelWidth:70,
					queryMode : 'local',
				    displayField : 'dwmc',
				    valueField : 'dwh',
				    store:'ViewXxDwxxStore',
			        mode:'local'
				},{
					xtype : 'combo',
				    itemId : 'dslb',
				    name : 'dslb',
				    fieldLabel : '导师类别',
				    editable : false,
				    width:210,
				    matchFieldWidth : false,
					labelWidth:70,
					queryMode : 'local',
				    displayField : 'dslb',
				    valueField : 'dslbm',
				    store:'ZdDslbmStore',
				    mode:'local'
				},{
					xtype : 'toolbar',
	//				dock : 'bottom',
					style : 'background:transparent;',
					border:'0 0 0 0',
					margin:'0 0 0 20',
					layout : {
						type : 'hbox',
						align : 'center',
						pack : 'center'
					},
					items:[{
						itemId : 'searchBtn',
						text : '查询',
						iconCls : 'search',
						action : 'search',
						handler:function(){
							var tab = me.up('window');
							var searchForm = tab.down('#xsdsgxDsxxSearchForm');
		            		
		            		var searchParams = {
		            				start:0, limit:15, page: 1, searchMode:'simple',
		            				fieldNames:[], order:'',
		            				search:{}
		                	};
		            		
		            		var pGrid = tab.down('#xsdsgxDsxxList'), store = pGrid.getStore();
		            		for(var col in pGrid.exportCols){
		            			searchParams.fieldNames.push(col);
		            		}
		            		
		            		var tFields = searchForm.query('textfield(true)');
		            		for(var i in tFields){
		            			if(tFields[i].value)
		            				searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'"
		            		}
		            		
		            		var szdwValue = searchForm.down('#szdw').getValue();
							if (szdwValue) {
								searchParams.search['szdwh'] = "#= '" + szdwValue + "'";
							}
							var dslbValue = searchForm.down('#dslb').getValue();
							if (dslbValue) {
								searchParams.search['dslbm'] = "#= '" + dslbValue + "'";
							}
		            		
		            		var proxy= store.getProxy();
		            		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		            		store.load();
		                }
					},{
						itemId : 'searchAllBtn',
						text : '全部',
						tooltip : '全部',
						iconCls : 'searchAll',
						action : 'searchAll',
						handler:function(){
							var tab = me.up('window');
							var searchForm = tab.down('#xsdsgxDsxxSearchForm');
		            		var pGrid = tab.down('#xsdsgxDsxxList'), store = pGrid.getStore();
		            		searchForm.getForm().reset();
		            		var proxy= store.getProxy();
		            		proxy.setExtraParam('params', '');
		            		store.load();
		                }
					}]
				}]
        	}]
    });
        
        me.callParent(arguments);
    }
});