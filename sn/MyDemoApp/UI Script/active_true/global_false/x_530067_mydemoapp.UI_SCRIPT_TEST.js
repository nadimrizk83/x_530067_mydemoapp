/* 
 * Application : MyDemoApp
 * ClassName   : sys_ui_script
 * Created On  : 2020-09-01 18:02:45
 * Created By  : admin
 * Updated On  : 2020-09-01 18:13:18
 * Updated By  : admin
 * URL         : /sys_ui_script.do?sys_id=3f7d37641b87d01061ef31d7dc4bcbc8
 */
var x_530067_mydemoapp = x_530067_mydemoapp || {};

x_530067_mydemoapp.UI_SCRIPT_TEST = (function() {
	"use strict";

/* set your private variables and functions here. For example: 
	var privateVar = 0; 
	function private_function() {
		return ++privateVar;
	}
*/

/* Share variables between multiple UI scripts by adding them to your scope object. For example: 
	x_530067_mydemoapp.sharedVar = 0; 

 Then access them in your scripts the same way. For example: 
	function get_shared() {
		return x_530067_mydemoapp.sharedVar;
	}
*/

	return {

/* set your public API here. For example:
		incrementAndReturnPrivateVar: function() {
			return private_function();
		},
*/
		type:  "UI_SCRIPT_TEST"
	};
})();

/**
 * Description
 * 
 * @param {any} control
 * @param {any} oldValue
 * @param {any} newValue
 * @param {any} isLoading
 * @author System Administrator [admin]
 * @memberof x_530067_mydemoapp.module:sys_ui_script
 * @returns {undefined}
 */
function onChange(control, oldValue, newValue, isLoading)  {
    
    // This is important to prevent loop-like behavior
    if (isLoading || newValue == '') {
        return;
    }
    
    var ga = new GlideAjax('QuickDateCheck');    
    ga.addParam('sysparm_name','isPastDateTime');    
    ga.addParam('sysparm_test_date', newValue);    
    ga.getXMLAnswer(checkAllowed);
    
  
};
