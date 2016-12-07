Ext.define('App.view.cjcx.MsCjcxSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.cjcxSearchForm',
    
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
		    	xtype: 'textfield',
		    	itemId:'xh',
		    	name:'xh',
		    	fieldLabel: '学号',
	        	    width:220,
					labelWidth:80
	        },
           {
        	    xtype: 'textfield',
        	    itemId:'xm',
        	    name:'xm',
        	    fieldLabel: '姓名',
        	  	    width:220,
					labelWidth:80
        	},	      
	        {
	        	xtype: 'textfield',
	        	itemId:'sznj',
	        	name:'sznj',
	        	fieldLabel: '所在年级',
	        	    width:220,
					labelWidth:80
	        
    	    }]
        	},{
        	xtype: 'fieldcontainer',
        	layout:'hbox',
        	defaults:{labelAlign: 'right'},
        	items:[{
        		xtype: 'textfield',
        	    itemId:'zjjsh',
        	    name:'zjjsh',
        	    fieldLabel: '主讲教师号',
    	  	    width:220,
				labelWidth:80
        	},{
        		xtype: 'textfield',
        	    itemId:'zjjs',
        	    name:'zjjs',
        	    fieldLabel: '主讲教师',
    	  	    width:220,
				labelWidth:80
        	}
//        		{
//					   xtype : 'combo',
//					   itemId : 'szdwh',
//					   name : 'szdwh',
//					   fieldLabel : '工作单位',
//					    width:220,
//						labelWidth:80,
//					   editable : false,
//					   forceSelection : true,
//					    matchFieldWidth : false,
//					   queryMode : 'local',
//					   displayField : 'dwmc',
//					   valueField : 'dwh',
//				       mode:'local',
//				    tpl:'<tpl for=".">' +  
//				            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
//				      	   '</div>'+
//				        '</tpl>',
//					 store:Ext.create('Ext.data.Store',{
//				        	autoLoad:true,      
//				            remoteSort: true,
//				            fields : [
//				            	{name : 'dwh'},{name : "dwmc"},{name : "pxh"}
//				            ],
//						   	proxy : {
//						   		type : 'ajax',
//						   		url : 'zdGetZD.action',
//						   		actionMethods : 'post',
//						   		reader : {
//						   			idProperty:'iid',
//						   			root : 'result.list',
//						   			totalProperty : 'totalProperty'
//						   		},
//						   		extraParams : {
//									zdName : 'ViewXxDwxx'
//								},
//						   		simpleSortMode : true
//						   	},
//							 listeners:{
//							   		load:function(store,records,options){
//							   			var data = {dwh:'',dwmc:'',pxh:''};
//							   			store.insert(0,data); 
//							   		}
//							   	},
//						   	sorters : [{
//						   		property : 'pxh',
//						   		direction : 'ASC'
//						   	}]
//					    })
//				}
				]
        	},
        	{
        		xtype: 'fieldcontainer',
            	layout:'hbox',
            	defaults:{labelAlign: 'right'},
            	items:[{ xtype: 'textfield',
		        	    itemId:'kch',
		        	    name:'kch',
		        	    fieldLabel: '课程号',
		        	  	width:220,
						labelWidth:80
				},{
					xtype: 'textfield',
	        	    itemId:'kcmc',
	        	    name:'kcmc',
	        	    fieldLabel: '课程名称',
	        	  	width:220,
					labelWidth:80
				},{ xtype: 'combo',
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
				}]
			}]
        	}]
//        	,
//        
//       
//        dockedItems: [{
//		    xtype: 'toolbar',
//		    dock: 'bottom',
//		    style:'background:transparent;',
//		    layout:{type:'hbox',align:'center',pack:'center'},
//		    items: [{
//                itemId: 'searchBtn',
//                text: '查询',
//                tooltip: '查询',
//                iconCls: 'search',
//                action: 'search'
//            },{
//                itemId: 'searchAllBtn',
//                text: '全部',
//                tooltip: '全部',
//                iconCls: 'searchAll',
//                action: 'searchAll'
//            },{
//                itemId: 'adSearchBtn',
//                text: '高级查询',
//                tooltip: '高级查询',
//                hidden:true,
//                iconCls: 'advancedSearch',
//                action: 'advacedSearch'
//            }]
//		}]
    });
        
        me.callParent(arguments);
    }
});