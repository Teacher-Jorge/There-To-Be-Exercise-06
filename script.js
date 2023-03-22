let btnMuch = document.getElementById("btnMuch")
let btnMany = document.getElementById("btnMany")
let btnSome = document.getElementById("btnSome")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnMuch.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = "much"
    btnMuch.style.background = 'lime'
    answer.style.color = 'lime'
    btnMuch.disabled = 'true'
    btnMuch.disabled = 'true'
    btnMany.disabled = 'true'
})

btnSome.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'some'
    btnSome.style.background = 'red'
    answer.style.color = 'red'
    btnSome.disabled = 'true'
})

btnMany.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    let img02 = document.getElementById('img02')
    answer.innerHTML = "many"
    answer.style.color = 'red'
    btnMany.style.background = ' red'
    btnMany.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Não há muito tempo pra terminar o trabalho.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



