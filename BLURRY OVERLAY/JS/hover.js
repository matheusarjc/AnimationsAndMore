const frame = document.querySelector('.frame')
const orange = document.querySelector('.orange')

frame.addEventListener('mousemove', (event) => {
    let rect = event.target.getBoundingClientRect()
    event.target.getBoundingClientRect();
    orange.style.height = `${event.clientY - rect.top + 0.5}px`
    orange.style.transition = '0s'
})

frame.addEventListener('mouseleave', () => {
    orange.style.transition = '1s'
    orange.style.height = '50%'
})