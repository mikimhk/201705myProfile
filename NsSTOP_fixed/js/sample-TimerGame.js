$(function (){
	'use strict';
	var data1 = {
		module : '.js-timerGame[data-id="1"]',
		startBtn : '.js-startBtn',
		stopBtn : '.js-stopBtn',
		result : '.js-result',
		eachTime : 1.0
	},
	app1 = new window.TimerGame(data1),
	data2 = {
		module : '.js-timerGame[data-id="2"]',
		startBtn : '.js-startBtn',
		stopBtn : '.js-stopBtn',
		result : '.js-result',
		eachTime : 5.0
	},
	app2 = new window.TimerGame(data2),
	data3 = {
		module : '.js-timerGame[data-id="3"]',
		startBtn : '.js-startBtn',
		stopBtn : '.js-stopBtn',
		result : '.js-result',
		eachTime : 10.0
	},
	app3 = new window.TimerGame(data3);

	//1秒
	$(data1.module).on('click',data1.startBtn,function(){
		if ($(data1.module).find(data1.result).hasClass
	('standby')) {
			return false;
		}
		app1.timerStart();
	});
	$(data1.module).on('click',data1.stopBtn,function(){
		if (!$(data1.module).find(data1.result).hasClass
	('standby')) {
			return false;
		}
		app1.timerStop();
	});


	//5秒
	$(data2.module).on('click',data2.startBtn,function(){
		if ($(data2.module).find(data2.result).hasClass
	('standby')) {
			return false;
		}
		app2.timerStart();
	});
	$(data2.module).on('click',data2.stopBtn,function(){
		// eachTime = 5.0;
		if (!$(data2.module).find(data2.result).hasClass
	('standby')) {
			return false;
		}
		app2.timerStop();
	});


	//10秒
	$(data3.module).on('click',data3.startBtn,function(){
		if ($(data3.module).find(data3.result).hasClass
	('standby')) {
			return false;
		}
		app3.timerStart();
	});
	$(data3.module).on('click',data3.stopBtn,function(){
		// eachTime = 5.0;
		if (!$(data3.module).find(data3.result).hasClass
	('standby')) {
			return false;
		}
		app3.timerStop();
	});
});