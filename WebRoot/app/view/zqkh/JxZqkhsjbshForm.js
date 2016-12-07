Ext.define('App.view.zqkh.JxZqkhsjbshForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jxZqkhsjbshForm',
    itemId:'jxZqkhsjbshForm',
 
    initComponent: function() {
        var me = this;
		var required = '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>'
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            itemId:'jxZqkhsjb1',
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
	            title: '添加控制信息',
            items: [{
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
					}),
					allowBlank : false,
					blankText : '必填！'
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
							   		url : 'zdGetZDXW.action',
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
							}),
							allowBlank : false,
							blankText : '必填！'
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
							   		url : 'zdGetZDXW.action',
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
							}),
						allowBlank : false,
						blankText : '必填！'
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
					 },
					allowBlank : false,
					blankText : '必填！'
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
				    fieldLabel : '<font color="red">*</font>专业名称',
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
					   },
					allowBlank : false,
					blankText : '必填！'
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
					   },
					allowBlank : false,
					blankText : '必填！'
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
	        		format : "Y-m-d",
					allowBlank : false,
					blankText : '必填！'
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
	        		size:20,
					allowBlank : false,
					blankText : '必填！'
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
					}),
					allowBlank : false,
					blankText : '必填！'
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
		            itemId: 'saveBtn',
		            text:'确定',
		            tooltip:'确定',
		            iconCls:'save_16',
		            handler: function(){
		        	this.up('window').down('form').xsSubmit();
//		        	this.up('window').hide();
		        }
				},'-',{
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
	loadEditJxZqkhsjbValue:function(rec){
		var me = this;
		var fs = me.down('#jxZqkhsjb');
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
			if(item.itemId != undefined){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	loadXsjcxxValue:function(rec){
		var me = this;
		var fs = me.down('#xsJcxx');
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
			if(item.itemId != undefined){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	
	loadXwKtbgsqbValue:function(rec){
		var me = this;
		var fs = me.down('#jxZqkhsjb')
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
			if(item.itemId !='id'){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	xsSubmit: function (){
		var me = this;
		var xwKtbgsqb = me.down('#jxZqkhsjb1'); 
		var json = {}
		var items = xwKtbgsqb.items;
		values = me.form.getValues();
		var JSONobj = [];
		JSONobj.push(JSON.stringify(values));
		var form = me;
//		json['id'] = xwKtbgsqb.down('#id').getValue();
		var xq = xwKtbgsqb.down('#xq').getValue();
		var xn = xwKtbgsqb.down('#xn').getValue();
		var fyh = xwKtbgsqb.down('#fyh').getValue();
		var zydm = xwKtbgsqb.down('#zydm').getValue();
		var xslxm = xwKtbgsqb.down('#xslxm').getValue();
		var kssj = xwKtbgsqb.down('#kssj').getValue();
		var jssj = xwKtbgsqb.down('#jssj').getValue();
		var sznj = xwKtbgsqb.down('#sznj').getValue();	
		var xwbz = xwKtbgsqb.down('#xwbz').getValue();
//		alert(JSONobj)
//		alert(Ext.encode(json))
			if(xq && xn && fyh && zydm && xslxm && kssj && jssj && sznj && xwbz){
		    Ext.Ajax.request({
				url : 'jxZqkhsjbAdd.action',
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:JSONobj},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						var msg = "保存成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO ,
				           fn: function(id, msg){
//					    	 	 skxxList.getStore().load()
				        			me.up('window').close();	
							    } 
				        });
				         var jxZqkhsjbList = Ext.ComponentQuery.query('#jxZqkhsjbList');
							 if(jxZqkhsjbList.length > 0) {
								 var jxZqkhsjbList = jxZqkhsjbList[0];
								 var store = jxZqkhsjbList.getStore();
									 store.load();
									
								}
							 
					}
				},
				failure : function(form, action) {
					var errmsg = "保存失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
//			           icon: Ext.MessageBox.WARNING,
			           fn: function(id, msg){  
			        	   form.getForm().reset();
					    }  
			       });
				}
			});}else{Ext.MessageBox.alert('提示', '请填写完整信息！');}
    	
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});