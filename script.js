const audio=new Audio();

function playSample(){
    const track=document.getElementById('tack-select').value;
    const start=parseFloat(document.getElementById('start-time').value)||0;
    const duration=parseFloat(document.getElementById('duration').value)||5;
    const status=document.getElementById('status');

    const safeDuration=duration>30?30:duration;

    audio.src=track;
    status.innerText="Syncing with Audio Stream...";

    audio.onloadednetadata=()=>{
        audio.currentTime=start;
        audio.play();
        status.innerText='Playing ${safeDuration}s sample...`;

        setTimeout(()=>{
            audio.pause();
            status.innerText='Sample sequence conplete.";
        }, safeDuration*1000);
    };

    audio.onerror=()=>{
        status.innerText="Error: Audio file not found in local directory.";
    };
}

document.addEventListener("DOMContentLoaded", ()=>{
    const playBtn=document.getElementById("play-btn");
    if(playBtn){
        playBtn.addEventListener("click", playSample);
    }
});