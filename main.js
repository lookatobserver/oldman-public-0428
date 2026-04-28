/**
 * 천원의 행복 - JavaScript Logic
 */

// 화면 전환 함수
function navigateTo(screenId) {
    // 모든 화면 숨기기
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    // 대상 화면 보여주기
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        window.scrollTo(0, 0); // 화면 전환 시 최상단으로 이동
    }
}

// 알림 메시지 (Toast) 표시 함수
function showMsg(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');

    // 2초 후 숨기기
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// 오늘 날짜 표시
function updateTodayDate() {
    const el = document.getElementById('today-date');
    if (!el) return;
    const d = new Date();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    el.textContent = `${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}요일`;
}

// 초기 로딩 시 홈 화면으로 시작
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home-screen');
    updateTodayDate();
});
