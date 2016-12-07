Ext.define('App.view.search.KKJHMXList',{
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
    			{text:exportCols['kkjhh'], width:150,  dataIndex:'kkjhh',hidden:true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch'},
    			{text:exportCols['kcmc'], width:150,  dataIndex:'kcmc'},
    			{text:exportCols['ksz'], width:70, dataIndex:'ksz'},
    			{text:exportCols['jsz'], width:70, dataIndex:'jsz'},
    			{text:exportCols['qzz'], width:70, dataIndex:'qzz',sortable: true,hidden:true},
    			{text:exportCols['jhrs'], width:100, dataIndex:'jhrs',hidden:true},
//    			,
//    			{text:exportCols['kch'], width:100, dataIndex:'kch'	},
//    			{text:exportCols['kcmc'], width:150,dataIndex:'kcmc'},
    			{text:exportCols['zxs'], width:70, dataIndex:'zxs'},
    			{text:exportCols['kcxf'], width:70, dataIndex:'kcxf'},
    			
    			{text:exportCols['kclbm'], width:70, dataIndex:'kclbm',hidden:true},
    			{text:exportCols['kclb'], width:100, dataIndex:'kclb'},
    			
    			{text:exportCols['kcxzm'], width:70, dataIndex:'kcxzm',hidden:true},
    			{text:exportCols['kcxz'], width:100, dataIndex:'kcxz'},
    			
    			{text:exportCols['kcsxm'], width:80, dataIndex:'kcsxm',hidden:true},
    			{text:exportCols['kcsx'], width:80, dataIndex:'kcsx'},
    			
    			{text:exportCols['ksxsm'], width:80, dataIndex:'ksxsm',hidden:true},
    			{text:exportCols['ksxs'], width:80, dataIndex:'ksxs'},
    			
//    			{text:exportCols['ggkbzm'], width:80, dataIndex:'ggkbzm',sortable: true},
    			{text:exportCols['ggkbz'], width:100, dataIndex:'ggkbz'
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
			 
    				dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    }]
   						}]
   						,
   			listeners:{  
				itemdblclick: function(o, record, item, index, e, eOpts){
					var detailBtn = o.up('grid').down('#detail');
					if(!detailBtn.disabled && !detailBtn.hidden)
						detailBtn.fireEvent('click',detailBtn);
				}
			}
   	   });
       me.callParent(arguments);
    }
});
