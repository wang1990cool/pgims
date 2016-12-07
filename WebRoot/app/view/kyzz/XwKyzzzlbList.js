Ext.define('App.view.kyzz.XwKyzzzlbList',{
	extend: 'Ext.grid.Panel',
	store:'XwKyzzzlbStore',
	columnLines: true,
	alias: 'widget.xwKyzzzlbList',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
     
	 initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
			 listeners:{
		        cellClick: function(thisTab, td, cellIndex,rec,tr,rowIndex,event,eventObj) {
		        	 var btn = event.getTarget('.controlBtn');  
		             if(btn){
		             	var t = event.getTarget();
		             	var control = t.className;
		             	switch(control){
//		             	    case 'zlpreview':{
//		             	    	var zlwjdz = rec.get('zlwjdz');
//		             	    	window.open(zlwjdz)
//		             	    	break;
//		             	    }
//		             		case 'zldownload':{
//			            			var zlInfo = Ext.encode(rec.data)
//				            		var downloader = me.down('#fileDownloader');
//				            		downloader.load({
//				            			params: {zlInfo:zlInfo},
//				            			url: 'xwKyzzzlbFileDownloadZz.action'
//				            		});
//			            		}
		             	case 'zlpreview':{
	             	    	var store = Ext.data.StoreManager.lookup('ZdFwqbStore');
	             			var index = store.find('fwqmc','WJFWQ');
							var fwqIp = null;
							if(index != -1){
								fwqIp = store.getAt(index).get('fwqip');
							}
	             	    	var zlwjdz = rec.get('zlwjdz');
	             	    	window.open("http://" + fwqIp + "/" +zlwjdz)
//	             	    	window.open("http://" + "10.100.99.82:8080/pgimsst" + "/" +zlwjdz)
	             	    	break;
	             	    }
             		case 'zldownload':{
             				var store = Ext.data.StoreManager.lookup('ZdFwqbStore');
             				var index = store.find('fwqmc','WJFWQ');
							var wjfwq = null;
							if(index != -1){
								wjfwq = store.getAt(index).data;
							}
	            			var zlInfo = Ext.encode(rec.data)
		            		var downloader = me.down('#fileDownloader');
		            		downloader.load({
		            			params: {zlInfo:zlInfo,wjfwq:Ext.encode(wjfwq)},
		            			url: 'xwKyzzzlbFileDownloadZz.action'
		            		});
	            		}
		            		break;
		             		}
		             	}
		             }
    		 },

			columns: [Ext.create('Ext.grid.RowNumberer'),
			      { text: '附件名称', width: 100, sortable: false, dataIndex: 'zllx' },
			      { text: '文件名称', width: 230, sortable: false, dataIndex: 'zlwjmc'},
	          	  
			      { text: '上传时间', /*flex: 1,*/width: 150, sortable: false, dataIndex: 'zlscsj',renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
	                    return value.replace('T',' ');
	          	  }},
	          	   {text:'操作',width:270,sortable:false,flex: 1,
			    renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
			    		 var downloadBtn = "<input class='zldownload' style='font-size:11px;height:21px' type='button' value='下载'>";
			    		 var previewBtn = "<input class='zlpreview' style='font-size:11px;height:21px' type='button' value='预览'>";
	          	   		 return "<div class='controlBtn' >" + previewBtn + downloadBtn + "</div>";
			    }}

	          	/*  { 
	          	  menuDisabled: true,
		        	width: 60,
//	          	   flex: 1,
		            sortable: false,
		            text: '文件预览',
		            align : 'center',
		            xtype: 'actioncolumn',
		            items: [{
		            	iconCls:'downArrow',//advancedsearch
		            	tooltip: '文件预览',
		            	text: '预览',
//		            	flex: 1,
//		            	 width: '00%',
		            	handler: function (grid, rowIndex, colIndex) {
		            		var JSONObject = [];
		            		var rec = grid.getStore().getAt(rowIndex);
		            		var zlwjdz = rec.get('zlwjdz');
		   					 window.open(zlwjdz)
		            		}
		            }]
		          }*/


	          	/*  ,	
	          	  { 
	          	  menuDisabled: true,
		        	width: 20,
		            sortable: false,
		            xtype: 'actioncolumn',
		            items: [{
		            	iconCls:'download',
		            	tooltip: '文件下载',
		            	text: '下载',
		            	handler: function (grid, rowIndex, colIndex) {
		            		var JSONObject = [];
		            		var rec = grid.getStore().getAt(rowIndex);
		            		var zlInfo = Ext.encode(rec.data)
		            		var downloader = this.up('grid').down('#fileDownloader');
		            		downloader.load({
		            			params: {zlInfo:zlInfo},
								url: 'xwktbgzlbFileDownloadZl.action'
		            		});
		            	}
		            }]
		          }*/
			],
				
			tbar: [{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
		       },{
		              xtype: 'FileDownloader',
		              itemId: 'preview',
//		              text:预览,
		              width: 0,
		              height: 0
		       }
		       	/*,{
		    	itemId: 'previewZlBtn',
		        text: '预览',
		        iconCls: 'downArrow',
				action:'preview'
		    }*//*,{
		    	itemId: 'uploadZlBtn',
		        text: '上传',
		        iconCls: 'add_16',
				action:'zlUpload'
		    },{
	        itemId: 'delZlBtn',
		        text: '删除',
		        iconCls : 'delete_16',
				action : 'delete'
	        }*//*,{
		    	itemId: 'previewZlBtn',
		        text: '预览',
		        iconCls: 'downArrow',
				action:'preview'
		    }*//*,{
		    	itemId: 'refreshZlBtn',
		        text: '刷新',
		        iconCls: 'assign_16',
				action:'refresh'
		    }*/]
		});
		
		me.callParent(arguments);
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