Ext.define('App.view.cjdy.CjdyList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.cjdyList',
	store: 'CjdyStore',
//	store: 'XsJcxxbStore',
	columnLines: true,
    title: '成绩打印',
    
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    stripeRows: true,
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent:function() {
		var me = this;
		
		var exportCols = {
			id:'序号',xh:'学号',xm:'姓名',xslx:'学生类型',sznj:'所在年级',fymc:'所在学院',
			zymc:'所在专业',dsxm:'导师姓名'
			
		
					            	           	            	        	          
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
			
				{ text: exportCols['xh'], width:120, dataIndex: 'xh', sortable:true},
				{ text: exportCols['xm'], width:100, dataIndex: 'xm', sortable:true},
				{ text: exportCols['fymc'],width:200, dataIndex: 'fymc', sortable:true},
				{ text: exportCols['zymc'],width:160, dataIndex: 'zymc', sortable:true},
				{ text: exportCols['xslx'],width:160, dataIndex: 'xslx', sortable:true},
				{ text: exportCols['sznj'],width:80, dataIndex: 'sznj', sortable:true},
				{ text: exportCols['dsxm'],width:100, dataIndex: 'dsxm', sortable:true}
			],
			dockedItems: [
				Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	       items: [{
					    	text:'详情',
					    	itemId:'detail',
					    	iconCls:'detail_16',
					    	action:'detail'
					    },'-',{
							text : '存档成绩单',	
							itemId : 'pdfDownload',
							iconCls : 'printer_16',
							action : 'printPDF'
				         },'-',{
								text : '毕业成绩单',	
								itemId : 'pdfPrint',
								iconCls : 'printer_16',
								action : 'print'
				         },'-', '->', '-', {
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action : 'showSearch'
						}, '-','每页',{
						    itemId: 'numCmb',
						    name: 'numCmb',
						    xtype: 'combo',
						    width: 50,
						    blankText: '必须选择页面大小!',
							store: Ext.StoreMgr.lookup('main.PageStore'),
						    value: pSize,
						    editable: false,
						    displayField: 'abbr',
						    valueField: 'value',
						    queryMode: 'local'
						}, '条']
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







