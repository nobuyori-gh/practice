$('#tab-contents .tab[id !="tab1"]').hide();


$('#tab-menu a').on('click',function(){
// id="tab-menu"の<a>タグがクリックされたときに、処理を実行する
	$("#tab-contents .tab").hide();
// tab内テキストの全非表示
	$("#tab-menu .active").removeClass("active");
// 最初tab1をactiveとしていたが一度active削除
	$(this).addClass("active");
// id=tab-menu内の任意の要素にclass=activeを追加
	$($(this).attr("href")).show();
	return false;
});