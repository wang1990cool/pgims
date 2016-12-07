Ext.define('App.view.zqkh.ZqkhDetail', {
    extend: 'Ext.form.Panel',
    xtype : 'form',
    alias: 'widget.zqkhDetail',
    itemId:'zqkhDetail',
    initComponent: function() {
        var me = this;
//        me.autoScroll(true);
        Ext.applyIf(me, {
			items: [Ext.create('App.view.xs.TyXsJcxxDetail'),
				 
			{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '考核信息',
	            itemId : 'editZqkh',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'10 10 0 10',
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
				items: [ {
					xtype : 'textfield',
					itemId : 'id',
					name : 'id',
					hidden:true,
					fieldLabel : 'ID'
	            },  {
	    			xtype: 'hiddenfield',
	            	itemId:'xh',
	            	name:'xh',
	            	value : userName
	            },{ xtype: 'textfield',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: '学年'
    	        },{
	    	          xtype: 'textfield',
			          itemId: 'xq',
			          name: 'xq',
		              fieldLabel: '学期'
    	        },{
//	    			xtype: 'textareafield',
	            	xtype: 'textfield',
		            itemId: 'lwtm',
		            name: 'lwtm',
//		            width:300,
//		            labelWidth:100,
		            height:30,
		            fieldLabel : '论文题目'
	    		},{
	    			xtype: 'datefield',//
		            itemId: 'khrq',
		            name: 'khrq',
//		            width:250,
		            fieldLabel : '考核日期',
		            format : "Y-m-d"
	    		},{
	    			xtype: 'textfield',
		            itemId: 'jczz',
		            name: 'jczz',
		            fieldLabel : '检查组长'

	    		},{
	    			xtype: 'textfield',
		            itemId: 'dlxz',
		            name: 'dlxz',
		            fieldLabel : '考核领导小组组长'

	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'dskhdjm',
		            name: 'dskhdjm',
		            fieldLabel : '导师考核等级码'

	    		},{
						xtype : 'textfield',
					    itemId : 'dskhdj',
					    name : 'dskhdj',
					    fieldLabel : '导师考核等级'
//					    hidden:true
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'xzkhdjm',
		            name: 'xzkhdjm',
		            fieldLabel : '考核小组等级码'

	    		},{
						xtype : 'textfield',
					    itemId : 'xzkhdj',
					    name : 'xzkhdj',
					    fieldLabel : '考核小组等级'
//				    hidden:true
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'xykhdjm',
		            name: 'xykhdjm',
		            fieldLabel : '学院考核等级码'

	    		},{
						xtype : 'textfield',
					    itemId : 'xykhdj',
					    name : 'xykhdj',
					    fieldLabel : '学院考核等级'
//					    hidden:true
					    /*editable : false,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{mc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    queryMode : 'local',
					    displayField : 'mc',
					    store : Ext.create('Ext.data.Store',{
				        	autoLoad:true,
				            storeId: 'ZdKhdjbStore',
				            remoteSort: true,
				            fields : [{name : 'bm'}, {name : 'mc'},{name :'pxh'}],
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdKhdjb'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'pxh',
										direction : 'ASC'
							}]
				        }),
				        listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var editZqkhForm = me.up('#editZqkhForm')
					    		editZqkhForm.down('#xykhdjm').setValue(record[0].data.bm);
					    	}
					    }*/
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审核状态码'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shzt',
		            name: 'shzt',
		            fieldLabel : '审核状态'
//		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shyj',
		            name: 'shyj',
		            fieldLabel : '审核意见',
		            colspan:2
//		            hidden:true
	    		},{
	    			xtype: 'datefield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '审核时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shrgh',
		            name: 'shrgh',
		            fieldLabel : '审核人工号',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shr',
		            name: 'shr',
		            fieldLabel : '审核人',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'ship',
		            name: 'ship',
		            hidden:true
	    		}
	    
		        ]},
		        {
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '附件预览',
	            itemId : 'fjyl',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'3 3 0 3',
	        		size:20
	        	},
				
			   items: [
			       Ext.create('App.view.zqkh.ZqkhzlList',{
						itemId: 'zqkhzlList',
						height:'auto',
						width:'700'
					})

	            ]}
			],
			buttons: [{
		    	itemId:'cancelBtn',
		        text: '退出',
		        iconCls:'return_16',
		        handler: function() {
		        	this.up('window').hide();
		        }
		    }]
				   });
       me.callParent(arguments);
    },
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});