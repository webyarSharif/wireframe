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
            };console.log(`${hour}:${min}:${sec}`);
        }
        
    }, 1000);
}

newTime(4500);


// function ehsan(timer){
//     const setInter = setInterval(()=>{
//         timer--;
//         console.log(timer);
//     },1000);
//     return setInter;
// }

// console.log(ehsan(120))