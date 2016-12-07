Ext.define('App.view.docu.DocuList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.docuList',
	
	store: 'docu.DocuStore',
	columnLines: true,
	title: '文件管理',
	autoScroll: true,
	frame: true,
	loadMask: true,
	viewConfig: { stripeRows: true },
	selModel: { selType: 'checkboxmodel'},
	
	initComponent: function(){
		var me = this;
		
		var exportCols={
			fileNo: '文件编号', fileTypeName: '文件类型',
    		fileCName: '文件名称', fileAbstract: '文件摘要', fileUrl: '文件地址',
    		fileUnit: '发布单位', fileTime: '发布时间'
		}
		
		Ext.applyIf(me,{
			exportCols: exportCols,
			columns:[
			{ text: '文件类型', width: 100, dataIndex: 'fileTypeName', sortable: true, sortable: true},
            { text: '文件编号', width: 100, dataIndex: 'fileNo', sortable: false, hidden: false },
            { text: '文件名称', width: 200, dataIndex: 'fileCName', sortable: true, flex:1, renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
              	return '<a class="nlink" href="#"> ' + value + '</a>';
            }},
            { text: '文件摘要', width: 200, dataIndex: 'fileAbstract', sortable: true },
            { text: '发布单位', width: 200, dataIndex: 'fileUnit', sortable: true},
            { text: '发布时间', width: 100, dataIndex: 'fileTime', sortable: true,renderer: function(v){return v.substr(0,10);}}
		],
		dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   items:[{
		                xtype: 'FileDownloader',
		                itemId: 'fileDownloader',
		                width: 0,
		                height: 0
               	   },{
               	   		itemId: 'addBtn',
		                text:'文件上传',
		                tooltip:'文件上传',
		                iconCls:'add_16',
		                action: 'add'
               	   },'-',{
			            itemId: 'editBtn',
			            text:'文件修改',
			            tooltip:'文件修改',
			            iconCls:'edit_16',
			            action:'edit'
			        },'-',{
			            itemId: 'deleteBtn',
			            text:'文件删除',
			            tooltip:'文件删除',
			            iconCls:'delete_16',
			            action:'delete'
			        },
//			        '-',{
//						itemId:'eportBtn',
//			            xtype: 'excelExport',
//			            action:'toExcel'
//				 	},
				 	'-','->','-',{
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
					}, '条'
               	   ]
    	       }),
    	       Ext.create('Ext.PagingToolbar', {
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
	},
	
	 listeners: {
	  		cellClick: function (view, cell, cellIdx, record, row, rowIdx, eOpts) {
	            if (this.headerCt.getHeaderAtIndex(cellIdx).dataIndex == "fileCName" && eOpts.getTarget().nodeName == "A" && eOpts.getTarget().innerHTML != "") {
	                var downloader = this.down('#fileDownloader');
	                downloader.load({
	                    params: {fileName: record.data.fileName,fileCname:encodeURI(record.data.fileCName)},
	                    url: 'pfileDown.action'
	                });
	            }
	  		}
	    }
});