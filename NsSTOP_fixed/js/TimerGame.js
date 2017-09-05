(function($){
	'use strict';
	/*
    ** TimerGame - タイマーゲーム
    */

	var Cls = function (data) {
		var defaultOptions = {};
		this.CONST = $.extend(defaultOptions,data);
		this.init();
		this.time;
		this.$module = $(this.CONST.module);
	};

	Cls.fn = Cls.prototype;

	//初期化
	Cls.fn.init = $.noop;

	//TimerStart
	Cls.fn.timerStart = function(){
		//現在時刻の取得
		this.time = Date.now();
		console.log(this.time);
		//resultのテキストを書き換える、resultのclassにstandbyを与える
		this.$module.find(this.CONST.result).text('0.000').removeClass('perfect regrettable').addClass('standby');
		//startBtnのclassにpushedを与える
		this.$module.find(this.CONST.startBtn).addClass('pushed');
		//stopBtnのclassからpushedを取る
		this.$module.find(this.CONST.stopBtn).removeClass('pushed');
	};

	//TimerStop
	Cls.fn.timerStop = function(){
		var time,
			diff;
		//現在時刻を取得してstartからの差分を取る
		time = (Date.now() - this.time) / 1000;
		console.log(time);
		//前で取得した差分をresultのテキストへ書き換える
		this.$module.find(this.CONST.result).text(time.toFixed(3)).removeClass('standby');
		//startBtnのclassにpushedを与える
		this.$module.find(this.CONST.stopBtn).addClass('pushed');
		//stopBtnのclassからpushedを取る
		this.$module.find(this.CONST.startBtn).removeClass('pushed');
		//差分の結果でresultのstyleを変える
		diff = time - this.CONST.eachTime;
		console.log(this.CONST.eachTime);
		// if (diff > -1.0 && diff < 1.0) {
		if (Math.abs(diff) < 0.1) { //絶対値
			this.$module.find(this.CONST.result).addClass('perfect');
		} else if (Math.abs(diff)< 0.5) {
			this.$module.find(this.CONST.result).addClass('regrettable');
		}
	};
	window.TimerGame = Cls;
}(jQuery));