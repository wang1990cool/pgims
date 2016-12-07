Ext.define('App.view.pyfa.PYFADetail',{
	extend:'Ext.form.Panel',
	xtype : 'form',
	itemId: 'pyfaDetail',
	border:'0 0 0 0',
	initComponent:function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldset',
				border:'0 0 0 0',
				collapsible:false,
				readOnly:true,
				margin:'10 5 15 5',
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
					itemId:'bbh',
					name:'bbh',
					fieldLabel:'年度'
				},{
					xtype:'textfield',
					itemId:'pyfah',
					name:'pyfah',
					fieldLabel:'培养方案号'
				},{
					xtype:'textfield',
					itemId:'dwh',
					name:'dwh',
					hidden:true,
					fieldLabel:'单位号'
				},{
					xtype:'textfield',
					itemId:'dwmc',
					name:'dwmc',
					fieldLabel:'单位名称'
				},{
					xtype:'textfield',
					itemId:'zymc',
					name:'zymc',
					fieldLabel:'专业名称'
				},{
					xtype:'textfield',
					itemId:'zydm',
					name:'zydm',
					fieldLabel:'专业代码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'xslxm',
					name:'xslxm',
					hidden:true,
					fieldLabel:'学生类型码'
				},{
					xtype:'textfield',
					itemId:'xslx',
					name:'xslx',
					fieldLabel:'学生类型'
				},{
					xtype:'textfield',
					itemId:'xz',
					name:'xz',
					fieldLabel:'学制'
				},{
					xtype:'textfield',
					itemId:'xxnx',
					name:'xxnx',
					fieldLabel:'学习年限'
				},{
					xtype:'textfield',
					itemId:'zxf',
					name:'zxf',
					fieldLabel:'总学分'
				},{
					xtype:'textfield',
					itemId:'xwkxf',
					name:'xwkxf',
					fieldLabel:'学位课学分'
				},{
					xtype:'textfield',
					itemId:'pyfs',
					name:'pyfs',
					fieldLabel:'培养方式'
				},{
					xtype:'textfield',
					itemId:'pyfsm',
					name:'pyfsm',
					fieldLabel:'培养方式码',
					hidden:true
				
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
					itemId:'pyfamc',
					name:'pyfamc',
					fieldLabel:'培养方案名称',
					allowBlank:false,
					colspan:2,
					width:635
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
				}]
			},{
				xtype:'fieldset',
				autoHeight:true,
				title:'备注:',
				collapsible: false,
				width:720,
				margin:'5 10 65 15',
				layout:'fit',
				items:[{
					xtype:'textareafield',
					itemId:'bz',
					name:'bz',
					style:'color:#000000'
				}]
			},{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
		       }]

		});
		 me.callParent(arguments);
	},
	
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
//			var style = "background:none; border:0px;font-weight:bold";
			var style = "background:none; border:0px";
			textfields[i].setFieldStyle(style);
		}
		var filefields = me.query('filefield');
		for(var i in filefields)
			filefields[i].setDisabled(true);
			
		var textareafields = me.query('textareafield');
		for(var i in textareafields){
			textareafields[i].setReadOnly(true);
//			var style = "background:none; font-weight:bold;color:#000000";
			var style = "background:none; color:#000000";
			textareafields[i].setFieldStyle(style);
		}
    },
	
    loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    }
})