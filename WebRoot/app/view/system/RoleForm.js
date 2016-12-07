//Ext.define('MDM.view.custom.MultiComboBox', {
//    extend: 'Ext.form.ComboBox',
//    alias: 'widget.multicombobox',
//    xtype: 'multicombobox',
//    initComponent: function(){
//        this.multiSelect = true;
//        this.listConfig = {
//              itemTpl : Ext.create('Ext.XTemplate',
//                    '<input type=checkbox>{rightname}'),
//              onItemSelect: function(record) {
//                  var node = this.getNode(record);
//                  if (node) {
//                     Ext.fly(node).addCls(this.selectedItemCls);
//                                                                           
//                     var checkboxs = node.getElementsByTagName("input");
//                     if(checkboxs!=null)
//                     {
//                         var checkbox = checkboxs[0];
//                         checkbox.checked = true;
//                     }
//                  }
//              },
//              listeners:{
//                  itemclick:function(view, record, item, index, e, eOpts ){
//                      var isSelected = view.isSelected(item);
//                      var checkboxs = item.getElementsByTagName("input");
//                      if(checkboxs!=null)
//                      {
//                          var checkbox = checkboxs[0];
//                          if(!isSelected)
//                          {
//                              checkbox.checked = true;
//                          }else{
//                              checkbox.checked = false;
//                          }
//                      }
//                  }
//              }       
//        }       
//        this.callParent();
//    }
//});

Ext.define('App.view.system.RoleForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.roleForm',
	itemId:'roleForm',
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
            	itemId: 'roleCode',
            	name: 'roleCode',
            	fieldLabel: '角色编码<font color="red">*</font>',
            	allowBlank: false,
            	blankText : '必填！'
			},{
            	xtype: 'textfield',
            	itemId: 'roleName',
            	name: 'roleName',
            	fieldLabel: '角色名称<font color="red">*</font>',
            	allowBlank: false,
                blankText: '必填！'
			},{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			        defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'rightCode',
						name:'rightCode',
						fieldLabel:'用户权限<font color="red">*</font>',
					  	readOnly:true,
						labelWidth:100,
						width:255,
						 allowBlank: false,
               			 blankText: '必填！'
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchRight',
									tooltip:'查询',
									action:'searchRight',
									iconCls:'search',
									margin:'0 0 0 1'
				}]}]
            }, {
                xtype: 'textareafield',
                itemId: 'memo',
                name: 'memo',
                fieldLabel: '备注'
            }]
			 }],
            buttons: [{
            	text: '保存',
            	iconCls:'save_16',
            	itemId:'addRole',
            	action:'addRole'
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
			var rightcode = (values.rightcode).toString().replace(/\s/g, "");//去掉空格
			var JSONobj = [];
			var val = JSON.parse(Ext.encode(values));
			delete val['rightcode'];
			
		    Ext.Ajax.request({
				url : 'role' + (form.isAdd?'Add.action':'Edit.action'),
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:Ext.encode(val),rightcode:rightcode},
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
				        	  Ext.StoreMgr.lookup('RoleStore').reload();
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
});
