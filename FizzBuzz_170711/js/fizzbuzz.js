(function ($) {
    'use strict';

    /*
    ** FizzBuzz
    */

    var i = 0,
		Cls = function (data) {
        var defaultOptions = {};
        this.CONST = $.extend(defaultOptions, data);
        this.init();
    };

    Cls.fn = Cls.prototype;

    // 初期化
    Cls.fn.init = $.noop;
    // カウント
    Cls.fn.countup = function () {
		i++;
		if (i % 3 == 0 && i % 5 == 0){
			$(this.CONST.output).append(' dip');
		}else if (i % 5 == 0) {
			$(this.CONST.output).append(' buzz');
		} else if (i % 3 == 0){
			$(this.CONST.output).append(' fizz');
		} else {
			$(this.CONST.output).append(' '+i);
		}
    };
    // windowオブジェクトに登録
    window.FizzBuzz = Cls;
}(jQuery));

$(function () {
	var data = {
		btn : '#run',
		output : '#fizzbuzz'
		},
		app = new window.FizzBuzz(data);

	$(data.btn).on('click',function(){
		app.countup($(this));
	});
});
