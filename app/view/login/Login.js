Ext.define('LoginApp.view.login.Login',{
	extend : 'Ext.form.Panel',
	alias : 'widget.loginform',
	title : 'Please enter your credentials',
	initComponent : function() {
		//console.log('Login form init function');
		this.defaults = {
			anchor : '100%'
		};
		this.bodyPadding = 5;
		this.url = 'http://localhost:8080/ExtJSLogin/login';
		this.width = 300;
		this.height = 120;
		this.layout = 'anchor';
		this.defaultType = 'textfield';
		this.items = [
			{
				name : 'username',
				fieldLabel : 'User Name',
				allowBlank : false
			},
			{
				name : 'password',
				fieldLabel : 'Password',
				allowBlank : false,
				inputType : 'password'
			}
		];
		this.buttons = [
			{
				text : 'Reset',
				id : 'loginReset'
			},
			{
				text : 'Submit',
				id : 'loginSubmit',
				formBind : true,
				disabled : true,
				action : 'login'
			}
		]
		this.callParent(arguments);
	}
});
