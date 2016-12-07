Ext.define('App.view.kyxxck.XwKyxxckSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.xwKyxxckSearchForm',
	itemId:'xwKyxxckSearchForm',
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
					itemId:'xh',
					name:'xh',
					fieldLabel:'学号',
					width:220,
					labelWidth:80
				},{
					xtype:'textfield',
					itemId:'xm',
					name:'xm',
					fieldLabel:'姓名',
					width:220,
					labelWidth:80
				}]},{
					xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
				    	xtype: 'textfield',
				    	itemId:'fyh',
				    	name:'fyh',
				    	fieldLabel:'分院号',
			           	width:220,
						labelWidth:80,
				        hidden:true
				        },{
						xtype : 'combo',
					    itemId : 'fymc',
					    name : 'fymc',
					    fieldLabel : '所在学院',
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
					   }),
					   		listeners:{
					   		 change: function(combo, nv, ov){
	                            if(nv!=ov){
	                            	me.down('#fyh').setValue( combo.getValue());
	                            	me.down('#xwlbm').setValue('');
		                            var zyCombo = me.down('#zymc');
		                            zyCombo.clearValue();
		                            zyCombo.getStore().load();
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
				    itemId : 'zymc',
				    name : 'zymc',
				    width:220,
				    labelWidth:80,
				    fieldLabel : '专业名称',
				    listConfig:{
				     	maxHeight : 160
				     },
				    matchFieldWidth : true,
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
				   	fields :  [{name : 'zydm'},
				   	            {name : "zymc"},
				   	            {name:'dwh'},
				    	        {name:'dwmc'},
				    	        {name:'xwlbm'}
				    	        ],
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
		    	   			  	  var dwhValue = me.down('#fyh').getValue();
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
				   	autoLoad : false,
				   	fields : [{name : 'xslx'},
				   	          {name : "xslxm"},
				   	          {name:'xwlxm'},
				   	          {name:'xwlx'}
				   	          ],
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
				   		 }
				   	},
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   			}]
				   })
				},{
					xtype : 'combo',
					itemId : 'zt',
					name : 'zt',
					fieldLabel : '状态',
					valueField:'zt',
					displayField:'zt',
					 width:220,
					labelWidth:80,
					mode:'local',
					store: Ext.create('Ext.data.Store',{
						fields: ['ztm', 'zt'],
						data: [
							{"ztm": '0', "zt": "未提交"},
							{"ztm": '1', "zt": "已提交"},
							{"ztm": '2', "zt": "初审通过"},
							{"ztm": '3', "zt": "初审未通过"},
							{"ztm": '4', "zt": "终审通过"},
							{"ztm": '5', "zt": "终审未通过"}
							
						]
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