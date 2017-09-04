$(function (){
	'use strict';
	var data1 = {
		startBtn : '.js-startBtn[data-id="1"]',
		stopBtn : '.js-stopBtn[data-id="1"]',
		result : '.js-result[data-id="1"]',
		eachTime : 1.0
	},
	app1 = new window.TimerGame(data1),
	data2 = {
		startBtn : '.js-startBtn[data-id="2"]',
		stopBtn : '.js-stopBtn[data-id="2"]',
		result : '.js-result[data-id="2"]',
		eachTime : 5.0
	},
	app2 = new window.TimerGame(data2),
	data3 = {
		startBtn : '.js-startBtn[data-id="3"]',
		stopBtn : '.js-stopBtn[data-id="3"]',
		result : '.js-result[data-id="3"]',
		eachTime : 10.0
	},
	app3 = new window.TimerGame(data3),
	isStarted = false;

	//1秒
	$(data1.startBtn).on('click',function(){
		if (isStarted === true) {
			return;
		}
		isStarted = true;
		app1.timerStart();
	});
	$(data1.stopBtn).on('click',function(){
		// eachTime = 1.0;
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		app1.timerStop();
	});


	//5秒
	$(data2.startBtn).on('click',function(){
		if (isStarted === true) {
			return;
		}
		isStarted = true;
		app2.timerStart();
	});
	$(data2.stopBtn).on('click',function(){
		// eachTime = 5.0;
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		app2.timerStop();
	});


	//10秒
	$(data3.startBtn).on('click',function(){
		if (isStarted === true) {
			return;
		}
		isStarted = true;
		app3.timerStart();
	});
	$(data3.stopBtn).on('click',function(){
		// eachTime = 5.0;
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		app3.timerStop();
	});
});