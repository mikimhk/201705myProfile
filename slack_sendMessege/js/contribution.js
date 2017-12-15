$(function () {
	$('.slack-submit').on('click', function () {
	var url = 'https://slack.com/api/chat.postMessage',
		param = $(this).prev().val(),
		data = {
		token: 'xoxp-2885259380-172391169875-288266769607-262a292b3b1f2c8dc2a9a0ab0e8dbe8e',
		channel: '#mi-test',
		username: 'みーたぼっと',
		text: param
	};

		$.ajax({
			type: 'GET',
			url: url,
			data: data,
			success: function (data) {
				alert('送ったよ');
			}
		});
		// .then(
		// // 1つめは通信成功時のコールバック
		// function (data) {
		//	 $("#results").append(data);
		// },
		// // 2つめは通信失敗時のコールバック
		// function () {
		//	 alert("送れなかったよ");
		// });
	});
});
