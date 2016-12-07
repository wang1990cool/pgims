Ext.define('App.view.yx.XsbdCxList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.xsbdCxList',
	
	store: 'YxXsjbxxbStore',
	columnLines: true,
    title: '新生报到信息',
    
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    stripeRows: true, 
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent:function() {
		var me = this;
		
		var exportCols = {
//			id:'序号',zkzh:'准考证号',xm:'姓名',xh:'学号',xb:'性别',lqxy:'录取学院',lqzy:'录取专业',lqlb:'录取类别',nj:'年级'
			  id:'序号',nj:'年级',bmh:'报名号',zkzh:'准考证号',zsbh:'证书编号',
              xh:'学号',xm:'姓名',xmpy:'姓名拼音',xbm:'性别码',xb:'性别',csrq:'出生日期',zjlxm:'证件类型码',
              zjlx:'证件类型',sfzh:'身份证号',xslxm:'学生类型码',xz:'学制',lqxym:'录取学院码',lqxy:'录取学院',lqzym:'录取专业码',
              lqzy:'录取专业',lqlbm:'录取类别码',lqlb:'录取类别',rxfsm:'入学方式码',rxfs:'入学方式',yjfxm:'研究方向码',yjfx:'研究方向',
              dsgh:'导师工号',dsxm:'导师姓名',dszc:'导师职称',lpdwm:'联培单位码',lpdw:'联培单位',wddw:'委定单位',bddd:'报到地点',
              zzmmm:'政治面貌码',zzmm:'政治面貌',mzm:'民族码',mz:'民族',hfm:'婚否码',hf:'婚否',xyjrm:'现役军人码',
              xyjr:'现役军人',jgdm:'籍贯地码',jgd:'籍贯所在地',csdm:'出生地码',csd:'出生地',hkdm:'户口地码',hkd:'户口所在地',
              hkdz:'户口地址',dadm:'档案地码',dad:'档案地',dadw:'档案单位',dadz:'档案地址',dayb:'档案编码',gzdw:'工作单位',
              gzjl:'工作简历',jcqk:'奖惩情况',kyqk:'科研情况',jtcy:'家庭成员',txdz:'通讯地址',txyb:'通讯邮编',lxdh:'联系电话',
         	  yddh:'移动电话',dzxx:'电子邮箱',kslym:'考生来源码',ksly:'考生来源',bbydwm:'本毕业单位码',bbydw:'本毕业单位',bbyzym:'本毕业专业码',
         	  bbyzy:'本毕业专业',bkbyny:'本科毕业年月',bkbyzh:'本科毕业证号',xszsh:'学士证书号',xwm:'学位码',xw:'学位',sszym:'硕士专业码',
         	  sszy:'硕士专业',sszsh:'硕士证书号',zxsxh:'在校生学号',ksdd:'考试地点',wgym:'外国语码',wy:'外语',zzllm:'政治理论码',
         	  zzll:'政治理论',ywk1m:'业务课1码',ywk1:'业务课1',ywk2m:'业务课2码',ywk2:'业务课2',wycj:'外语成绩',zzcj:'政治成绩',
         	  ywk1cj:'业务课1成绩',ywk2cj:'业务课2成绩',zf:'总分',jskm1:'加试科目1',jskm1cj:'加试1成绩',jskm2:'加试科目2',jskm2cj:'加试2成绩',
         	  wyfs:'外语复试',tl:'听力',ks:'口试',zyfs:'专业复试',fsms:'复试面试',fsqz:'复试权重',fscj:'复试成绩',
         	  zcj:'总成绩',zxf:'总学费',dyxnxf:'第一学年学费',jcf:'教材费',zsf:'住宿费',tjf:'体检费',yktf:'一卡通费',
         	  ylbxf:'医疗保险费',hj:'合计',zp:'照片',bz:'备注',bdztm:'报到状态',ztsdm:'状态锁定码'
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
				{ text: exportCols['id'], width:80, dataIndex: 'id', sortable:true,hidden:true},
				{ text: exportCols['zkzh'], width:120, dataIndex: 'zkzh', sortable:true,hidden:true},
				{ text: exportCols['xh'], width:100, dataIndex: 'xh', sortable:true},
				{ text: exportCols['xm'], width:80, dataIndex: 'xm', sortable:true},
				{ text:	exportCols['xb'],width: 50,dataIndex : 'xb', sortable:true},
				{ text: exportCols['nj'],width:50, dataIndex: 'nj', sortable:true},
				{ text: exportCols['lqxy'],width:160, dataIndex: 'lqxy', sortable:true},
				{ text: exportCols['lqzy'],width:160, dataIndex: 'lqzy', sortable:true,hidden:true},
				{ text: exportCols['lqlb'],width:160, dataIndex: 'lqlb', sortable:true,hidden:true},
				{ text: exportCols['bmh'], width:80, dataIndex: 'bmh', sortable:true,hidden:true},
				{ text: exportCols['zsbh'], width:80, dataIndex: 'zsbh', sortable:true,hidden:true},
				{ text: exportCols['xmpy'], width:80, dataIndex: 'xmpy', sortable:true,hidden:true},
				{ text: exportCols['xbm'], width:80, dataIndex: 'xbm', sortable:true,hidden:true},
				{ text: exportCols['csrq'], width:80, dataIndex: 'csrq', sortable:true,hidden:true},
				{ text: exportCols['zjlxm'], width:80, dataIndex: 'zjlxm', sortable:true,hidden:true},
				{ text: exportCols['zjlx'], width:80, dataIndex: 'zjlx', sortable:true,hidden:true},
				{ text: exportCols['sfzh'], width:80, dataIndex: 'sfzh', sortable:true,hidden:true},
				{ text: exportCols['xslxm'], width:80, dataIndex: 'xslxm', sortable:true,hidden:true},
				{ text: exportCols['xz'], width:80, dataIndex: 'xz', sortable:true,hidden:true},
				{ text: exportCols['lqxym'], width:80, dataIndex: 'lqxym', sortable:true,hidden:true},
				{ text: exportCols['lqzym'], width:80, dataIndex: 'lqzym', sortable:true,hidden:true},
				{ text: exportCols['lqlbm'], width:80, dataIndex: 'lqlbm', sortable:true,hidden:true},
				{ text: exportCols['rxfsm'], width:80, dataIndex: 'rxfsm', sortable:true,hidden:true},
				{ text: exportCols['rxfs'], width:80, dataIndex: 'rxfs', sortable:true,hidden:true},
				{ text: exportCols['yjfxm'], width:80, dataIndex: 'yjfxm', sortable:true,hidden:true},
				{ text: exportCols['yjfx'], width:80, dataIndex: 'yjfx', sortable:true,hidden:true},
				{ text: exportCols['dsgh'], width:80, dataIndex: 'dsgh', sortable:true,hidden:true},
				{ text: exportCols['dsxm'], width:80, dataIndex: 'dsxm', sortable:true,hidden:true},
				{ text: exportCols['dszc'], width:80, dataIndex: 'dszc', sortable:true,hidden:true},
				{ text: exportCols['lpdwm'], width:80, dataIndex: 'lpdwm', sortable:true,hidden:true},
				{ text: exportCols['lpdw'], width:80, dataIndex: 'lpdw', sortable:true,hidden:true},
				{ text: exportCols['wddw'], width:80, dataIndex: 'wddw', sortable:true,hidden:true},
				{ text: exportCols['bddd'], width:80, dataIndex: 'bddd', sortable:true,hidden:true},
				{ text: exportCols['zzmmm'], width:80, dataIndex: 'zzmmm', sortable:true,hidden:true},
				{ text: exportCols['zzmm'], width:80, dataIndex: 'zzmm', sortable:true,hidden:true},
				{ text: exportCols['mzm'], width:80, dataIndex: 'mzm', sortable:true,hidden:true},
				{ text: exportCols['mz'], width:80, dataIndex: 'mz', sortable:true,hidden:true},
				{ text: exportCols['hfm'], width:80, dataIndex: 'hfm', sortable:true,hidden:true},
				{ text: exportCols['hf'], width:80, dataIndex: 'hf', sortable:true,hidden:true},
				{ text: exportCols['xyjrm'], width:80, dataIndex: 'xyjrm', sortable:true,hidden:true},
				{ text: exportCols['xyjr'], width:80, dataIndex: 'xyjr', sortable:true,hidden:true},
				{ text: exportCols['jgdm'], width:80, dataIndex: 'jgdm', sortable:true,hidden:true},
				{ text: exportCols['jgd'], width:80, dataIndex: 'jgd', sortable:true,hidden:true},
				{ text: exportCols['csdm'], width:80, dataIndex: 'csdm', sortable:true,hidden:true},
				{ text: exportCols['csd'], width:80, dataIndex: 'csd', sortable:true,hidden:true},
				{ text: exportCols['hkdm'], width:80, dataIndex: 'hkdm', sortable:true,hidden:true},
				{ text: exportCols['hkd'], width:80, dataIndex: 'hkd', sortable:true,hidden:true},
				{ text: exportCols['hkdz'], width:80, dataIndex: 'hkdz', sortable:true,hidden:true},
				{ text: exportCols['dadm'], width:80, dataIndex: 'dadm', sortable:true,hidden:true},
				{ text: exportCols['dad'], width:80, dataIndex: 'dad', sortable:true,hidden:true},
				{ text: exportCols['dadw'], width:80, dataIndex: 'dadw', sortable:true,hidden:true},
				{ text: exportCols['dadz'], width:80, dataIndex: 'dadz', sortable:true,hidden:true},
				{ text: exportCols['dayb'], width:80, dataIndex: 'dayb', sortable:true,hidden:true},
				{ text: exportCols['gzdw'], width:80, dataIndex: 'gzdw', sortable:true,hidden:true},
				{ text: exportCols['gzjl'], width:80, dataIndex: 'gzjl', sortable:true,hidden:true},
				{ text: exportCols['jcqk'], width:80, dataIndex: 'jcqk', sortable:true,hidden:true},
				{ text: exportCols['kyqk'], width:80, dataIndex: 'kyqk', sortable:true,hidden:true},
				{ text: exportCols['jtcy'], width:80, dataIndex: 'jtcy', sortable:true,hidden:true},
				{ text: exportCols['txdz'], width:80, dataIndex: 'txdz', sortable:true,hidden:true},
				{ text: exportCols['txyb'], width:80, dataIndex: 'txyb', sortable:true,hidden:true},
				{ text: exportCols['lxdh'], width:80, dataIndex: 'lxdh', sortable:true,hidden:true},
				{ text: exportCols['yddh'], width:80, dataIndex: 'yddh', sortable:true,hidden:true},
				{ text: exportCols['dzxx'], width:80, dataIndex: 'dzxx', sortable:true,hidden:true},
				{ text: exportCols['kslym'], width:80, dataIndex: 'kslym', sortable:true,hidden:true},
				{ text: exportCols['ksly'], width:80, dataIndex: 'ksly', sortable:true,hidden:true},
				{ text: exportCols['bbydwm'], width:80, dataIndex: 'bbydwm', sortable:true,hidden:true},
				{ text: exportCols['bbydw'], width:80, dataIndex: 'bbydw', sortable:true,hidden:true},
				{ text: exportCols['bbyzym'], width:80, dataIndex: 'bbyzym', sortable:true,hidden:true},
				{ text: exportCols['bbyzy'], width:80, dataIndex: 'bbyzy', sortable:true,hidden:true},
				{ text: exportCols['bkbyny'], width:80, dataIndex: 'bkbyny', sortable:true,hidden:true},
				{ text: exportCols['bkbyzh'], width:80, dataIndex: 'bkbyzh', sortable:true,hidden:true},
				{ text: exportCols['xszsh'], width:80, dataIndex: 'xszsh', sortable:true,hidden:true},
				{ text: exportCols['xwm'], width:80, dataIndex: 'xwm', sortable:true,hidden:true},
				{ text: exportCols['xw'], width:80, dataIndex: 'xw', sortable:true,hidden:true},
				{ text: exportCols['sszym'], width:80, dataIndex: 'sszym', sortable:true,hidden:true},
				{ text: exportCols['sszy'], width:80, dataIndex: 'sszy', sortable:true,hidden:true},
				{ text: exportCols['sszsh'], width:80, dataIndex: 'sszsh', sortable:true,hidden:true},
				{ text: exportCols['zxsxh'], width:80, dataIndex: 'zxsxh', sortable:true,hidden:true},
				{ text: exportCols['ksdd'], width:80, dataIndex: 'ksdd', sortable:true,hidden:true},
				{ text: exportCols['wgym'], width:80, dataIndex: 'wgym', sortable:true,hidden:true},
				{ text: exportCols['wy'], width:80, dataIndex: 'wy', sortable:true,hidden:true},
				{ text: exportCols['zzllm'], width:80, dataIndex: 'zzllm', sortable:true,hidden:true},
				{ text: exportCols['zzll'], width:80, dataIndex: 'zzll', sortable:true,hidden:true},
				{ text: exportCols['ywk1m'], width:80, dataIndex: 'ywk1m', sortable:true,hidden:true},
				{ text: exportCols['ywk1'], width:80, dataIndex: 'ywk1', sortable:true,hidden:true},
				{ text: exportCols['ywk2m'], width:80, dataIndex: 'ywk2m', sortable:true,hidden:true},
				{ text: exportCols['ywk2'], width:80, dataIndex: 'ywk2', sortable:true,hidden:true},
				{ text: exportCols['wycj'], width:80, dataIndex: 'wycj', sortable:true,hidden:true},
				{ text: exportCols['zzcj'], width:80, dataIndex: 'zzcj', sortable:true,hidden:true},
				{ text: exportCols['ywk1cj'], width:80, dataIndex: 'ywk1cj', sortable:true,hidden:true},
				{ text: exportCols['ywk2cj'], width:80, dataIndex: 'ywk2cj', sortable:true,hidden:true},
				{ text: exportCols['zf'], width:80, dataIndex: 'zf', sortable:true,hidden:true},
				{ text: exportCols['jskm1'], width:80, dataIndex: 'jskm1', sortable:true,hidden:true},
				{ text: exportCols['jskm1cj'], width:80, dataIndex: 'jskm1cj', sortable:true,hidden:true},
				{ text: exportCols['jskm2'], width:80, dataIndex: 'jskm2', sortable:true,hidden:true},
				{ text: exportCols['jskm2cj'], width:80, dataIndex: 'jskm2cj', sortable:true,hidden:true},
				{ text: exportCols['wyfs'], width:80, dataIndex: 'wyfs', sortable:true,hidden:true},
				{ text: exportCols['tl'], width:80, dataIndex: 'tl', sortable:true,hidden:true},
				{ text: exportCols['ks'], width:80, dataIndex: 'ks', sortable:true,hidden:true},
				{ text: exportCols['zyfs'], width:80, dataIndex: 'zyfs', sortable:true,hidden:true},
				{ text: exportCols['fsms'], width:80, dataIndex: 'fsms', sortable:true,hidden:true},
				{ text: exportCols['fsqz'], width:80, dataIndex: 'fsqz', sortable:true,hidden:true},
				{ text: exportCols['fscj'], width:80, dataIndex: 'fscj', sortable:true,hidden:true},
				{ text: exportCols['zcj'], width:80, dataIndex: 'zcj', sortable:true,hidden:true},
				{ text: exportCols['zxf'], width:80, dataIndex: 'zxf', sortable:true},
				{ text: exportCols['dyxnxf'], width:80, dataIndex: 'dyxnxf', sortable:true},
				{ text: exportCols['jcf'], width:60, dataIndex: 'jcf', sortable:true},
				{ text: exportCols['zsf'], width:60, dataIndex: 'zsf', sortable:true},
				{ text: exportCols['tjf'], width:60, dataIndex: 'tjf', sortable:true},
				{ text: exportCols['yktf'], width:80, dataIndex: 'yktf', sortable:true},
				{ text: exportCols['ylbxf'], width:80, dataIndex: 'ylbxf', sortable:true},
				{ text: exportCols['hj'], width:60, dataIndex: 'hj', sortable:true},
				{ text: exportCols['zp'], width:80, dataIndex: 'zp', sortable:true,hidden:true},
				{ text: exportCols['bz'], width:80, dataIndex: 'bz', sortable:true,hidden:true},
				{ text: exportCols['bdztm'], width:80, dataIndex: 'bdztm', sortable:true,renderer: function(value){
		          	if(value == "1"){
		          		return "<span style='color:red'>已报到</span>";
		          	}else if(value == "0" || value == null){
		          		return "<span style='color:blue'>未报到</span>";
		          	}
	          }},
				{ text: exportCols['ztsdm'], width:80, dataIndex: 'ztsdm', sortable:true,hidden:true}
				
			],
			dockedItems: [
				Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   items: [{
					    	text:'详情',
					    	itemId:'detail',
					    	iconCls:'detail_16',
					    	action:'detail'
					    }, '-', {
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







