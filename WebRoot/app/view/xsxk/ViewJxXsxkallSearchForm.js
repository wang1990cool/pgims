Ext.define('App.view.xsxk.ViewJxXsxkallSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.viewJxXsxkallSearchForm',
	title : '查询条件',
	autoWidth : true,
	bodyPadding : 5,
	layout : 'form',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me,{
        	items:[{
		    		xtype: 'fieldcontainer',
		        	layout:'hbox',
		        	defaults:{labelAlign: 'right'},
		        	items:[{ xtype: 'combo',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: ' 学年',
		            queryMode: 'local',
		            displayField:'xn',
		            valueField:'xq',
		           	width:220,
					labelWidth:80,
		            store:Ext.create('Ext.data.Store',{
		            autoLoad: true,
	                proxy:{
	                		type:'ajax',
	                		url:'viewJxXsxkallGetXNXQ.action',
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
					                k = r.get('xn');
					                if (state[k]) repeat.push(r);
					                else state[k] = true;
					            });
				            this.remove(repeat);
						}},
	                	fields:[{name:'xq'},{name:'xn'}],
	                	sorters:[{property:"xn",direction:"ASC"}]
	                })
    	        },{
	    	          xtype: 'combo',
			          itemId: 'xq',
			          name: 'xq',
		              fieldLabel: '学期',
		              queryMode: 'local',
		              displayField:'xq',
		              valueField:'xn',
		         	  	width:220,
						labelWidth:80,
		              store:Ext.create('Ext.data.Store',{
		              autoLoad: true,
		              proxy:{
		                		type:'ajax',
		                		url:'viewJxXsxkallGetXNXQ.action',
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
						                k = r.get('xq');
						                if (state[k]) repeat.push(r);
						                else state[k] = true;
						            });
					            this.remove(repeat);
							}},
		                	fields:[{name:'xn'},{name:'xq'}],
		                	sorters:[{property:"xq",direction:"ASC"}]
		       
		                })
    	        },{
		    	xtype: 'textfield',
		    	itemId:'zjjsh',
		    	name:'zjjsh',
		    	fieldLabel:'教师工号',
	           	width:220,
				labelWidth:80
		        },{
		    	xtype: 'textfield',
		    	itemId:'zjjs',
		    	name:'zjjs',
		    	fieldLabel:'教师姓名',
	             width:220,
				labelWidth:80
		        }]
        	},{
        	xtype: 'fieldcontainer',
        	layout:'hbox',
        	defaults:{labelAlign: 'right'},
		        	items:[{
				    	xtype: 'textfield',
				    	itemId:'kch',
				    	name:'kch',
				    	fieldLabel:'课程号',
			           	width:220,
						labelWidth:80
				        },{
				    	xtype: 'textfield',
				    	itemId:'kcmc',
				    	name:'kcmc',
				    	fieldLabel:'课程名称',
			           	width:220,
						labelWidth:80
				        },{
				        	xtype: 'textfield',
					    	itemId:'xh',
					    	name:'xh',
					    	fieldLabel:'学号',
				           	width:220,
							labelWidth:80
				        },{
				        	xtype: 'textfield',
					    	itemId:'xm',
					    	name:'xm',
					    	fieldLabel:'学生姓名',
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
		                            
		                            var xslxCombo = me.down('#xslx');
		                            xslxCombo.clearValue();
		                            xslxCombo.getStore().load();
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
				   	          {name:'xwlx'}],
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
				}]
					}],
        
       
        dockedItems: [{
		    xtype: 'toolbar',
		    dock: 'bottom',
		    style:'background:transparent;',
		    layout:{type:'hbox',align:'center',pack:'center'},
		    items: [{
                itemId: 'searchBtn',
                text: '查询',
                tooltip: '查询',
                iconCls: 'search',
                action: 'search'
            },{
					itemId : 'searchAllBtn',
					text : '全部',
					tooltip : '全部',
					iconCls : 'searchAll',
					action : 'searchAll'
            }]
		}]
    });
        
        me.callParent(arguments);
    }
});