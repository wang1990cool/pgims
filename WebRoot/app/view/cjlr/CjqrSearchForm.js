Ext.define('App.view.cjlr.CjqrSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.cjqrSearchForm',
	title:'查询条件',
	autoWidth: true,
	bodyPadding: 5,
	layout: 'form',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
		    		xtype: 'fieldcontainer',
		        	layout:'hbox',
		        	defaults:{labelAlign: 'right'},
		        	items:[{ 
		        	xtype: 'combo',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: '学年',
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
	    	   					    var data ={xq:'',xn:''};    
						            store.insert(0,data); 
					                this.each(function (r) {
					                k = r.get('xn');//sznj
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
	    	   					    var data ={xn:'',xq:''};    
						            store.insert(0,data); 
					                this.each(function (r) {
					                k = r.get('xq');//sznj
					                if (state[k]) repeat.push(r);
					                else state[k] = true;
									
					            });
				            this.remove(repeat);
						}},
	                	fields:[{name:'xn'},{name:'xq'}],
	                	sorters:[{property:"xq",direction:"ASC"}]
	                })
    	        },{
						xtype : 'combo',
					    itemId : 'sjzt',
					    name : 'sjzt',
					    fieldLabel : '数据状态',
					    editable : false,
					    width:220,
						labelWidth:80,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{zt}'+ 
				      	   '</div>'+
				        '</tpl>',
					    listConfig:{
					     	maxHeight : 160,
					     	maxWidth:300
					     },
					    queryMode : 'local',
					    displayField : 'zt',
					    valueField:'ztm',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'ztm'},
					   	            {name : "zt"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'ztgetZt.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {ztlb:'CJLR'},
					   		simpleSortMode : true
					   	},
	   					listeners:{
					   		load:function(store,records,options){
					   			var data = {ztm:'',zt:''};
					   			store.insert(0,data); 
					   		}
					   	},
					   	sorters : [{
					   		property : 'ztm',
					   		direction : 'ASC'
					   	}]
					   })
					}]
        		},{xtype:'fieldcontainer',
					layout:'hbox',
					defaults:{
						labelAlign:'right'
					},
					items:[{
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
				},{
					xtype: 'textfield',
					itemId: 'zjjs',
					name: 'zjjs',
					fieldLabel: '主讲教师',
					width: 220,
					labelWidth: 80
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
	                hidden:true,
	                iconCls: 'advancedSearch',
	                action: 'advacedSearch'
	            }]
			}]
		});
	    me.callParent(arguments);
	}
})