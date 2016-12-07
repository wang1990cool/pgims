Ext.define('App.view.skxx.SKXXDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.skxxDetail',
    itemId:'skxxDetail',
    border:'0 0 0 0',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	           	width:750,
	            autoHeight:true,
	            padding:'5 5 5 5',
	            margin:'5 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:270,
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
				  	width:280,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'kch',
					name:'kch',
					fieldLabel:'课程号',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'kcmc',
					name:'kcmc',
					fieldLabel:'课程名称',
				  	width:260,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'kkdw',
					name:'kkdw',
					width:240,
					readOnly:true,
					fieldLabel:'开课单位'
				},{
					xtype:'textfield',
					itemId:'pydw',
					name:'pydw',
					width:600,
					readOnly:true,
						colspan:2,
					fieldLabel:'培养单位'
				},{
					xtype:'textfield',
					itemId:'zymc',
					name:'zymc',
					width:600,
					readOnly:true,
						colspan:2,
					fieldLabel:'专业名称'
				},{
					xtype:'textfield',
					itemId:'xn',
					name:'xn',
					fieldLabel:'学年',
				  	width:240,
				  	readOnly:true,
					labelWidth:100
				},{
					xtype : 'textfield',
					itemId : 'xq',
					name : 'xq',
					width:240,
					readOnly:true,
					fieldLabel : '学期'
				},{
					xtype:'textfield',
					itemId:'kcxf',
					name:'kcxf',
					fieldLabel:'学分',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'xslx',
					name:'xslx',
					fieldLabel:'学时类型',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'zxs',
					name:'zxs',
					fieldLabel:'总学时',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'llxs',
					name:'llxs',
					fieldLabel:'理论学时',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'syxs',
					name:'syxs',
					fieldLabel:'实验学时',
				  	width:240,
					labelWidth:100
				},{
					xtype:'textfield',
					itemId:'mzxs',
					name:'mzxs',
					fieldLabel:'每周学时',
				  	width:240,
					labelWidth:100
				},{
					xtype : 'textfield',
					itemId : 'jhrs',
					name : 'jhrs',
					width:240,
					readOnly:true,
					fieldLabel : '计划人数'
				},{
					xtype : 'textfield',
					itemId : 'xkrs',
					name : 'xkrs',
					width:240,
					hidden:true,
					readOnly:true,
					fieldLabel : '选课人数'
				},{
					xtype:'textfield',
					itemId:'yxrs',
					name:'yxrs',
					width:240,
					hidden:true,
					readOnly:true,
					fieldLabel:'有效人数'
				},{
	    			xtype : 'textfield',
					itemId : 'ksz',
					name : 'ksz',
					width:240,
					readOnly:true,
					fieldLabel : '开始周',
					hidden:true
	    		},{
					xtype : 'textfield',
					itemId : 'jsz',
					name : 'jsz',
					width:240,
					readOnly:true,
					fieldLabel : '结束周',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'qzz',
					name:'qzz',
					width:240,
					readOnly:true,
					fieldLabel:'起至周'
				},{
					xtype:'textfield',
					itemId:'ggkbz',
					name:'ggkbz',
					fieldLabel:'公共课'
				},{
					xtype:'textfield',
					itemId:'zjjs',
					name:'zjjs',
					width:240,
					readOnly:true,
					fieldLabel:'主讲教师'
				},{
					xtype:'textfield',
					itemId:'zkjs',
					name:'zkjs',
					width:240,
					readOnly:true,
					fieldLabel:'助课教师'
				},{
					xtype:'textfield',
					itemId:'syjs',
					name:'syjs',
					width:240,
					readOnly:true,
					fieldLabel:'实验教师'
				},{
					xtype:'textfield',
					itemId:'kksj',
					name:'kksj',
					width:600,
					colspan:2,
					readOnly:true,
					fieldLabel:'开课时间'
				},{
					xtype:'textfield',
					itemId:'kkdd',
					name:'kkdd',
					width:240,
					width:600,
					colspan:2,
					readOnly:true,
					fieldLabel:'开课地点'
				},{
					xtype:'textfield',
					itemId:'ztm',
					name:'ztm',
					width:240,
					readOnly:true,
					fieldLabel:'状态码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'zt',
					name:'zt',
					width:240,
					readOnly:true,
					fieldLabel:'状态',
	            	hidden:true
				}]
	        },{
				xtype:'fieldset',
				autoHeight:true,
				title:'备注:',
				collapsible: false,
				width:750,
				margin:'0 15 10 15',
				padding:'5 5 10 5',
				layout:'fit',
				items:[{
					xtype:'textareafield',
					readOnly:true,
					itemId:'bz',
					name:'bz'
				}]
			}]        
			}
        );
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
	  }
});