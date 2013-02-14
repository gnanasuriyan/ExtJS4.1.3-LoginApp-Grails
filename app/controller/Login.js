Ext.define('LoginApp.controller.Login',{
	extend : 'Ext.app.Controller',
	views : ['login.Login'],
	refs : [{
		ref : 'loginForm',
		selector : '#loginform'
	}],
	init : function() {
		console.log('Controller init function');
		this.control({
			'loginform button[action=login]' : {
				click : this.doLogin
			},
			'loginform #loginReset' : {
				click : this.resetLoginForm
			}
		});
	},
	doLogin : function(button) {
		//console.log('Submit button has clicked');
		var form = button.up('form').getForm();
		if(form.isValid()) {
			form.submit({
				success : function(form,action) {
					Ext.Msg.alert('Success','Form submited successfuly !!!');
				},
				failure : function(form,action) {
					Ext.Msg.alert('Failure','Unable to submit the form !!!');
				}
			}); 
		}
	},
	resetLoginForm : function(button) {
		//console.log('Reset button has clicked');
		button.up('form').getForm().reset();
	}
});
