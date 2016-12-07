Ext.define('App.view.yx.XsbdCxSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.xsbdCxSearchForm',
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
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号',
					width:220,
					labelWidth:80
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名',
					width:220,
					labelWidth:80
				},{
						xtype : 'combo',
					    itemId : 'lqxy',
					    name : 'lqxy',
					    fieldLabel : '录取学院',
					    editable : false,
					    width:220,
					    matchFieldWidth : false,
						labelWidth:80,
					    listConfig:{
					     	maxHeight : 160
					     },
					    queryMode : 'remote',
					    displayField : 'dwmc',
					    valueField:'dwh',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'dwh'},
					   	            {name : "dwmc"}],
					   	proxy : {
					   		type : 'ajax',
						url : 'yxXsjbxxgetAllLqxy.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'list',
					   			totalProperty : 'totalProperty'
					   		},
					   		simpleSortMode : true
					   	},
					   	listeners:{    
						        load : function(store, records, options ){    
						            var data ={dwh:'',dwmc:''};    
						            store.insert(0,data); 
						        }    
					  	  },
					   	sorters : [{
					   		property : 'dwh',
					   		direction : 'ASC'
					   	}]
					   })
					},{
					xtype : 'combo',
					itemId : 'bdztm',
					name : 'bdztm',
					fieldLabel : '报到状态',
				    editable : false,
				    width:220,
					labelWidth:80,
					/* tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zt}'+ 
			      	   '</div>'+
			        '</tpl>',
				    listConfig:{
				     	maxHeight : 160,
				     	maxWidth:300
				     },*/
				    queryMode : 'local',
				    displayField : 'zt',
				    valueField:'ztm',
				    store: Ext.create('Ext.data.Store',{
					fields: ['ztm', 'zt'],
					data: [
						{"ztm": '0', "zt": "未报到"},
						{"ztm": '1', "zt": "已报到"}
					]
				})
				    /*store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'ztm'},
				   	            {name : "zt"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'ztgetZt.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {ztlb:'XSBD'},
				   		simpleSortMode : true
				   	},
					listeners:{
				   		load:function(store,records,options){
				   			var data = {ztm:'',zt:''};
				   			store.insert(0,data); 
				   		}
				   	},
				   	sorters : [{
				   		property : 'ztm',
				   		direction : 'ASC'
				   	}]
				   })*/
					
				},{
					xtype:'toolbar',
					style:'background:transparent;',
					border:'0 0 0 0',
					layout:{type:'hbox',align:'left',pack:'left'},
					items:[{
							itemId : 'searchBtn',
							text : '查询',
							iconCls : 'search',
							action : 'search'
						},{
							itemId : 'searchAllBtn',
							text : '全部',
							tooltip : '全部',
							iconCls : 'searchAll',
							action : 'searchAll'
		            }]
					}]
				}]
	        });
        me.callParent(arguments);
    }
});