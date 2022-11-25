const open = document.getElementById("open")
const close = document.getElementById("close")
const header = document.getElementById("header")

const show = () => {
    
    header.style.height = '100%'
    nav.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'block'
}

const closer = () => {
    header.style.height = 'auto'
    nav.style.display = 'none'
    open.style.display = 'block'
    close.style.display = 'none'
}