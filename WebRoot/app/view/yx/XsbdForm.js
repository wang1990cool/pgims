Ext.define('App.view.yx.XsbdForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.xsbdForm',
    itemId:'xsbdForm',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '新生信息',
	            itemId : 'xsxx',
	            collapsible: true,
	            padding:'5 5 10 5',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'5 3 0 3',
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
	            },{
	    			xtype: 'textfield',
	            	itemId:'xh',
	            	name:'xh',
	            	fieldLabel: '学号'
	            },{
	    			xtype: 'textfield',
		            itemId: 'xm',
		            name: 'xm',
		            fieldLabel : '姓名'

	    		},{
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
		            }
	                ]
	        	},{
	    			xtype: 'textfield',
		            itemId: 'xslx',
		            name: 'xslx',
		            fieldLabel : '学生类型'

	    		},{
						xtype : 'textfield',
					    itemId : 'lqlb',
					    name : 'lqlb',
					    fieldLabel : '录取类别'
					},{
	    			xtype: 'textfield',
		            itemId: 'lqxy',
		            name: 'lqxy',
		            fieldLabel : '录取学院'

	    		},{
						xtype : 'textfield',
					    itemId : 'lqzy',
					    name : 'lqzy',
					    fieldLabel : '录取专业'
					},{
	    			xtype: 'textfield',
		            itemId: 'yddh',
		            name: 'yddh',
		            fieldLabel : '移动电话'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'bdztm',
		            name: 'bdztm',
		            fieldLabel : '报到状态'

	    		}
		        ]},
			
				{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '财务信息',
	            itemId : 'cwxx',
	            collapsible: true,
	            padding:'5 5 10 5',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'5 3 0 3',
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
	    			xtype: 'textfield',
	            	itemId:'xh',
	            	name:'xh',
	            	hidden:true,
	            	fieldLabel: '学号'
	            },{
	    			xtype: 'textfield',
	            	itemId:'xm',
	            	name:'xm',
	            	hidden:true,
	            	fieldLabel: '姓名'
	            },{
	    			xtype: 'textfield',
		            itemId: 'dyxnxf',
		            name: 'dyxnxf',
		            fieldLabel : '第一学年学费'

	    		},{
	    			xtype: 'textfield',
		            itemId: 'jcf',
		            name: 'jcf',
		            fieldLabel : '教材费'

	    		},{
					xtype : 'textfield',
				    itemId : 'zsf',
				    name : 'zsf',
				    fieldLabel : '住宿费'
					},{
	    			xtype: 'textfield',
		            itemId: 'tjf',
		            name: 'tjf',
		            fieldLabel : '体检费'

	    		},{
					xtype : 'textfield',
				    itemId : 'yktf',
				    name : 'yktf',
				    fieldLabel : '一卡通费'
					},{
	    			xtype: 'textfield',
		            itemId: 'ylbxf',
		            name: 'ylbxf',
		            fieldLabel : '医疗保险费'

	    		},{
					xtype : 'textfield',
				    itemId : 'hj',
				    name : 'hj',
				    fieldLabel : '合计'
					},{
	    			xtype: 'textfield',
		            itemId: 'npaid',
		            name: 'npaid',
		            fieldLabel : '实缴金额'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'nowe',
		            name: 'nowe',
		            fieldLabel : '欠费金额'
	    		}
	    
		        ]}
		        
			]

				   }
				  
				   );
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
			var style = "background:none; border:0px;";
			textfields[i].setFieldStyle(style);
		}
    },
    

    
    show: function(){
        var me = this;
		var searchForm = me.up('xsbdContentPanel').down('xsbdSubmitForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pForm = me.up('xsbdContentPanel').down('xsbdForm');
		
		var cwxxStore = Ext.create('App.store.yx.ViewYxCwStore');
		var xsxxStore = Ext.create('App.store.yx.YxXsjbxxbStore');
		
		for(var item in pForm.itemId){
			searchParams.fieldNames.push(item);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value){
				searchParams.search[tFields[i].name] = "#= '" +  Ext.String.trim( tFields[i].value ) + "'";
			}
		}	
		var cwxxProxy= cwxxStore.getProxy();
		var xsxxProxy= xsxxStore.getProxy();
		cwxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xsxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		cwxxStore.load({
		       callback: function(records, operation, success) {
		       	    if(records[0]!= null){
		    			var cwxx = me.down('#cwxx');
//						var json = {}
//						var items = cwxx.items;
						cwxx.items.each(function(fsItem){
							if(fsItem.itemId!='xh'&&fsItem.itemId!='xm' && records[0].get(fsItem.itemId)!=null){
								cwxx.down('#' + fsItem.itemId).setValue(Ext.util.Format.number(records[0].get(fsItem.itemId),'00.00'));
							}
						})
						me.setViewForm();
		       	    }
	    	}});
	    	
		
		xsxxStore.load({
		  callback: function(records, operation, success) {
	    			if(records[0]!= null){
		    			var xsxx = me.down('#xsxx'); 
//						var json = {}
//						var items = xsxx.items;
		    			
						xsxx.items.each(function(fsItem){
							if(fsItem.itemId!='id' && records[0].get(fsItem.itemId)!=null){
								xsxx.down('#' + fsItem.itemId).setValue(records[0].get(fsItem.itemId));
							}
							if(fsItem.itemId=='bdztm'&& records[0].get(fsItem.itemId)=='1'){
								xsxx.down('#bdztm').setValue('已报到');
							}else if(fsItem.itemId=='bdztm'&& (records[0].get(fsItem.itemId)=='0'||records[0].get(fsItem.itemId)==null)){
								xsxx.down('#bdztm').setValue('未报到');
							}
						})
						
						if(getBrowserName().indexOf('IE')!= -1){
						var imgCtr = xsxx.down('#zp');
						imgCtr.setSrc('yxXsjbxxgetImage.action?xh=' + records[0].data.xh);
					}else{ 
						var imgCtr = xsxx.down('#zp');
						var url;
						if(records[0].data.zp !=null)
							url = 'data:image/jpeg;base64,' + imgCtr.getImage(records[0].data.zp);
						else
							url = "styles/images/none.jpg";
						imgCtr.setSrc(url);
					}
					
						me.setViewForm();
					 }else{
		       	    Ext.Msg.show({title:'提示', msg:"该新生不存在，请重新输入学号和姓名！",buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING}); 
		       	    }
	    	}});
    }
	
});