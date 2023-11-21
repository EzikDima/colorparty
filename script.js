const button = document.getElementById('button')
const button1 = document.getElementById('button1')
const non = document.getElementById('non')

button.addEventListener('click', function() {
    console.log('click');
    non.classList.toggle('uwu');
    non.classList.remove('uwu1')
})
button1.addEventListener('click', function() {
    console.log('click');
    non.classList.toggle('uwu1');
    non.classList.remove('uwu')
 
})