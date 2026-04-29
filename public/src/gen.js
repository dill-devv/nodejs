let ans = Math.random(1, 100);
let confirm = document.getElementById('confirmGuess');
let input = document.getElementById('input')

confirm.addEventListener('click', function () {
    console.log('clicked')
    if (Number(input.value) != ans) {
        console.log('wrong')
    } else {
        console.log('correct hi guys')
    }
});
