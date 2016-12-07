Ext.define('App.view.system.UserForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userForm',
	itemId:'userForm',
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
            	xtype: 'textfield',
            	itemId: 'userName',
            	name: 'userName',
            	fieldLabel: '用户名',
            	beforeLabelTextTpl: me.required,
            	allowBlank: false,
            	blankText : '必填！',
            	listeners:{
            		blur:function(o, The, eOpts){
            				var userNameField =  me.down('#userName')
			           		var value = userNameField.getValue();
							if(me.isAdd){
								Ext.Ajax.request({	
									url : "userCheckIsExistByName.action?userName=" + value ,
									method : 'post',
									success : function(response, opts) {
										var result = Ext.decode(response.responseText);
										var success = result.result.success;
										if(success){
											Ext.MessageBox.alert('提示', '用户名已经存在！');
											userNameField.setValue('');
										}
									}
								})
							}
            		}
            	}
			},{
            	xtype: 'textfield',
            	itemId: 'userCName',
            	name: 'userCName',
            	fieldLabel: '用户姓名',
            	hidden:true,
                beforeLabelTextTpl: me.required,
            	allowBlank: false,
                blankText: '必填！'
			},{
            	xtype: 'textfield',
            	itemId: 'userPwd',
            	name: 'userPwd',
            	fieldLabel: '密码',
            	beforeLabelTextTpl: me.required,
            	allowBlank: false,
                blankText: '必填！'
//                ,
//          		inputType: 'password'
			},{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			        defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'gh',
						name:'gh',
						fieldLabel:'工号',
					  	readOnly:true,
						labelWidth:100,
						width:255
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchJg',
									tooltip:'查询',
									action:'searchJg',
									iconCls:'search',
									margin:'0 0 0 1'
				}]}]
			},{
				xtype:'textfield',
				itemId:'xm',
				name:'xm',
				fieldLabel:'姓名',
			  	readOnly:true
			},{
				xtype:'textfield',
				itemId:'szdwh',
				name:'szdwh',
				fieldLabel:'所在单位号',
				hidden:true			  	
			},{
				xtype:'textfield',
				itemId:'szdw',
				name:'szdw',
				readOnly:true,
				fieldLabel:'所在单位'
			},{
				xtype: 'combo',
            	fieldLabel: '角色<font color="red">*</font>',
            	itemId:'roleCode',
            	name: 'roleCode',
            	editable: false,
            	queryMode: 'local',
            	displayField: 'roleName',
            	valueField: 'roleCode',
            	width:280,
            	store: Ext.create('Ext.data.Store', {
                    autoLoad: true,
                    model: 'App.model.system.RoleModel',
                    proxy: {
                        type: 'ajax',
                        url: 'roleGetAll.action',
                        actionMethods:'post',
                        reader: {
                            root: 'result.list',
                            totalProperty: 'totalProperty'
                        },
                        simpleSortMode: true
                    },
                    sorters: [{
                        property: 'roleCode',
                        direction: 'ASC'
                    }]
                }),
            	allowBlank: false,
				blankText : '必填！'
			},{
            	xtype: 'textfield',
            	itemId:'mobile',
            	name: 'mobile',
            	fieldLabel: '手机'
//            	,
//            	regex:/^[1-5]$/
//                validator: function (value) {
//                    if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))
//  	                       return "手机号码格式错误！";
//                     return true;
//                }
			},{
            	xtype: 'textfield',
            	itemId:'email',
            	name: 'email',
            	fieldLabel: 'EMAIL',
            	vtype: 'email' 
				}]
			 }],
            buttons: [{
            	text: '保存',
            	iconCls:'save_16',
            	itemId:'submitUser',
            	action:'submitUser'
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
		var form = me.up('form');
		
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'user' + (form.isAdd?'Add.action':'Edit.action'),
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
				           icon: Ext.MessageBox.INFO,
				           fn: function(id, msg){
				        	  Ext.StoreMgr.lookup('UserStore').reload();
				        	  me.up('window').close();
						    }  
				        });
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	   form.getForm().reset();
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
			        	   form.getForm().reset();
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
