const keys = document.querySelectorAll('.key');

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // key.addEventListener('')
}

const playSound = (event) => {
    // console.log('sound');
    const keyCode = event.keyCode;
    // console.log(keyCode);
    const ele = document.querySelector(`.key[data-key="${keyCode}"]`)
    // console.log(ele);
    if (ele) { //安全 
        ele.classList.add('playing');
        setTimeout(() => {
            ele.classList.remove('playing');
        }, 800)
    }
}

window.addEventListener('keyup', playSound);