Ext.define('App.view.jxkkjh.KKJHEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kkjhEdit',
    itemId:'kkjhEdit',
//    id:'xsjcxxFormId',
    border:'0 0 0 0',
 	baseCls: 'my-panel-no-border',
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
							blankText : '必填！',
							listeners:{
								blur:function(){
									me.createKkjhh();
								}
							}
						},{
							xtype : 'textfield',
							itemId : 'xq',
							name : 'xq',
							fieldLabel : '学期',
							allowBlank : false,	
							blankText : '必填！',
							listeners:{
								blur:function(){
									me.createKkjhh();
								}
							}
					},{
							xtype : 'textfield',
							itemId : 'nj',
							name : 'nj',
							fieldLabel : '年级',
							allowBlank : false,	
							blankText : '必填！'
			 	},{
					xtype:'textfield',
					itemId:'pydwh',
					name:'pydwh',
					hidden:true,
					fieldLabel:'培养单位号'
				},{
					xtype : 'combo',
				    itemId : 'pydw',
				    name : 'pydw',
				    fieldLabel : '培养单位',
				    allowBlank:false,
				    editable : false,
				    listConfig:{
				     	maxHeight : 160
				     },
				    queryMode : 'local',
				    displayField : 'dwmc',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'dwh'},
				   	            {name : "dwmc"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ViewXxDw'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'dwh',
				   		direction : 'ASC'
				   	}]
				   }),
					listeners:{
					   	select:function(combo, record, index){
					    	me.down('#pydwh').setValue(record[0].data.dwh);
					    	me.setDefaultValue()
				    	    var zyCombo = me.down('#xkzym')
                            zyCombo.clearValue();
                            
                            var zyCombo=zyCombo.getStore();
                            zyCombo.load();
					   	}
					 }
				},{
					xtype:'textfield',
					itemId:'xkzy',
					name:'xkzy',
					fieldLabel : '学科专业',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'xkzym',
				    name : 'xkzym',
				    fieldLabel : '学科专业',
				    allowBlank:false,
				    listConfig:{
				     	maxHeight : 160,
				     	maxWidth:400
				     },
				    editable : false,
				    queryModel: 'remote',
				    displayField : 'zymc',
				    valueField:'zydm',
				    store:Ext.create('Ext.data.Store',{
				    	  autoLoad: false,
				    	  fields:[{name:'zydm'},
				    	             {name:'zymc'},
				    	             {name:'dwh'},
				    	             {name:'xwlbm'}],
				    	   proxy:{
				    	   		type:'ajax',
				    	   		url:'zdGetZD.action',
				    	   		actionMethod:'post',
				    	   		reader:{
				    	   			root:'result.list',
				    	   			totalProperty:'totalProperty'
				    	   		},
				    	   		extraParams:{zdName:'ViewXkDwxkzy'},
				    	   		simpleSortMode : true
				    	   },
				    	   listeners:{
				    	   		load:function(store, operation, eOpts){
				    	   				    var pydwhValue = me.down('#pydwh').getValue();
							                store.filterBy(function(record) {
							                    return record.get('dwh') == pydwhValue;  
							             });
           						 }
				    	    }
				    }),
					 listeners:{
					   	select:function(combo, record, index){
					    	me.down('#xkzy').setValue(record[0].data.zymc);
					    	me.down('#xwlbm').setValue(record[0].data.xwlbm);
					    	
					    	var xslxCombo = me.down('#xslx');
					        xslxCombo.clearValue();
                            var xslxCombo = xslxCombo.getStore();
                            xslxCombo.load();
					   	  }
					   }
				},{
					xtype:'textfield',
					itemId:'xslxm',
					name:'xslxm',
					hidden:true,
					fieldLabel:'学生类型码'
				},{
					xtype : 'combo',
				    itemId : 'xslx',
				    name : 'xslx',
				    fieldLabel : '学生类型',
				    editable : false,
				    allowBlank:false,
					blankText:'必填',
				    queryMode : 'remote',
				    displayField : 'xslx',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : false,
				   	fields : [{name : 'xslx'},
				   	          {name : "xslxm"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdXslxm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'xslxm',
				   		direction : 'ASC'
				   	}],
				   	listeners:{
				   		load:function(store, operation, eOpts){
				   			if(me.isAdd){
					   			   var xwlbmValue=me.down('#xwlbm').getValue();
					                store.filterBy(function(record) {
					                	if(xwlbmValue == '1'){
					                		return (record.get('xslxm') ==  '1' ) || (record.get('xslxm') ==  '2' )
					                	}else if(xwlbmValue == '2'){
					                		return (record.get('xslxm') ==  '3' ) || (record.get('xslxm') ==  '4' )
					                	}
					             });
				   			}
				   		 }
				 	  	}
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#xslxm').setValue(record[0].data.xslxm);
					    	
					    	var xslxStore = Ext.StoreMgr.lookup('XSLXStore');
					    	var index = xslxStore.find('xslxm',record[0].data.xslxm);
					        var xslxRecord = xslxStore.getAt(index);
							me.setXslxValue(xslxRecord);
					       }
					   }
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
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			       width:270,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'pyfah',
						name:'pyfah',
						fieldLabel:'培养方案号',
					  	width:240,
					  	readOnly:true,
						labelWidth:100,
						allowBlank:false,
						BlankText:'必填'
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchPyfahBtn',
									tooltip:'查询',
									action:'searchPyfah',
									iconCls:'search',
									margin:'0 0 0 1'
				}]}]},{
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
	            	xtype: 'textfield',
	            	itemId:'pyfsm',
	            	name:'pyfsm',
	            	fieldLabel:'培养方式码',
	            	hidden:true
	            },{
						xtype: 'combo',
						itemId: 'pyfs',
						name: 'pyfs',
						fieldLabel: '培养方式',
						queryMode: 'local',
						editable: false,
						triggerAction: 'all',
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{pyfs}'+ 
				      	   '</div>'+
				        '</tpl>',
						selectOnFocus: true,  
					    displayField: 'pyfs',
					    store: Ext.create('Ext.data.Store',{
					    	fields: ['pyfsm','pyfs'],
					    	data:[
					    		{'pyfs':'','pyfsm':''},
					    		{'pyfs':'普通专业','pyfsm':'0'},
					    		{'pyfs':'创新团队','pyfsm':'1'}
					    	]
					    }),
					    listeners:{
					    	select:function(combo, record, index){
					    		me.down('#pyfsm').setValue(record[0].data.pyfsm);
					    	}
					    }
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
      
      setDefaultValue:function(){
      	var me = this;
      	
      	me.down('#bzrgh').setValue(userName);
      	me.down('#bzr').setValue(userCName);
      	
      	var curDate = new Date()
		var date = Ext.Date.format(curDate, 'Ymd');
		me.down('#bzsj').setValue(date.toString());
		
		me.down('#ztm').setValue('1');
		me.down('#zt').setValue('草稿状态');
      },
      
      setXslxValue:function(record){
      	var me = this;
      	me.down('#pyccm').setValue(record.data.pyccm);
      	me.down('#pycc').setValue(record.data.pycc);
      	
      	me.down('#xwlbm').setValue(record.data.xwlxm);
      	me.down('#xwlb').setValue(record.data.xwlx);
      	
      	me.down('#jylbm').setValue(record.data.xxxsm);
      	me.down('#jylb').setValue(record.data.xxxs);
      },
      
       setView:function(){
			var me = this;
			var textfields =  me.query('textfield');
			for(var i in textfields){
				if(textfields[i].itemId == 'xh' || textfields[i].itemId == 'pyfah')
					continue;
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
	  },
	  
	  setEditView:function(){
	  		var me = this;
	  		var textfields = me.query('textfield');
	  		for(var i in textfields){
	  			if(textfields[i].itemId == 'nj' || textfields[i].itemId == 'pyfs'||
	  				textfields[i].itemId == 'jhrs' || textfields[i].itemId == 'bz')
	  				continue;
	  			textfields[i].setReadOnly(true);
	  			var style = 'background:none; border:0px';
	  				textfields[i].setFieldStyle(style);
	  		}
//			me.down('#xq').setReadOnly(true);
//			me.down('#xn').setReadOnly(true);
//			me.down('#pydw').setReadOnly(true);
//			
			me.down('#xkzym').setVisible(false);
			me.down('#xkzy').setVisible(true);
			me.down('#xkzy').setReadOnly(true);
			
			me.down('#xslx').setReadOnly(true);
			
	  },
	  
	  	createKkjhh:function(){
			var me = this;
			var form = me;
			var values = form.getValues();
			if(values.xn.length > 0  && values.xq.length >0){
				var xnXq =  values.xn + values.xq
				Ext.Ajax.request({
						url : "kkjhGetKkjhh.action?xnXq=" + xnXq ,
						method : 'post',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var kkjhh = result.result.msg;
							form.down('#kkjhh').setValue(kkjhh);
						}
					})
			}
	    }
});