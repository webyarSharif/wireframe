function newTime(time){
    const timer = setInterval(() =>{
        const hour = String(Math.trunc(time / 3600)).padStart(2, 0);
        const min = String(Math.trunc((time % 3600) / 60)).padStart(2, 0);
        const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    
        if(time === 0){
            clearInterval(timer);
            console.log("End The count down timer");
        }
        else{
            time--;
            if(min === 0){
                hour--;
            }
            else{
                const CountDown = document.querySelector('.btn');
                CountDown.textContent = `${hour}:${min}:${sec}`;
                CountDown.addEventListener('click' , ()=>{
                    clearInterval(timer);
                    CountDown.textContent = "00:00:00"
                })
            }
        }
        
    }, 1000);
}

newTime(4500);

