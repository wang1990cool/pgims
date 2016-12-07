Ext.define('App.view.yx.EditXsxxForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editXsxxForm',
    itemId:'editXsxxForm',
//    autoScroll : true,
 
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	           
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
	            title: '基本信息',
            items: [ {
	            	xtype: 'hiddenfield',
	            	itemId:'id',
	            	name:'id'
	            },{
					xtype : 'hiddenfield',
					itemId : 'bmh',
					name : 'bmh',
					fieldLabel : '报名号'
				},{
					xtype : 'textfield',
					itemId : 'zkzh',
					name : 'zkzh',
					fieldLabel : '准考证号'
				},{
					xtype : 'hiddenfield',
					itemId : 'zsbh',
					name : 'zsbh',
					fieldLabel : '证书编号'
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名'
				},{
					xtype : 'hiddenfield',
					itemId : 'xmpy',
					name : 'xmpy',
					fieldLabel : '姓名拼音'
				},
			       {
		            xtype: 'container',
		            rowspan:6,
		            layout: {
					    type: 'vbox',
					    align: 'center'
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
							getImage: function(buffer) {
							    var binary = ''
							        var bytes = new Uint8Array( buffer )
							        var len = bytes.byteLength;
							        for (var i = 0; i < len; i++) {
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
	                    layout: {
	                        type: 'column'
	                    },
	                    items: [{
							xtype: 'filefield',
							name: 'upload',
							emptyText: '请上传照片',
//							allowBlank:false,
							fieldLabel: '<font color="red">*</font>照片',
							labelWidth:60,
							labelAlign:'right',
							width: 200,
							buttonText: '浏览...',
					        regex:/(jpg)|(JPG)/i,
				            regexText:'上传文件必须是jpg类型文件！'
	        			},{
	                        xtype: 'button',
	                        text: '取消',
	                        handler: function(o){
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
	    			xtype: 'textfield',
		            itemId: 'nj',
		            name: 'nj',
		            fieldLabel : '年级'
	    		},{
	        		xtype : 'combo',
				    itemId : 'xb',
				    name : 'xb',
				    fieldLabel : '性别',
				    editable : false,
//				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'xb',
				    valueField : 'xb',
				    store : 'ZdXbmStore'
	    		},{

					xtype: 'hiddenfield',
					itemId: 'sftms',
					name: 'sftms',
					fieldLabel: '是否推免生'
				},{
					xtype: 'hiddenfield',
					itemId: 'sfyzy',
					name: 'sfyzy',
					fieldLabel: '是否一志愿'
				},{	
					  	xtype: 'datefield',
				        itemId: 'csrq',
				        name: 'csrq',
				        fieldLabel: '出生日期',
				        format : "Y-m-d",
				        width:250,
	        			labelWidth:100,
	        			padding:'5 0 0 0',
	        			size:20
			            
		            },{
					xtype : 'combo',
					itemId : 'mz',
					name : 'mz',
					fieldLabel : '民族',
					editable : false,
//					forceSelection : true,
					queryMode : 'local',
					displayField : 'mzmc',
					valueField : 'mz',
					store: 'ZdMzmStore'
					
	    		},{
					xtype : 'combo',
					itemId : 'zzmm',
					name : 'zzmm',
					fieldLabel : '政治面貌',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'zzmm',
					valueField : 'zzmm',
					store: 'ZdZzmmmStore'
	    		},{
					xtype : 'hiddenfield',
					itemId : 'zjlx',
					name : 'zjlx',
					fieldLabel : '证件类型'
				},{
	    			xtype: 'textfield',
		            itemId: 'sfzh',
		            name: 'sfzh',
		            fieldLabel : '身份证号'
		           
	    		},{
	    			xtype: 'textfield',
		            itemId: 'txdz',
		            name: 'txdz',
		            fieldLabel : '通讯地址',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'txyb',
		            name: 'txyb',
		            fieldLabel : '通讯邮编',
		            hidden:true
	    		},{
					xtype : 'combo',
					itemId : 'hf',
					name : 'hf',
					fieldLabel : '婚姻状况',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'hyzk',
					valueField : 'hyzk',
				    store: 'ZdHyzkmStore'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'lxdh',
		            name: 'lxdh',
		            fieldLabel : '联系电话'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'yddh',
		            name: 'yddh',
		            fieldLabel : '移动电话'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dzxx',
		            name: 'dzxx',
		            fieldLabel : '电子邮箱'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'bddd',
					name : 'bddd'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'jgdm',
					name : 'jgdm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'jgd',
					name : 'jgd'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'csdm',
					name : 'csdm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'csd',
					name : 'csd'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'hkdm',
					name : 'hkdm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'hkd',
					name : 'hkd'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'hkdz',
					name : 'hkdz'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dadm',
					name : 'dadm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dad',
					name : 'dad'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dadw',
					name : 'dadw'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dadz',
					name : 'dadz'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dayb',
					name : 'dayb'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'gzdw',
					name : 'gzdw'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'gzjl',
					name : 'gzjl'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'jcqk',
					name : 'jcqk'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'jtcy',
					name : 'jtcy'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'ksly',
					name : 'ksly'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'bbydw',
					name : 'bbydw'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'bbyzy',
					name : 'bbyzy'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'bkbyny',
					name : 'bkbyny'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'xlm',
					name : 'xlm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'xl',
					name : 'xl'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'xwm',
					name : 'xwm'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'xw',
					name : 'xw'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'zxf',
					name : 'zxf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'dyxnxf',
					name : 'dyxnxf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'jcf',
					name : 'jcf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'zsf',
					name : 'zsf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'tjf',
					name : 'tjf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'yktf',
					name : 'yktf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'ylbxf',
					name : 'ylbxf'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'hj',
					name : 'hj'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'bdztm',
					name : 'bdztm'
	    		}]
	        },
				{
	           xtype: 'fieldset',
	            autoHeight:true,
	            title: '录取信息',
	            collapsible: true,
	            padding:'5 5 10 5',
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
            items: [ {
	    			xtype: 'textfield',
		            itemId: 'xh',
		            name: 'xh',
		            fieldLabel : '学号'
	    		},{
					xtype : 'hiddenfield',
					itemId : 'rxfsm',
					name : 'rxfsm'
	    		},{
	    			xtype : 'textfield',
					itemId : 'rxfs',
					name : 'rxfs',
					fieldLabel : '入学方式'
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'lqxym',
					name : 'lqxym'
	    		},{
					xtype : 'textfield',
					itemId : 'lqxy',
					name : 'lqxy',
					fieldLabel : '录取学院'
				},{
	    			xtype : 'hiddenfield',
					itemId : 'lqzym',
					name : 'lqzym'
	    		},{
					xtype : 'textfield',
					itemId : 'lqzy',
					name : 'lqzy',
					fieldLabel : '录取专业'
				},{
					xtype : 'hiddenfield',
					itemId : 'xslxm',
					name : 'xslxm'
				},{
					xtype : 'textfield',
					itemId : 'xslx',
					name : 'xslx',
					fieldLabel : '学生类型'
				},{
	    			xtype: 'hiddenfield',
		            itemId: 'lqlb',
		            name: 'lqlb',
		            fieldLabel:'录取类别'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xz',
		            name: 'xz',
		            fieldLabel : '学制'
	    		}]
	        },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '备注',
	            collapsible: true,
	            padding:'5 5 10 5',	   
	            layout:'auto',
				items:[{
			    	xtype: 'textareafield',
			    	colspan:3,
			    	width:835,
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
		            text:'保存',
		            tooltip:'保存',
		            iconCls:'save_16',
		            handler: function(){
		        	this.up('window').down('form').submit();
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
	
	
	edit: function(rec){
    	var me = this;
		var values = rec.data;
		for(var fieldName in values){
     		var field = me.form.findField(fieldName=='id'?'idCode':fieldName);
     		if(field != null){	
     			if(field.xtype == 'datefield'){
     				if(values[field.name] != null)
     					if(values[field.name].indexOf('-') == -1)
	     					{
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
		    var values = me.form.getValues();
		    values.csrq = values.csrq.replace(/\-/g, "");	
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
//		    alert(JSONobj)
		    me.form.submit({
   	            waitTitle: '提示',
   	            url:me.postUrl + "Edit.action",
   	            method: 'post',
   	            params:{datas:JSONobj},
   	            waitMsg: '正在保存数据，请稍候...',
   	            success: function (form, action) {
					if (action.result.success) {
		                Ext.Msg.show({title:"提示",msg:'数据保存成功！',
		                    fn:function(){
		                    	 Ext.StoreMgr.lookup('YxXsjbxxbStore').reload();
		                    	me.up('window').close();
		                    },buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
    	 			}else{
        	 			Ext.MessageBox.show({
               			title: '提示',
               			msg: '数据保存失败！' + action.result.msg,
               			buttons: Ext.MessageBox.OK,
              			icon: Ext.MessageBox.ERROR
                    	});	
    	 			} 
				},
             failure: function (form, action) {          	
             	if(action.result != undefined && action.result.msg != null)
             		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
             	else{ 
                     Ext.Msg.show({title:"提示",msg:'数据保存失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
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