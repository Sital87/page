setInterval(() => {
    d = new Date();
    hrtime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrrotation=30*hrtime + mtime/2 + stime/120;
    mrotation=6*mtime + stime/10;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);
function toggleClass(){
    const body=document.querySelector('body')
    body.classList.toggle('dark')
}