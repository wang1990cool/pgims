Ext.define('App.view.jxrw.JxrwList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.jxrwList',
	store: 'JxrwStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'教学任务打印',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
//   		 ,
// 	     getRowClass : function(record,rowIndex,rowParams,store){
//            if(record.data.ztm=="2"){
//                return 'x-grid-record-color';
//            }  
//	 }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	
    	var exportCols = {
    		id:'序号',kkkh:'开课课号',ggkbzm:'公共课标志码',ggkbz:'公共课标志',
    		kch:'课程号',kcmc:'课程名称',xn:'学年',xq:'学期',
    		zjjs:'主讲教师',zydm:'专业代码',zymc:'专业名称',
    		pydwh:'培养单位号',pydw:'培养单位',kkdwh:'开课单位号',kkdw:'开课单位'
    		};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kkkh'], width:180, dataIndex:'kkkh', sortable: true},
    			{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true},
    			{text:exportCols['kcmc'],width:180,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['kkdw'], width:180, dataIndex:'kkdw', sortable: true},
    			{text:exportCols['ggkbz'],width:100,dataIndex:'ggkbz',sortable:true},
    			{text:exportCols['zjjs'],width:70,dataIndex:'zjjs',sortable:true},
    			{text:exportCols['xq'], width:70, dataIndex:'xq', sortable: true},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: true,hidden:true}
    		],
    		
			dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },'-',{
									text : '全部打印',	
									itemId : 'pdfDownloadAll',
									iconCls : 'printer_16',
									action : 'printAll'
					         },'-',{
									text : '打印',	
									itemId : 'pdfDownloader',
									iconCls : 'printer_16',
									action : 'print'
					         }, '-', '->', '-', {
									itemId : 'schShowBtn',
									iconCls : 'searchForm',
									action : 'showSearch'
								}, '-', '每页', {
									itemId : 'numCmb',
									name : 'numCmb',
									xtype : 'combo',
									width : 50,
									blankText : '必须选择页面大小!',
									store : Ext.StoreMgr.lookup('main.PageStore'),
									value : pSize,
									editable : false,
									displayField : 'abbr',
									valueField : 'value',
									queryMode : 'local'
								}, '条']
   						},
   	        	
		    Ext.create('Ext.PagingToolbar', {
		        itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store:  me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })],
		    
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
