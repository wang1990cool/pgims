Ext.define('App.view.pygrjh.XSJCXXDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.xsJcxxDialog',
	itemId:'xsJcxxDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
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
										itemId:'xh',
										name:'xh',
										fieldLabel:'学号',
									  	width:230,
										labelWidth:80
									},{
										xtype:'textfield',
										itemId:'nj',
										name:'nj',
										fieldLabel:'年级',
									  	width:230,
										labelWidth:80
									},{
										xtype:'label',
										itemId:'xwlb',
										name:'xwlb',
										width:200,
										margin:'5 0 0 30'
									}]},{
									   xtype:'fieldcontainer',
								       layout:'hbox',
									   defaults:{
											labelAlign:'right'
									 },
										items:[{
										xtype : 'combo',
									    itemId : 'fymc',
									    name : 'fymc',
									    fieldLabel : '学院名称',
									    editable : false,
									    width:230,
										labelWidth:80,
									    listConfig:{
									     	maxHeight : 160,
									     	maxWidth:300
									     },
									     matchFieldWidth : false,
									    queryMode : 'local',
									     tpl:'<tpl for=".">' +  
								            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
								      	   '</div>'+
								        '</tpl>',
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
									   		load:function(store,records,options){
									   			var data = {dwh:'',dwmc:''};
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
					                            	var me = this;
											   		var dialog = me.up('#xsJcxxDialog');
						                            var zyCombo = dialog.down('#zymc')
						                            zyCombo.clearValue();
						                            
						                            var zyCombo=zyCombo.getStore();
						                            zyCombo.load();
					                          }
					                        }
										 }
									},{
										xtype : 'combo',
									    itemId : 'zymc',
									    name : 'zymc',
									    width:230,
									    labelWidth:80,
									    fieldLabel : '专业名称',
									    listConfig:{
									     	maxHeight : 160
									     },
//									    matchFieldWidth : false,
									    editable : false,
									    queryMode : 'remote',
									    displayField : 'zymc',
									    valueField:'zydm',
									    store : Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields :[{name : 'zydm'},
									   	            {name : "zymc"},
									   	            {name:'dwh'},
									   	            {name:'dwmc'},
									   	            {name:'xwlb'}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams:{zdName:'ViewXkDwxkzy'},
									   		simpleSortMode : true
									   	}
									   	,
									   listeners:{
									   		load:function(store, operation, eOpts){
									   			var dwhValue = me.down('#fymc').getValue();
								                store.filterBy(function(record) {
								                    return record.get('dwh') == dwhValue;  
								                });
									   		}
									   	}
									 }),
									 listeners:{
									 	select:function(combo, record, index){
									 		me.down('#xwlb').setText(record[0].data.xwlb,true)
									 	}
									 }
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
			   		 	Ext.create('App.view.pygrjh.ViewXsJcxxList',{
			   		 		title:'',
			   		 		itemId:'viewXsJcxxList'
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})