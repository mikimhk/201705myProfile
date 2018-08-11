$(function () {
	$('.slack-submit').on('click', function () {
		var url = 'https://slack.com/api/chat.postMessage',
			param = $(this).prev().val(),
			// prev():指定した要素の兄弟要素でマッチした要素を選択。
			// val():指定した要素のvalue属性の値を取得。
			data = {
			token: 'xoxp-2885259380-172391169875-288146252086-cad2c20acc83131bb425340d4ecdf345',
			channel: '#mi-test',
			username: '匿名希望さん',
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
