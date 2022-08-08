const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})


let p = document.getElementById('adr'); 
    p.onmouseover= ev => {
    p.style.backgroundColor = 'grey'
    }
    {
    p.onmouseleave = ev => {
        p.style.backgroundColor = 'white'
    } 
    }
    