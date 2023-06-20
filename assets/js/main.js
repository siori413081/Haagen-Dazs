//アコーディオンをクリックした時の動作
$('.footer-sp-menuItem').click(function() {
	$(this).next('.accordion-box').slideToggle('active');
    $(this).children('.footer-plusIcon').toggleClass('active');
    $(this).children('.footer-sp-menuTitle').children('p').toggleClass('active');
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