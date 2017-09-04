$(function (){
	'use strict';
	var data = {
		startBtn : '.js-startBtn',
		stopBtn : '.js-stopBtn',
		result : '.js-result'
	},
	app = new window.TimerGame(data),
	isStarted = false;


	$(data.startBtn).on('click',function(){
		if (isStarted === true) {
			return;
		}
		isStarted = true;
		console.log(isStarted);
		app.timerStart();
	});


	$(data.stopBtn).on('click',function(){
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		console.log(isStarted);
		app.timerStop();
	});
});