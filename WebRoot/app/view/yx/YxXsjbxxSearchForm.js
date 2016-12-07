Ext.define('App.view.yx.YxXsjbxxSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.yxXsjbxxSearchForm',
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
					   	fields : [{name : 'dwh'},{name : "dwmc"}],
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
					}/*,{
						
        			xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
				    	xtype: 'textfield',
				    	itemId:'lqxym',
				    	name:'lqxym',
				    	fieldLabel:'录取学院码',
			           	width:220,
						labelWidth:80,
				        hidden:true
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
					   }),
					   		listeners:{
					   		 change: function(combo, nv, ov){
	                            if(nv!=ov){
	                            	me.down('#lqxym').setValue( combo.getValue());
	                            	me.down('#lqzym').setValue('');
		                            var zyCombo = me.down('#lqzy');
		                            zyCombo.clearValue();
		                            zyCombo.getStore().load();
		                            
	                          }
	                        }
					   }
					},{
						xtype:'textfield',
						itemId:'lqzym',
						name:'lqzym',
						fieldLabel:'录取专业码',
						hidden:true
					},{
					xtype : 'combo',
				    itemId : 'lqzy',
				    name : 'lqzy',
				    width:220,
				    labelWidth:80,
				    fieldLabel : '录取专业',
				    listConfig:{
				     	maxHeight : 160
				     },
				    matchFieldWidth : false,
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				     matchFieldWidth : false,
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
		    	   			  	  var dwhValue = me.down('#lqxy').getValue();
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
					    	me.down('#lqzym').setValue(record[0].data.xwlbm);
				 	}
				 }
				},{
						xtype:'textfield',
						itemId:'xslxm',
						name:'xslxm',
						fieldLabel:'学生类型码',
						hidden:true
					
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
						        load : function(store, records, options ){    
						            var data ={xslxm:'',xslx:''};    
						            store.insert(0,data); 
						        }    
					  	  },
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   			}]
				   }),
				   listeners:{
				 	select:function(combo,record,index){
					    	me.down('#xslxm').setValue(record[0].data.xslxm);
				 	}
				 }
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
					
					}*/]
		        });
        me.callParent(arguments);
    }
});