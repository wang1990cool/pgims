Ext.define('App.view.yx.ViewYxBdqkList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.viewYxBdqkList',

	store: 'ViewYxBdqkStore',
	columnLines: true,
    title: '各学院报到情况',
    
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    stripeRows: true, 
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
    features: {ftype: 'summary'},
    
	initComponent:function() {
		var me = this;
		
		var exportCols = {
			  nj:'年级',lqxy:'录取学院',zrs:'应报到人数（人）',ybdrs:'实报到人数（人）',wbdrs:'未报到人数（人）',bdl:'报到率（%）'
		};
		
		Ext.applyIf(me,{
			
			exportCols:exportCols,
			columns: [
				{ text: exportCols['nj'],width:120, dataIndex: 'nj', sortable:true,
                        summaryRenderer: function(value){
      						return  '小计';
				        }
				},
				{ text: exportCols['lqxy'],width:200, dataIndex: 'lqxy', sortable:true,
						summaryType: 'count',
                        summaryRenderer: function(value){
      						return  value + '个学院';
                        }
                },
				{ text: exportCols['zrs'],width:200, dataIndex: 'zrs', sortable:true,summaryType:'sum'},
				{ text: exportCols['ybdrs'],width:200, dataIndex: 'ybdrs', sortable:true,summaryType:'sum'},
				{ text: exportCols['wbdrs'], width:200, dataIndex: 'wbdrs', sortable:true,summaryType:'sum'},
				{ text: exportCols['bdl'], width:180, dataIndex: 'bdl', sortable:true,
						renderer: Ext.util.Format.numberRenderer('00.00'),
						summaryRenderer : function (value, cellmeta, record, rowIndex, columnIndex, store) {
			           			 			return Ext.util.Format.number(record.data["ybdrs"]/record.data["zrs"]*100,'00.00')
			   								}
				}
				
			],
			
			dockedItems: [
				Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   items: [{
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
				 	}, '-', '->', '-', {
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






