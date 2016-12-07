Ext.define('App.view.ktbg.ViewXwKtbgsqshsjForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewXwKtbgsqshsjForm',
    itemId:'viewXwKtbgsqshsjForm',
 
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            title: '申请信息',
	            collapsible: true,
	            itemId : 'xwKtbgsqb',
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
//	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'3 0 0 0',
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
				items: [{
					xtype : 'textfield',
					itemId : 'id',
					name : 'id',
					fieldLabel : 'ID',
					hidden:true
	            },{
	    			xtype: 'hiddenfield',
		            itemId: 'xh',
		            name: 'xh',
		            fieldLabel : '学号'
	    		},{
					xtype : 'hiddenfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名'
				},{
	    			xtype: 'textareafield',
		            itemId: 'lwtm',
		            name: 'lwtm',
		            width:700,
		            colspan:3,
		            height:25,
		            hidden:true,
		            fieldLabel : '<font color="red">*</font>论文题目',
		            blankText:'不能为空'
	    		},{
	    			xtype: 'datefield',
		            itemId: 'jhktrq',
		            name: 'jhktrq',
		            fieldLabel : '<font color="red">*</font>计划开题日期',
		            format : "Y-m-d",
		            blankText:'不能为空'
	    		},{
	    			xtype: 'timefield',
		            itemId: 'jhktsj',
		            name: 'jhktsj',
		            fieldLabel : '<font color="red">*</font>计划开题时间',
		            format : 'H:i',
		            minValue: '8:00',
			        maxValue: '20:00',
			        increment: 30,
			        editable : false,
			        blankText:'不能为空'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'jhktdd',
		            name: 'jhktdd',
		            fieldLabel : '<font color="red">*</font>计划开题地点',
		            blankText:'不能为空'

	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '<font color="red">*</font>审批时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		}
	    		,{xtype: 'textareafield',
			    	fieldLabel : '<font color="red">*</font>审核意见',
			    	hidden:true,
			    	colspan:3,
			    	width: '00%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'shyj',
			    	name:'shyj',
			    	hidden:true,
			    	readOnlyCls: 'x-form-item-label'
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shr',
		            name: 'shr',
		            fieldLabel : '<font color="red">*</font>审核人',
		            value : userCName
	    		},{
    		        xtype: "hiddenfield",
    		        fieldLabel : '<font color="red">*</font>审核人工号',
    		        itemId:'shrgh',
    		        name:'shrgh',
//    		        hidden:true,
    		        value: userName
    		    },{
	    			xtype: 'textfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审批状态码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'shzt',
		            name: 'shzt',
		            hidden:true,
		            fieldLabel : '<font color="red">*</font>审批状态',
		            queryMode : 'remote',
		            colspan:3,
					    displayField : 'shzt',
					    valueField:'shztm',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'shzt'},
					   	            {name : "shztm"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdShztm'},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'shztm',
					   		direction : 'ASC'
					   	}]
					   })
	    		},{
			    	xtype: 'textareafield',
			    	fieldLabel : '<font color="red">*</font>论文简介',
			    	colspan:3,
			    	width:780,//835
			    	height:580,
			    	itemId:'lwjj',
			    	name:'lwjj',
			    	hidden:true,
			    	readOnlyCls: 'x-form-item-label'
		        }
		        ]}
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
		        	this.up('window').hide();
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
	loadEditViewXwKtbgsqValue:function(rec){
		var me = this;
		var fs = me.down('#viewXwKtbgsq');
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
		var fs = me.down('#viewXwKtbgsq')
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
		var xwKtbgsqb = me.down('#xwKtbgsqb'); 
		var json = {}
		var items = xwKtbgsqb.items;
		values = me.form.getValues();
		xwKtbgsqb.items.each(function(fsItem){
			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'jhktrq'){
				json[fsItem.itemId] = values.jhktrq.replace(/\-/g, "");
			}else if(fsItem.itemId == 'jhktsj'){
				json[fsItem.itemId] = values.jhktsj.replace(/\2008-01-01T0/g, "");
			}else{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
		
		var form = me;
		json['shzt'] = form.down('#shzt').getValue();
		json['xh'] = form.down('#xh').getValue();
		json['xm'] = form.down('#xm').getValue();
		json['shztm'] = form.down('#shztm').getValue();
		json['shyj'] = form.down('#shyj').getValue();
		alert(Ext.encode(json))
		    Ext.Ajax.request({
				url : 'xwKtbgsqbEdit.action',
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
				           icon: Ext.MessageBox.INFO
				        });
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
			});
    	
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});