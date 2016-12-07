Ext.define('App.view.search.KKJHDetail', {
    extend: 'Ext.form.Panel',
    itemId:'kkjhDetail',
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
							itemId:'kkjhh',
							name:'kkjhh',
							fieldLabel:'开课计划号',
							readOnly:true,
							allowBlank : false,	
							blankText : '必填！'
						},{
							xtype : 'textfield',
							itemId : 'xn',
							name : 'xn',
							fieldLabel : '学年',
							allowBlank : false,	
							blankText : '必填！'
							
						},{
							xtype : 'textfield',
							itemId : 'xq',
							name : 'xq',
							fieldLabel : '学期',
							allowBlank : false,	
							blankText : '必填！'
					},{
					xtype:'textfield',
					itemId:'pydwh',
					name:'pydwh',
					hidden:true,
					fieldLabel:'培养单位号'
				},{
					xtype:'textfield',
					itemId:'pydw',
					name:'pydw',
					fieldLabel:'培养单位'
				},{
					xtype:'textfield',
					itemId:'xkzy',
					name:'xkzy',
					fieldLabel : '学科专业'
				},{
					xtype:'textfield',
					itemId:'xkzym',
					name:'xkzym',
					fieldLabel : '学科专业码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'xslx',
					name:'xslx',
					fieldLabel:'学生类型'
				},{
					xtype:'textfield',
					itemId:'xslxm',
					name:'xslxm',
					hidden:true,
					fieldLabel:'学生类型码'
				},{
					xtype:'textfield',
					itemId:'pyccm',
					name:'pyccm',
					fieldLabel:'培养层次码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'pycc',
					name:'pycc',
					fieldLabel:'培养层次',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'xwlbm',
					name:'xwlbm',
					fieldLabel:'学位类别码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'xwlb',
					name:'xwlb',
					fieldLabel:'学位类别',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'jylbm',
					name:'jylbm',
					fieldLabel:'教育类别码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'jylb',
					name:'jylb',
					fieldLabel:'教育类别',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'pyfah',
					name:'pyfah',
					fieldLabel:'培养方案号'
				},{
	            	xtype: 'textfield',
	            	itemId:'pyfs',
	            	name:'pyfs',
	            	fieldLabel:'培养方式'
	            },{
					xtype : 'textfield',
					itemId : 'nj',
					name : 'nj',
					fieldLabel : '年级',
					allowBlank : false,	
					blankText : '必填！'
			 	},{
	            	xtype: 'textfield',
	            	itemId:'bbh',
	            	name:'bbh',
	            	fieldLabel:'版本号',
	            	hidden:true
	            },{
	            	xtype: 'textfield',
	            	itemId:'pyfa',
	            	name:'pyfa',
	            	fieldLabel:'培养方案名称',
	            	hidden:true
	            },{
	            	xtype: 'textfield',
	            	itemId:'pyfsm',
	            	name:'pyfsm',
	            	fieldLabel:'培养方式码',
	            	hidden:true
	            },{
					xtype:'textfield',
					itemId:'jhrs',
					name:'jhrs',
					fieldLabel:'计划人数'
				},{
					xtype:'textfield',
					itemId:'bzrgh',
					name:'bzrgh',
					readOnly:true,
					fieldLabel:'编制人工号',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'bzr',
					name:'bzr',
					readOnly:true,
					fieldLabel:'编制人',
					hidden:true
				}
				,{
					xtype:'textfield',
					itemId:'bzsj',
					name:'bzsj',
					readOnly:true,
					fieldLabel:'编制时间',
					hidden:true
				}
				,{
					xtype:'textfield',
					itemId:'shrgh',
					name:'shrgh',
					readOnly:true,
					fieldLabel:'审核人工号',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'shr',
					name:'shr',
					readOnly:true,
					fieldLabel:'审核人',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'shjy',
					name:'shjy',
					readOnly:true,
					fieldLabel:'审核人工号',
					hidden:true
				}
				,{
					xtype:'textfield',
					itemId:'shsj',
					name:'shsj',
					readOnly:true,
					fieldLabel:'审核时间',
					hidden:true
				},{
					xtype:'textareafield',
					itemId:'shyj',
					name:'shyj',
					readOnly:true,
					fieldLabel:'审核意见',
					hidden:true
				}
				,{
					xtype:'textfield',
					itemId:'ztm',
					name:'ztm',
					readOnly:true,
					fieldLabel:'状态码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'zt',
					name:'zt',
					readOnly:true,
					fieldLabel:'状态',
	            	hidden:true
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