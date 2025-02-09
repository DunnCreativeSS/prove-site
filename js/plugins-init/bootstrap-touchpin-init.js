/**
 * **************************************************
 * ******* Name: arvid
 * ******* Description: Bootstrap 4 Admin Dashboard
 * ******* Version: 1.0.0
 * ******* Released on 2019-02-13 00:31:49
 * ******* Support Email : quixlab.com@gmail.com
 * ******* Support Skype : sporsho9
 * ******* Author: Quixlab
 * ******* URL: https://quixlab.com
 * ******* Themeforest Profile : https://themeforest.net/user/quixlab
 * ******* License: ISC
 * ***************************************************
 */

(function ($) {
    "use strict";

    $("input[name='demo0']").TouchSpin()
    
    $("input[name='demo1']").TouchSpin({
        min: 0,
        max: 100,
        step: .1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: "%"
    })
    
    $("input[name='demo2']").TouchSpin({
        min: -1e9,
        max: 1e9,
        stepinterval: 50,
        maxboostedstep: 1e7,
        prefix: "$"
    })

    $("input[name='demo_vertical']").TouchSpin({
        verticalbuttons: !0
    })

    $("input[name='demo_vertical2']").TouchSpin({
        verticalbuttons: !0,
        verticalupclass: "fa fa-plus",
        verticaldownclass: "fa fa-minus"
    })

    $("input[name='demo4']").TouchSpin({
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    })

    $("input[name='demo4_2']").TouchSpin({
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    })
    
    $("input[name='demo5']").TouchSpin({
        prefix: "pre",
        postfix: "post"
    })

})(jQuery);