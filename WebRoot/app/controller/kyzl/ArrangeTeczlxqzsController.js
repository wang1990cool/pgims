Ext.define('App.controller.kyzl.ArrangeTeczlxqzsController',{
	extend:'Ext.app.Controller',
	
	models : [ 'xs.XsJcxxbModel',
			'kyzl.XwKyzlzlbModel','kyzl.XwKyzlbModel'],
	stores : ['kyzl.XwKyzlzlbStore','kyzl.XwKyzlbStore','zd.ZdShjgmStore'],
//	refs: [{  
//        selector: 'arrangeTecWindow',  
//        ref: 'arrangeTecWindow'  
//    }],
    
	init:function(){
		this.control({
				/*'#arrangeTecWindowjl button[action=searchZjjs]':{
					click:this.searchZjjs
				},*//*'#arrangeTecWindowjlb button[action=searchZjjsms]':{
					click:this.searchZjjsms
				},*//*,
				'arrangeTecWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'arrangeTecWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},*/
//				'#arrangeTecWindowjlb  button[action=save]':{
//					click:this.addJs
//				}
			});
		},
		
			
  		/*detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var xnjgbWins = Ext.ComponentQuery.query('#xnjgbWin1');
					if (xnjgbWins.length > 0) {
						var win = xnjgbWins[0];
						win.setTitle('教师详情');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'xnjgbWin1',
									title : '教师详情',
									iconCls : 'add_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.XnjgbForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'XnjgbgetImage.action',
												imgId : 'gh',
												postUrl : "xnjgb"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '取消',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					var xnjgbForm = win.down('form');
					xnjgbForm.edit(rec);
					xnjgbForm.loadForm(rec);
					xnjgbForm.down('#upImgBtn').hide();
					
					var textfields = xnjgbForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},*/
		
			onLaunch : function(o,skxxList,kyuuid) {
				var win;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				var win = Ext.create('App.view.kyzl.ArrangeTeczlxqzsWindow',{
						skxxList:skxxList,
						kyuuid:kyuuid,
						x : 300,
						y : 3,
						width : 900,
						height : 570
				});
//				win.down('#arrangeTecshForm').loadForm(recs[0])
				win.down('#arrangeTecshzlForm').loadForm(recs[0])
				win.down('#arrangeTecjbForm').loadForm(recs[0])
				win.down('#arrangeTecshzlForm').setViewdForm();
				win.down('#arrangeTecjbForm').setViewForm();
				win.down('#arrangeTecshxqzsForm').loadForm(recs[0]);
				win.down('#arrangeTecshxqzsForm').setViewForm();
				var xwKyzlzlbStore = win.down('#xwKyzlzlbList').getStore('XwKyzlzlbStore');
				var xwKyzlzlbProxy = xwKyzlzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['kyuuid'] = "#= '" + kyuuid + "'";
				xwKyzlzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//									    	   var store = win.xwKyzlzlbList.getStore();
			    	   xwKyzlzlbStore.load();
				win.show();
			}
	})
