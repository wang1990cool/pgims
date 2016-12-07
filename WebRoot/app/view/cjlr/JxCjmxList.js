Ext.define('App.view.cjlr.JxCjmxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.jxCjmxList',
	store: 'JxCjmxbStore',
	title:'成绩录入',
	height: 500,
	columnLines: true,
    frame:true,
    loadMask: true,
//     bodyStyle : 'overflow-x:scroll; overflow-y:scroll',
    viewConfig: {
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    autoScroll: true,
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kkkh:'开课课号',xh:'学号',xm:'姓名',ksxzm:'考试性质码',ksxz:'考试性质',bz:'备注',
    		pscj:'平时成绩',fslkscj:'考试成绩',kcdjcjm:'课程等级成绩码',djlkscj:'考试成绩',kccj:'总评成绩'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{text:exportCols['id'], width: 50,dataIndex:'id', sortable: true,hidden:true},
    			{text:exportCols['kkkh'], width:100,  dataIndex:'kkkh', sortable: true,hidden:true},
    			{text:exportCols['xh'], width:150,  dataIndex:'xh', sortable: true},
    			{text:exportCols['xm'], width:70, dataIndex:'xm', sortable: true},
    			{text:exportCols['kcdjcjm'], width:70, dataIndex:'kcdjcjm', sortable: true,hidden:true},
    			{text:exportCols['ksxzm'], width:70, dataIndex:'ksxzm', sortable: true,hidden:true},
    			{text:exportCols['pscj'], width:120, dataIndex:'pscj', sortable: true,editor:{
    				  xtype:'textfield',
    				  allowBlank: false,
//					  regex:/^[1-9][0-9]{0,1}$/,
    				  regex:/^(\d{1,2}(\.\d{1,1})?|100)$/,
					  listeners:{
					  	focus:function(tf){
					  		jszValue = tf.getValue();
					  	}
					  }
    			}},
    			{text:exportCols['fslkscj'], width:120, dataIndex:'fslkscj', sortable: true,editor:{
    				  xtype:'textfield',
    				  allowBlank: false,
//					  regex:/^[1-9][0-9]{0,1}$/,
    				  regex:/^(\d{1,2}(\.\d{1,1})?|100)$/,
					  listeners:{
					  	focus:function(tf){
					  		jszValue = tf.getValue();
					  	}
					  }
    			}},
    			{text:exportCols['djlkscj'], width:120, dataIndex:'djlkscj', editor:{
					xtype : 'combo',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'mc',
					store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'bm'},
					   	          {name : 'mc'},
					   	          {name:'pxh'}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdCjdjm'},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'pxh',
					   		direction : 'ASC'
					   	}]
					   })
    			},sortable:false
    			  	},
    			{text:exportCols['ksxz'], width:100, dataIndex:'ksxz', sortable: true,editor:{
					xtype : 'combo',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'remote',
				    displayField : 'mc',
					store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'bm'},
					   	          {name : 'mc'},
					   	          {name:'pxh'}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdKsxzm'},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'pxh',
					   		direction : 'ASC'
					   	}]
					   })
    			}}/*,
    			{text:exportCols['bz'], width:120, dataIndex:'bz', sortable: true,editor:{
    				  xtype:'textfield'
    			
//					  listeners:{
//					  	focus:function(tf){
//					  		jszValue = tf.getValue();
//					  	}
					  }
    			},*/,
    			{text:exportCols['kccj'], width:120, dataIndex:'kccj', sortable: true,
    			renderer: Ext.util.Format.numberRenderer('00.00')
    				/*renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == ''|| value == null || value < '60'){
              				return  "<span style='color:red;font-weight:bold;'>"+value+"</span>";
                		}else 
                		 return  "<span style='color:black;font-weight:bold;'>"+value+"</span>";
                		else if(value >= '90' && value <= '100'){
              				return  "<span style='color:black;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '80' && value <= '90'){
              				return  "<span style='color:blue;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '70' && value <= '80'){
              				return  "<span style='color:green;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '60' && value <= '70'){
              				return  "<span style='color:purple;font-weight:bold;'>"+value+"</span>";
                		}
                		}*/
    			},
    			{text:exportCols['bz'], width:120, dataIndex:'bz', sortable: true,editor:{
    				  xtype:'textfield'
    			
//					  listeners:{
//					  	focus:function(tf){
//					  		jszValue = tf.getValue();
//					  	}
					  }
    			}
    		],
    		 	selType: 'cellmodel',
			    plugins: [
			        Ext.create('Ext.grid.plugin.CellEditing', {
			            clicksToEdit: 2,
			            
	    			listeners : {
					    afteredit:function(editor,e){
					    	if(e.field == 'pscj'){
					    		if(e.record.get('fslkscj') != ''|| 
					    		e.record.get('fslkscj') != null){
					    		var win = me.up('window');
					    		var pscjbl = Number(win.down('#pscjbl').getValue())*0.01;
					    		var kscjbl = 1 - pscjbl;
					    		var cj = Number(e.record.get('pscj'))*pscjbl + 
					    					Number(e.record.get('fslkscj'))*kscjbl;
//					    		var numFormated = Ext.util.Format(cj,'0.00');			
					    		e.record.set('kccj',cj);
					    	}
					    	}
					    	if(e.field == 'fslkscj'){
					    		if(e.record.get('pscj') !=''){
					    		    var win = me.up('window');
					    			var pscjbl = Number(win.down('#pscjbl').getValue())*0.01;
					    			var kscjbl = 1 - pscjbl;
					    			var cj = Number(e.record.get('pscj'))*pscjbl + 
					    					Number(e.record.get('fslkscj'))*kscjbl;
//					    			var numFormated = Ext.util.Format(cj,'0.00');
					    		e.record.set('kccj',cj);
					    	}}
					    	
					    	if(e.field == 'fslkscj'){
					    		if(e.record.get('pscj') == ''||
					    		e.record.get('pscj') == null){
//					    		    var win = me.up('window');
//					    			var pscjbl = Number(win.down('#pscjbl').getValue())*0.01;
//					    			var kscjbl = 1 - pscjbl;
//					    			var cj = Number(e.record.get('pscj'))*pscjbl + 
//					    					Number(e.record.get('fslkscj'))*kscjbl;
					    		e.record.set('kccj',e.record.get('fslkscj'));
					    	}}
							if(e.field == 'kclb'){
					    		if(kclbmValue != 'edit'){
					    			e.record.set('kclbm',kclbmValue)
					    		}
					    	}else if(e.field == 'ksxz'){
					    		if(e.record.get('ksxz') == '免修'){
					    			e.record.set('pscj',null);
					    			e.record.set('fslkscj',null);
					    			e.record.set('djlkscj',null);
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
   							    	text:'增加',
   							    	itemId:'addCj',
   							    	iconCls:'add_16',
   							    	handler : function() {
   							    		var me = this;
   							    		var pan = me.up('#cjlrPan');
   							    		var grid = me.up('#cjmxList')
							       	 	me.up('cjlrPan').down('jxCjmxList').addCjmx(pan.kkkh,grid);
							        }
   							    },{
   							    	text:'删除',
   							    	itemId:'delete',
   							    	iconCls:'delete_16',
   							    	action:'delete'
   							    },'-','->','-',{
   							    	xytpe: 'label',
   							    	text: '分数类成绩小数点后只能有一位!'
   							    }
   							    ]
   						}]
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
    },
    
    addCjmx: function(kkkh,grid){
    	var form = Ext.create('App.view.cjlr.CjmxAddForm',{
	            layout:'auto',
	            showType:'panel',
	            bodyStyle:'padding:5',
	            autoScroll:true,
	            grid: grid
	     });
	     
	     form.down('#kkkh').setValue(kkkh);
	    	
    	var win = Ext.create('Ext.window.Window',{
    		frame:true,
    		itemId:'cjmxWin',
			layout:'fit',
			autoShow: true,
			width:400,
			height:150,
			closeAction:'hide',
			resizable:false,
			maximizable: false,
			constrainHeader:true,
			collapsible:false,
			enableDrag:true,
			shadow:false,
			modal:true,
			closable:true,
			bodyStyle:'padding:5',
			animCollapse:true,
			title:'增加成绩明细',
    		items:[form]
    		
    	});
    }
});
