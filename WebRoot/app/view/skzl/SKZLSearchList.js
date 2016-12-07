Ext.define('App.view.skzl.SKZLSearchList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.skzlSearchList',
	store: 'SKZLStore',
	columnLines: true,
	autoHeight: true,
    autoWidth: true,
    layout : 'auto',
    frame:true,
	title:'教学资料',
    loadMask: true,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	var exportCols = {
    		id:'序号',kch:'课程号',kcmc:'课程名称',xn:'学年',xq:'学期',
    		zllx:'资料类型',zt:'状态',zjjs:'主讲教师',kkkh:'开课课号'
    	};
    	
    	Ext.applyIf(me,{
    		   listeners:{
		        cellClick: function(thisTab, td, cellIndex,rec,tr,rowIndex,event,eventObj) {
		        	var upload = event.getTarget('upload');
		        	 var btn = event.getTarget('.controlBtn');  
		             if(btn){
		             	var t = event.getTarget();
		             	var control = t.className;
		             	switch(control){
		             	    case 'preview':{
		             	    	var zlwjdz = rec.get('zlwjdz');
		             	    	window.open(zlwjdz)
		             	    	break;
		             	    }
		             		case 'download':{
			            		if(rec.get('zlwjdz') == null || rec.get('zlwjdz') == ''){
			            				Ext.MessageBox.alert('提示', '请先上传资料！');
			            		}else{
			            			var zlInfo = Ext.encode(rec.data)
				            		var downloader = me.down('#fileDownloader');
				            		downloader.load({
				            			params: {zlInfo:zlInfo},
				            			url: 'skzlFileDownloadZl.action'
				            		});
			            		}
		            		break;
		             		}
		             	}
		             }
		        }
    		 },
    		exportCols:exportCols,
    		columns:[
    			{ text: exportCols['id'], width: 50,hidden:true, dataIndex: 'id', sortable: true},
    			{text:exportCols['kch'], width:100, dataIndex:'kch', sortable: true},
    			{text:exportCols['kcmc'], width:200, dataIndex:'kcmc', sortable: true},
    			{text:exportCols['zjjs'], width:100, dataIndex:'zjjs', sortable: true},
    			{text:exportCols['kkkh'], width:200, dataIndex:'kkkh', sortable: true, hidden:true},
    			{text:exportCols['xn'], width:90, dataIndex:'xn', sortable: true},
    			{text:exportCols['xq'], width:80, dataIndex:'xq', sortable: true},
    			{text:exportCols['zllx'], width:80, dataIndex:'zllx', sortable: true},
    			{text:exportCols['zt'], width:80, dataIndex:'zt', sortable: true,
		    	renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
		    		var ztm = record.get('ztm')
		    		if(ztm == "" || ztm == null || ztm == '0'){
			          		return "<span style='color:red'>"+ value + "</span>";
			          	}else if(ztm == "1"){
			          		return "<span style='color:green'>" + value +"</span>";
			          	}else if(ztm == "2"){
			          		return "<span style='color:blue'>" + value +"</span>";
			        }}},
			     {
			     	text:'操作',width:120,sortable:false,
			  		 renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
			    		 var downloadBtn = "<input class='download' style='font-size:11px;height:21px' type='button' value='下载'>";
			    		 var previewBtn = "<input class='preview' style='font-size:11px;height:21px' type='button' value='预览'>";
			    		  var ztm = record.get('ztm');
			    		  if(ztm == '0'){
	 						 previewBtn = "<input class='preview' disabled='disabled' style='font-size:11px;height:21px' type='button' value='预览'>";
			    		 	 downloadBtn = "<input class='download'  disabled='disabled'  style='font-size:11px;height:21px' type='button' value='下载'>";
			    			 return "<div class='controlBtn' >" + previewBtn + downloadBtn + "</div>";
			    		  }else{
			    		  	 return "<div class='controlBtn' >" + previewBtn + downloadBtn + "</div>";
			    		  }
			    		 
			    	}
			     }
    		],

			dockedItems:[{
					              xtype: 'FileDownloader',
					              itemId: 'fileDownloader',
					              width: 0,
					              height: 0
					       },{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    }, '->', '-', {
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
		    })]
        });
          me.callParent(arguments);
    }
});
