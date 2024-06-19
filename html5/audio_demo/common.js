function playSound(e) {
    // console.log(e.keyCode, '////');
    let keyCode = e.keyCode
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    // console.log(audio);
    if (!key) return;

    key.classList.add('playing')
    audio.play()

    // 65 -> A playing 
}
window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    // console.log(e.target, '//////');
    e.target.classList.remove('playing');
}
// 不需要i 
// es6 可读性 
for (let key of keys) {
    key.addEventListener('transitionend', removeTransition)
}