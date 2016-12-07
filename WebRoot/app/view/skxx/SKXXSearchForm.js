Ext.define('App.view.skxx.SKXXSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.skxxSearchForm',
	itemId:'skxxSearchForm',
	title : '查询条件',
	autoWidth : true,
	bodyPadding : 5,
	layout : 'form',

	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype : 'fieldcontainer',
				layout : 'hbox',
				defaults :{
				labelAlign : 'right'
				},
				items : [{
					xtype : 'textfield',
					itemId : 'kkkh',
					name : 'kkkh',
					fieldLabel : '开课课号',
					width:220,
					labelWidth:80
				},{
				    xtype : 'textfield',
					itemId : 'kch',
					name : 'kch',
					fieldLabel : '课程号',
					width:220,
					labelWidth:80
				},{
				    xtype : 'textfield',
					itemId : 'kcmc',
					name : 'kcmc',
					fieldLabel : '课程名称',
					width:220,
					labelWidth:80
				}
					]
			},{
					xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
						xtype : 'combo',
					    itemId : 'kkdw',
					    name : 'kkdw',
					    fieldLabel : '开课单位',
					    editable : false,
					 	 width:220,
						labelWidth:80,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    listConfig:{
					     	maxHeight : 160,
					     	maxWidth:300
					     },
					     matchFieldWidth : false,
					    queryMode : 'local',
					    displayField : 'dwmc',
					    valueField:'dwh',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'dwh'},
					   	            {name : "dwmc"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'viewXxJxdwGetAll.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
//					   		extraParams: {zdName:'ViewXxJxdw'},
					   		simpleSortMode : true
					   	},
	   					listeners:{
					   		load:function(store,records,options){
					   			var data = {dwh:'',dwmc:''};
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
					    itemId : 'pydw',
					    name : 'pydw',
					    fieldLabel : '培养单位',
					    editable : false,
					    matchFieldWidth : false,
					    width:220,
						labelWidth:80,
						tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
				      	   '</div>'+
				        '</tpl>',
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
					   		url : 'viewXxJxdwGetAll.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
//					   		extraParams: {zdName:'ViewXxJxdw'},
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
					   }),
					   		listeners:{
					   		 change: function(combo, nv, ov){
	                            if(nv!=ov){
	                            	me.down('#zydm').setValue('');
		                            var zyCombo = me.down('#zymc');
		                            zyCombo.clearValue();
		                            zyCombo.getStore().load();
	                          }
	                        }
					   }
					},{
						xtype:'textfield',
						itemId:'zydm',
						name:'zydm',
						fieldLabel:'学位类别码',
						hidden:true
					},{
					xtype : 'combo',
				    itemId : 'zymc',
				    name : 'zymc',
				      width:220,
					labelWidth:80,
				    fieldLabel : '专业名称',
//				    listConfig:{
//				     	maxHeight : 160
//				     },
//				    matchFieldWidth : false,
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				     matchFieldWidth : false,
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zymc}'+ ' ({zydm})' +
			      	   '</div>'+
			        '</tpl>',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
				   	fields :  [{name : 'zydm'},
				   	            {name : "zymc"},
				   	            {name:'dwh'},
				    	        {name:'dwmc'}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams:{zdName:'XkXkzyjhb'},
				   		simpleSortMode : true
				   	},				   	
				   	listeners:{
		    	   		load:function(store, operation, eOpts){
		    	   					var dwhValue = me.down('#pydw').getValue();
					                store.filterBy(function(record) {
					                    return record.get('dwh') == dwhValue;  
					              });
					              	   var k, repeat = [], state = {};
								            this.each(function (r) {
								                k = r.get('zydm');
								                if (state[k]) repeat.push(r);
								                else state[k] = true;
								            });
								           this.remove(repeat);
   					 		}
		    	  	 }
				 })
				},{
				xtype : 'toolbar',
//				dock : 'bottom',
				style : 'background:transparent;',
				border:'0 0 0 0',
				margin:'0 0 0 10',
				layout : {
					type : 'hbox',
					align : 'center',
					pack : 'center'
				},
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
				},{
					itemId : 'adSearchBtn',
					text : '高级查询',
					hidden:true,
					iconCls : 'advancedSearch',
					action : 'advacedSearch'
				}]
			}]
		}]
		});
		me.callParent(arguments);
	}
})
