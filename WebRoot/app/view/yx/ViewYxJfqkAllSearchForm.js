Ext.define('App.view.yx.ViewYxJfqkAllSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.viewYxJfqkAllSearchForm',
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
		        	xtype: 'combo',
		            itemId: 'nj',
		            name: 'nj',
		            fieldLabel: ' 年级',
		            queryMode: 'local',
		            displayField:'nj',
		            valueField:'xq',
		           	width:220,
					labelWidth:80,
					 tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{nj}'+ 
			      	   '</div>'+
			        '</tpl>',
		            store:Ext.create('Ext.data.Store',{
		            autoLoad: true,
	                proxy:{
	                		type:'ajax',
	                		url:'viewYxJfqkAllGetXNXQ.action',
	                		actionMethods: 'post',
	                		reader:{
	                			root:'result.list',
	                			totalProperty:'result.total'
	                		},
	                		extraParams:{params:''}
	                	},
	                	listeners:{
    	   				  load:function(store, operation, eOpts){ 
	    	   					    var k, repeat = [], state = {};
					                this.each(function (r) {
					                k = r.get('nj');//sznj
					                if (state[k]) repeat.push(r);
					                else state[k] = true;
					            });
				            this.remove(repeat);
						}},
	                	fields:[{name:'xq'},{name:'nj'}],
	                	sorters:[{property:"nj",direction:"ASC"}]
	                })
    	        },/*{
					xtype : 'textfield',
					itemId : 'nj',
					name : 'nj',
					fieldLabel : '年级',
					width:230,
					labelWidth:100
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
						}]
					}]
				}]
	        });
        me.callParent(arguments);
    }
});