Ext.define('App.view.psdm.MsPsdmList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.msPsdmList',
	store: 'PsdmStore',
	columnLines: true,
	autoHeight: true,
    autoWidth: true,
    layout : 'auto',
    frame:true,
	title:'平时点名册',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true
   		 //,
//   		        getRowClass:function(){
//                            // 在这里添加自定样式 改变这个表格的行高
//                        return 'x-grid-row custom-grid-row';
//                    }
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kch:'课程号',kcmc:'课程名称',zjjs:'主讲教师',kkkh:'开课课号',
    		kkdw:'开课单位',xn:'学年',xq:'学期'
    	
    	};
    	
    	Ext.applyIf(me,{
    		exportCols:exportCols,
    		columns:[
    			{text:exportCols['kch'],width:90,dataIndex:'kch',sortable:true},
    			{text:exportCols['kcmc'],width:180,dataIndex:'kcmc',sortable:true},
    			{text:exportCols['zjjs'],width:70,dataIndex:'zjjs',sortable:true},
    			{text:exportCols['kkdw'], width:180, dataIndex:'kkdw', sortable: true},
    			{text:exportCols['kkkh'], width:180, dataIndex:'kkkh', sortable: true},
    			{text:exportCols['xn'], width:110, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:70, dataIndex:'xq', sortable: true},
    			{text:exportCols['zt'], width:70, dataIndex:'zt', sortable: true,hidden:true}
    		],
    		
			dockedItems:[
				 Ext.create('App.view.main.GridToolbar',{
	    	    	   itemId:'gridtoolbar',
	    	    	   dock: 'top',
	    	    	   items: [{
					    	text:'详情',
					    	itemId:'detail',
					    	iconCls:'detail_16',
					    	action:'detail'
					    },'-',{
							text : 'PDF预览',	
							itemId : 'pdfDownload',
							iconCls : 'printer_16',
							action : 'printPDF'
			         },'-','->','-',{
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action:'showSearch'
					 	},'-','每页',{
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
