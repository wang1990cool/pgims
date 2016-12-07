Ext.define('App.view.cjlr.KcztList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.kcztList',
	
//	frame: true,
	title: '课程列表',
    layout: 'fit',
    anchor: '100%',
//    minHeight:150,
//    maxHeight:180,
//    autoScroll: true,
    viewConfig: { stripeRows: true},
    columnLines: true,
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function(){
		var me = this;
//		var startNum = 0;
		
		me.store = Ext.create('App.store.cjlr.JxKcztStore');
		
		Ext.applyIf(me,{
			columns: [
		      { text: '课程号', width: 100, sortable: false, dataIndex: 'kch'},
		      { text: '课程名称', width: 200, sortable: false, dataIndex: 'kcmc'},
		      { text: '主讲教师', width: 100, sortable: false, dataIndex: 'zjjs'},
		      { text: '数据状态', width: 100, sortable: false, dataIndex: 'sjzt',renderer: function(value){
          	if(value == "" || value == null || value == "3"){
          		return "<span style='color:red'>未录入</span>";
          	}else if(value == "1"){
          		return "<span style='color:green'>已提交</span>";
          	}else if(value == "0"){
          		return "<span style='color:blue'>草稿状态</span>";
          	}else if(value == "2"){
          		return "<span style='color:purple'>已确认</span>";
          	}
          }},{ text: '开课课号', width: 250, sortable: false, dataIndex: 'kkkh'},
          	 { text: '学年', width: 100, sortable: false, dataIndex: 'xn'},
          	 { text: '学期', width: 80, sortable: false, dataIndex: 'xq'}
			],
			dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   items: [{
				            itemId: 'displayBtn',
				            text:'详情',
				            tooltip:'详情',
				            iconCls:'detail_16',
				            action:'display'
				        },'-',{
				            itemId: 'importBtn',
				            text:'录入',
				            tooltip:'录入',
				            iconCls:'add_16',
				            action:'import'
//				            hidden: true
				        }
//				        ,'-',{
//				            itemId: 'rebackBtn',
//				            text:'撤回',
//				            tooltip:'撤回',
//				            iconCls:'leftArrow',
//				            action:'reback'
//				        }
				        ,'-','->','-','每页',{
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
		
//		Ext.Ajax.request({
//			    		url:'jxCjtjsjgetSj.action',
//			    		method: 'get',
//			    		success: function (response) {
//			    			var result = Ext.decode(response.responseText);
////			    			var cjxxData = result.result.list[0];
//			    			if(result.result.success){
//			    				me.down('#importBtn').show();
//			    			}else{
//			    				me.down('#importBtn').hide();
//			    			}
			    			
//						},
//			            failure: function (response) {          	
//			    		}});
		me.callParent(arguments);
	}
});