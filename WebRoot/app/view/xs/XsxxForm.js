Ext.define('App.view.xs.XsxxForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.xsxxForm',
    itemId:'xsxxForm',
 
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
	            items: [{
	            	xtype: 'hiddenfield',
	            	itemId:'id',
	            	name:'id'
	            },{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '<font color="red">*</font>姓名',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
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
							itemId:'rxzp',
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
	        	},	        	
	        	{
	        		xtype : 'combo',
				    itemId : 'xbm',
				    name : 'xbm',
				    fieldLabel : '性别',
				    editable : false,
//				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'xb',
				    valueField : 'xbm',
				    store : 'ZdXbmStore',
				   	listeners:{
				   	select:function(combo, record, index){
				   		var me = this;
				   		var XnjgbForm = me.up('#xsxxForm');
				   		XnjgbForm.down('#xb').setValue(record[0].data.xb);
				   	}
				   }
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'xb',
		            name: 'xb'	         
	    		},
				  {	
					  	xtype: 'datefield',
				        itemId: 'csrq',
				        name: 'csrq',
				        fieldLabel: '出生日期',
				        format : "Y-m-d",
				        width:250,
	        			labelWidth:100,
	        			padding:'5 0 0 0',
	        			size:20
			            
		            },				
			 	{
	        		xtype : 'combo',
				    itemId : 'gjdqm',
				    name : 'gjdqm',
				    fieldLabel : '国籍',
				    editable : false,
//				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'gjdqmc',
				    valueField : 'gjdqm',
				    store: 'ZdGjdqmStore',
				    listeners:{
				   	select:function(combo, record, index){
				   		var me = this;
				   		var XnjgbForm = me.up('#xsxxForm');
				   		XnjgbForm.down('#gjdqmc').setValue(record[0].data.xb);
				   	}
				   }
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'gjdqmc',
		            name: 'gjdqmc'		         
	    		},
			 	{
					xtype : 'combo',
					itemId : 'mzm',
					name : 'mzm',
					fieldLabel : '民族',
					editable : false,
//					forceSelection : true,
					queryMode : 'local',
					displayField : 'mzmc',
					valueField : 'mzm',
					store: 'ZdMzmStore',
					listeners:{
					   	select:function(combo, record, index){
					 
					   		me.down('#mz').setValue(record[0].data.mzmc);
					   	}
					   }
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'mz',
		            name: 'mz',
		            fieldLabel : '民族'	
	    		},
	    		
	            {
					xtype : 'hiddenfield',
					itemId : 'csd',
					name : 'csd',
					fieldLabel : '出生地'					
				},
				{
					xtype: 'treepathpicker',
	            	itemId: 'csdm',
	            	name: 'csdm',
	            	fieldLabel: '出生地',
	            	displayField:'text',
	            	value:'',
//	            	allowBlank: false,
	                blankText: '必填！',
	                store: Ext.StoreMgr.get('treestore')	                
				},
				{
					xtype : 'hiddenfield',
					itemId : 'jgd',
					name : 'jgd'		
				},	
				{
					xtype: 'treepathpicker',
	            	itemId: 'jgdm',
	            	name: 'jgdm',
	            	fieldLabel: '籍贯地',
	            	displayField:'text',
	            	value:'',
//	            	allowBlank: false,
	                blankText: '必填！',
	                store: Ext.StoreMgr.get('treestore')	            
				},
				{
					xtype : 'combo',
					itemId : 'zjlxm',
					name : 'zjlxm',
					fieldLabel : '证件类型码',
					editable : false,
//					forceSelection : true,
					queryMode : 'local',
					displayField : 'sfzjlx',
					valueField : 'sfzjlxm',
					store: 'ZdSfzjlxmStore',
					listeners:{
							   	select:function(combo, record, index){
							   		me.down('#zjlx').setValue(record[0].data.sfzjlx);
							   	}
							   }

	    		},{
	    			xtype : 'textfield',
					itemId : 'zjlx',
					name : 'zjlx',
					fieldLabel : '身份证'
	    		},
	    		{
					xtype : 'textfield',
					itemId : 'zjhm',
					name : 'zjhm',
					fieldLabel : '身份证号码'
				},
				{
					xtype : 'combo',
					itemId : 'zzmmm',
					name : 'zzmmm',
					fieldLabel : '政治面貌',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'zzmm',
					valueField : 'zzmmm',
					store: 'ZdZzmmmStore',
                    listeners:{
						select:function(combo, record, index){
										me.down('#zzmm').setValue(record[0].data.zzmm);
						}
					}
	    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'zzmm',
					name : 'zzmm',
					fieldLabel: '政治面貌'
	    		},
			 	{
					xtype : 'combo',
					itemId : 'hyzkm',
					name : 'hyzkm',
					fieldLabel : '婚姻状况',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'hyzk',
					valueField : 'hyzkm',
				    store: 'ZdHyzkmStore',
               	    listeners:{
						select:function(combo, record, index){
							    me.down('#hyzk').setValue(record[0].data.hyzk);
							  }
				}
    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'hyzk',
					name : 'hyzk'
					
	    		}
			 	]
	        },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '学籍信息',
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
	            items: [{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '<font color="red">*</font>学号',
					allowBlank : false,
					blankText : '必填！'
					
				},
				{
					xtype : 'combo',
					itemId : 'xslxm',
					name : 'xslxm',
					fieldLabel : '学生类型',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'xslx',
					valueField : 'xslxm',
					store:'ZdXslxmStore',
					listeners:{
						   	select:function(combo, record, index){
						   		me.down('#xslx').setValue(record[0].data.xslx);
						   	}
				   }

	    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'xslx',
					name : 'xslx'
	    		},
				{
					xtype : 'combo',
					itemId : 'rxfs',
					name : 'rxfs',
					fieldLabel : '入学方式',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'rxfs',
					valueField : 'rxfsm',
					store:'ZdRxfsmStore',
					listeners:{
								   	select:function(combo, record, index){
								   		me.down('#rxfs').setValue(record[0].data.rxfs);
								   	}
					}

	    		},	
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'rxfs',
					name : 'rxfs'
	    		},
	    		{
					xtype : 'combo',
					itemId : 'jylb',
					name : 'jylb',
					fieldLabel : '教育类别',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'jylb',
					valueField : 'jylbm',
					store: 'ZdJylbmStore',
					listeners:{
								   	select:function(combo, record, index){
								   		me.down('#jylb').setValue(record[0].data.jylb);
								   	}
				   }

	    		},	
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'jylb',
					name : 'jylb'
	    		},
	    		{
					xtype : 'combo',
					itemId : 'xwlbm',
					name : 'xwlbm',
					fieldLabel : '学位类别',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'xwlb',
					valueField : 'xwlbm',
					store:'ZdXwlbmStore',
                    listeners:{
							   	select:function(combo, record, index){
							   		me.down('#xwlb').setValue(record[0].data.xwlb);
							   	}
			    	 }
	    		},	
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'xwlb',
					name : 'xwlb'
	    		},
				{
					xtype : 'combo',
					itemId : 'pyccm',
					name : 'pyccm',
					fieldLabel : '培养层次',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'pycc',
					valueField : 'pyccm',
					store: 'ZdPyccmStore',
					listeners:{
								   	select:function(combo, record, index){
								   		me.down('#pycc').setValue(record[0].data.pycc);
								   	}
				   }

	    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'pycc',
					name : 'pycc'
	    		},
	    		{
					xtype : 'combo',
					itemId : 'yxdm',
					name : 'yxdm',
					fieldLabel : '所在院校',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'yxmc',
					valueField : 'yxdm',
					store: 'ZdYxdmStore',
					listeners:{
							   	select:function(combo, record, index){
							   		me.down('#yxmc').setValue(record[0].data.yxmc);
							   	}
							   }
	    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'yxmc',
					name : 'yxmc'
	    		},
			 	{
			        itemId:'fymc',
			        name:'fymc',
			        fieldLabel: '所在学院'
				},
				{
					xtype: 'hiddenfield',
			        itemId:'zydm',
			        name:'zydm'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'fyh',
			        name:'fyh'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'jylbm',
			        name:'jylbm'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'rxfsm',
			        name:'rxfsm'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'sfyx',
			        name:'sfyx'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'zkzh',
			        name:'zkzh'
			        
				},
				{
					xtype: 'hiddenfield',
			        itemId:'dsh',
			        name:'dsh'
			        
				},
				{
			        itemId:'bjmc',
			        name:'bjmc',
			        fieldLabel: '班級名称'
				},
				{
					xtype: 'textfield',
					itemId: 'dsxm',
					name: 'dsxm',
					fieldLabel: '导师姓名'
				},
				{
			        itemId:'zymc',
			        name:'zymc',
			        fieldLabel: '专业名称'
				},
				{
			        itemId:'yjfx',
			        name:'yjfx',
			        fieldLabel: '研究方向'
				},
				{
					itemId:'sznj',
					name:'sznj',
					fieldLabel:'所在年级'
				},
				{
					xtype: 'datefield',
			        itemId: 'rxrq',
			        name: 'rxrq',
	                fieldLabel: '入学日期',
				    format : "Y-m-d",
				    width:250,
	                labelWidth:100,
	        	    padding:'5 0 0 0',
	        	    size:20
				},
				{
					itemId:'xz',
					name:'xz',
					fieldLabel: '学制'
				},{					
	                xtype: 'datefield',
			        itemId: 'yjbyrq',
			        name: 'yjbyrq',
	                fieldLabel: '预计毕业日期',
				    format : "Y-m-d",
				    width:250,
	                labelWidth:100,
	        	    padding:'5 0 0 0',
	        	    size:20
				},			
				{
					xtype : 'combo',
					itemId : 'dqztm',
					name : 'dqztm',
					fieldLabel : '当前状态',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'xsdqzt',
					valueField : 'xsdqztm',
					store: 'ZdXsdqztmStore',
					listeners:{
						   	select:function(combo, record, index){
						   		me.down('#dqzt').setValue(record[0].data.xsdqzt);
						   	}
				   }

				},
				{
	    			xtype : 'hiddenfield',
					itemId : 'dqzt',
					name : 'dqzt'
	    		},
				{
					xtype : 'combo',
					itemId : 'sfbd',
					name : 'sfbd',
					fieldLabel : '是否报到',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'sfbd',
					valueField : 'sfbd',
					store:'ZdSfbdmStore',
					listeners:{
						   	select:function(combo, record, index){
					   		me.down('#sfbdm').setValue(record[0].data.sfbdm);
								   	}
								   }
	    		},
	    		{
	    			xtype : 'hiddenfield',
					itemId : 'sfbdm',
					name : 'sfbdm'					
	    		},
	    		{	    			
					xtype : 'combo',
					itemId : 'sfzx',
					name : 'sfzx',
					fieldLabel : '是否在校',
					editable : false,
					forceSelection : true,
					queryMode : 'local',
					displayField : 'sfzx',
					valueField : 'sfzx',
					store:'ZdSfzxmStore',
					listeners:{
						   	select:function(combo, record, index){
						   		me.down('#sfzxm').setValue(record[0].data.sfzxm);
						   	}
				   }
	    		},{
	    			xtype : 'hiddenfield',
					itemId : 'sfzxm',
					name : 'sfzxm'
	    		}
	    		]		       
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
	        }],
	        buttons: [{
				itemId:'saveBtn',
		        text: '保存',
		        iconCls:'save_16',
		        handler: function(){
		        	this.up('window').down('form').submit();
		        }
		    },{
		    	itemId:'cancelBtn',
		        text: '取消',
		        iconCls:'return_16',
		        handler: function() {
		        	this.up('window').hide();
		        }
		    }]	      
        });
       me.callParent(arguments);
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
			var imgCtr = me.down('#rxzp');
			imgCtr.setSrc(me.imgUrl + '?'+ me.imgId +'='+ values[me.imgId]);
		}else{ 
			var imgCtr = me.down('#rxzp');
			var url;
			if(values['rxzp']!=null)
				url = 'data:image/jpeg;base64,' + imgCtr.getImage(values['rxzp']);
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
		    var csd = me.down('#csdm').getRawValue();
	   		var jgd = me.down('#jgdm').getRawValue();
		    values.csd = csd;
		    values.jgd = jgd;
		    values.csrq = values.csrq.replace(/\-/g, "");	
		    values.rxrq = values.rxrq.replace(/\-/g, "");
		    values.yjbyrq = values.yjbyrq.replace(/\-/g, "");
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		   	alert(JSONobj)
		    me.form.submit({
   	            waitTitle: '提示',
   	            url: me.isAdd?me.postUrl + "Add.action":me.postUrl + "Edit.action",
   	            method: 'post',
   	            params:{datas:JSONobj},
   	            waitMsg: '正在保存数据，请稍候...',
   	            success: function (form, action) {
					if (action.result.success) {
		                Ext.Msg.show({title:"提示",msg:'数据保存成功！',
		                    fn:function(){
		                    	 Ext.StoreMgr.lookup('XsJcxxbStore').reload();
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