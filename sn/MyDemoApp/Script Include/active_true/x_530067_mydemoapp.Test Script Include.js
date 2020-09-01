/* 
 * Application : MyDemoApp
 * ClassName   : sys_script_include
 * Created On  : 2020-09-01 17:50:54
 * Created By  : admin
 * Updated On  : 2020-09-01 18:01:35
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=e86affa01b87d01061ef31d7dc4bcbbb
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_530067_mydemoapp.module:sys_script_include
 */
var TestScriptInclude = Class.create();
TestScriptInclude.prototype = /** @lends x_530067_mydemoapp.module:sys_script_include.TestScriptInclude.prototype */ {
    /**
     * Description
     * 
     * @returns {undefined}
     */
    initialize: function() {
    },

    type: 'Test Script Include'
};

/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @extends global.module:sys_script_include.AbstractAjaxProcessor
 * @memberof x_530067_mydemoapp.module:sys_script_include
 */
var QuickDateCheck = Class.create();
QuickDateCheck.prototype = Object.extendsObject(global.AbstractAjaxProcessor, /** @lends x_530067_mydemoapp.module:sys_script_include.QuickDateCheck.prototype */ {
    
    /**
     * Description
     * 
     * @param {any} date_string
     * @returns {any} 
     */
    isFutureDate: function (date_string) {
        // Check for server side parameter, then for a AJAX one
        if (!date_string){
            date_string = this.getParameter('sysparm_test_date');
            if(!date_string){
                return false;
            }
        }        
        var testDate = new GlideDate();
        testDate.setDisplayValue(date_string);
        return testDate.after(new GlideDate());
    },
    
    /**
     * Description
     * 
     * @param {any} date_string
     * @returns {any} 
     */
    isPastDate: function (date_string) {
        // Check for server side parameter, then for a AJAX one
        if (!date_string){
            date_string = this.getParameter('sysparm_test_date');
            if(!date_string){
                return false;
            }
        }
        
        var testDate = new GlideDate();
        testDate.setDisplayValue(date_string);
        return testDate.before(new GlideDate());
    },
    
    /**
     * Description
     * 
     * @param {any} date_string
     * @returns {any} 
     */
    isFutureDateTime: function (date_string) {
        // Check for server side parameter, then for a AJAX one
        if (!date_string){
            date_string = this.getParameter('sysparm_test_date');
            if(!date_string){
                return false;
            }
        }
        
        var testDate = new GlideDateTime();
        testDate.setDisplayValue(date_string);
        return testDate.after(new GlideDateTime());
    },
    
    /**
     * Description
     * 
     * @param {any} date_string
     * @returns {any} 
     */
    isPastDateTime: function (date_string) {
        // Check for server side parameter, then for a AJAX one
        if (!date_string){
            date_string = this.getParameter('sysparm_test_date');
            if(!date_string){
                return false;
            }
        }
        
        var testDate = new GlideDateTime();
        testDate.setDisplayValue(date_string);
        return testDate.before(new GlideDateTime());
    },
    
    type: 'QuickDateCheck'
});
