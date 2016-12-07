Ext.define('App.view.search.KCKDetail',{
	extend:'Ext.form.Panel',
	xtype : 'form',
	itemId: 'kckDetail',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
			width:720,
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
				readOnly:true,
				labelAlign:'right',
				width:280,
	        	labelWidth:100,
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
		            	xtype: 'hiddenfield',
		            	itemId: 'id',
		            	name: 'id'
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						fieldLabel: '课程号',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'kcywmc',
						name: 'kcywmc',
						fieldLabel: '课程英文名',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'kkdw',
						name: 'kkdw',
						fieldLabel: '开课单位',
						allowBlank: true
					},,{
						xtype: 'hiddenfield',
						itemId: 'pyccm',
						name: 'pyccm',
						fieldLabel: '培养层次码',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'pycc',
						name: 'pycc',
						fieldLabel: '培养层次',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学时类型',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'kcxf',
						name: 'kcxf',
						fieldLabel: '课程学分',
						allowBlank: true
					},{
						xtype: 'hiddenfield',
						itemId: 'xslxm',
						name: 'xslxm',
						fieldLabel: '学时类型码',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'zxs',
						name: 'zxs',
						fieldLabel: '总学时',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'llxs',
						name: 'llxs',
						fieldLabel: '理论学时',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'syxs',
						name: 'syxs',
						fieldLabel: '实验学时',
						allowBlank: true
				    },{
				    	xtype: 'textfield',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程',
						allowBlank: true
				    },{
						xtype: 'textfield',
						itemId: 'kkdwh',
						name: 'kkdwh',
						hidden:true,
						fieldLabel: '开课单位号',
						allowBlank: true
					},{
						xtype:'label'
					}]
		 },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '简介:',
	            collapsible: false,
	            margin:'5 10 10 10',
	            width:720,
	            padding:'5 5 10 5',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	readOnly:true,
			    	itemId:'kcjj',
			    	name:'kcjj'
		        }]
		},{
			xtype:'fieldset',
			autoHeight:true,
			title:'备注:',
			collapsible: false,
			width:720,
			margin:'10 10 10 10',
			padding:'5 5 10 5',
			layout:'fit',
			items:[{
				xtype:'textareafield',
				readOnly:true,
				itemId:'bz',
				name:'bz'
			}]
		}],
		 buttons: [{
        	    text: '退出',
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
        me.loadRecord(rec);
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
//			var style = "background:none; font-weight:bold";
			var style = "background:none";
			textareafields[i].setFieldStyle(style);
		}
    },
    
     submit: function (o, e, eOpts){
			var me = this;
			var form = me.up('form');		
			var rec = form.getRecord();
			
        	var win = new Ext.Window({
        		itemId:'kckWin',
        		autoShow: true,
        		title:'修改课程',
        		iconCls:'edit_16',
                layout: 'fit',
                width: 755,
           		height: 575,
                closeAction:'hide',
        		resizable:false,
        		shadow:true,
        		modal:true,
        		closable:true,
        		animCollapse:true,
        		autoShow:true,
                items: [Ext.create('App.view.pyfa.KCKForm')]
            });
        var kckForm = win.down('form');
        kckForm.loadForm(rec);
		win.show();
		me.up('window').close();
	}
 }
);