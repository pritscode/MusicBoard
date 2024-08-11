function showLoginConfirm() {
    var result = confirm("로그인을 해주세요.");
    if (result) {
        alert("로그인 창으로 이동.");
    }
}

function moveToPlaylist() {
    window.location.href = "playlist.html";
}

function deleteSong() {
    alert("해당 곡의 삭제 횟수가 늘어납니다.");
}