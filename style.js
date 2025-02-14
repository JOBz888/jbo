window.onload = function() {
    const link = document.querySelector('.story-link');
    
    if (window.location.href.includes('story.html')) {
        link.classList.add('active');
    }
};
window.onload = function() {
    let audio = document.getElementById("background-audio");
    audio.volume = 0.2; // ปรับเสียงเริ่มต้น

    // ควบคุมเสียงด้วย input range
    let volumeControl = document.getElementById("volume-control");
    volumeControl.addEventListener("input", function() {
        audio.volume = volumeControl.value;
    });

    audio.play().catch(error => console.log("Autoplay error: ", error));

    setTimeout(() => document.getElementById('just').classList.add('show'), 40);
    setTimeout(() => document.getElementById('do').classList.add('show'), 400);
    setTimeout(() => document.getElementById('it').classList.add('show'), 800);
    setTimeout(() => document.getElementById('subtext').classList.add('show'), 1200);
};

