Ext.define('App.view.pyfa.PYFAForm',{
	extend:'Ext.form.Panel',
	xtype : 'form',
	itemId: 'pyfaForm',
	isAdd:true,
	isPyfamcFocus:true,
	isSave:false,
	initComponent:function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldset',
				border:'0 0 0 0',
				width:720,
				autoHeight:true,
				autoWidth:false,
				collapsible:false,
				readOnly:true,
				margin:'10 15 0 15',
				padding:'5 5 10 5',
				defaults:{
					xtype:'textfield',
					readOnlyCls:'x-form-item-label',
					autoHeight:true,
					labelAlign:'right',
					width:280,
		        	labelWidth:100,
					padding:'5 0 0 0',
					size:20
				},
				layout:{
					type:'table',
					columns:2,
					tableAttrs:{ 
							style:"width:100%;text-align:center;border:0px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
							align:'center'
					},
					 tdAttrs:{
							align:'left',
							style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
				items:[{
					xtype:'textfield',
					itemId:'id',
					name:'id',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'dwh',
					name:'dwh',
					hidden:true,
					fieldLabel:'单位号'
				},{
					xtype : 'combo',
				    itemId : 'dwmc',
				    name : 'dwmc',
				    fieldLabel : '培养单位<font color="red">*</font>',
				    allowBlank:false,
				    editable : false,
				    listConfig:{
				     	maxHeight : 160,
				     	maxWidth:300
				     },
				    queryModel: 'local',   
				    triggerAction: 'all',
				    displayField : 'dwmc',
			        matchFieldWidth : false,
				    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'dwh'},
					   	            {name : 'dwmc'}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'viewXxJxdwGetAll.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'dwh',
					   		direction : 'ASC'
					   	}]
					   }),
					listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var pyfaForm = me.up('#pyfaForm');
					    	pyfaForm.down('#dwh').setValue(record[0].data.dwh);
					    	pyfaForm.down('#zydm').setValue('');
					    	
				    	    var zyCombo = pyfaForm.down('#zymc')
                            zyCombo.clearValue();
                            zyCombo.getStore().load();
                            
                            var xslxCombo = pyfaForm.down('#xslx')
                            xslxCombo.clearValue();
                            xslxCombo.getStore().load();
                            pyfaForm.createPyfah();	
					   	}
					 }
				},{
					xtype:'textfield',
					itemId:'zydm',
					name:'zydm',
					fieldLabel:'专业代码',
					readOnly:true,
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'zymc',
				    name : 'zymc',
				    fieldLabel : '专业名称<font color="red">*</font>',
				    allowBlank:false,
//				    listConfig:{
//				     	maxHeight : 160,
//				     	maxWidth:400
//				     },
				    editable : false,
				    queryModel: 'remote',
				    displayField : 'zymc',
//				    valueField : 'zydm',
				    matchFieldWidth : false ,
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zymc}'+ ' ({zydm})' +
			      	   '</div>'+
			        '</tpl>',
				    store:Ext.create('Ext.data.Store',{
				    	  autoLoad: false,
				    	  fields:[
				    	  			{name:'zydm'},
				    	             {name:'zymc'},
				    	             {name:'dwh'},
				    	             {name:'xslxm'}],
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
				    	   			var dwhValue= me.down('#dwh').getValue();
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
					   	select:function(combo, record, index){
					    	me.down('#zydm').setValue(record[0].data.zydm);
					    	
					    	var xslxCombo = me.down('#xslx');
					        xslxCombo.clearValue();
                            var xslxComboStore = xslxCombo.getStore();
                            xslxComboStore.load();
                            
					    	var pyfahValue = me.down('#pyfah').getValue();
					   		me.createPyfah();	
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
				    fieldLabel : '学生类型<font color="red">*</font>',
				    editable : false,
				    allowBlank:false,
					blankText:'必填',
				    queryMode : 'remote',
				    displayField : 'xslx',
//				    valueField:'xslxm',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
				   	fields : [
				   			 {name:'zydm'},
				   			  {name : 'xslx'},
				   	          {name : "xslxm"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'XkXkzyjhb'},
				   		simpleSortMode : true
				   	},
				   	listeners:{
				   		load:function(store, operation, eOpts){
				   			if(me.isAdd){
					   			   var zydmValue= me.down('#zydm').getValue();
					                store.filterBy(function(record) {
										return record.get('zydm') == zydmValue;  
					             });
					       			var k, repeat = [], state = {};
						            this.each(function (r) {
						                k = r.get('xslxm');
						                if (state[k]) repeat.push(r);
						                else state[k] = true;
						            });
						           this.remove(repeat);
				   			}
				   		 }
				 	  	}
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#xslxm').setValue(record[0].data.xslxm);
					   	}
					   }
				},{
					xtype : 'combo',
				    itemId : 'bbh',
				    name : 'bbh',
				    fieldLabel : '年度<font color="red">*</font>',
				    allowBlank:false,
				    editable : false,
				    listConfig:{
				     	maxHeight : 160
				     },
				    queryMode : 'local',
				    displayField : 'bbh',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'bbh'}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'TyFabbhb'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'bbh',
				   		direction : 'ASC'
				   	}]
				   }),
				  listeners:{
				  	select:function(combo, record, index){
				  		var me = this;
					   	var pyfaForm = me.up('#pyfaForm')
					   	var pyfahValue = pyfaForm.down('#pyfah').getValue();
					   	pyfaForm.createPyfah();	
				  	}
				  }
				},{
					xtype:'textfield',
					itemId:'pyfah',
					name:'pyfah',
					fieldLabel:'培养方案号<font color="red">*</font>',
					allowBlank:false,
					blankText:'必填',
					listeners:{
						blur:function(){
							var pyfah = this.getValue();
							var me = this;
							if(me.isAdd){
							Ext.Ajax.request({
								url:'pyfaCheckByPyfah.action?pyfah='+pyfah,
								method : 'post',
								success : function(response, opts) {
									var result = Ext.decode(response.responseText);
									var success = result.result.success;
									if(success){
										Ext.MessageBox.alert('提示', '该培养方案号已经存在！');
										me.setValue('');
									}
								}
							})
							}
						}
					}
				},{
					xtype:'textfield',
					itemId:'xz',
					name:'xz',
						allowBlank:false,
					fieldLabel:'学制<font color="red">*</font>',
					regex:/^[1-5]$/
				},{
					xtype:'textfield',
					itemId:'xxnx',
					name:'xxnx',
					fieldLabel:'学习年限'
				},{
					xtype:'textfield',
					itemId:'zxf',
					name:'zxf',
					fieldLabel:'总学分<font color="red">*</font>',
						allowBlank:false,
					regex:/(^[1-9][0-9]$)|(^100&)|(^[1-9]$)$/ 
				},{
					xtype:'textfield',
					itemId:'xwkxf',
					name:'xwkxf',
					fieldLabel:'学位课学分<font color="red">*</font>',
						allowBlank:false,
					regex:/(^[1-9][0-9]$)|(^100&)|(^[1-9]$)$/ 
				},{
					xtype:'textfield',
					itemId:'ztm',
					name:'ztm',
					hidden:true,
					fieldLabel:'状态码'
				},{
					xtype:'textfield',
					itemId:'zt',
					name:'zt',
					hidden:true,
					fieldLabel:'状态'
				},{
					xtype:'textfield',
					itemId:'pyfsm',
					name:'pyfsm',
					hidden:true,
					fieldLabel:'培养方式码'
				},{
					xtype : 'combo',
				    itemId : 'pyfs',
				    name : 'pyfs',
				    fieldLabel : '培养方式<font color="red">*</font>',
				    allowBlank:false,
				    editable : false,
				    listConfig:{
				     	maxHeight : 160
				     },
				    queryMode : 'local',
				    displayField : 'mc',
				    store : 'ZdPyfsmStore',
				  listeners:{
				  	select:function(combo, record, index){
				  		me.down('#pyfsm').setValue(record[0].data.bm);
				  		
				  		
				  	}
				  }
				
				},{
					xtype:'textfield',
					itemId:'pyfamc',
					name:'pyfamc',
					fieldLabel:'培养方案名称<font color="red">*</font>',
					allowBlank:false,
					colspan:2,
					width:635,
					blankText:'必填',
					listeners:{
						focus:function(){
							var me = this;
							var pyfaForm = me.up('#pyfaForm');
							var values = pyfaForm.getValues();
							if(this.getValue().length ==0  && values.zymc.length > 0 
									&& values.xslx.length > 0 && values.bbh.length > 0 && values.pyfs.length > 0){
										if(pyfaForm.isPyfamcFocus){
											if(values.pyfsm == '1')
												var pyfamc = values.bbh + '年_'+ values.dwmc + '_'+ 
																		values.zymc +'专业' + '_' + values.xslx  + '培养方案';
											else
												var pyfamc = values.bbh + '年_'+ values.dwmc + '_'+ 
																		values.zymc +'专业' + '_' + values.xslx  + '创新团队培养方案';
											this.setValue(pyfamc)
											pyfaForm.isPyfamcFocus = false;
										}
							}else {
								pyfaForm.isPyfamcFocus = true;
							}
						}
					}
				},{
					xtype:'textfield',
					itemId:'fjdz',
					name:'fjdz',
					colspan:2,
					hidden:true,
					fieldLabel:'附件地址'
				},{
					xtype:'textfield',
					itemId:'bzrgh',
					name:'bzrgh',
					hidden:true,
					fieldLabel:'编制人工号'
				},{
					xtype:'textfield',
					itemId:'bzr',
					name:'bzr',
					hidden:true,
					fieldLabel:'编制人'
				},{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              hidden:true,
		              width: 0,
		              height: 0
		       }]
			},{
				xtype:'fieldset',
				itemId:'bzFieldset',
				autoHeight:true,
				border:'0 0 0 0',
				title:'备注:',
				collapsible: false,
				width:720,
				margin:'5 15 0 15',
				padding:'5 5 5 5',
				layout:'fit',
				items:[{
					xtype:'textareafield',
					itemId:'bz',
					name:'bz',
					style:'color:#000000'
				}]
			}],
			 buttons: [{
            	text: '保存',
            	itemId:'saveBtn',
            	iconCls:'save_16',
            	hidden:true,
                handler: me.save
            }]
		});
		 me.callParent(arguments);
	},
	
	setView:function(){
		var pyfaAddForm = Ext.getCmp('pyfaAddForm');
		var fakcListTab =   pyfaAddForm.down('#fakcListTab');
     	fakcListTab.setDisabled(false);
     	
     	var pyfaAddWin = Ext.ComponentQuery.query('#pyfaAddWin');
     	var okBtn = pyfaAddWin[pyfaAddWin.length-1].down('#OKBtn');
     	okBtn.setDisabled(false)
     	
     	var me = this;
     	var values = me.getValues();
		fakcListTab.down('#bbh').setValue(values.bbh);
     	fakcListTab.down('#pyfah').setValue(values.pyfah);
     	
        var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
//			var style = "background:none; border:0px;font-weight:bold";
			var style = "background:none; border:0px"
    		textfields[i].setFieldStyle(style);
		}
		
		me.down('#bzFieldset').setBorder('1 1 1 1');
		me.down('#saveBtn').setVisible(false);
//		me.down('#upload').setVisible(false);
	},
	
    loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
	
	createPyfah:function(){
			var me = this;
			var pyfaForm = me;
			var values = pyfaForm.getValues();
			if(values.bbh.length > 0  && values.zydm.length >0 && values.dwh.length){
				var bbhDwhZydm =  values.bbh +'_'+ values.dwh + '_' + values.zydm+ '_'
				Ext.Ajax.request({
						url : "pyfaGetPyfah.action?bbhDwhZydm=" + bbhDwhZydm ,
						method : 'post',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var pyfah = result.pyfah;
							pyfaForm.down('#pyfah').setValue(pyfah);
						}
					})
			}
	    },
    
	    createPyfamc:function(){
				var me = this;
				var pyfaForm = me;
				var values = pyfaForm.getValues();
				if(this.getValue().length ==0  && values.zymc.length > 0 
						&& values.xslx.length > 0 && values.bbh.length > 0 && values.pyfs.length > 0){
							if(pyfaForm.isPyfamcFocus){
								if(values.pyfsm == '1')
									var pyfamc = values.bbh + '年_'+ values.dwmc + '_'+ 
															values.zymc +'专业' + '_' + values.xslx  + '培养方案';
								else
									var pyfamc = values.bbh + '年_'+ values.dwmc + '_'+ 
															values.zymc +'专业' + '_' + values.xslx  + '创新团队培养方案';
								pyfaForm.down('#pyfamc').setValue(pyfamc)
								pyfaForm.isPyfamcFocus = false;
							}
				}else {
					pyfaForm.isPyfamcFocus = true;
				}
	    },
	    
     upload: function(){
    	var me = this;
    	var form = me;
    	if (form.isValid()) {
            me.form.submit({
                clientValidation: true,
                url: 'pyfaFileUpload.action',
                method: 'post',
//	            waitMsg: '正在上传附件请稍候...',
                success: function (form, action) {
                	me.form.findField('fjdz').setValue(action.result.filePath);
                	me.addPyfa();
                },
                failure: function (form, action) {
                	if(action.result.msg != null)
                		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
                	else{
                          var fileName = form.findField('upload').value;
                          Ext.Msg.show({title:"提示",msg:'文件： ' + fileName + ' 上传失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
                	}
                }
            });
        }
    },
    
    save:function(){
    	var me = this;
		var form = me.up('form');
    	if(form.down('#upload').getValue().length >0){ 
				form.upload();
		}else{
			 	form.addPyfa();
		}
    },
    
//    checkPyfah:function(){
//    	var me = this;
//    	var flag = false;
//    	var pyfah = me.down('#pyfah').getValue();
//		Ext.Ajax.request({
//			url:'pyfaCheckByPyfah.action?pyfah='+pyfah,
//			method : 'post',
//			success : function(response, opts) {
//				var result = Ext.decode(response.responseText);
//				var success = result.result.success;
//				if(success){
//					Ext.MessageBox.alert('提示', '该培养方案号已经存在！');
//					flag = true;
//					me.down('#pyfah').setValue('');
//				}
//			}
//		})
//		return flag;
//    },
    
	addPyfa: function (){
		var me = this;
		var form = me;
		if (form.isValid()){
			me.down('#ztm').setValue('CG');
			me.down('#zt').setValue('草稿状态');
			var JSONobj = []
			values = form.getValues();
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'pyfa' + (form.isAdd?'Add.action':'Edit.action'),
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONobj},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					var id = result.id;
					if(success){
						var msg = "保存成功！";
						me.isSave = true;
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
				           fn: function(id, msg){
				           	  Ext.StoreMgr.lookup('PYFAStore').load();
//			        		  me.up('window').close();
						    }  
				        });
				        if(me.isAdd){
				      		me.setView();
				      		me.down('#id').setValue(id);
				        }
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	   me.getForm().reset();
						    }  
				        });
					}
				},
				failure : function(form, action) {
					var errmsg = "保存失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
			           fn: function(id, msg){  
			        	   me.getForm().reset();
					    }  
			       });
				}
			});
		}else
           Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
	}
})