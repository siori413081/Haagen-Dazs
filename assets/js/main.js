//アコーディオンをクリックした時の動作
$('.footer-sp-menuItem').click(function() {
	$(this).next('.accordion-box').slideToggle('active');
    $(this).children('.footer-plusIcon').toggleClass('active');
    $(this).children('.footer-sp-menuTitle').children('p').toggleClass('active');
});

//header nav
$('.header-nav-list-item').hover(function() {
	$(this).children('.header-nav-list-item-mini').toggleClass('hover');
});

//header onlineShop
$('.header-onlineShop-icon').hover(function() {
	$(this).children().toggleClass('red');
});

$('.header-onlineShop-mini-item a').hover(function() {
	$(this).children('.header-onlineShop-mini-item p').toggleClass('hover');
});

$('.header-onlineShop-icon').hover(function() {
	$('.header-onlineShop-mini').toggleClass('active');
});

$('.header-onlineShop-mini').hover(function() {
	$(this).toggleClass('active');
});

//hero
$('.hero-view').hover(function() {
	$(this).children().toggleClass('hover');
});

//hero slider
$(document).ready(function(){
  $('.hero-slider-list').slick({
    autoplay: true, //自動再生
	fade:true,
	speed:2000,
	autoplaySpeed:4000,
	arrows:false,
	dots:true,
	dotsClass:'hero-slider-dots',
  });
});

$(".hero-slider").on("init", function () {
  $('.hero-image img').addClass("add-animation");
})
.on({
  // スライドが移動する前に発生するイベント
  beforeChange: function (event, slick, currentSlide, nextSlide) {
	// 表示されているスライドに"add-animation"のclassをつける
	$(".slick-slide.hero-image img", this).eq(nextSlide).addClass("add-animation");
	// あとで"add-animation"のclassを消すための"remove-animation"classを付ける
	$(".slick-slide.hero-image img", this).eq(currentSlide).addClass("remove-animation");
  },
  // スライドが移動した後に発生するイベント
  afterChange: function () {
	// 表示していないスライドはアニメーションのclassを外す
	$(".remove-animation", this).removeClass(
	  "remove-animation add-animation"
	);
  },
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

$('.hamburgerMenu-sns-icon').hover(function() {
	$(this).toggleClass('hover');
});

$('.hamburgerMenu-btn').hover(function() {
	$(this).toggleClass('active');
});

$('.hamburgerMenu-btn').click(function() {
	$('.hamburgerMenu').toggleClass('active');
	$('body').toggleClass('active');
});

$('.hamburgerMenu-search-icon').hover(function() {
	$(this).children().children('.fa-circle').toggleClass('hover');
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

$('.searchMenu-icon').hover(function() {
	$(this).children().children('.fa-circle').toggleClass('hover');
});

//コンテンツ
$('.contents-text-view').hover(function() {
	$(this).children().toggleClass('hover');
});

//ギャラリー
$('.gallery-title-text-pc').hover(function() {
	$(this).children().toggleClass('hover');
});

$('.gallery-item').hover(function() {
	$(this).children('.gallery-movie').toggleClass('active');
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

//product slider
$('.product-slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: false,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 5,//スライドを画面に3枚見せる
	slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
	dotsClass: "product-slide-dots",
	responsive: [
	{
		breakpoint: 768,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 2,//スライドを画面に1枚見せる
			slidesToScroll: 1.5,//1回のスクロールで1枚の写真を移動して見せる
			arrows:false,
		},
	},
],
});

//recipe slider
$('.recipe-slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: false,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4.5,//スライドを画面に3枚見せる
	slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
	arrows: false,
	dots: false,//下部ドットナビゲーションの表示
	responsive: [
	{
		breakpoint: 768,//モニターの横幅が768px以下の見せ方
		settings: {
			slidesToShow: 3,//スライドを画面に3枚見せる
			slidesToScroll: 1.5,//1回のスクロールで1枚の写真を移動して見せる
		},
	},
],
});

//gallery slider
$('.gallery-slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: false,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3,//スライドを画面に3枚見せる
	arrows: false,
	dots: false,//下部ドットナビゲーションの表示
	responsive: [
	{
		breakpoint: 768,//モニターの横幅が768px以下の見せ方
		settings: {
			slidesToShow: 1,//スライドを画面に3枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		},
	},
],
});

var $carousel = $('.js-carousel');

// スクロールイベントの監視
$carousel.on('wheel', function(e) {
  e.preventDefault();

  if (!$carousel.hasClass('js-slick-moving')) {
    if (e.originalEvent.deltaY < 0) {
      $('.product-slider').slick('slickPrev');
    } else {
      $('.product-slider').slick('slickNext');
    }
  }
})

var $carousel = $('.recipe-carousel');

// スクロールイベントの監視
$carousel.on('wheel', function(e) {
  e.preventDefault();

  if (!$carousel.hasClass('js-slick-moving')) {
    if (e.originalEvent.deltaY < 0) {
      $('.recipe-slider').slick('slickPrev');
    } else {
      $('.recipe-slider').slick('slickNext');
    }
  }
})


var $carousel = $('.gallery-carousel');

// スクロールイベントの監視
$carousel.on('wheel', function(e) {
  e.preventDefault();

  if (!$carousel.hasClass('js-slick-moving')) {
    if (e.originalEvent.deltaY < 0) {
      $('.gallery-slider').slick('slickPrev');
    } else {
      $('.gallery-slider').slick('slickNext');
    }
  }
})

// スライド送り中を判定するためにクラスを付与する
$carousel.on('beforeChange', function(){
  $carousel.addClass('js-slick-moving');
});

$carousel.on('afterChange', function(){
  $carousel.removeClass('js-slick-moving');
});

//header 上にスクロールで出る
var beforePos = 0;//スクロールの値の比較用の設定

function ScrollAnime(){

    var elemTop = $('.notice').offset().top-500;//.noticeの位置まできたら
	var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('.header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('.header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('.header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('.header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

$(window).scroll(function (){
    ScrollAnime();
});

//header 途中から背景白
$(function () {
	let elemTop = $('.notice').offset().top-200;

	$(window).on('scroll', function () {
		if ((elemTop) < $(this).scrollTop()) {
			$('.js-header').addClass('change-color');
	  } else {
			$('.js-header').removeClass('change-color');
	  }
	});
  });

//hero 波

var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#fff']);
	// 各キャンバスの初期化
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 100;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 1, 10, 0);//drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 2.0, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

