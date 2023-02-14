const menu = document.querySelector('menu.w-full')

addEventListener('blur', () => document.title = 'Vuelve!')
addEventListener('focus', () => document.title = 'Loop Main')

document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        menu.classList.remove('hidden')
    }else if(event.target.matches('#iconClose')) {
        menu.classList.add('hidden')   
    }
})

matchMedia('(max-width: 899px)').addEventListener('change', event => {
    menu.classList.add('hidden')
})