Ext.define('App.view.search.JgxxForm',{
	extend:'Ext.form.Panel',
	alias:'widget.jgxxForm',
	itemId:'jgxxForm',
	
	initComponent:function(){
		var me = this;
		Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'10 10 10 10',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
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
				title:'基本信息',
				items:[{
					xtype : 'hiddenfield',
					itemId : 'id',
					name : 'id',
					fieldLabel : 'ID'
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '教师姓名',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
					itemId : 'gh',
					name : 'gh',
					fieldLabel : '教师工号',
					allowBlank : false,
					blankText : '必填！',
					listeners:{
							blur:function(){
									var me = this;
									var jgxxForm = me.up('#jgxxForm');
									if(jgxxForm.isAdd){
										var gh = me.getValue();
										Ext.Ajax.request({
											url : "jgxxCheckByGh.action?gh=" + gh ,
											method : 'post',
											success : function(response, opts) {
												var result = Ext.decode(response.responseText);
												var success = result.result.success;
												if(success){
													Ext.MessageBox.alert('提示', '教师工号已经存在！');
													me.setValue('');
												}
											}
										})
									}
							}
					}
				},{
					xtype : 'container',
					rowspan : 6,
					padding : '3 0 0 30',
					layout : {
						type:'vbox',
						align:'center'
					},
					items:[{
						xtype: 'container',
						items:[{
							xtype: 'image',
							itemId:'zp',
							shrinkWrap:true,
							height:160,
							width:120,
							src:'styles/images/none.jpg',
							getImage:function(buffer){
								var binary = ''
								var bytes = new Uint8Array( buffer )
								var len = bytes.byteLength;
								for (var i = 0; i < len; i++){
									binary += String.fromCharCode( bytes[ i ] )
								}
								return window.btoa( binary );
							}
						}]
					},{
						xtype: 'fieldcontainer',
						itemId:'upContainer',
						hidden: true,
						autoHeight:true,
						autoWidth:true,
						layout:{
							type:'column'
						},
						items:[{
							xtype: 'filefield',
							name: 'upload',
							emptyText: '请上传照片',
							fieldLabel: '照片',
							labelWidth:30,
							labelAlign:'right',
							width:155,
							buttonText: '浏览...',
							regex:/(jpg)|(JPG)/i,
							regexText:'上传文件必须是jpg类型文件！'
						},{
							xtype: 'button',
							text: '取消',
							handler:function(o){
								o.ownerCt.setVisible(false);
								o.up('form').down('#upImgBtn').setVisible(true);
							}
						}]
					},{
						xtype: 'button',
						itemId:'upImgBtn',
						text: '上传照片',
						scope:this,
						handler: function(o){
							o.up('form').down('#upContainer').setVisible(true);
							o.setVisible(false);
						}
					}]
				},{
					xtype : 'combo',
				    itemId : 'szdwh',
				    name : 'szdwh',
				    fieldLabel : '所在单位',
				    matchFieldWidth:false,
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'dwmc',
				    valueField : 'dwh',
				    store:'ViewXxDwxxStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#szdw').setValue(record[0].data.dwmc);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'szdw',
					name : 'szdw',
					fieldLabel : '所在单位'
				},{
					xtype : 'combo',
				    itemId : 'xbm',
				    name : 'xbm',
				    fieldLabel : '性别',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'xb',
				    valueField : 'xbm',
				    store:'ZdXbmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#xb').setValue(record[0].data.xb);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'xb',
					name : 'xb',
					fieldLabel : '性别'
					
				},{
					xtype : 'combo',
				    itemId : 'mzm',
				    name : 'mzm',
				    fieldLabel : '民族',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'mzmc',
				    valueField : 'mzm',
				    store:'ZdMzmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#mz').setValue(record[0].data.mzmc);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'mz',
					name : 'mz',
					fieldLabel : '民族'
				},{
					xtype : 'textfield',
					itemId : 'gzdw',
					name : 'gzdw',
					fieldLabel : '工作单位',
					value:'安徽工业大学'
				},{
					xtype : 'textfield',
					itemId : 'xzzw',
					name : 'xzzw',
					fieldLabel : '行政职务',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
					itemId : 'zcm',
					name : 'zcm',
					fieldLabel : '职称(码)',
					hidden:true
				},{
					xtype : 'textfield',
					itemId : 'zc',
					name : 'zc',
					fieldLabel : '职称'
				},{
					xtype : 'combo',
				    itemId : 'zzmmm',
				    name : 'zzmmm',
				    fieldLabel : '政治面貌',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'zzmm',
				    valueField : 'zzmmm',
				    store:'ZdZzmmmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#zzmm').setValue(record[0].data.zzmm);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'zzmm',
					name : 'zzmm',
					fieldLabel : '政治面貌'
				}]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
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
				title:'详细信息',
				items:[{
					xtype : 'combo',
				    itemId : 'zjlxm',
				    name : 'zjlxm',
				    fieldLabel : '身份证类型',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'sfzjlx',
				    valueField : 'sfzjlxm',
				    store:'ZdSfzjlxmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#zjlx').setValue(record[0].data.sfzjlx);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'zjlx',
					name : 'zjlx',
					fieldLabel : '证件类型'
				},{
					xtype : 'textfield',
					itemId : 'zjhm',
					name : 'zjhm',
					fieldLabel : '证件号码'
					
				},{
					xtype:'datefield',
					itemId:'csrq',
					name:'csrq',
					fieldLabel : '出生日期',
					format: 'Y-m-d'
					/*xtype : 'textfield',
					itemId : 'csrq',
					name : 'csrq',
					fieldLabel : '出生日期',
					regex : /^([\d]{4}(((0[13578]|1[02])((0[1-9])|([12][0-9])|(3[01])))|(((0[469])|11)((0[1-9])|([12][1-9])|30))|(02((0[1-9])|(1[0-9])|(2[1-8])))))|((((([02468][048])|([13579][26]))00)|([0-9]{2}(([02468][048])|([13579][26]))))(((0[13578]|1[02])((0[1-9])|([12][0-9])|(3[01])))|(((0[469])|11)((0[1-9])|([12][1-9])|30))|(02((0[1-9])|(1[0-9])|(2[1-9])))))$/,
					regexText:"日期格式有误，正确格式-YYYYMMDD",
					allowBlank : false,
					blankText : 'YYYYMMDD'*/
				},{
					xtype : 'textfield',
					itemId : 'csd',
					name : 'csd',
					fieldLabel : '出生地'
				},{
			        xtype: 'treepathpicker',
			        itemId:'jgd',
			        name:'jgd',
			        fieldLabel: '籍贯地',
			        allowBlank : false,
					blankText : '必填！',
			        displayField: 'text',
			        valueField:'id',
			        value:'',
			        store : Ext.StoreMgr.lookup('ZdXzqhmStore')
				},{
					xtype : 'combo',
				    itemId : 'xlm',
				    name : 'xlm',
				    fieldLabel : '学历',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'xl',
				    valueField : 'xlm',
				    store:'ZdXlmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#xl').setValue(record[0].data.xl);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'xl',
					name : 'xl',
					fieldLabel : '学历'
				},{
					xtype : 'combo',
				    itemId : 'xwm',
				    name : 'xwm',
				    fieldLabel : '学位',
				    matchFieldWidth:false,
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'xw',
				    valueField : 'xwm',
				    store:'ZdXwmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#xw').setValue(record[0].data.xw);
				   	}
				   }
				},{
					xtype : 'hiddenfield',
					itemId : 'xw',
					name : 'xw',
					fieldLabel : '学位'
				},{
					xtype : 'textfield',
					itemId : 'byyx',
					name : 'byyx',
					fieldLabel : '毕业院校',
					allowBlank : false,
					blankText : '必填！'
					
				},{
					xtype : 'textfield',
					itemId : 'byzy',
					name : 'byzy',
					fieldLabel : '毕业专业',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype:'textfield',
					itemId:'jsly',
					name:'jsly',
					fieldLabel:'教师来源',
					hidden:true
				},{
					xtype:'combo',
					itemId:'jslym',
					name:'jslym',
					fieldLabel:'教师来源',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
					valueField:'value',
					displayField:'text',
					mode:'local',
					store : Ext.create('Ext.data.Store',{
				   	fields : ['value','text'],
				   	data:[
					   	{"value":'1',"text":"本校"},
					   	{"value":'2',"text":"外聘"}
				   	],
					  listeners:{
					   	select:function(combo, record, index){
					   		me.down('#jsly').setValue(record[0].data.text);
					   	}
					   }
				   })
				
				},{
					xtype : 'datefield',
					itemId : 'byny',
					name : 'byny',
					fieldLabel : '毕业时间',
					format: 'Y-m-d'
				},{
					xtype : 'datefield',
					itemId : 'gzny',
					name : 'gzny',
					fieldLabel : '工作时间',
					format:'Y-m-d'
				},{
					xtype:'textfield',
					itemId:'dslb',
					name:'dslb',
					fieldLabel:'导师类型',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'dslbm',
				    name : 'dslbm',
				    fieldLabel : '导师类别',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'dslb',
				    valueField : 'dslbm',
				    store:'ZdDslbmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#dslb').setValue(record[0].data.dslb);
				   	}
				   }
				},{
					xtype : 'combo',
				    itemId : 'dsztm',
				    name : 'dsztm',
				    fieldLabel : '导师状态',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'dszt',
				    valueField : 'dsztm',
				    store:'ZdDsztmStore',
				    mode:'local',
				   listeners:{
				   	select:function(combo, record, index){
				   		me.down('#dszt').setValue(record[0].data.dszt);
				   	}
				   }
				},{
					xtype:'textfield',
					itemId:'dszt',
					name:'dszt',
					fieldLabel:'导师状态',
					hidden:true
				},{
					xtype : 'datefield',
					itemId : 'spny',
					name : 'spny',
					fieldLabel : '受聘时间',
					format: 'Y-m-d'
				},{
					xtype : 'datefield',
					itemId : 'jpny',
					name : 'jpny',
					fieldLabel : '解聘时间',
					format: 'Y-m-d'
				},{
					xtype:'combo',
					itemId:'sfyx',
					name:'sfyx',
					fieldLabel:'是否有效',
				    allowBlank : false,
					blankText : '必填！',
				    editable : false,
					valueField:'value',
					displayField:'text',
					mode:'local',
					store : Ext.create('Ext.data.Store',{
				   	fields : ['value','text'],
				   	data:[
					   	{"value":'1',"text":"有效"},
					   	{"value":'0',"text":"无效"}
				   	]
				   })
				}]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
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
				title:'通讯信息',
				items:[{
					xtype : 'textfield',
					itemId : 'yddh',
					name : 'yddh',
					fieldLabel : '移动电话',
					validator : function(value) {
						if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)&& !/\d{3}-\d{8}|\d{4}-\d{7}/.test(value)) 
							return "电话号码格式错误！";
						return true;
					},
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
					itemId : 'lxdh',
					name : 'lxdh',
					fieldLabel : '联系电话',
					validator : function(value) {
						if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)&& !/\d{3}-\d{8}|\d{4}-\d{7}/.test(value)) 
							return "电话号码格式错误！";
						return true;
					},
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
					itemId : 'bgdh',
					name : 'bgdh',
					fieldLabel : '办公电话',
					regex : /\d{3}-\d{8}|\d{4}-\d{7}/,      
	                regexText:"电话号码格式错误！",
					allowBlank : true
				},{
					xtype : 'textfield',
					itemId : 'dzyx',
					name : 'dzyx',
					fieldLabel : '电子邮箱',
					vtype : "email",
					allowBlank : true
				},{
					xtype : 'textfield',
					itemId : 'grzy',
					name : 'grzy',
					fieldLabel : '个人主页'
				},{
					xtype : 'textfield',
					itemId : 'jstxh',
					name : 'jstxh',
					fieldLabel : '即时通信号'
				},{
					xtype : 'textfield',
					itemId : 'yzbm',
					name : 'yzbm',
					fieldLabel : '邮政编码',
					regex : /^[0-9][0-9]{5}$/,      
	                regexText:"邮政编码格式错误！",
					allowBlank : true
				},{
					xtype : 'textfield',
					itemId : 'txdz',
					name : 'txdz',
					fieldLabel : '通信地址'
				}]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '学科方向',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'xkfx',
			    	name:'xkfx',
			    	readOnlyCls: 'x-form-item-label'
		        }]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '个人简介',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'grjj',
			    	name:'grjj',
			    	readOnlyCls: 'x-form-item-label'
		        }]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '备注',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'bz',
			    	name:'bz',
			    	readOnlyCls: 'x-form-item-label'
		        }]
			}]
		});
		me.callParent(arguments);//通过它可以执行父类的Ext.form.Panel方法，传的argument参数是所有js函数都存在的一个变量，
                                //其中保存了当前函数的所有参数
	},
	
	
	
	loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);

	},
	
	edit:function(rec){
		var me = this;
		var values = rec.data;
		
		for(var fieldName in values){
     		var field = me.form.findField(fieldName=='id'?'idCode':fieldName);
     		if(field != null){	
     			if(field.xtype == 'datefield'){
     				if(values[field.name] != null)
     					if(values[field.name].indexOf('-') == -1){
	     						var year = values[field.name].substring(0,4);
	     						var month = values[field.name].substring(4,6);
	     						var day = values[field.name].substring(6,8);
	     						values[field.name] = year+ "-" +month+ "-" +day;
	     					}
     				}
     			}
		}
		
		if(getBrowserName().indexOf('IE')!= -1){
			var imgCtr = me.down('#zp');
			imgCtr.setSrc(me.imgUrl + '?'+ me.imgId +'='+ values[me.imgId]);
		}else{
			var imgCtr = me.down('#zp');
			var url;
			if(values['zp']!=null)
			  url = 'data:image/jpeg;base64,' + imgCtr.getImage(values['zp']);
			else
			  url = "styles/images/none.jpg";
			imgCtr.setSrc(url);
		}
	   me.form.findField('upload').setFieldLabel("照片");
	   me.form.findField('upload').allowBlank = true;
	},
	
	submit: function (){
		var me = this;		
		
		if (me.form.isValid()){
		    values = me.form.getValues();
		    
		    values.csrq	 = values.csrq.replace(/\-/g, "");
		    values.byny = values.byny.replace(/\-/g,"");
		    values.spny = values.spny.replace(/\-/g,"");
		    values.jpny = values.jpny.replace(/\-/g,"");
		    values.gzny = values.gzny.replace(/\-/g,"");
		    
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    
		    me.form.submit({
   	            waitTitle: '提示',
   	            url: me.isAdd?me.postUrl + "Add.action":me.postUrl + "Edit.action",
   	            actionMethod: 'post',
   	            params:{datas:JSONobj},
   	            waitMsg: '正在保存数据，请稍候...',
   	            success: function (form, action) {
					if (action.result.success) {
		                Ext.Msg.show({title:"提示",msg:'数据保存成功！',
		                    fn:function(){
		                    	 Ext.StoreMgr.lookup('JgxxStore').reload();
		                    	me.up('window').close();
		                    	me.up('window').down('#upContainer').setVisible(false);
								me.up('window').down('#upImgBtn').setVisible(true);
		                    },buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
    	 			}else{
        	 			Ext.MessageBox.show({
               			title: '提示',
               			msg: '数据保存失败program！' + action.result.msg,
               			buttons: Ext.MessageBox.OK,
              			icon: Ext.MessageBox.ERROR
                    	});	
    	 			} 
				},
             failure: function (form, action) {
             	if(action.result != undefined && action.result.msg != null)
             		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
             	else{ 
                     Ext.Msg.show({title:"提示",msg:'数据保存失败remote！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
             	}
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