Ext.define('App.view.search.KKJHAllSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.kkjhAllSearchForm',
	itemId:'kkjhAllSearchForm',
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
					itemId:'kkjhh',
					name:'kkjhh',
					fieldLabel:'开课计划号',
					width:220,
					labelWidth:80
				},{
					xtype:'textfield',
					itemId:'xn',
					name:'xn',
					fieldLabel:'学年',
					width:220,
					labelWidth:80
				},	{
					xtype:'textfield',
					itemId:'xq',
					name:'xq',
					fieldLabel:'学期',
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
				    itemId : 'nj',
				    name : 'nj',
				    width:220,
					labelWidth:80,
				    fieldLabel : '所在年级',
				    editable : false,
				    listConfig:{
				     	maxHeight : 160
				     },
				    queryMode : 'local',
				    displayField : 'nj',
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{nj}'+ 
			      	   '</div>'+
			        '</tpl>',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'nj'},{name:'pxh'}],
				   	proxy : {
				   		type : 'ajax',
				   			url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'TyNjb'},
				   		simpleSortMode : true
				   	},
				   	listeners:{
				   		 load : function(store, records, options ){    
					            var data ={nj:'',pxh:''};    
					            store.insert(0,data); 
					       } 
				   	},
				   	sorters : [{
				   		property : 'pxh',
				   		direction : 'ASC'
				   	}]
				   })
				},{
					xtype:'textfield',
					itemId:'pydwh',
					name:'pydwh',
					hidden:true,
					fieldLabel:'培养单位号'
				},{
					xtype : 'combo',
				    itemId : 'pydw',
				    name : 'pydw',
				    width:220,
					labelWidth:80,
				    fieldLabel : '培养单位',
				    matchFieldWidth : false,
				    editable : false,
				    listConfig:{
				     	maxHeight : 160
				     },
				    queryMode : 'local',
				    displayField : 'dwmc',
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
			      	   '</div>'+
			        '</tpl>',
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
//				   		extraParams: {zdName:'ViewXxJxdw'},
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
					   	select:function(combo, record, index){
					    	me.down('#pydwh').setValue(record[0].data.dwh);
					 		me.down('#xkzy').setValue('');
					    	me.down('#xwlbm').setValue('');
					    	
				    	    var zyCombo = me.down('#xkzym')
                            zyCombo.clearValue();
                            
                       		zyCombo.getStore().load();
                            
//                            var xslxCombo = me.down('#xslx');
//                            xslxCombo.clearValue();
//                            
//                            xslxCombo.getStore().load(); 
					   	}
					 }
				},{
					xtype:'textfield',
					itemId:'xkzy',
					name:'xkzy',
					fieldLabel : '学科专业',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'xkzym',
				    name : 'xkzym',
				    fieldLabel : '学科专业',
				    width:220,
					labelWidth:80,
//				    listConfig:{
//				     	maxHeight : 160,
//				     	maxWidth:400
//				     },
				    editable : false,
				    queryModel: 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				     matchFieldWidth : false,
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zymc}'+ ' ({zydm})' +
			      	   '</div>'+
			        '</tpl>',
				    store:Ext.create('Ext.data.Store',{
				    	  autoLoad: false,
				    	  fields:[{name:'zydm'},
				    	             {name:'zymc'},
				    	             {name:'dwh'}],
				    	   proxy:{
				    	   		type:'ajax',
				    	   		url:'zdGetZD.action',
				    	   		actionMethod:'post',
				    	   		reader:{
				    	   			root:'result.list',
				    	   			totalProperty:'totalProperty'
				    	   		},
				    	   		extraParams:{zdName:'XkXkzyjhb'},
				    	   		simpleSortMode : true
				    	   },
				    	   listeners:{
				    	   		load:function(store, operation, eOpts){
				    	   			   var pydwhValue = me.down('#pydwh').getValue();
							                store.filterBy(function(record) {
							                    return record.get('dwh') == pydwhValue;  
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
					   	select:function(combo, record, index){
					    	me.down('#xkzy').setValue(record[0].data.zymc);
					    	me.down('#xwlbm').setValue(record[0].data.xwlbm);
					    	
//					    	var xslxCombo = me.down('#xslx');
//					        xslxCombo.clearValue();
//                            var xslxCombo = xslxCombo.getStore();
//                            xslxCombo.load();
					   	  }
					   }
				},{
					xtype:'textfield',
					itemId:'xwlbm',
					name:'xwlbm',
					hidden:true,
					fieldLabel:'学位类别码'
				},{
					xtype:'textfield',
					itemId:'xslxm',
					name:'xslxm',
					hidden:true,
					fieldLabel:'学生类型码'
				},{
					xtype : 'combo',
				    itemId : 'xslx',
				    name : 'xslx',
				    fieldLabel : '学生类型',
				    editable : false,
				    width:220,
					labelWidth:80,
					blankText:'必填',
				    queryMode : 'remote',
				    displayField : 'xslx',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
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
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   	}],
				   	listeners:{
				   		load:function(store, operation, eOpts){
				   				  var data ={xslx:'',xslxm:''};    
							  store.insert(0,data); 
//					   			   var xwlbmValue = me.down('#xwlbm').getValue();
//					                store.filterBy(function(record) {
//					                	return record.get('xwlxm') == xwlbmValue;
//					             });
				   		 }
				 	  	}
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#xslxm').setValue(record[0].data.xslxm);
					       }
					   }
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
//	                hidden:true,
//	                iconCls: 'advancedSearch',
//	                action: 'advacedSearch'
//	            }
//			]
//			}]
		});
	    me.callParent(arguments);
	}
})