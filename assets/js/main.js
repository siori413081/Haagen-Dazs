//アコーディオンをクリックした時の動作
$('.footer-sp-menuItem').click(function() {
	$(this).next('.accordion-box').slideToggle('active');
    $(this).children('.footer-plusIcon').toggleClass('active');
    $(this).children('.footer-sp-menuTitle').children('p').toggleClass('active');
});

//hero
$('.hero-view').hover(function() {
	$(this).children().toggleClass('hover');
});


//hero slider
$(document).ready(function(){
  $('.hero-slider-list').slick({
    autoplay: true, //自動再生
    vertical: true, //縦のスライドを有効化
	arrows:false,
	dots:true,
	dotsClass:'hero-slider-dots',
  });
});

//notice
$('.notice-contents-link').hover(function() {
	$(this).children().toggleClass('hover');
});

//product
$('.product-title-text').hover(function() {
	$(this).children('.product-arrow-right').toggleClass('hover');
});

//recipes
$('.recipe-title-text').hover(function() {
	$(this).children('.recipe-arrow-right').toggleClass('hover');
});

//gallery
$('.gallery-title-text').hover(function() {
	$(this).children('.gallery-arrow-right').toggleClass('hover');
});

//ハンバーガーメニュー
$('.header-hamburgerMenu-btn').hover(function() {
	$(this).toggleClass('hover');
});

$('.header-hamburgerMenu-btn').click(function() {
	$(this).toggleClass('active');
	$('.hamburgerMenu').toggleClass('active');
	$('body').toggleClass('active');
});

//ハンバーガー中身
$('.hamburgerMenu-contents-title-link').hover(function() {
	$(this).children('.hamburgerMenu-arrow-right').toggleClass('hover');
});

$('.hamburger-contents-box-item').hover(function() {
	$(this).children('a').children('p').toggleClass('hover');
});

$('.hamburgerMenu-guide-icon').hover(function() {
	$(this).children('p').toggleClass('hover');
});

$('.hamburgerMenu-search-word span').hover(function() {
	$(this).toggleClass('hover');
});

//虫眼鏡
$('.header-search-icon').click(function() {
	$('.searchMenu').toggleClass('active');
});

$('.searchMenu-close-btn,.hamburgerMenu-sp-search').click(function() {
	$('.searchMenu').toggleClass('active');
});

$('.searchMenu-word span').hover(function() {
	$(this).toggleClass('hover');
});

//コンテンツ
$('.contents-text-view').hover(function() {
	$(this).children().toggleClass('hover');
});

//ギャラリー
$('.gallery-title-text-pc').hover(function() {
	$(this).children().toggleClass('hover');
});

//レシピ
$('.recipe-title-text-pc').hover(function() {
	$(this).children().toggleClass('hover');
});

//フッター
$('.footer-main-pc ul li p').hover(function() {
	$(this).children('a').toggleClass('hover');
});

$('.footer-guide-icon').hover(function() {
	$(this).children('p').toggleClass('hover');
});

//slider
$('.slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: false,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
	dotsClass: "product-slide-dots",
	responsive: [
		{
		breakpoint: 2000,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 5,//スライドを画面に2枚見せる
			slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
		}
	},
	{
		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		arrows:false,
		settings: {
			slidesToShow: 2,//スライドを画面に1枚見せる
			slidesToScroll: 1.5,//1回のスクロールで1枚の写真を移動して見せる
		}
	}
]
});

function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.appearTrigger').each(function(){ //fadeInUpTriggerというクラス名が
	var elemPos = $(this).offset().top-50; //要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('appear');
	// 画面内に入ったらfadeInというクラス名を追記
	}else{
	$(this).removeClass('appear');
	// 画面外に出たらfadeInというクラス名を外す
	}
	});
}


$(window).scroll(function (){
    fadeAnime();
});

