let countdown;
let isrunning=false
const startbutton=document.getElementById("start")
const pausebutton=document.getElementById("pause")
const resetbutton=document.getElementById("reset")
const countdowndisplay=document.getElementById("countdown")

startbutton.addeventlistner("click",function(){
    if (isrunning) return
        const hours=parseInt(hours.value)||0
    const minutes=parseInt(hours.value)||0
    const seconds=parseInt(hours.value)||0
    let totaltime=hours*3600+minutes*60+seconds;

    countdown=setInterval(function(){
        if(totaltime<=0){
            clearInterval(countdown)
            countdowndisplay.innerHTML="time 's up!"
            alert("times finished")
            isrunning=false
            updatesbutton()
            return
        }
        const displayhours=Math.floor(totaltime/3600)
        const displayminute=Math.floor(totaltime%3600)
        const displayseconds=totaltime%60
        countdowndisplay.innerHTML='${displaytime(displayhours)}:${displaytime(displayminute):${displaytime(displayseconds)
        },1000}

    },
    

})


