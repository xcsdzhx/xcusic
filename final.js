const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const playerElement = document.querySelector('.player');

// --- 库检查 ---
if (typeof ColorThief === 'undefined' || typeof window.jsmediatags === 'undefined') {
    alert("Required libraries (ColorThief or jsmediatags) not loaded.");
}
const colorThief = new ColorThief();
const jsmediatags = window.jsmediatags;

// --- 状态变量 ---
let playlist = [];
let currentTrackIndex = 0;
let isDragging = false;
let currentBgUrl = '';
let isTransitioningBackground = false;

// --- 核心函数 ---
function playMusic() {
    if (!audio.src && playlist.length > 0) {
        loadTrack(currentTrackIndex);
    } else if (audio.src && audio.paused) {
        audio.play().catch(e => console.error("Audio play failed:", e));
    }
}

function pauseMusic() {
    audio.pause();
}

function prevTrack() {
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
}

function nextTrack() {
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
}