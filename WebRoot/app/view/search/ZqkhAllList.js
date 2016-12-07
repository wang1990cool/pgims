Ext.define('App.view.search.ZqkhAllList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.zqkhAllList',
	store: 'ViewXwZqkhStore',
	columnLines: true,
    autoHeight: true,
    autoWidth: true,
    layout:'auto',
    frame:true,
	title:'中期考核查询',
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
    		id:'序号',xh:'学号',xm:'姓名',nj:'年级',fymc:'学院名称',zymc:'专业名称',xslx:'学生类型',xn:'学年',xq:'学期',lwtm:'论文题目',khrq:'考核日期',
    		jczz:'检查组长',dlxz:'考核领导小组组长',dskhdjm:'导师考核等级码',dskhdj:'导师考核等级',xzkhdjm:'小组考核等级码',xzkhdj:'小组考核等级',
    		xykhdjm:'学院考核等级码',xykhdj:'学院考核等级',shztm:'审核状态码',shzt:'审核状态',shsj:'审核时间',shrgh:'审核人工号',
    		shr:'审核人',shyj:'审核意见'
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
//    			{text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['xh'], width:90, dataIndex:'xh', sortable: true},
    			{text:exportCols['xm'], width:50, dataIndex:'xm', sortable: true},
    			{text:exportCols['nj'], width:50, dataIndex:'nj', sortable: true},
    			{text:exportCols['fymc'], width:150, dataIndex:'fymc', sortable: true},
    			{text:exportCols['zymc'], width:120, dataIndex:'zymc', sortable: true},
    			{text:exportCols['xslx'], width:130, dataIndex:'xslx', sortable: true},
    			{text:exportCols['lwtm'], width:200, dataIndex:'lwtm',sortable: true},
    			 {text: exportCols['shzt'], width: 100, dataIndex: 'shzt', sortable: true, 
    		         renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '审核通过'){
              				return  "<span style='color:green;font-weight:bold;'>审核通过</span>";
                		}else if(value == '待审状态'){
                			return  "<span style='color:blue;font-weight:bold;'>待审状态</span>";
                		}else if(value == '草稿状态'){
                			return  "<span style='color:red;font-weight:bold;'>草稿状态</span>";
                		}else{
                			return  "<span style='color:red;font-weight:bold;'>审核未通过</span>";
                		}
              	}},
    			{text:exportCols['dskhdj'], width:80, dataIndex:'dskhdj', sortable: true},
    			{text:exportCols['xzkhdj'], width:80, dataIndex:'xzkhdj', sortable: true},
    			{text:exportCols['xykhdj'], width:80, dataIndex:'xykhdj', sortable: true},
    			{text:exportCols['jczz'], width:80, dataIndex:'jczz', sortable: true},
    			{text:exportCols['dlxz'], width:100, dataIndex:'dlxz', sortable: true},
    			{text:exportCols['xn'], width:80, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:50, dataIndex:'xq', sortable: true}
    		],
    		
    		    dockedItems:[{
            		dock: 'top',
				    xtype: 'toolbar',
				    items:[
				    	{
							itemId : 'detailBtn',
							text : '详情',
							tooltip : '详情',
							iconCls : 'detail_16',
							action : 'detail'
	         	   }, {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						},'->', '-', {
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
						}, '条'
				    ]},
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
				var detailBtn = o.up('grid').down('#detailBtn');
				if(!detailBtn.disabled && !detailBtn.hidden)
					detailBtn.fireEvent('click',detailBtn);
			}
		}
        });
          me.callParent(arguments);
    }
});
