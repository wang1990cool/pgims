Ext.define('App.view.yx.BkxxDetail',{
	extend: 'Ext.form.Panel',
	alias: 'widget.bkxxDetail',
	itemId: 'bkxxDetail',
	layout: 'auto',
	autoScroll: true,
	readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
			items: [{
				xtype: 'fieldset',
	            autoHeight:true,
//				autoWidth:false,
//	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:232,
	        		labelWidth:100,
	        	    padding:'3 3 0 3',
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
	            title: '报考信息',
				items:[{
					xtype: 'textfield',
					itemId: 'bmh',
					name: 'bmh',
					fieldLabel: '报名号'
				},{
					xtype: 'textfield',
					itemId: 'xl',
					name: 'xl',
					fieldLabel: '学历'
				},{
					xtype: 'textfield',
					itemId: 'xw',
					name: 'xw',
					fieldLabel: '学位'
				},{
					xtype: 'textfield',
					itemId: 'bbydw',
					name: 'bbydw',
					fieldLabel: '本毕业单位'
				},{
					xtype: 'textfield',
					itemId: 'bbyzy',
					name: 'bbyzy',
					fieldLabel: '本毕业专业'
				},{
					xtype: 'textfield',	
					itemId: 'bkbyny',
					name: 'bkbyny',
					fieldLabel: '本科毕业年月'
				},{
					xtype: 'textfield',
					itemId: 'dadw',
					name: 'dadw',
					fieldLabel: '档案单位'
				},{
					xtype: 'textfield',
					itemId: 'dadz',
					name: 'dadz',
					fieldLabel: '档案地址'
				},{
					xtype: 'textfield',
					itemId: 'dayb',
					name: 'dayb',
					fieldLabel: '档案邮编'
				},{
					xtype: 'textfield',
					itemId: 'sftms',
					name: 'sftms',
					fieldLabel: '是否推免生'
				},{
					xtype: 'textfield',
					itemId: 'sfyzy',
					name: 'sfyzy',
					fieldLabel: '是否一志愿'
				}]
			},{
			xtype:'fieldset',
			autoHeight:true,
			itemId:'bzFieldset',
			border:'0 0 0 0',
			title:'备注:',
			collapsible: false,
			width:755,
			margin:'10 15 10 15',
			padding:'5 5 5 5',
			layout:'fit',
			items:[{
				xtype:'textareafield',
				itemId:'bz',
				name:'bz',
				readOnlyCls:'x-item-disabled'
			}]
		}]
		});
		
		me.callParent(arguments);
	},
	
	 loadForm:function(rec){
      		var me = this;
        	me.loadRecord(rec);
      },
      
      setView:function(){
			var me = this;
			var textfields =  me.query('textfield');
			for(var i in textfields){
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
			me.down('#bzFieldset').setBorder('1 1 1 1');
	  }
	
});