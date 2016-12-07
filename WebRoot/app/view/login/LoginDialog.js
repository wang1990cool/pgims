Ext.define('App.view.login.LoginDialog', {
    extend: 'Ext.window.Window',
    alias : 'widget.loginDialog',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [Ext.create('Ext.toolbar.TextItem', { text: '最佳浏览器：Chrome,Firefox'}), '-', getBrowserName(), '-', {
            itemId: 'chbox_rememberme',
            xtype: 'checkboxfield',
            fieldLabel: '',
            boxLabel: '记住我',
            checked: true,
            anchor: '30%'
        },{
        	itemId:'loginBtn',
			text : '登录',
			width:70,
			handler : function(){
				this.up('window').down('form').submitForm();
			}
		}, {
			itemId:'cancelBtn',
			text : '取消',
			width:70,
			handler : function() {
				this.up('window').hide();
		}}]
    }],
    
    initComponent: function() {
        var me = this;
        
    	var loginForm = new Ext.FormPanel({
    		itemId : 'loginForm',
    		border : false,
    		bodyStyle:'background-image:url(styles/images/system/login.png)',
    		deferredRender : false,
    		items :[{
    			xtype:'textfield',
    			name:'userName',
    			labelWidth:50,
    			labelStyle:'font-size: 12px',
    			fieldLabel : '用户名',
    			value: getCookie('userName'),
    			margin :'70 0 0 110',
    			style : 'font-size: 15px',
    			width:220,
    			height:24,
    			tabIndex : 1,
    			allowBlank : false,
    			blankText : '用户名不能为空！',
    			enableKeyEvents: true,  
    			listeners:{
    				'keypress':function(form, e) {
               			if (e.getKey() == e.ENTER) {  
    		                this.nextSibling().focus(); 
    		            } 
            		}
    			}
    		},{
    			xtype:'textfield',
    			fieldLabel : '密&nbsp;&nbsp;&nbsp;码',
    			name:'userPwd',
    			value: getCookie('userPwd'),
    			tabIndex : 2,
    			margin :'5 0 0 110',
    			labelWidth:50,
    			labelStyle:'font-size: 12px',
    			style : 'font-size: 15px',
    			inputType : 'password',
    			height:24,
    			width : 220,
    			allowBlank : false,
    			blankText : '密码不能为空！',
    			enableKeyEvents: true,  
    			listeners:{
    				'keypress':function(form, e) {
               			if (e.getKey() == e.ENTER) {  
               				this.up('form').down('#validateCode').focus();
    		            } 
            		}
    			}
    		},{
			    xtype: 'container',
			    layout: {type: 'column'},
			    width : 350,
			    items: [Ext.create('App.view.login.VerifyCode',{
					fieldLabel : '验证码',
					labelWidth:50,
			    	itemId : 'validateCode',
					labelStyle:'font-size: 12px',
					name : 'validateCode',
					blankText : '验证码不能为空！',
					codeImgUrl : 'servlet/imgVerifyCode',
					enforceMaxLength : true,
					maxLength : 4,
					columnWidth: 0.94,
					height:24,
					tabIndex : 3,
					margin :'5 0 0 110',
					width : 300,
					enableKeyEvents: true,  
					listeners:{
						'keypress':function(o, e, eOpts) {
		           			if (e.getKey() == e.ENTER) {  
		           				o.up('form').submitForm();
				            } 
		        		}
					}
		    	})]
			}],
			
			submitForm: function(){
				var me = this;
				if (me.form.isValid()) {
					values = me.form.getValues();
					var JSONobj = [];
				    JSONobj.push(JSON.stringify(values));
				    Ext.Ajax.request({
						url : 'login.action',
						waitTitle : '提示',
						actionMethods : 'post',
						params:{datas:JSONobj},
						waitMsg : '正在验证您的身份,请稍候...',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							var msg = result.result.msg;
							if(success){
								if (me.up('window').down('#chbox_rememberme').checked) {
			                        SetCookie('userName', me.form.findField('userName').getValue());
			                        SetCookie('userPwd', me.form.findField('userPwd').getValue());
			                    } else {
			                        delCookie('userName');
			                        delCookie('userpwd');
			                    }
						        
								var theme = getTheme();
								window.location.href = me.up('window').url + (theme === 'classic'?'':'?theme='+ theme);
							}else{
								Ext.MessageBox.show({
							           title: '错误',
							           msg: msg,
							           buttons: Ext.MessageBox.OK,
							           icon: Ext.MessageBox.ERROR,
							           fn: function(id, msg){  
									      me.form.reset();
									    }  
								});
							}
						},
						failure : function(form, action) {
							var errmsg = "登录失败！";
							Ext.MessageBox.show({
					           title: '错误',
					           msg: errmsg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.ERROR,
					           fn: function(id, msg){  
							      me.form.reset();
							    }  
					       });
						}
					});
				}
			}
    	});
        
        Ext.applyIf(me, {
        	items:[loginForm]
        });
        
        me.callParent(arguments);
    }
});