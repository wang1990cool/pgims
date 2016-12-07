Ext.define('App.view.cjlr.DisCjmxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.disCjmxList',
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
//    selModel:{
//    	selType:'checkboxmodel'
//    },
    autoScroll: true,
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kkkh:'开课课号',xh:'学号',xm:'姓名',ksxzm:'考试性质码',ksxz:'考试性质',bz:'备注',
    		pscj:'平时成绩',fslkscj:'考试成绩',kcdjcjm:'课程等级成绩码',djlkscj:'考试成绩',kccj:'总评成绩',
    		bz: '备注'
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
    			{text:exportCols['pscj'], width:120, dataIndex:'pscj', sortable: true},
    			{text:exportCols['fslkscj'], width:120, dataIndex:'fslkscj', sortable: true},
    			{text:exportCols['djlkscj'], width:120, dataIndex:'djlkscj',sortable: true},
    			
    			{text:exportCols['ksxz'], width:100, dataIndex:'ksxz', sortable: true},
    			{text:exportCols['kccj'], width:120, dataIndex:'kccj', sortable: true,
    			renderer: Ext.util.Format.numberRenderer('00.00')/*,
    				renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == ''|| value == null || value < '60'){
              				return  "<span style='color:red;font-weight:bold;'>"+value+"</span>";
                		}else 
                		  return  "<span style='color:black;font-weight:bold;'>"+value+"</span>";*/
                		  /*else if(value >= '90' && value <= '100'){
              				return  "<span style='color:black;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '80' && value <= '90'){
              				return  "<span style='color:blue;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '70' && value <= '80'){
              				return  "<span style='color:green;font-weight:bold;'>"+value+"</span>";
                		}else if(value >= '60' && value <= '70'){
              				return  "<span style='color:purple;font-weight:bold;'>"+value+"</span>";
                		}*/
//                		}
                },
    			{text:exportCols['bz'],width: 120,dataIndex:'bz',sortable:false}
//    			{text:exportCols['ksxz'], width:100, dataIndex:'ksxz', sortable: true,editor:{
//					xtype : 'combo',
//				    allowBlank: false,
//					blankText: '必填',
//				    editable : false,
//				    queryMode : 'remote',
//				    displayField : 'mc',
//					store : Ext.create('Ext.data.Store',{
//					   	autoLoad : true,
//					   	fields : [{name : 'bm'},
//					   	          {name : 'mc'},
//					   	          {name:'pxh'}],
//					   	proxy : {
//					   		type : 'ajax',
//					   		url : 'zdGetZD.action',
//					   		actionMethods : 'post',
//					   		reader : {
//					   			root : 'result.list',
//					   			totalProperty : 'totalProperty'
//					   		},
//					   		extraParams: {zdName:'ZdKsxzm'},
//					   		simpleSortMode : true
//					   	},
//					   	sorters : [{
//					   		property : 'pxh',
//					   		direction : 'ASC'
//					   	}]
//					   })
//					  
////					   listeners:{
////					   	focus:function(){
////					   		ksxzmValue = 'edit'
////					   	},
////					   	select:function(combo, record, index){
////					    	ksxzmValue = record[0].data.bm
////					   	}
////					   }
//    			}},
    			
//    			{text:exportCols['pscj'], width:120, dataIndex:'pscj', sortable: true,editor:{
//    				  xtype:'textfield',
//    				  allowBlank: false,
//					  regex:/^[1-9][0-9]{0,1}$/,
//					  listeners:{
//					  	focus:function(tf){
//					  		jszValue = tf.getValue();
//					  	}
//					  }
//    			}},
//    			{text:exportCols['fslkscj'], width:120, dataIndex:'fslkscj', sortable: true,editor:{
//    				  xtype:'textfield',
//    				  allowBlank: false,
//					  regex:/^[1-9][0-9]{0,1}$/,
//					  listeners:{
//					  	focus:function(tf){
//					  		jszValue = tf.getValue();
//					  	}
//					  }
//    			}},
//    			{text:exportCols['djlkscj'], width:120, dataIndex:'djlkscj', editor:{
//					xtype : 'combo',
//				    allowBlank: false,
//					blankText: '必填',
//				    editable : false,
//				    queryMode : 'remote',
//				    displayField : 'mc',
//					store : Ext.create('Ext.data.Store',{
//					   	autoLoad : true,
//					   	fields : [{name : 'bm'},
//					   	          {name : 'mc'},
//					   	          {name:'pxh'}],
//					   	proxy : {
//					   		type : 'ajax',
//					   		url : 'zdGetZD.action',
//					   		actionMethods : 'post',
//					   		reader : {
//					   			root : 'result.list',
//					   			totalProperty : 'totalProperty'
//					   		},
//					   		extraParams: {zdName:'ZdCjdjm'},
//					   		simpleSortMode : true
//					   	},
//					   	sorters : [{
//					   		property : 'pxh',
//					   		direction : 'ASC'
//					   	}]
//					   })
//    			},sortable:false},
//    			{text:exportCols['kccj'], width:120, dataIndex:'kccj', sortable: true
//    			}
    		]
//    		 		    selType: 'cellmodel',
//			    plugins: [
//			        Ext.create('Ext.grid.plugin.CellEditing', {
//			            clicksToEdit: 2,
//			            
//	    			listeners : {
//					    afteredit:function(editor,e){
//							if(e.field == 'kclb'){
//					    		if(kclbmValue != 'edit'){
//					    			e.record.set('kclbm',kclbmValue)
//					    		}
//					    	}
//					    }
//	    			}
//			      })
//			    ],
    			
   	   });
       me.callParent(arguments);
    }
});
