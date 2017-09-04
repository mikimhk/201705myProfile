$(function () {
	'use strict';
	var data1 = {
			btn : '.js-btn',
			inner : '.js-inner',
			accordion : '.js-accordion[data-id="1"]',
			active : 'active',
			close : "▲ 閉じる",
			open : "▼ もっと見る",
			speed : 2000
		},
		app1 = new window.Accordion(data1),
		data2 = {
			btn : '.js-btn',
			inner : '.js-inner',
			accordion : '.js-accordion[data-id="2"]',
			active : 'active',
			close : "▲ close",
			open : "▼ open",
			speed : 200
		},
		app2 = new window.Accordion(data2);

	$(data1.accordion).on('click',data1.btn,function(){
		var $contents = $(this).closest(data1.accordion).find(data1.inner);
		//アニメーション中は何もしない
		if ($contents.is(':animated')) {
			return false;
		}
		//開閉
		app1.toggleAccordion($(this));
		//$contents.slideToggle();
		//文字の切り替え
		// $(this).toggleClass('active');
		// $(this).text($(this).hasClass('active') ? "▲ 閉じる" : "▼ もっと見る");
		return false;
	});
	$(data2.accordion).on('click',data2.btn,function(){
		var $contents = $(this).closest(data2.accordion).find(data2.inner);
		if ($contents.is(':animated')) {
			return false;
		}
		app2.toggleAccordion($(this));
		return false;
	});

});
