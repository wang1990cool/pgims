	Ext.define('App.view.yx.YxXsjbxxDetailForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'yxXsjbxxDetailForm',
		layout:'fit',
		items:[{
			title:'基本信息',
			itemId:'jbxxDetailTab',
			border:'0 0 0 0'
		},{
			title:'报考信息',
			itemId:'bkxxDetailTab'
		}/*,{
			title:'入学成绩',
			itemId:'rxcjDetailTab'
		}*/,{
			title:'录取信息',
			itemId:'lqxxDetailTab'
		}/*,{
			title: '报考信息',
			itemId:'bkxxDetailTab',
			listeners:{
				beforeshow:function(obj){
				 var me = this;
				 var bkxxDetail = me.down('form');
				     bkxxDetail.loadForm(rec);
				     alert(bkxxDetail.down('#bmh'))
				 var textfields =  bkxxDetail.query('textfield');
		    		for(var i in textfields){
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
				    textfields[i].setFieldStyle(style);
					}}
			}
	 	}*/]
})