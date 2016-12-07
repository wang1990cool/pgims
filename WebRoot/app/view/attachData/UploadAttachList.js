Ext.define('App.view.attachData.UploadAttachList',{
	extend: 'Ext.grid.Panel',
	store:'AttachStore',
	columnLines: true,
	itemId:'uploadAttachList',
    loadMask: true,
    autoScroll:true,
//        frame:true,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
     
	 initComponent: function(){
		var me = this;
 		
		Ext.applyIf(me,{
			columns: [Ext.create('Ext.grid.RowNumberer'),
//			      { text: '附件名称', width: 280, sortable: false, dataIndex: 'attachName' },
			      { text: '文件名称', width: 350, sortable: false, dataIndex: 'attachCname'
//			      ,
//			      renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
//					          	return '<a class="nlink" href="#"> ' + value + '</a>';
//					}
					},
			      { text: '上传时间', flex: 1, sortable: false, dataIndex: 'uploadTime',renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
	                    return value.replace('T',' ');
	          	  }}

	          	  ,	
	          	  { menuDisabled: true,
		        	width: 20,
		            sortable: false,
		            xtype: 'actioncolumn',
		            items: [{
		            	iconCls:'download_16',
		            	tooltip: '文件下载',
		            	text: '下载',
		            	handler: function (grid, rowIndex, colIndex) {
		            		var JSONObject = [];
		            		var rec = grid.getStore().getAt(rowIndex);
		            		var attachInfo = Ext.encode(rec.data)
		            		var downloader = this.up('grid').down('#fileDownloader');
		            		downloader.load({
		            			params: {attachInfo:attachInfo},
		            			url: 'pyfaFileDownloadAttach.action'
		            		});
		            	}
		            }]
		          }
			],
				
			tbar: [{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
		       },{
		    	itemId: 'uploadAttachBtn',
		        text: '上传',
		        iconCls: 'add_16',
				action:'uploadAttach'
		    },{
	        itemId: 'delAttachBtn',
		        text: '删除',
		        iconCls: 'delete_16',
		        action:'delAttach'
//		        ,
//		         listeners:{
//                        click: function (o,oepts) {
//		        			this.up('uploadPanel').down('uploadInfoGrid').deleteFile(o);
//                        }
//		        }
	        }]
		});
		
		me.callParent(arguments);
	},
	
	uploadFile: function(grid){
		var me = this;
		
		var win = Ext.create('Ext.window.Window',{
				layout:'fit',
				width:380,
				closeAction:'destroy',
				height:150,
				resizable:false,
				shadow:true,
				autoShow:true,
				title:'附件上传',
				modal:true,
				closable:true,
				bodyStyle:'padding:5 5 5 5',
				animCollapse:true,
				billNo: me.up('#uploadPanel').down('#billNo').getValue(),
				items: [
					Ext.create('App.view.apply.UploadForm',{
						itemId: 'uploadForm',
						pageGrid: grid
					})
				]
		});
	},
	
	deleteFile: function(o, e, eOpts){
		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined ){
			var fileName = rec.get('attachName');
			var billNo = me.up('#uploadPanel').down('#billNo').getValue();
			
			if(fileName.length ==0) return;
			var params = { billNo:billNo , fileType: 'prdAttach',fileName: fileName };
			var JSONObj = Ext.JSON.encode(params);
		    Ext.Ajax.request({
	    		url:'epafileDeleteAttach.action',
	    		method: 'get',
	    		params: {fileInfo: JSONObj},
	    		success: function (response) {
		 			var responseMessage = Ext.JSON.decode(response.responseText);
		 			if (responseMessage.success) {
		 					me.store.remove(rec);
		                     Ext.Msg.show({title:"提示",msg:'删除成功！',
		                     buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
		                 }
				},
	            failure: function (response) {          	
	    		}});
		}
	}
});