Ext.define('App.view.jxpk.WeeksCheck', {
	extend: 'Ext.form.Panel',
	alias: 'widget.weeksCheck',
	
    callback : Ext.emptyFn, 
    config: {
        /**
         * 开始周
         */
    	ksz: null,
        /**
         * 结束周
         */
    	jsz: null,
        /**
         * 起止周
         */
    	qzz: null,
        /**
         * 单双周标记码
         */
    	dszbjm: null,
        /**
         * 单双周标记
         */
    	dszbj: null,
        /**
         * 课程周次
         */
        kczs: null,

        kcsjm:null,
        /**
         * 课程时间
         */
        kcsj: null,
        /**
         * 课程节次
         */
        kcjc: null
    },
    
    required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
    
	initComponent: function() {
        var me = this;
        
        var KCSJStore = Ext.create('Ext.data.Store', {
        	storeId:'KCSJStore',
		    fields: ['abbr', 'value'],
		    data : [{'abbr':'周一', 'value':1},{'abbr':'周二', 'value':2},{'abbr':'周三', 'value':3},{'abbr':'周四','value':4},{'abbr':'周五','value':5},
		            {'abbr':'周六', 'value':6},{'abbr':'周日', 'value':7}]
        });
        
        var KCZSStore = Ext.create('Ext.data.TreeStore', {
            root: {
         	   id:'0',
                expanded: true,
                children: [{ id:'1', text: '第1周', checked: false, leaf: true },{ id:'2', text: '第2周', checked: false, leaf: true },{ id:'3', text: '第3周', checked: false, leaf: true },
                           { id:'4', text: '第4周', checked: false, leaf: true },{ id:'5', text: '第5周', checked: false, leaf: true },{ id:'6', text: '第6周', checked: false, leaf: true },
                           { id:'7', text: '第7周', checked: false, leaf: true },{ id:'8', text: '第8周', checked: false, leaf: true },{ id:'9', text: '第9周', checked: false, leaf: true },
                           { id:'10', text: '第10周', checked: false, leaf: true },{ id:'11', text: '第11周', checked: false, leaf: true },{ id:'12', text: '第12周', checked: false, leaf: true },
                           { id:'13', text: '第13周', checked: false, leaf: true },{ id:'14', text: '第14周', checked: false, leaf: true },{ id:'15', text: '第15周', checked: false, leaf: true },
                           { id:'16', text: '第16周', checked: false, leaf: true },{ id:'17', text: '第17周', checked: false, leaf: true },{ id:'18', text: '第18周', checked: false, leaf: true },
                           { id:'19', text: '第19周', checked: false, leaf: true },{ id:'20', text: '第20周', checked: false, leaf: true },{ id:'21', text: '第21周', checked: false, leaf: true },
                           { id:'22', text: '第22周', checked: false, leaf: true },{ id:'23', text: '第23周', checked: false, leaf: true },{ id:'24', text: '第24周', checked: false, leaf: true },
                           { id:'25', text: '第25周', checked: false, leaf: true },{ id:'26', text: '第26周', checked: false, leaf: true },{ id:'27', text: '第27周', checked: false, leaf: true },
                           { text: "homework",id:'28' ,checked: false,expanded: true, children: [
                                                                          { text: "book report", id:'29',checked: false,leaf: true },
                                                                          { text: "algebra", id:'30',checked: false,leaf: true}
                                                                      ]}
                           ]
            }
        });
        
       var KCJCStore = Ext.create('Ext.data.TreeStore', {
           root: {
        	   id:'0',
               expanded: true,
               children: [{ id:'1', text: '第1节', checked: false, leaf: true },{ id:'2', text: '第2节', checked: false, leaf: true },{ id:'3', text: '第3节', checked: false, leaf: true },
                          { id:'4', text: '第4节', checked: false, leaf: true },{ id:'5', text: '第5节', checked: false, leaf: true },{ id:'6', text: '第6节', checked: false, leaf: true },
                          { id:'7', text: '第7节', checked: false, leaf: true },{ id:'8', text: '第8节', checked: false, leaf: true },{ id:'9', text: '第9节', checked: false, leaf: true },
                          { id:'10', text: '第10节', checked: false, leaf: true },{ id:'11', text: '第11节', checked: false, leaf: true }]
           }
       });
    	   
        Ext.applyIf(me, {
            items: [Ext.create('App.view.main.TableFieldSet',{
            	title: '时间安排',
            	columns:1,
                defaults: {
            		autoHeight : true,
            		labelAlign : 'right',
            		width:250,
            		labelWidth:60,
            		padding:'5 0 0 0'
            	},
	            items: [{
	                    xtype: 'treeCombo',
	                    itemId:'kczs',
	                    fieldLabel: '周次',
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
	                    rootVisible: false,
					    store:KCZSStore
	                },{
	                    xtype: 'combobox',
	                    itemId:'kcsj',
	                    fieldLabel: '时间',
	                    editable: false,
					    displayField: 'abbr',
					    valueField: 'value',
					    queryMode: 'local',
					    store:'KCSJStore'
	                },{
	                    xtype: 'treeCombo',
	                    itemId:'kcjc',
	                    fieldLabel: '节次',
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
	                    rootVisible: false,
					    store:KCJCStore
	            }]
            })],
			dockedItems: [
				Ext.create('Ext.toolbar.Toolbar',{
					itemId:'auditToolbar',
					dock: 'top',
					items:[{
			            itemId: 'okBtn',
			            text:'确定',
			            tooltip:'确定',
			            iconCls:'ok_16',
                        listeners: {
                            scope: me,
                            click: me.setPksj
            			}
					},'-',{
			            itemId: 'cancelBtn',
			            text:'返回',
			            tooltip:'返回',
			            iconCls:'return_16',
			            handler: function () {
//			            	me.up('window').close();
			            	var win = me.up('window');
	                        var weekCheck = win.down('#weekCheck');
	                        var kczs = weekCheck.down('#kczs');
	                        kczs.loadValue('1/2/3/4/14');
	                        alert(kczs.getValue());
	                        alert(kczs.getRawValue());
			            }
					}]
			})]
        });

        me.callParent(arguments);
    },
    
    setPksj: function(){
    	var me = this;
    	
//    	me.setKsz();
//    	me.setJsz();
//    	me.setQzz();
//    	me.setDszbjm();
//    	me.setDszbj();
    	me.setKczs(me.down('#kczs').getValue());
    	me.setKcsj(me.down('#kcsj').getValue());
    	me.setKcjc(me.down('#kcjc').getValue());
    	
    	me.setPkxx();
    	me.callback();
    	
    	alert(me.getKczs());
//    	alert(me.getKcsj());
//    	alert(me.getKcjc());
    	alert(me.getKsz() + "|" + me.getJsz() + "|" + me.getQzz());
    	alert(me.getDszbjm());
    	alert(me.getDszbj());
    	
    },
    
    setPkxx: function(){
    	var me = this;
    	
    	var kczs = me.down('#kczs').getValue();
    	if(kczs){
    		var kczsArr = kczs.split('/');
    		var fs = kczsArr[0], ls = kczsArr[kczsArr.length - 1], f = parseInt(fs), l = parseInt(ls);
    		me.setKsz(fs), me.setJsz(ls), me.setQzz(fs + '-' + ls);
    		
    		if(l-f == kczsArr.length -1){
    			me.setDszbjm('0'),me.setDszbj('全周');
    		}else{
    	    	if(f%2==1){
	    			me.setDszbjm('1'),me.setDszbj('单周');
	    		}else{
	    			me.setDszbjm('2'),me.setDszbj('双周');
	    		}
    	    	
    	    	for(var i = f, j = 0; j < kczsArr.length; i+=2,j++) 
    	    		if(kczsArr[j]!=i.toString()){
    	    			me.setDszbjm('3'),me.setDszbj('跳周');
    	    		}
    		}
    	}
    	
    	me.setKczs(me.down('#kczs').getValue());
    	me.setKcsj(me.down('#kcsj').getValue());
    	me.setKcjc(me.down('#kcjc').getValue());
    	
   
    }
})
