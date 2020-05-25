// var num1 = 12;
// var num2 = 6;

// alert('12+6='+num1+num2+'です。'+'12-6='+num1-num2+'です。'+'12*6='+num1*num2+'です。'+'12/6='+num1/num2+'です。');


// var alertString;
// alertString = addString("WebCamp")

// alert(alertString);

// function addString(strA){
// 	var addStr = "Hello" + strA;
// 	return addStr;
// }

// var promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// じゃんけん入力欄
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

while((user_hand !="グー")&&(user_hand !="チョキ")&&(user_hand !="パー")&&(user_hand !=null)){
	alert('グー・チョキ・パーのいずれかを入力して下さい');
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}

var js_hand = getJShand();

var judge = winLose(user_hand,js_hand);

if(user_hand != null){
	alert('あなたの選んだ手は'+user_hand+'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は'+ judge + 'です。');
}else{
	alert("またチェレンジしてね")
}
function getJShand(){
	var js_hand_num = Math.floor( Math.random()*3);
	// 0~2までの数字をランダム選択

	if (js_hand_num == 0) {
		hand_name = "グー";
	}else if (js_hand_num == 1) {
		hand_name = "チョキ";
	}else if (js_hand_num == 2) {
		hand_name = "パー";
	}
	return hand_name;
}

// じゃんけんの手を比べる関数
function winLose(user,js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}
	return winLoseStr;
	}