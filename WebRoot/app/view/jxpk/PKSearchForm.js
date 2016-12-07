Ext.define('App.view.jxpk.PKSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.pkSearchForm',
	itemId:'pkSearchForm',
	autoWidth: true,
	bodyPadding: 5,
	layout: 'form',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{
					labelAlign:'right'
				},
				items:[{
							xtype : 'combo',
							itemId : 'xn',
							name : 'xn',
							fieldLabel : '学年',
							allowBlank : false,	
							blankText : '必填！',
							displayField : 'xn',
							valueField:'xn',
							width:220,
							labelWidth:80,
							tpl:'<tpl for=".">' +  
					            '<div class="x-boundlist-item">' +  '{xn}'+ 
					      	   '</div>'+
					        '</tpl>',
							store:Ext.create('Ext.data.Store',{
							   	autoLoad : true,
							   	fields : [{name : 'xn'},
							   	            {name : "xq"}],
							   	proxy : {
							   		type : 'ajax',
							   		url : 'zdGetZD.action',
							   		actionMethods : 'post',
							   		reader : {
							   			root : 'result.list',
							   			totalProperty : 'totalProperty'
							   		},
							   		extraParams: {zdName:'TyXnb'},
							   		simpleSortMode : true
							   	},
							   	listeners:{
				    	   		load:function(store, operation, eOpts){ 
								            var data ={xn:'',xq:''};    
								            store.insert(0,data); 
				    	   					var k, repeat = [], state = {};
								            this.each(function (r) {
								                k = r.get('xn');
								                if (state[k]) repeat.push(r);
								                else state[k] = true;
								            });
								            this.remove(repeat);
								}},
							   	sorters : [{
							   		property : 'xn',
							   		direction : 'ASC'
							   	}]
							})
						},{
							xtype : 'combo',
							itemId : 'xq',
							name : 'xq',
							fieldLabel : '学期',
							allowBlank : false,	
							blankText : '必填！',
							displayField : 'xq',
							valueField:'xq',
							width:220,
							labelWidth:80,
							tpl:'<tpl for=".">' +  
					            '<div class="x-boundlist-item">' +  '{xq}'+ 
					      	   '</div>'+
					        '</tpl>',
							store:Ext.create('Ext.data.Store',{
							   	autoLoad : true,
							   	fields : [{name : 'xn'},
							   	            {name : "xq"}],
							   	proxy : {
							   		type : 'ajax',
							   		url : 'zdGetZD.action',
							   		actionMethods : 'post',
							   		reader : {
							   			root : 'result.list',
							   			totalProperty : 'totalProperty'
							   		},
							   		extraParams: {zdName:'TyXnb'},
							   		simpleSortMode : true
							   	},
							   	listeners:{
				    	   		load:function(store, operation, eOpts){ 
				    	   				    var data ={xn:'',xq:''};    
								            store.insert(0,data); 
				    	   					var k, repeat = [], state = {};
								            this.each(function (r) {
								                k = r.get('xq');
								                if (state[k]) repeat.push(r);
								                else state[k] = true;
								            });
								            this.remove(repeat);
								}},
							   	sorters : [{
							   		property : 'xq',
							   		direction : 'ASC'
							   	}]
							})
						},{
					xtype:'textfield',
					itemId:'kch',
					name:'kch',
					fieldLabel:'课程号',
					width:220,
					labelWidth:80
				},{
					xtype:'textfield',
					itemId:'kcmc',
					name:'kcmc',
					fieldLabel:'课程名称',
					width:220,
					labelWidth:80
				}]},{
					xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'kkkh',
						name:'kkkh',
						fieldLabel:'开课课号',
						width:220,
						labelWidth:80
					},{
						xtype:'textfield',
						itemId:'zjjsh',
						name:'zjjsh',
						fieldLabel:'主讲教师号',
						width:220,
						labelWidth:80
						},{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
						fieldLabel:'主讲教师',
						width:220,
						labelWidth:80
					},{
						xtype : 'combo',
					    itemId : 'kkdw',
					    name : 'kkdw',
					    fieldLabel : '开课单位',
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
					   })
//					   ,
//					   		listeners:{
//					   		 change: function(combo, nv, ov){
//	                            if(nv!=ov){
//		                            var zyCombo = me.down('#zymc');
//		                            zyCombo.clearValue();
//		                            zyCombo.getStore().load();
//		                            
//		                            var xslxCombo = me.down('#xslx');
//		                            xslxCombo.clearValue();
//		                            xslxCombo.getStore().load();
//	                          }
//	                        }
//					   }
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
//			,
//			dockedItems:[{
//				xtype:'toolbar',
//				dock:'bottom',
//				style:'background:transparent;',
//				layout:{type:'hbox',align:'center',pack:'center'},
//				items:[{
//					itemId:'searchBtn',
//					text:'查询',
//					tooltip:'查询',
//					iconCls:'search',
//					action:'search'
//				},{
//					itemId:'searchAllBtn',
//					text:'查询全部',
//					tooltip:'查询全部',
//					iconCls:'searchAll',
//					action:'searchAll'
//				},{
//	                itemId: 'adSearchBtn',
//	                text: '高级查询',
//	                tooltip: '高级查询',
//	                		hidden:true,
//	                iconCls: 'advancedSearch',
//	                action: 'advacedSearch'
//	            }
//			]
//			}]
		});
	    me.callParent(arguments);
	}
})