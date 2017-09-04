(function(){
	'use strict';

	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var result = document.getElementById('result');
	var startTime;
	var isStarted = false;	//ゲームが始まっているかの取得

	start.addEventListener('click',function(){
		if (isStarted === true) {　//既に始まってたら以下の処理はしない
			return;
		}
		isStarted = true;
		startTime = Date.now();
		result.textContent = '0.000';
		this.className = 'pushed';
		stop.className = '';
		result.className = 'standby'; //stopさせてから背景色を継承しない様に
	});
	stop.addEventListener('click',function(){
		var elapsedTime;
		var diff;
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		elapsedTime = (Date.now() - startTime)/ 1000; //秒で表示したい

		// elapsedTime = 4; のとき
		// result.textContent = elapsedTime; だけにすると
		// 結果が4になってしまい4.000と表示されないので
		result.textContent = elapsedTime.toFixed(3); //としてあげると小数点3桁まで表示される

		this.className = 'pushed';
		start.className = '';
		result.className = ''; //standby中のopacityを取ってあげる

		diff = elapsedTime - 5.0;
		// if (diff > -1.0 && diff < 1.0) {
		if (Math.abs(diff) < 0.05) { //絶対値
			result.className = 'perfect';
		} else if (Math.abs(diff)< 0.5) {
			result.className = 'regrettable';
		}
	});
})();