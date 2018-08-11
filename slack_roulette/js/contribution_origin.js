$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: 'xoxp-2885259380-172391169875-288266769607-262a292b3b1f2c8dc2a9a0ab0e8dbe8e',
            channel: '#times_maruco',
            username: 'mayobot',
            text: 'もう一度チャンネル貸してください。すみません。'
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});
