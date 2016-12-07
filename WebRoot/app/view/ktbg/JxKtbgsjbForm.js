Ext.define('App.view.ktbg.JxKtbgsjbForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jxKtbgsjbForm',
    itemId:'jxKtbgsjbForm',
 
    initComponent: function() {
        var me = this;
		
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            itemId:'jxKtbgsjb1',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 3 0 3',
	        		size:20
	        	},
				layout:{
					type:'table',
					columns:3,
					tableAttrs:{ 
						style:"width:100%;text-align:center;border:1px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
					},
					tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
	            title: '修改控制信息',
            items: [{
					xtype : 'hiddenfield',
					itemId : 'id',
					name : 'id',
					fieldLabel : 'ID'
				},{
	    			xtype: 'combo',
		            itemId: 'sznj',
		            name: 'sznj',
		            fieldLabel : '<font color="red">*</font>年级',
		            width:220,
					labelWidth:80,
					valueField:'sznj',
					displayField:'sznj',
					mode:'local',
					store: Ext.create('Ext.data.Store',{
						fields: ['sznjm', 'sznj'],
						data: [
							{"sznjm": '1', "sznj": "2014"},
							{"sznjm": '2', "sznj": "2015"},
							{"sznjm": '3', "sznj": "2016"},
							{"sznjm": '4', "sznj": "2017"}
						]
					})
//		            hidden:true
	    		   },{
							xtype : 'combo',
							itemId : 'xn',
							name : 'xn',
							fieldLabel : '<font color="red">*</font>学年',
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
							fieldLabel : '<font color="red">*</font>学期',
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
					itemId:'fyh',
					name:'fyh',
					hidden:true,
					fieldLabel:'培养单位号'
				},{
					xtype : 'combo',
				    itemId : 'fymc',
				    name : 'fymc',
				    width:220,
					labelWidth:80,
				    fieldLabel : '<font color="red">*</font>学院名称',
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
					    	me.down('#fyh').setValue(record[0].data.dwh);
					 		me.down('#zymc').setValue('');
//					    	me.down('#xwlbm').setValue('');
					    	
				    	    var zyCombo = me.down('#zydm')
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
					itemId:'zymc',
					name:'zymc',
					fieldLabel : '学科专业',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'zydm',
				    name : 'zydm',
				    fieldLabel : '<font color="red">*</font>学科专业',
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
				    	   			   var fyhValue = me.down('#fyh').getValue();
							                store.filterBy(function(record) {
							                    return record.get('dwh') == fyhValue;  
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
					    	me.down('#zymc').setValue(record[0].data.zymc);
//					    	me.down('#xwlbm').setValue(record[0].data.xwlbm);
//					    	
//					    	var xslxCombo = me.down('#xslx');
//					        xslxCombo.clearValue();
//                            var xslxCombo = xslxCombo.getStore();
//                            xslxCombo.load();
					   	  }
					   }
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
				    fieldLabel : '<font color="red">*</font>学生类型',
				    editable : false,
				    width:220,
					labelWidth:80,
					blankText:'必填',
				    queryMode : 'remote',
				    displayField : 'xslx',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
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
				}/*,{
    		        xtype: "textfield",
    		        fieldLabel : '<font color="red">*</font>是否有效',
    		        itemId:'sfyx',
    		        name:'sfyx'
    		    }*/,{
	    			xtype: 'datefield',
		            itemId: 'kssj',
		            name: 'kssj',
		            fieldLabel : '<font color="red">*</font>开始时间',
		            width:220,
					labelWidth:80,
	        		padding:'5 0 0 0',
	        		size:20,
	        		format : "Y-m-d"
//	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
//    				readOnly: true,
//    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		},{
	    			xtype: 'datefield',
		            itemId: 'jssj',
		            name: 'jssj',
		            fieldLabel : '<font color="red">*</font>结束时间',
		            width:220,
					labelWidth:80,
		            format : "Y-m-d",
	        		padding:'5 0 0 0',
	        		size:20
//	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
//    				readOnly: true,
//    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		},{
    		        xtype: "combo",
    		        fieldLabel : '<font color="red">*</font>是否有效',
    		        itemId:'xwbz',
    		        width:220,
					labelWidth:80,
    		        name:'xwbz',
    		        editable : false,
					valueField:'sfyxm',
					displayField:'xwbz',
					mode:'local',
					store: Ext.create('Ext.data.Store',{
						fields: ['sfyxm', 'xwbz'],
						data: [
							{"sfyxm": '0', "xwbz": "无效"},
							{"sfyxm": '1', "xwbz": "有效"}
							
						]
					})
    		    },{xtype: 'textareafield',
			    	fieldLabel : '备注',
			    	colspan:3,
			    	width: '00%',
    		        height: 120,
    		        cols: 90,
			    	itemId:'bz',
			    	name:'bz',
			    	readOnlyCls: 'x-form-item-label'
	    		}]
	        }
			],
			dockedItems: [{
			    xtype: 'toolbar',
			    itemId:'auditToolbar',
			    dock: 'top',
			    items:[{
		            itemId: 'cancelBtn',
		            text:'退出',
		            tooltip:'退出',
		            iconCls:'return_16',
		            handler: function () {
		            	me.up('window').close();
		            }
				}]
			}]
				   });
       me.callParent(arguments);
    },
    
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for (var i in textfields) {
				if (textfields[i].itemId == 'xn'
						|| textfields[i].itemId == 'xq'
						|| textfields[i].itemId == 'fyh'
						|| textfields[i].itemId == 'fymc'
						|| textfields[i].itemId == 'zydm'
						|| textfields[i].itemId == 'zymc'
						|| textfields[i].itemId == 'xslxm'
						|| textfields[i].itemId == 'xslx'
						|| textfields[i].itemId == 'sznj'
						) {
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
				}
			}
    }
	
});