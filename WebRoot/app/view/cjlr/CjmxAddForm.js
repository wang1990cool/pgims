Ext.define('App.view.cjlr.CjmxAddForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.cjmxAddForm',
	itemId:'cjmxAddForm',
    xtype: 'form',
    isAdd:true,
	required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
   
	initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
			width:350,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'10 10 0 10',
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
				columns:1,
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
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '<font color="red">*</font>学号',
					allowBlank : false,
					blankText : '必填！'
//					listeners:{
//						blur: function(o, The, eOpts){
//							var me = this;
//							var form = me.up('form');
//						    var xh = form.down('#xh').getValue();
//						    var kkkh = form.down('#kkkh').getValue();
//						    if(xh == null || xh == ''){
//						    
//						    }else{
//						    	Ext.Ajax.request({
//									url : "jxCjmxcheckCode.action",
//									params: {xh: xh,kkkh: kkkh},
//									method : 'post',
//									success : function(response, opts) {
//										var result = Ext.decode(response.responseText);
//										var success = result.result.success;
//										if(success){
//											Ext.MessageBox.alert('提示', '学号  '+ xh + '  已经存在！');
//											me.reset();
//										}
//									}
//								})
//						    }
//							
//						}
//					}
				},{
					xtype : 'textfield',
					itemId : 'kkkh',
					name : 'kkkh',
					hidden: true
				}]
			 }],
            buttons: [{
            	text: '保存',
            	iconCls:'save_16',
            	itemId:'submitUser',
            	handler: function(){
            		me.up('window').down('#cjmxAddForm').submit();
            	}
            }, {
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
	});

        me.callParent(arguments);
    },
    
    loadForm: function(rec){
    	var me = this;
    	me.loadRecord(rec)
    },
    
    setView:function(){
	  		var me = this;
	  		var textfields = me.query('textfield');
	  		for(var i in textfields){
	  			textfields[i].setReadOnly(true);
	  			var style = 'background:none; border:0px';
	  				textfields[i].setFieldStyle(style);
	  		}
	  },
	  
    
    submit: function (){
		var me = this;
		var form = me.up('window').down('#cjmxAddForm');
		var grid = me.up('window').down('#cjmxAddForm').grid;
	    var xh = form.down('#xh').getValue();
	    var kkkh = form.down('#kkkh').getValue();
	    if(xh == null || xh == ''){
	    		return false;
	    }else{
	    	Ext.Ajax.request({
				url : "jxCjmxcheckCode.action",
				params: {xh: xh,kkkh: kkkh},
				method : 'post',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						Ext.MessageBox.alert('提示', '学号  '+ xh + '  已经存在！');
						me.up('window').down('#cjmxAddForm').down('#xh').reset();
						return false;
					}
					else{
						
						var store = grid.getStore();
						var flag = 1;
						store.each(function(rec){
							if(rec.data.xh == xh){
								Ext.MessageBox.alert('提示', '学号  '+ xh + '  已经存在！');
								me.up('window').down('#cjmxAddForm').down('#xh').reset();
								flag = 0;
								return false;
							}
						});
						
						if(flag == 1){
								Ext.Ajax.request({
								url : "viewXsjcxxcheckXh.action",
								params: {xh: xh},
								method : 'post',
								success : function(response, opts) {
									var result = Ext.decode(response.responseText);
									var success = result.result.success;
									if(success){
										var list = result.result.list;
										var rec  = {
											id: null,
											kkkh: kkkh,
											xh: xh,
											xm: list[0].xm,
											ksxzm: '01',
											ksxz: '正常考试',
											pscj: null,
											fslkscj:null,
											kcdjcjm:null,
											djlkscj:null,
											kccj:null,
											bz:'新增'
										}
										grid.getStore().add(rec);
										me.up('window').close();
										return false;
									}else{
										Ext.MessageBox.alert('提示', '该学号  '+ xh + '  不存在！');
										return false;
									}
							}})
						}
					
//						values = form.getValues();
//						var JSONobj = [];
//					    JSONobj.push(JSON.stringify(values));
//					    Ext.Ajax.request({
//							url :'jxCjmxAdd.action',
//							waitTitle : '提示',
//							actionMethods : 'post',
//							params:{xh: xh, kkkh: kkkh},
//							waitMsg : '正在提交数据请稍候...',
//							success : function(response, opts) {
//								var result = Ext.decode(response.responseText);
//								var success = result.result.success;
//								if(success){
//									var msg = "保存成功！";
//									Ext.MessageBox.show({
//							           title: '提示',
//							           msg: msg,
//							           buttons: Ext.MessageBox.OK,
//							           icon: Ext.MessageBox.INFO,
//							           fn: function(id, msg){
//							        	 	grid.getStore().load();
//							        	  	me.up('window').close();
//									    }  
//							        });
//								}else{
//									var errmsg = "保存失败！";
//									Ext.MessageBox.show({
//							           title: '错误',
//							           msg: errmsg,
//							           buttons: Ext.MessageBox.OK,
//							           icon: Ext.MessageBox.ERROR,
//							           fn: function(id, msg){  
//							        	   form.getForm().reset();
//									    }  
//							        });
//								}
//							},
//							failure : function(form, action) {
//								var errmsg = "保存失败！";
//								 Ext.MessageBox.show({
//						           title: '错误',
//						           msg: errmsg,
//						           buttons: Ext.MessageBox.OK,
//						           icon: Ext.MessageBox.ERROR,
//						           fn: function(id, msg){  
//						        	   form.getForm().reset();
//								    }  
//						       });
//							}
//						});
						
						
					}
				}
			})
		}
	}
})
