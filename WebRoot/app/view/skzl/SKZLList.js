Ext.define('App.view.skzl.SKZLList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.skzlList',
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
		             		case 'upload':{
			            		var ztm = rec.get('ztm')
			            		if(ztm == '2'){
									Ext.MessageBox.alert('提示', '该状态不能上传资料！');
								}else{
				            		Ext.create('Ext.window.Window',{
										alias: 'widget.skzlUploadWin',
										iconCls:'add_16',
										layout:'fit',
										width:380,
										closeAction:'destroy',
										height:180,
										resizable:false,
										shadow:true,
										autoShow:true,
										title:'教学资料上传',
										modal:true,
										closable:true,
										rec:rec,
										skzlList:me,
										bodyStyle:'padding:5 5 5 5',
										animCollapse:true,
										items: [
												Ext.create('App.view.skzl.SKZLUploadForm',{
													itemId: 'uploadForm'
												})
											]
									});
								}
		             			break;
		             		}
		             		case 'del':{
							    var ztm = rec.get('ztm');
							    if(ztm == '1'){
										Ext.MessageBox.confirm("确认","确定删除资料？",function(btn){
												if(btn == 'yes'){
													var zlJson = {};		
													var jsonObject = JSON.parse(Ext.encode(rec.data));
													for(var item in jsonObject){
														zlJson[item] = jsonObject[item];
													}
													zlJson['ztm'] = '0';
													zlJson['zt'] = '未上传';
													zlJson['zlwj'] = null;
													zlJson['zlscsj'] = null;
													zlJson['zlscr'] = null;
													zlJson['zlscip'] = null;
													zlJson['zlwj'] = null;
													
													Ext.Ajax.request({
															url:'skzlFileDeleteZl.action',
															method:'post',
															params:{datas:Ext.encode(zlJson)},
															success:function(response, opts){
																var result = Ext.decode(response.responseText);
																var success = result.success;
																if(success){
																	var msg = "删除资料成功！";
																	Ext.MessageBox.show({
															           title: '提示',
															           msg: msg,
															           buttons: Ext.MessageBox.OK,
															           icon: Ext.MessageBox.INFO,
															           fn: function(id, msg){
															          		me.getStore().load();
															        	}  
															        });	
																}
															}
														})
												}
										})
								}
		           				break;
		             		}
		             		case 'ok':{
			        			var ztm = rec.get('ztm');
			        			if(ztm == '1'){
									var win = new Ext.Window({
										layout:'fit',
										itemId:'skzlSubmitWin',
										autoShow:true,
										title:'资料详情',
										iconCls:'detail_16',
							            width: 755,
						           	    height: 320,
							            closeAction:'hide',
							    		resizable:false,
							    		shadow:true,
							    		modal:true,
							    		constrainHeader:true,
							    		closable:true,
							    		animCollapse:true,
							    		autoShow:true,
							    		rec:rec,
							    		skzlList:me,
					    				items: [Ext.create('App.view.skzl.SKZLSubmitForm')]
									});
									var skzlSubmit = win.down('#skzlSubmitForm');
									skzlSubmit.loadForm(rec);
									skzlSubmit.setView();
								}
		            			break;
		             		}
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
			    {text:'操作',width:270,sortable:false,
			    renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
			    		 var uploadBtn = "<input class='upload' style='font-size:11px;height:21px' type='button' value='上传'>";
			    		 var delBtn = "<input class='del' style='font-size:11px;height:21px' type='button' value='删除'>";
			    		 var okBtn = "<input class='ok' style='font-size:11px;height:21px' type='button' value='提交'>";
			    		 var downloadBtn = "<input class='download' style='font-size:11px;height:21px' type='button' value='下载'>";
			    		 var previewBtn = "<input class='preview' style='font-size:11px;height:21px' type='button' value='预览'>";
			    		 
			    		 var ztm = record.get('ztm');
			    		 if(ztm == '0'){
			    		 	 delBtn = "<input class='del' disabled='disabled' style='font-size:11px;height:21px' type='button' value='删除'>";
			    		 	 okBtn = "<input class='ok'  disabled='disabled'  style='font-size:11px;height:21px' type='button' value='提交'>";
	 						 previewBtn = "<input class='preview' disabled='disabled' style='font-size:11px;height:21px' type='button' value='预览'>";
			    		 	 downloadBtn = "<input class='download'  disabled='disabled'  style='font-size:11px;height:21px' type='button' value='下载'>";
			    			 return "<div class='controlBtn' >" + uploadBtn + delBtn + okBtn + previewBtn + downloadBtn + "</div>";
			    		 }else if(ztm == '2'){
			    		 	uploadBtn = "<input class='upload' disabled='disabled' style='font-size:11px;height:21px' type='button' value='上传'>";
			    		 	 var okBtn = "<input class='ok' disabled='disabled'  style='font-size:11px;height:21px' type='button' value='提交'>";
			    		 	delBtn = "<input class='del' disabled='disabled' style='font-size:11px;height:21px' type='button' value='删除'>";
			    		 	return "<div class='controlBtn' >" + uploadBtn + delBtn + okBtn +previewBtn + downloadBtn + "</div>";
			    		 }else{
			    		 		 return "<div class='controlBtn' >" + uploadBtn + delBtn + okBtn + previewBtn + downloadBtn + "</div>";
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
   							    },{
   							    	text:'资料上传',
   							    	itemId:'uploadBtn',
   							    	iconCls:'add_16',
   							    	hidden:true,
   							    	action:'upload'
   							    },{
   							    	text:'资料删除',
   							    	itemId:'deleteBtn',
   							    	iconCls:'delete_16',
   							    	hidden:true,
   							    	action:'delete'
   							    },{
   							    	text:'提交',
   							    	itemId:'okBtn',
   							    	iconCls:'ok_16',
   							    	hidden:true,
   							    	action:'ok'
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
