Ext.onReady(function(){
var JSONfakc = {};
Ext.define('App.view.jxkkjh.AddExtraKCForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.addExtraKCForm',
	xtype : 'form',
	itemId: 'addExtraKCForm',
	initComponent:function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldset',
				border:'0 0 0 0',
				width:320,
				autoHeight:true,
				autoWidth:false,
				collapsible:false,
				readOnly:true,
				margin:'10 10 0 10',
				padding:'5 5 10 5',
				defaults:{
					xtype:'textfield',
					readOnlyCls:'x-item-disabled',
					autoHeight:true,
					labelAlign:'right',
					width:280,
		        	labelWidth:100,
					padding:'5 0 0 0',
					size:20
				},
				layout:{
					type:'table',
					columns:1,
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
					fieldLabel:'ID',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'kclbm',
					name:'kclbm',
					fieldLabel:'课程类别码',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'kclb',
				    name : 'kclb',
				    fieldLabel : '课程类别<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kclb',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kclbm'},
				   	          {name : "kclb"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKclbm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kclbm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#kclbm').setValue(record[0].data.kclbm);
					   	}
					   }
				},{
					xtype:'textfield',
					itemId:'kcxzm',
					name:'kcxzm',
					fieldLabel:'课程性质码',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'kcxz',
				    name : 'kcxz',
				    fieldLabel : '课程性质<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kcxz',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kcxzm'},
				   	          {name : "kcxz"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKcxzm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kcxzm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#kcxzm').setValue(record[0].data.kcxzm);
					   	}
					   }
					},{
							xtype:'textfield',
							itemId:'kcsxm',
							name:'kcsxm',
							fieldLabel:'课程属性码',
							hidden:true
					},{
					xtype : 'combo',
				    itemId : 'kcsx',
				    name : 'kcsx',
				    fieldLabel : '课程属性<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kcsx',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kcsxm'},
				   	          {name : "kcsx"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKcsxm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kcsxm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#kcsxm').setValue(record[0].data.kcsxm);
					   	}
					   }
					},{
							xtype:'textfield',
							itemId:'ksxsm',
							name:'ksxsm',
							fieldLabel:'考试形式码',
							hidden:true
					},{
					xtype : 'combo',
				    itemId : 'ksxs',
				    name : 'ksxs',
				    fieldLabel : '考试形式<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'ksxs',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'ksxsm'},
				   	          {name : "ksxs"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKsxsm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'ksxsm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					    	me.down('#ksxsm').setValue(record[0].data.ksxsm);
					   	}
					   }
					}]
			}],
			 buttons: [{
            	text: '确定',
            	iconCls:'ok_16',
                handler: me.ok
            }, {
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
		});
		 me.callParent(arguments);
	},
	
	loadRecs:function(recs){
    	 for(var item in recs){
    	 	if(item == 'id')
    	 		continue;
    	 	JSONfakc[item] = recs[item];
    	 }
//    	 alert(Ext.encode(JSONfakc));
	},
	
     jsonParse :function(record){
         var jsonObject =  JSON.parse(Ext.encode(record));
            for(var item in jsonObject){
					if(jsonObject[item] == null){
				       jsonObject[item] = ""; //将null值转为空的字符串
				     }
			  }
			return Ext.encode(jsonObject);
     },
	
	ok: function (){
		var me = this;
		var form = me.up('form');		
		if (form.isValid()){
			values = form.getValues();
			for(var item in values){
				JSONfakc[item] = values[item];
			}
			var kkjhForms = Ext.ComponentQuery.query('#kkjhForm');
			var kkjhForm = kkjhForms[kkjhForms.length - 1];
			JSONfakc['kkjhh'] = kkjhForm.down('#kkjhh').getValue();
			JSONfakc['jhrs'] = kkjhForm.down('#jhrs').getValue();
			
			var addKkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
			var addKkjhmxForm = addKkjhmxForms[addKkjhmxForms.length - 1];
			var list = addKkjhmxForm.down('#kkjhmxList');
			var kkjhmxStore = list.getStore();
			
			kkjhmxStore.insert(0,JSONfakc);
			me.up('window').close();
//			Ext.StoreMgr.lookup('KCKStore').load();
		}else
           Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
	}
})
});