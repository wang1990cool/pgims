Ext.onReady(function(){
var kszValue, jszValue, kclbmValue, kcxzmValue, kcsxmValue, ksxsmValue;
Ext.define('App.view.jxkkjh.KKJHMXList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kkjhmxList',
	itemId:'kkjhmxList',
	store: 'KKJHMXAllStore',
	columnLines: true,
	layout:'fit',
	autoScroll:true,
	title:'方案课程',
//    frame:true,
    loadMask: true,
//     bodyStyle : 'overflow-x:scroll; overflow-y:scroll',
    viewConfig: {
   		 stripeRows: true 
    },
    isDetail:false,
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kkjhh:'开课计划号',kch:'课程号',kcmc:'课程名称',kclbm:'课程类别码',kclb:'课程类别',
    		kcxzm:'课程性质码',kcxz:'课程性质',kcsxm:'课程属性码',kcsx:'课程属性',kcxf:'课程学分',
    		xslxm:'学时类型码',xslx:'学时类型',zxs:'总学时',llxs:'理论学时',syxs:'实验学时',
    		kkdwh:'开课单位号',kkdw:'开课单位',ksz:'开始周',jsz:'结束周',qzz:'起至周',mzxs:'每周学时',
    		ggkbzm:'公共课标志码',ggkbz:'公共课',jhrs:'计划人数',ksxs:'考试形式',ksxsm:'考试形式码'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			Ext.create('Ext.grid.RowNumberer'),
    			{text:exportCols['id'], width: 50,dataIndex:'id',hidden:true},
    			{text:exportCols['kkjhh'], width:150,  dataIndex:'kkjhh',sortable:false,hidden:true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch',sortable:false},
    			{text:exportCols['kcmc'], width:150,  dataIndex:'kcmc',sortable:false},
    			{text:exportCols['ksz'], width:70, dataIndex:'ksz',	
    			editor:{
    				  xtype:'textfield',
    				  allowBlank: false,
					  regex:/^[1-9][0-9]{0,1}$/ ,
					  listeners:{
					  	focus:function(tf){
							kszValue = tf.getValue();					  	
					  	}
					  }
    			},sortable:false},
    			{text:exportCols['jsz'], width:70, dataIndex:'jsz',editor:{
    				  xtype:'textfield',
    				  allowBlank: false,
					  regex:/^[1-9][0-9]{0,1}$/,
					  listeners:{
					  	focus:function(tf){
					  		jszValue = tf.getValue();
					  	}
					  }
    			},sortable:false},
    			{text:exportCols['qzz'], width:70, dataIndex:'qzz',sortable:false,hidden:true},
    			{text:exportCols['jhrs'], width:100, dataIndex:'jhrs',hidden:true},
//    			,
//    			{text:exportCols['kch'], width:100, dataIndex:'kch'	},
//    			{text:exportCols['kcmc'], width:150,dataIndex:'kcmc'},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs',sortable:false},
    			{text:exportCols['kcxf'], width:70, dataIndex:'kcxf',sortable:false},
    			
    			{text:exportCols['kclbm'], width:70, dataIndex:'kclbm',hidden:true},
    			{text:exportCols['kclb'], width:100, dataIndex:'kclb',sortable:false},
    			
    			{text:exportCols['kcxzm'], width:70, dataIndex:'kcxzm',hidden:true},
    			{text:exportCols['kcxz'], width:100, dataIndex:'kcxz',sortable:false},
    			
    			{text:exportCols['kcsxm'], width:80, dataIndex:'kcsxm',hidden:true},
    			{text:exportCols['kcsx'], width:80, dataIndex:'kcsx',sortable:false},
    			
    			{text:exportCols['ksxsm'], width:80, dataIndex:'ksxsm',hidden:true},
    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs',sortable:false},
    			
//    			{text:exportCols['ggkbzm'], width:80, dataIndex:'ggkbzm',sortable: true},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz',sortable:false
//    			,		
//    			renderer:function(value, metaData, record){
//    					var ggkbzVaule = (record.get('ggkbzm')=='1')?'是':'否';
//    					return ggkbzVaule;
//    			}
    			}
//    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs',hidden:true},
//    			{text:exportCols['kkdw'], width:160, dataIndex:'kkdw'}
//    			{text:exportCols['xslx'], width:80, dataIndex:'xslx',hidden:true},

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
					    	if(e.field == 'ksz'){
					    		if(e.record.data.jsz.length != 0 && 
					    				Number(e.record.data.ksz) > Number(e.record.data.jsz)){
					    					Ext.MessageBox.alert('提示', '起始周不得大于结束周！');
					    					e.record.set('ksz',kszValue);
					    		}else{
					    				e.record.set('qzz',e.record.data.ksz + ' ~ ' + e.record.data.jsz);
					    		}
					    	}else if(e.field == 'jsz'){
					    		if(e.record.data.ksz.length !=0 &&
					    				Number(e.record.data.jsz) < Number(e.record.data.ksz)){
											Ext.MessageBox.alert('提示', '结束周不得小于开始周！');
											e.record.set('jsz',jszValue);
					    		}else{
					    			e.record.set('qzz',e.record.data.ksz + ' ~ ' + e.record.data.jsz);
					    		}
					    	}else if(e.field == 'kclb'){
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
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },{
   							    	text:'增加',
   							    	itemId:'addKc',
   							    	iconCls:'add_16',
   							    	action:'addKc'
   							    },{
   							    	text:'课程导入',
   							    	itemId:'importKc',
   							    	iconCls:'add_16',
   							    	action:'importKc'
   							    },{
   							    	text:'计划外课程',
   							    	itemId:'addOutKc',
   							    	iconCls:'add_16',
   							    	action:'addOutKc'
   							    },{
   							    	text:'修改',
   							    	itemId:'edit',
   							    	iconCls:'edit_16',
   							    	action:'edit'
   							    },{
   							    	text:'删除',
   							    	itemId:'delete',
   							    	iconCls:'delete_16',
   							    	action:'delete'
   							    }]
   						}]
//   						,
//   				listeners:{  
//				itemdblclick: function(o, record, item, index, e, eOpts){
//					var detailBtn = o.up('grid').down('#detail');
//					if(!detailBtn.disabled && !detailBtn.hidden)
//						detailBtn.fireEvent('click',detailBtn);
//				}
//			}
   	   });
       me.callParent(arguments);
    }
});
})