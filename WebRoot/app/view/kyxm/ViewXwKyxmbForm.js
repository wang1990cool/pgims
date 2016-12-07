Ext.define('App.view.kyxm.ViewXwKyxmbForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewXwKyxmbForm',
    itemId:'viewXwKyxmbForm',
 	xtype : 'form',
    initComponent: function() {
        var me = this;
		
        Ext.applyIf(me, {
			items: [
			         Ext.create('App.view.xs.TyXsJcxxxDetail'),{
	            xtype: 'fieldset',
	            itemId:'viewXwKyxmb1',
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
	            title: '参与科研信息',
            items: [{
	    			xtype: 'textfield',
		            itemId: 'id',
		            name: 'id',
		            fieldLabel : '序号',
		            hidden:true
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'xh',
		            name: 'xh',
		            fieldLabel : '<font color="red">*</font>学号',
		            hidden:true
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'xm',
		            name: 'xm',
		            fieldLabel : '<font color="red">*</font>姓名',
		            hidden:true
	    		},{
    		        xtype: "textfield",
    		        fieldLabel : '<font color="red">*</font>学年',
    		        itemId:'xn',
    		        name:'xn',
    		        value: xn
    		    },{
	    			xtype: 'textfield',
		            itemId: 'xq',
		            name: 'xq',
		            fieldLabel : '<font color="red">*</font>学期',
		             value: xq,
		             hidden:true
	        		
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xmlxm',
		            name: 'xmlxm',
		            fieldLabel : '<font color="red">*</font>项目类型码',
//		             value: '1',
		            hidden:true
	    		},/*,{
	    			xtype: 'textfield',
		            itemId: 'cglx',
		            name: 'cglx',
		            fieldLabel : '<font color="red">*</font>成果类型',
		            value: '论文',
		            listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var viewXwKyxmbshForm = me.up('#viewXwKyxmbshForm');
//					   		alert(1111)
                            viewXwKyxmbshForm.createKYUUID();	
					   	}
					 }
		           
	    		}*/{
	    			xtype: 'combo',
		            itemId: 'xmlx',
		            name: 'xmlx',
		             editable:false,
		             allowBlank : true,
		             colspan:2,
					blankText : '必填！',
		            fieldLabel : '<font color="red">*</font>项目类型'

	    		},{
					xtype : 'textfield',
					itemId : 'xmfzr',
					name : 'xmfzr',
					colspan:3,
					width:480,
					allowBlank : true,
					blankText : '必填！',
					fieldLabel : '<font color="red">*</font>项目负责人'
				},{
					xtype : 'textfield',
					itemId : 'xmmc',
					name : 'xmmc',
					colspan:3,
					width:780,
					allowBlank : true,
					blankText : '必填！',
					fieldLabel : '<font color="red">*</font>项目名称'
				},{
	    			xtype: 'textareafield',
		            itemId: 'jzqk',
		            name: 'jzqk',
		            colspan:3,
		            
		            height:100,
		            width:780,
		            fieldLabel : '进展情况'
	    		},{
					xtype : 'textfield',
					itemId : 'lrrgh',
					name : 'lrrgh',
					fieldLabel : '录入人工号',
					 value: userName,
					 hidden:true
				},{
					xtype : 'textfield',
					itemId : 'lrr',
					name : 'lrr',
					fieldLabel : '录入人',
					value : userCName,
					hidden:true
				
				},{
					xtype : 'textfield',
					itemId : 'lrip',
					name : 'lrip',
					fieldLabel : 'ip',
					hidden:true
				},{
	    			xtype: 'textfield',
		            itemId: 'lrsj',
		            name: 'lrsj',
		            fieldLabel : '<font color="red">*</font>登记信息时间',
		            width:250,
	        		labelWidth:100,
	        		
	        		padding:'5 0 0 0',
	        		size:20,
//	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
//    				hidden:true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		},{
					xtype : 'textfield',
					itemId : 'ztm',
					name : 'ztm',
					fieldLabel : '状态码',
//					 value: userName,
					 hidden:true
				},{
					xtype : 'textfield',
					itemId : 'zt',
					name : 'zt',
					colspan:2,
					fieldLabel : '状态'
//					value : userCName,
//					hidden:true
				
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
	loadEditViewXwKyxmbValue:function(rec){
		var me = this;
		var fs = me.down('#viewXwKyxmb');
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
		var fs = me.down('#viewXwKyxmb')
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
//			alert(item.itemId)
			if(item.itemId !='id'){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	xsSubmit: function (){
		var me = this;
		var xwKtbgsqb = me.down('#viewXwKyxmb1'); 
		var json = {}
		var items = xwKtbgsqb.items;
		values = me.form.getValues();
		xwKtbgsqb.items.each(function(fsItem){
//			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'fbrq'){
				json[fsItem.itemId] = values.fbrq.replace(/\-/g, "");
			}/*else if(fsItem.itemId == 'dsshsj'){
				json[fsItem.itemId] = values.dsshsj.replace(/\2008-01-01T0/g, "");
			}else if(fsItem.itemId == 'lwjsrq'){
				json[fsItem.itemId] = values.lwjsrq.replace(/\-/g, "");
			}*/else{
				json[fsItem.itemId] = fsItem.getValue();}
			
		})
		var form = me;
		var cglxm = form.down('#cglxm').getValue();
		var xh = form.down('#xh').getValue();
		json['id'] = form.down('#id').getValue();
////		json['shztm'] = form.down('#shztm').getValue();
		var kwjbm = form.down('#kwjbm').getValue();
		var lwtm = form.down('#lwtm').getValue();
		var kwmc = form.down('#kwmc').getValue();
		var kwcbh = form.down('#kwcbh').getValue();
		var grid = form.down('#xwKylwzlbList');
		var count=grid.getStore().getCount()
		if(count == '0'){
			Ext.MessageBox.alert('提示', '该资料附件未上传，无法提交！');
		}else if(count == '1'){
		json['zt'] = '未提交'
		json['ztm'] = '0';
//		json['shzt'] = '';
//		}else{
//		json['shztm'] = '4';
//		json['shzt'] = '导师审核未通过';
//		}
//		alert(json['shzt'])
		
		alert(Ext.encode(json))
//		if(cglxm && xh){
//			var KYUUID =  xh +'_'+ cglxm + '_' 
//				Ext.Ajax.request({
//						url : "xwKylwbGetKYUUID.action?KYUUID=" + KYUUID ,
//						method : 'post',
//						success : function(response, opts) {
//							var result = Ext.decode(response.responseText);
//							var kyuuid = result.kyuuid;
//							alert(kyuuid)
//							form.down('#kyuuid').setValue(kyuuid);
//						}
//					})
//					json['kyuuid'] = form.down('#kyuuid').getValue();
//					alert(json['kyuuid'])
			if(kwjbm && lwtm && kwmc && kwcbh){
//			alert(Ext.encode(json['jhktrq']))
		    Ext.Ajax.request({
				url : 'xwKylwbEdit.action',
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:Ext.encode(json)},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						var msg = "修改成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
				            fn: function(id, msg){
//					    	 	 skxxList.getStore().load()
				        			me.up('window').close();	
							    } 
				        });
				         var viewXwKyxmbList = Ext.ComponentQuery.query('#viewXwKyxmbList');
							 if(viewXwKyxmbList.length > 0) {
								 var viewXwKyxmbList = viewXwKyxmbList[0];
								 var store = viewXwKyxmbList.getStore();
									 store.load();
								}
					}
				},
				failure : function(form, action) {
					var errmsg = "修改失败！";
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
			});}else{Ext.MessageBox.alert('提示', '所需资料已上传完成！无法在次上传！');}
			}else{var errmsg = "请填写完整信息！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR
//			           icon: Ext.MessageBox.WARNING,
//			           fn: function(id, msg){  
//			        	   form.getForm().reset();
//					    }  
			       });}
    	
	},
	createKYUUID:function(){
			var me = this;
//			var kyuuid;
			var pyfaForm = me;
			var values = pyfaForm.getValues();
//			alert(ppppp)
			if(values.xh.length > 0  && values.cglxm.length >0 ){
				var KYUUID =  values.xh +'_'+ values.cglxm + '_' 
				Ext.Ajax.request({
						url : "xwKylwbGetKYUUID.action?KYUUID=" + KYUUID ,
						method : 'post',
						success : function(response, opts) {
//							alert(response.responseText)
							var result = Ext.decode(response.responseText);
							var kyuuid = result.kyuuid;
							alert(kyuuid)
							pyfaForm.down('#kyuuid').setValue(kyuuid);
						}
					})
			}
	    },
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    },
    setYs :function(){
    	var me = this;
		me.down('#xwKylwzlbList').down('#uploadZlBtn').setDisabled(true);
		me.down('#xwKylwzlbList').down('#delZlBtn').setDisabled(true);
		me.down('#xwKylwzlbList').down('#delZlBtn').setVisible(false);
		me.down('#xwKylwzlbList').down('#uploadZlBtn').setVisible(false);
    }
	
});