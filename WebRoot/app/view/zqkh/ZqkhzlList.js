Ext.define('App.view.zqkh.ZqkhzlList',{
	extend: 'Ext.grid.Panel',
	store:'XwZqkhzlbStore',
	columnLines: true,
	itemId:'zqkhzlList',
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
			listeners:{
		        cellClick: function(thisTab, td, cellIndex,rec,tr,rowIndex,event,eventObj) {
		        	 var btn = event.getTarget('.controlBtn');  
		             if(btn){
		             	var t = event.getTarget();
		             	var control = t.className;
		             	switch(control){
		             	    case 'zlpreview':{
			             	    	var store = Ext.data.StoreManager.lookup('ZdFwqbStore');
			             			var index = store.find('fwqmc','WJFWQ');
									var fwqIp = null;
									if(index != -1){
										fwqIp = store.getAt(index).get('fwqip');
									}
			             	    	var zlwjdz = rec.get('zlwjdz');
			             	    	window.open("http://" + fwqIp + "/" +zlwjdz)
//			             	    	window.open("http://" + "10.100.99.86:8080/pgimsst" + "/" +zlwjdz)
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
				            			url: 'zlzqkhFileDownloadZqkh.action'
				            		});
			            		}
		            		break;
		             		}
		             	}
		             }
    		 },
			
			columns: [Ext.create('Ext.grid.RowNumberer'),
//			       { text: '文件类型', width: 120, sortable: false, dataIndex: 'zllx'
//
//					},
					
			      { text: '文件名称', width: 280, sortable: false, dataIndex: 'zlwjmc'

					},
			      { text: '上传时间', flex:1,sortable: false, dataIndex: 'zlscsj',renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
	                    return value.replace('T',' ');
	          	  }},
	          	  {text:'操作',width:70,sortable:false,
			    renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
			    		 var downloadBtn = "<input class='zldownload' style='font-size:11px;height:21px' type='button' value='下载'>";
//			    		 var previewBtn = "<input class='zlpreview' style='font-size:11px;height:21px' type='button' value='预览'>";
	          	   		 return "<div class='controlBtn' >"+ /*previewBtn +*/ downloadBtn  +  "</div>";
			    }}

	          	
			],
				
			tbar: [{
		              xtype: 'FileDownloader',
		              itemId: 'fileDownloader',
		              width: 0,
		              height: 0
		       }]
		});
		
		me.callParent(arguments);
	}
});