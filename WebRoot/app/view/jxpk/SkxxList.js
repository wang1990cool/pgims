Ext.define('App.view.jxpk.SkxxList',{
	extend: 'Ext.grid.GridPanel',
	alias: 'widget.skxxList',
	store: 'SkxxStore',
	columnLines: true,
//    layout:'auto',
//    frame:true,
	title:'课程信息',
    loadMask: true,
    autoScroll:true,
    pkjlList:null,
    viewConfig: { 
   		 stripeRows: true ,
 	     getRowClass : function(record,rowIndex,rowParams,store){
 	     		var me = this;
// 	     		var skxxStore = me.store;
// 	     		var pkjlStore =  me.pkjlList.getStore()
 	     		var pkjlStore =  Ext.StoreMgr.lookup('JxPkjlStore');
 	     		var skxxStore = Ext.StoreMgr.lookup('SkxxStore');
					for(var j = 0;j < pkjlStore.getCount();j++){
						var pkjlRec = pkjlStore.getAt(j)
						if(record.data.kkkh == pkjlRec.get('kkkh')){
						  return 'x-grid-record-pk-color';
						}
					}
		 }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    listeners:{
    	select:function(model,record,index){
    		var me = this;
    		var kkkh = record.get('kkkh');
    		var pkjlList = me.pkjlList
    		var pkjlStore = Ext.StoreMgr.lookup('JxPkjlStore');
			for(var i = 0;i < pkjlStore.getCount();i++){
				 pkjlList.getView().removeRowCls(i,'x-grid-record-red-color')
			}
			for(var j = 0;j < pkjlStore.getCount();j++){
					var pkjlRec = pkjlStore.getAt(j)
					if(kkkh == pkjlRec.get('kkkh')){
						 pkjlList.getView().addRowCls(j,'x-grid-record-color')
					}
				}
    		},
    		deselect:function(model,record,index){
    			var me = this;
	    		var kkkh = record.get('kkkh');
	    		var pkjlList = me.pkjlList
	    		var pkjlStore = Ext.StoreMgr.lookup('JxPkjlStore');
				for(var j = 0;j < pkjlStore.getCount();j++){
						var pkjlRec = pkjlStore.getAt(j)
						if(kkkh == pkjlRec.get('kkkh')){
							 pkjlList.getView().removeRowCls(j,'x-grid-record-color')
						}
					}
    		}
    },
    initComponent:function(){
    	var me = this;
    	
    	var exportCols = {
    		id:'序号',kkkh:'开课课号',ggkbzm:'公共课标志码',ggkbz:'公共课标志',
    		kch:'课程号',kcmc:'课程名称',xn:'学年',xq:'学期',jhrs:'计划人数',
    		llxs:'理论学时',syxs:'实验学时',zjjs:'主讲教师',kcxf:'学分',
    		zxs:'总学时',ksz:'开始周',jsz:'结束周',qzz:'起至周',xslxm:'学时类型码',
    		xslx:'学时类型',zydm:'专业代码',zymc:'专业名称',mzxs:'每周学时',
    		pydwh:'培养单位号',pydw:'培养单位',kkdwh:'开课单位号',kkdw:'开课单位',
    		kcxf:'课程学分'};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			Ext.create('Ext.grid.RowNumberer',{width:30}),
    			{text:exportCols['kkkh'], width:180, dataIndex:'kkkh', sortable: true},
    			{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true,hidden:true},
    			{text:exportCols['kcmc'],width:145,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['zjjs'],width:70,dataIndex:'zjjs',sortable:true},
    			{text:exportCols['kkdw'],width:130,dataIndex:'kkdw',sortable:true},
    			{text:exportCols['pydw'], width:170, dataIndex:'pydw', sortable: true,hidden:true},
    			{text:exportCols['zymc'],width:170,dataIndex:'zymc',sortable:true,hidden:true},
    			{text:exportCols['ggkbz'],width:100,dataIndex:'ggkbz',sortable:true,hidden:true},
    			{text:exportCols['xslx'], width:70, dataIndex:'xslx', sortable: true,hidden:true},
    			{text:exportCols['jhrs'],width:70,dataIndex:'jhrs',sortable:true,hidden:true},
    			{text:exportCols['kcxf'],width:70,dataIndex:'kcxf',sortable:true,hidden:true},
    			{text:exportCols['xn'], width:90, dataIndex:'xn', sortable: true,hidden:false},
    			{text:exportCols['xq'], width:60, dataIndex:'xq', sortable: true,hidden:false},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: true,hidden:true}
    		],
    		
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'skxxDetail'
   							    },{
   							    	text:'列表排课',
   							    	itemId:'arrangeCourseListBtn',
   							    	iconCls:'add_16',
   							    	action:'arrangeCourseList'
   							    },{
   							    	text:'图表排课',
   							    	itemId:'arrangeCourseGridBtn',
   							    	iconCls:'add_16',
   							    	action:'arrangeCourseGrid'
   							    }
//   							    ,'->', {
//									itemId : 'schShowBtn',
//									iconCls : 'searchForm',
//									action : 'showSearch'
//								}
								
								]
   						}],
		    
		  listeners:{  
			itemdblclick: function(o, record, item, index, e, eOpts){
				var detailBtn = o.up('grid').down('#detailBtn');
				if(!detailBtn.disabled && !detailBtn.hidden)
					detailBtn.fireEvent('click',detailBtn);
			}
		}
        });
          me.callParent(arguments);
    }
});
