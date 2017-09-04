$(function () {
	'use strict';
	var data = {
		btn : '.js-btn',
		inner : '.js-inner',
		accordion : '.js-accordion',
		active : 'active',
		close : "▲ 閉じる",
		open : "▼ もっと見る",
	},
	app = new window.Accordion(data),
	data1 = {
		speed : 2000
	},
	app = new window.Accordion(data1),
	data2 = {
		speed : 200
	},
	app = new window.Accordion(data2),

	$(data.btn).on('click',function(){
		var $contents = $(this).closest(data.accordion).find(data.inner);
		//アニメーション中は何もしない
		if ($contents.is(':animated')) {
			return false;
		}
		//開閉
		app.toggleAccordion($(this));
		//$contents.slideToggle();
		//文字の切り替え
		// $(this).toggleClass('active');
		// $(this).text($(this).hasClass('active') ? "▲ 閉じる" : "▼ もっと見る");
		return false;
	});
});
