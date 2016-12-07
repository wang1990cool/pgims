Ext.define('App.view.pygrjh.PYGRJHSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.pygrjhSearchForm',
	title:'查询条件',
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
				},	{
					xtype:'textfield',
					itemId:'nj',
					name:'nj',
					fieldLabel:'年级',
					width:220,
					labelWidth:80
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
				   		extraParams: {zdName:'ViewXxDwxx'},
				   		simpleSortMode : true
				   	},
		   			listeners:{    
				        load : function(store, records, options ){    
				            var data ={dwh:'',dwmc:''};    
				            store.insert(0,data); 
				        }    
			  	 	 }
				   }),
				   listeners:{
				   		 change: function(combo, nv, ov){
                            if(nv!=ov){
                            	me.down('#xwlbm').setValue('');
	                            var zyCombo = me.down('#zymc')
	                            zyCombo.clearValue();
	                          	zyCombo.getStore().load();
	                          	
	                          	 var xslxCombo = me.down('#xslx');
		                         xslxCombo.clearValue();
		                         xslxCombo.getStore().load();
                          }
                        }
				   }
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
				    maxWidth:500,
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
				   	fields : [{name : 'zydm'},
				   	            {name : "zymc"},
				   	            {name:'dwh'},
				    	        {name:'dwmc'},
				    	        {name:'xwlbm'}],
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
				   	},
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
				 	select:function(combo,record,index){
				 		me.down('#xwlbm').setValue(record[0].data.xwlbm);
				 		var xslxCombo = me.down('#xslx');
				 		xslxCombo.clearValue();
				 		xslxCombo.getStore().load();
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
				   	          {name:'xwlxm'}],
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
				   		load:function(store){
				   			var xwlbmValue = me.down('#xwlbm').getValue();
				   			store.filterBy(function(record){
				   				return record.get('xwlxm') == xwlbmValue;
				   			})
				   		}
				   	},
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   	}]
				   })
				}]
			}],
			dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				style:'background:transparent;',
				layout:{type:'hbox',align:'center',pack:'center'},
				items:[{
					itemId:'searchBtn',
					text:'查询',
					tooltip:'查询',
					iconCls:'search',
					action:'search'
				},{
					itemId:'searchAllBtn',
					text:'查询全部',
					tooltip:'查询全部',
					iconCls:'searchAll',
					action:'searchAll'
				},{
	                itemId: 'adSearchBtn',
	                text: '高级查询',
	                tooltip: '高级查询',
	                iconCls: 'advancedSearch',
	                action: 'advacedSearch'
	            }
			]
			}]
		});
	    me.callParent(arguments);
	}
})