     const mario = document.querySelector('.mario')
     const tubo = document.querySelector('.tubo')
     const pula = document.getElementById('pula')

     const jump = () => {
     mario.classList.add('jump')
    
          setTimeout(() => {
           mario.classList.remove('jump')
          }, 500)
     }

     const loop = setInterval(() => {

     const tubopos = tubo.offsetLeft
     const mariopos = window.getComputedStyle(mario).bottom.replace('px', '')


     if(tubopos <= 180 && tubopos > 0 && mariopos < 90){

          tubo.style.animation = 'none'
          tubo.style.left = `${tubopos}px`

          mario.style.animation = 'none'
          mario.style.bottom = `${mariopos}px`

          mario.src = 'img/gameover.png'
          mario.style.width = '90px'  
          mario.style.marginLeft = '100px' 
          pula.innerHTML = 'Aperte para reiniciar'
          
          document.getElementById('pula').addEventListener('click', () => {
               location.reload()
          })
          
          clearInterval(loop)

         }}, 10)




     document.getElementById("pula").addEventListener('click',jump)

     document.addEventListener('keydown', function(event) {
       if (event.key === 'w') {
            jump()
           }
     });


     