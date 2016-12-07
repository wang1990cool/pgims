Ext.define('App.view.cjcx.CjcxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.cjcxList',
	
//	frame: true,
	title: '成绩列表',
    layout: 'fit',
    anchor: '100%',
    store: 'cjcxStore',
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
		
		var exportCols = {
			    kkkh :'开课课号', xh :'学号', xm :'姓名', ksxz :'考试性质', pscj :'平时成绩', fslkscj :'分数类考试成绩', djlkscj:'等级类考试成绩', 
			    kccj :'课程成绩', bz :'备注', xn :'学年', xq :'学期', kch:'课程号', kcmc :'课程名称', zjjsh :'主讲教师号',
			    zjjs :'主讲教师',ksxs:'考试形式', ksfs :'考试方式', kcxf :'课程学分',
			    cjlx:'成绩类型', pscjbl :'平时成绩比例', xslxm :'学生类型码', xslx:'学生类型',
			    sznj :'所在年级', fymc :'分院名称',  zymc:'专业名称'
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
			  { text: '学号', width: 100, sortable: false, dataIndex: 'xh'},
			  {	text: '姓名', width: 100, sortabel: false, dataIndex: 'xm'},
			  { text: '开课课号', width: 200,dataIndex: 'kkkh'},
			  { text: '课程号', width: 120, dataIndex: 'kch'},
		      { text: '课程名称', width: 200, dataIndex: 'kcmc'},
		      { text: '主讲教师', width: 100, sortable: false, dataIndex: 'zjjs'},
          	  { text: '学年', width: 100, sortable: false, dataIndex: 'xn'},
          	  { text: '学期', width: 50, sortable: false, dataIndex: 'xq'},
          	  { text: '课程成绩', width: 100,dataIndex: 'kccj'}
//          	  { text: '数据状态', width: 100, sortable: false, dataIndex: 'sjzt'}
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
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						},'-','->','-',{
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action : 'showSearch'
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
		    })]
	     
		});
		
		me.callParent(arguments);
	}
});