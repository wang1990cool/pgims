Ext.define('App.view.yx.YxXsjbxxHSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.yxXsjbxxHSearchForm',
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
					itemId : 'nj',
					name : 'nj',
					fieldLabel : '年级',
					width:230,
					labelWidth:100
				},{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号',
					width:230,
					labelWidth:100
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名',
					width:230,
					labelWidth:100
				},/*{
					xtype : 'combo',
					itemId : 'bdztm',
					name : 'bdztm',
					fieldLabel : '报到状态',
				    editable : false,
				    width:220,
					labelWidth:80,
					 tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zt}'+ 
			      	   '</div>'+
			        '</tpl>',
				    listConfig:{
				     	maxHeight : 160,
				     	maxWidth:300
				     },
				    queryMode : 'local',
				    displayField : 'zt',
				    valueField:'ztm',
				    store : Ext.create('Ext.data.Store',{
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
				   })
					
				},*/{
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