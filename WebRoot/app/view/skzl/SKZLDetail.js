Ext.define('App.view.skzl.SKZLDetail', {
    extend: 'Ext.form.Panel',
    itemId:'skzlDetail',
    border:'0 0 0 0',
 	isAdd:true,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            padding:'5 5 5 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:240,
	        		labelWidth:100,
	        		padding:'3 0 0 0',
	        		size:20
	        	},
				layout:{
					type:'table',
					columns:2,
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
			            	xtype: 'textfield',
			            	itemId:'id',
			            	name:'id',
			            	fieldLabel:'id',
			            	hidden:true
			            },{
							xtype:'textfield',
							itemId:'kkkh',
							name:'kkkh',
							fieldLabel:'开课课号',
							width:260,
							readOnly:true
						},{
							xtype : 'textfield',
							itemId : 'kch',
							name : 'kch',
							fieldLabel : '课程号'
							
						},{
							xtype : 'textfield',
							itemId : 'kcmc',
							name : 'kcmc',
							fieldLabel : '课程名称',
							width:260,
							allowBlank : false,	
							blankText : '必填！'
					},{
					xtype:'textfield',
					itemId:'kkdw',
					name:'kkdw',
					fieldLabel:'开课单位'
				},{
					xtype:'textfield',
					itemId:'xn',
					name:'xn',
					fieldLabel:'学年'
				},{
					xtype:'textfield',
					itemId:'xq',
					name:'xq',
					fieldLabel : '学期'
				},{
					xtype:'textfield',
					itemId:'zjjs',
					name:'zjjs',
					fieldLabel : '主讲教师'
				},{
					xtype:'textfield',
					itemId:'zllx',
					name:'zllx',
					fieldLabel:'资料类型'
				},{
					xtype:'textfield',
					itemId:'zt',
					name:'zt',
					fieldLabel:'状态'
				},{
					xtype:'textfield',
					itemId:'zlscsj',
					name:'zlscsj',
					fieldLabel:'上传时间'
				},{
					xtype:'textfield',
					itemId:'zlscr',
					name:'zlscr',
					fieldLabel:'上传人'
				},{
					xtype:'textfield',
					itemId:'zlscip',
					name:'zlscip',
					fieldLabel:'上传IP'
				},{
					xtype:'textfield',
					itemId:'zlwjdz',
					name:'zlwjdz',
					fieldLabel:'文件地址',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'zlwj',
					name:'zlwj',
					fieldLabel:'资料文件',
					hidden:true
				}]
	        }],
	        buttons: [{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
//		              hidden:true
		       },{
			 	text:'资料下载',
			 	iconCls:'download_16',
			 	handler:function(){
			 		var me = this;
			 		var skzlDetail = me.up('#skzlDetail');
		 			var zlwjdz = skzlDetail.down('#zlwjdz').getValue();
		 			if(zlwjdz == '' || zlwjdz == null){
		 				Ext.MessageBox.alert('提示', '请先上传资料！');
		 			}else{
		 				var downloader = skzlDetail.down('#fileDownloader');
		 				var values = skzlDetail.getValues();
//		 				var JSONobj = [];
//		  			    JSONobj.push(JSON.stringify(values));
		 				downloader.load({
	            			params: {zlInfo:Ext.encode(values)},
	            			url: 'skzlFileDownloadZl.action'
            			});
		 			}
			 	}
			 },{
        	    text: '退出',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
        });
       me.callParent(arguments);
    },
    
      loadForm:function(rec){
      		var me = this;
        	me.loadRecord(rec);
        	var zlscsj = rec.get('zlscsj')
        	if(zlscsj != null ){
        		zlscsj = zlscsj.replace('T',' ');
        		me.down('#zlscsj').setValue(zlscsj);
        	}
      },
      
       setView:function(){
			var me = this;
			var textfields =  me.query('textfield');
			for(var i in textfields){
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
	  }
	  
});