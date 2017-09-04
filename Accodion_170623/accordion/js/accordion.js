(function ($) {
    'use strict';

    /*
    ** Accordion - アコーディオン
    */

    var Cls = function (data) { //コンストラクタ
        // オプションのデフォルト値
        var defaultOptions = {};

        // インスタンスオプションを設定
        this.CONST = $.extend(defaultOptions, data);　//this → app

        // 初期化メソッドを実行
        this.init();
    };

    // prototypeのショートカットを作成
    Cls.fn = Cls.prototype;　//関数のプロパティ

    // 初期化
    Cls.fn.init = $.noop; // 今回は何もしない 何かしたい時はfunctionを書く

    // 開閉
    Cls.fn.toggleAccordion = function($btn) {
		var $contents = $btn.closest(this.CONST.accordion).find(this.CONST.inner);
		//開閉
		$contents.slideToggle(this.CONST.speed); // 'fast'=200,'slow'=600
		//文字の切り替え
		$btn.toggleClass(this.CONST.active);
		$btn.text($btn.hasClass(this.CONST.active) ? this.CONST.close : this.CONST.open);
    };
    // windowオブジェクトに登録
    window.Accordion = Cls;
}(jQuery));
