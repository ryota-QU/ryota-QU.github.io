document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide, .slide1');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    // 初期状態で最初のスライドを表示
    slides[0].classList.add('current');

    // 次のスライドに移動する関数
    function nextSlide() {
        slides[currentSlide].classList.remove('current');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('current');
    }

    // 前のスライドに移動する関数
    function prevSlide() {
        slides[currentSlide].classList.remove('current');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('current');
    }

    // ボタンにイベントリスナーを追加
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 自動スライド（5秒ごと）
    setInterval(nextSlide, 5000);
});
