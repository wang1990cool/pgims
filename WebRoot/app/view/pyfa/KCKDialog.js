Ext.onReady(function(){
Ext.define('App.view.pyfa.KCKDialog',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.kckDialog',
	itemId:'kckDialog',
	initComponent:function(){
			var me = this;
			Ext.applyIf(me,{
					autoWidth: true,
					bodyPadding: 4,
					layout: 'form',
					margin:'0 0 3 0',
					height:40,
					items:[
					Ext.create('Ext.form.Panel',{
 						itemId:'searchForm',
			   	 		autoWidth: true,
						bodyPadding: 5,
						layout: 'form',
						margin:'0 0 10 0',
						height:70,
			        	items:[{
				        	       xtype:'fieldcontainer',
							       layout:'hbox',
								   defaults:{
										labelAlign:'right'
									},
									items:[{
										xtype:'textfield',
										itemId:'kcmc',
										name:'kcmc',
										fieldLabel:'课程名称',
									  	 width:230,
										labelWidth:80
									},{
										xtype : 'combo',
									    itemId : 'kkdw',
									    name : 'kkdw',
									    fieldLabel : '开课单位',
									    editable : false,
									    width:230,
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
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ViewXxJxdw'},
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
									}]},{
									   xtype:'fieldcontainer',
								       layout:'hbox',
									   defaults:{
											labelAlign:'right'
									 },
										items:[{
										xtype : 'combo',
									    itemId : 'pycc',
									    name : 'pycc',
									    fieldLabel : '培养层次',
									    editable : false,
									    width:230,
										labelWidth:80,
										tpl:'<tpl for=".">' +  
								            '<div class="x-boundlist-item">' +  '{pycc}'+ 
								      	   '</div>'+
								        '</tpl>',
									    listConfig:{
									     	maxHeight : 160
									     },
									    queryMode : 'local',
									    displayField : 'pycc',
									    valueField:'pyccm',
									    store : Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields : [{name : 'pyccm'},
									   	            {name : "pycc"}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ZdPyccm'},
									   		simpleSortMode : true
									   	},
									   	listeners:{
									   		 load : function(store, records, options ){    
										            var data ={pyccm:'',pycc:''};    
										            store.insert(0,data); 
										       } 
									   	},
									   	sorters : [{
									   		property : 'pyccm',
									   		direction : 'ASC'
									   	}]
									   })
									},{
									xtype: 'combo',
									itemId: 'ggkbz',
									name: 'ggkbz',
									width:230,
									labelWidth:80,
									fieldLabel: '公共课程',
									queryMode: 'local',
									editable: false,
									tpl:'<tpl for=".">' +  
							            '<div class="x-boundlist-item">' +  '{ggkbz}'+ 
							      	   '</div>'+
							            '</tpl>',
								    displayField: 'ggkbz',
								    valueField:'ggkbzm',
								    store:  Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields : [{name : 'ggkbz'},
									   	            {name : "ggkbzm"}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ZdGgkbzm'},
									   		simpleSortMode : true
									   	},
									   	listeners:{
									   		 load : function(store, records, options ){    
										            var data ={ggkbz:'',ggkbzm:''};    
										            store.insert(0,data); 
										       } 
									   	},
									   	sorters : [{
									   		property : 'ggkbzm',
									   		direction : 'ASC'
									   	}]
									   })
								},{
										xtype:'toolbar',
										style:'background:transparent;',
										border:'0 0 0 0',
										layout:{type:'hbox',align:'center',pack:'center'},
										items:[{
													itemId:'searchBtn',
													text:'查询',
													tooltip:'查询',
													action:'search',
													iconCls:'search',
													margin:'0 0 0 20'
											},{
												itemId:'searchAllBtn',
												text:'全部',
												tooltips:'全部',
												iconCls:'searchAll',
												action:'searchAll'
											}]
									}]
				         	}]
			   		 }),
					
					Ext.create('App.view.pyfa.KCKDialogList',{
							itemId:'kckDialogList'
					})]
			}),
			 me.callParent(arguments);
		}
  })
})