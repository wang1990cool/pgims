Ext.onReady(function(){
var kclbmValue, kcxzmValue, kcsxmValue, ksxsmValue;
Ext.define('App.view.pyfa.FAKCList',{
	extend: 'Ext.grid.Panel',
		alias: 'widget.fakcList',
	store: 'FAKCStore',
	columnLines: true,
//    frame:true,
    loadMask: true,
    autoScroll:true,
//     bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
//    layout:'auto',
   	isDetail:false,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel',
    	mode: "MULTI"
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',bbh:'版本号',pyfah:'培养方案号',kch:'课程号',kcmc:'课程名称',kclbm:'课程类别码',kclb:'课程类别',
    		kcxzm:'课程性质码',kcxz:'课程性质',kcsxm:'课程属性码',kcsx:'课程属性',kcxf:'课程学分',
    		xslxm:'学时类型码',xslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',ksxsm:'考试形式码',
    		ksxs:'考试形式',kkxq:'开课学期',kkdwh:'开课单位号',dwmc:'开课单位',ggkbzm:'公共课程编码',ggkbz:'公共课程'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    		    {xtype: 'rownumberer',dataIndex:'num'},
//    			{text: exportCols['id'], width: 50,dataIndex: 'id',hidden:true},
    			{text:exportCols['bbh'], width:100, hidden:true, dataIndex:'bbh'},
    			{text:exportCols['pyfah'], width:60, hidden:true, dataIndex:'pyfah'},
    			{text:exportCols['kch'], width:100, dataIndex:'kch',sortable:false},
    			{text:exportCols['kcmc'], width:180,dataIndex:'kcmc',sortable:false},
    			{text:exportCols['kclbm'], width:70, dataIndex:'kclbm',hidden:true},
    			{text:exportCols['kclb'], width:80, dataIndex:'kclb', editor:{
					xtype : 'combo',
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
					   	focus:function(){
					   		kclbmValue = 'edit'
					   	},
					   	select:function(combo, record, index){
					    	kclbmValue = record[0].data.kclbm
					   	}
					   }
    			},sortable:false},
    			{text:exportCols['kcxzm'], width:70, dataIndex:'kcxzm',hidden:true},
    			{text:exportCols['kcxz'], width:80, dataIndex:'kcxz',editor:{
					xtype : 'combo',
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
					   	focus:function(){
					   		kcxzmValue = 'edit'
					   	},
					   	select:function(combo, record, index){
					    	kcxzmValue = record[0].data.kcxzm
					   	}
					   }
    			},sortable:false},
    			{text:exportCols['kcsxm'], width:80, dataIndex:'kcsxm',hidden:true},
    			{text:exportCols['kcsx'], width:80, dataIndex:'kcsx', editor:{
					xtype : 'combo',
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
					   	focus:function(){
					   		kcsxmValue = 'edit'
					   	},
					   	select:function(combo, record, index){
					    	kcsxmValue = record[0].data.kcsxm
					   	}
					   }
    			},sortable:false},
    			{text:exportCols['ksxsm'], width:80, dataIndex:'ksxsm', hidden:true},
    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs',editor:{
					xtype : 'combo',
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
					   	focus:function(){
					   		ksxsmValue = 'edit'
					   	},
					   	select:function(combo, record, index){
					    	ksxsmValue = record[0].data.ksxsm
					   	}
					   }
    			},sortable:false},
    			{text:exportCols['kkxq'], width:70, dataIndex:'kkxq',editor:{
					xtype : 'combo',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'mc',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'bm'},
				   	          {name : "mc"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdXqb'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'bm',
				   		direction : 'ASC'
				   	}]
				   })
    			},sortable:false},
    			{text:exportCols['dwmc'], width:160, dataIndex:'dwmc',sortable:false},
    			{text:exportCols['xslx'], width:80, dataIndex:'xslx',sortable:false},
    			{text:exportCols['kcxf'], width:80, dataIndex:'kcxf',sortable:false},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs',sortable:false},
    			{text:exportCols['llxs'], width:70, dataIndex:'llxs',sortable:false},
    			{text:exportCols['syxs'], width:70, dataIndex:'syxs',sortable:false},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz',sortable:false}
    		],
    		    selType: 'cellmodel',
			    plugins: [
			        Ext.create('Ext.grid.plugin.CellEditing', {
			        clicksToEdit: 2,
	    			listeners : {
					    beforeedit : function(editor, e) {
					        if(me.isDetail){
					            return false;
					        }else{
					            return true;
					        }
					    },
					    afteredit:function(editor,e){
							if(e.field == 'kclb'){
					    		if(kclbmValue != 'edit'){
					    			e.record.set('kclbm',kclbmValue)
					    		}
					    	}else if(e.field == 'kcxz'){
					    		if(kcxzmValue != 'edit'){
					    			e.record.set('kcxzm',kcxzmValue)
					    		}
					    	}else if(e.field == 'kcsx'){
					    		if(kcsxmValue != 'edit'){
					    			e.record.set('kcsxm',kcsxmValue)
					    		}
					    	}else if(e.field == 'ksxs'){
					    		if(ksxsmValue != 'edit'){
					    			e.record.set('ksxsm',ksxsmValue)
					    		}
					    	}
					    }
	    			}
			      })
			    ],
    				dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情', 
   							    	tooltip:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },{
   							    	text:'增加',
   							    	tooltip:'增加',
   							    	itemId:'add',
   							    	iconCls:'add_16',
   							    	action:'add'
   							    },{
   							    	text:'修改',
   							    	tooltip:'修改',
   							    	itemId:'edit',
   							    	iconCls:'edit_16',
   							    	action:'edit'
   							    },{
   							    	text:'删除',
   							    	tooltip:'删除',
   							    	itemId:'delete',
   							    	iconCls:'delete_16',
   							    	action:'delete'
   							    }
   							    
//   							    ,'-',{
//					            	itemId:'eportBtn',
//						            xtype: 'excelExport',
//						            actionUrl:'fakctoExcel.action'
//					         	 }
					         	 ]
   						}]
//   						,
//   						
//   			listeners:{  
//				itemdblclick: function(o, record, item, index, e, eOpts){
//					var detailBtn = o.up('grid').down('#detail');
//					if(!detailBtn.disabled && !detailBtn.hidden)
//						detailBtn.fireEvent('click',detailBtn);
//				}
//			}
   	   });
	   	     Ext.grid.plugin.CellEditing.override( {
  	   onSpecialKey : function(ed, field, e) {
        var sm;
        
        // keyCode: 37(左), 38(上), 39(右), 40(下)
        if (e.keyCode == 38 || e.keyCode == 40) {
        	if (field.xtype == 'combo') {
        		return;
        	}
    		e.stopEvent();
            if (ed) {
                ed.onEditorTab(e);
            }
            sm = ed.up('tablepanel').getSelectionModel();
            if (sm.onEditorTab) {
                return sm.onEditorTab(ed.editingPlugin, e);
            }
        } else if (e.getKey() === e.TAB || e.getKey() === e.ENTER || e.keyCode == 37 || e.keyCode == 39) {
            e.stopEvent();
            if (ed) {
                ed.onEditorTab(e);
            }
            sm = ed.up('tablepanel').getSelectionModel();
            if (sm.onEditorTab) {
                return sm.onEditorTab(ed.editingPlugin, e);
            } 
        }
    }
}); 
	Ext.selection.RowModel.override( {
		onEditorTab: function(editingPlugin, e) {
		    var me = this,
		        view = me.views[0],
		        record = editingPlugin.getActiveRecord(),
		        header = editingPlugin.getActiveColumn(),
		        position = view.getPosition(record, header),
		        direction = e.shiftKey ? 'left' : 'right';
		    
		    // keyCode: 37(左), 38(上), 39(右), 40(下)
		    if (e.keyCode == 37) {
		    	direction = 'left';
		    } else if (e.keyCode == 38) {
		    	direction = 'up';
		    } else if (e.keyCode == 40) {
		    	direction = 'down';
		    }
		
		    do {
		        position  = view.walkCells(position, direction, e, me.preventWrap);
		    } while (position && (!position.columnHeader.getEditor(record) || !editingPlugin.startEditByPosition(position)));
		}
	});
       me.callParent(arguments);
    }
});
})