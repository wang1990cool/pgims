Ext.define('App.view.kyxxck.XwKyjlbList', {
	extend: 'Ext.grid.Panel',
//	alias: 'widget.viewXwDbmsbList',
	
	store: 'ViewXwKyjlbCKStore',
    columnLines: true,
    title: '科研奖励登记信息',
//  autoScroll:true,
    layout:'auto',
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	
        	 id:'序号',xh:'学号',xm:'学生姓名',xn:'学年',xq:'学期',cglx:'成果类型',hjcgmc:'获奖成果名称',
        	kjjlb:'科技级别',
        	jldj:'级别等级',hjrq:'获奖日期',shr:'学院审核人',shsj:'学院审核时间',zsr:'终审审核人',zssj:'终审时间',
        	shjg:'审核结果',ztt:'资料状态',zt:'状态'
        	,fymc:'学院名称'};

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
               { text: exportCols['id'], width: 100, dataIndex: 'id', sortable: true,hidden:true },
                { text: exportCols['xh'], width: 100, dataIndex: 'xh', sortable: true,hidden:true },
                { text: exportCols['xm'], width: 100, dataIndex: 'xm', sortable: true},
                { text: exportCols['cglx'], width: 85, dataIndex: 'cglx', sortable: false ,hidden:true},
                { text: exportCols['hjcgmc'], width: 100, dataIndex: 'hjcgmc', sortable: false},
                { text: exportCols['kjjlb'], width: 100, dataIndex: 'kjjlb', sortable: false},
                 { text: exportCols['jldj'], width: 100, dataIndex: 'jldj', sortable: false},
//                { text: exportCols['hjrq'], width: 85, dataIndex: 'hjrq', sortable: false},
//                { text: exportCols['shr'], width: 85, dataIndex: 'shr', sortable: false},
//                { text: exportCols['shsj'], width: 150, dataIndex: 'shsj', sortable: false },
//                { text: exportCols['zsr'], width: 80, dataIndex: 'zsr', sortable: false},
//                { text: exportCols['zssj'], width: 150, dataIndex: 'zssj', sortable: true },
                { text: exportCols['shjg'], width: 70, dataIndex: 'shjg', sortable: true },
    	       
    	        { text: exportCols['zt'], width: 85, dataIndex: 'zt', sortable: false,flex:1,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '初审通过'){
              				return  "<span style='color:green;font-weight:bold;'>初审通过</span>";
                		}else if(value == '已提交'){
                			return  "<span style='color:blue;font-weight:bold;'>已提交</span>";
                		}else if(value == '未提交'){
                			return  "<span style='color:red;font-weight:bold;'>未提交</span>";
                		}else if(value == '终审通过'){
                			return  "<span style='color:green;font-weight:bold;'>终审通过</span>";
                		}else if(value == '初审未通过'){
                			return  "<span style='color:red;font-weight:bold;'>初审未通过</span>";
                		}else if(value == '终审未通过'){
                			return  "<span style='color:red;font-weight:bold;'>终审未通过</span>";
                		}
              	}}/*,
              	 { text: exportCols['ztt'], width: 70, dataIndex: 'ztt', sortable: false,  renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) 
                	{
                		if(value == '已上传'){
              				return  "<span style='color:green;font-weight:bold;'>已上传</span>";
                		}else if(value == '未上传'){
                			return  "<span style='color:red;font-weight:bold;'>未上传</span>";
                		}
              	} }*/],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbarl',
    	    	   dock: 'top',
    	    	   items:[{
				            itemId: 'detailBtn',
							text:'详情',
							tooltip:'详情',
							iconCls:'detail_16',
							action:'xwKyjlbDetail'
					        }
               	   ]
    	       }),
    	       Ext.create('Ext.PagingToolbar', {
    	    	   itemId:'toolbar',
    	    	   pageSize: pSize,
    	    	   dock: 'bottom',
    	    	   store: me.store,
    	    	   displayInfo: true,
    	    	   displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
    	    	   emptyMsg: '没有数据',
    	    	   plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });

        me.callParent(arguments);
    }
});
