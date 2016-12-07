Ext.define('App.view.skxx.SKXXMXSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.skxxmxSearchForm',
//	itemId:'skxxmxSearchForm',
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
					itemId : 'kkjhh',
					name : 'kkjhh',
					fieldLabel : '开课计划号',
					width:220,
					labelWidth:80
				},{
				    xtype : 'textfield',
					itemId : 'kcmc',
					name : 'kcmc',
					fieldLabel : '课程名称',
					width:220,
					labelWidth:80
				},{
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
				}]
			},{
					xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
						xtype : 'combo',
					    itemId : 'pydw',
					    name : 'pydw',
					    fieldLabel : '培养单位',
					    editable : false,
					    width:220,
					    matchFieldWidth : false,
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
	                            	me.down('#xwlbm').setValue('');
		                            var zyCombo = me.down('#xkzy');
		                            zyCombo.clearValue();
		                            zyCombo.getStore().load();
		                            
//		                            var xslxCombo = me.down('#xslx');
//		                            xslxCombo.clearValue();
//		                            xslxCombo.getStore().load();
	                          }
	                        }
					   }
					},{
						xtype:'textfield',
						itemId:'xwlbm',
						name:'xwlbm',
						fieldLabel:'学位类别码',
						hidden:true
					},{
					xtype : 'combo',
				    itemId : 'xkzy',
				    name : 'xkzy',
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
				 }),
				 listeners:{
				 	select:function(combo,record,index){
					    	me.down('#xwlbm').setValue(record[0].data.xwlbm);
//					    	var xslxCombo = me.down('#xslx');
//					        xslxCombo.clearValue();
//                          	xslxCombo.getStore().load();
				 	}
				 }
				},{
					xtype : 'combo',
				    itemId : 'xslx',
				    name : 'xslx',
				    fieldLabel : '学生类型',
				    editable : false,
				    width:220,
					labelWidth:80,
				    queryMode : 'remote',
				    displayField : 'xslx',
				    valueField:'xslxm',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'xslx'},
				   	          {name : "xslxm"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'XsXslxb'},
				   		simpleSortMode : true
				   	},
				   	listeners:{
				   		load:function(store, operation, eOpts){
				    	   				    var data ={xslx:'',xslxm:''};    
								            store.insert(0,data); 
								
//				   			   var xwlbmValue=me.down('#xwlbm').getValue();
//				                store.filterBy(function(record) {
//				                	return record.get('xwlxm') == xwlbmValue;  
//				             });
				   		 }
				   	},
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   	}]
				   })
				},{
				xtype : 'toolbar',
//				dock : 'bottom',
				border:'0 0 0 0',
				margin:'0 0 0 10',
				style : 'background:transparent;',
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
			}],
			dockedItems:[]
		});
		me.callParent(arguments);
	}
})
