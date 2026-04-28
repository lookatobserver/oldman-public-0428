/**
 * 천원의 행복 - JavaScript Logic
 */

// 화면 전환 함수
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // 탭 바 활성 탭 동기화
    const tabMap = { 'home-screen': 0, 'menu-screen': 1 };
    const tabIdx = tabMap[screenId];
    if (tabIdx !== undefined) {
        document.querySelectorAll('.tab-item').forEach((t, i) => {
            t.classList.toggle('active', i === tabIdx);
        });
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
