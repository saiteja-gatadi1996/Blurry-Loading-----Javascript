const loadText= document.querySelector('.loading-text')
const bg= document.querySelector('.bg')


let load=0;
let interval=setInterval(blurring,30)

function blurring(){
    load++

    if(load>99){
        clearInterval(interval)
    }

    loadText.innerText = `${load}%`
 
  bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }