$ = function (x) {
	return document.getElementById(x);
}

var xmlHttp;
var members = new Array();
var token = "xoxp-2885259380-172391169875-288146252086-cad2c20acc83131bb425340d4ecdf345";

xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://slack.com/api/users.list?token=" + token, false);
xmlHttp.send(null);
data = xmlHttp.responseText;
json = JSON.parse(data);
users = json['members'];

console.log(json);
var num = users.length;

for (i = 0; i < num; i++) {
	members[i] = (users[i].profile.real_name); //undefined なくしたい
}


var numList = members
var isStop = true;
var n = 1;

function startBingo() {
	$("start").style.display = "none"; //要素のスタイル属性のdisplayプロパティの値を取得
	$("stop").style.display = "inline";
	isStop = false;
	roulette();
}

function stopBingo() {
	$("start").style.display = "inline";
	$("stop").style.display = "none";
	isStop = true;
}

function resetBingo() {
	location.reload(); //現在表示されているページのリロード
}

function roulette() {
	var id = "";
	var rnd = Math.floor(Math.random() * numList.length);

	if (isStop) {
		clearTimeout(id); //setTimeout()を使用して設定された遅延処理を取り消し
		$("view").innerText = numList[rnd];
		if (!$("out").innerText) {
			var newli = document.createElement("li"); //指定された要素名で新たな要素ノードを生成
			var list = $("out");
			var member = n + "：" + numList[rnd];
			list.append(newli); //引数で渡したDOMを、メソッドを叩いたDOMの最後尾に追加する
			newli.append(member);
		} else {
			n++;
			var newli = document.createElement("li");
			var list = $("out");
			var member = n + "：" + numList[rnd];
			list.append(newli);
			newli.append(member);
		}
		numList.splice(rnd, 1); //古い要素の削除しながら、新しい要素を追加することで、配列の内容を変更

		if (numList.length == 0) {
			alert("Finish");
			$("start").disabled = true;
			$("start").style.display = "none";
			$("reset").style.display = "inline";
		}
		return false;
	}
	$("view").innerText = numList[rnd];
	id = setTimeout("roulette()", 10);
}
