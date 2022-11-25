const close = document.getElementById("close")
const header = document.getElementById("header")
const nav = document.getElementById("nav")
const open = document.getElementById("open")
const blog = document.getElementById("blogs")
const blogs = blog.childNodes;

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


function blog1_enter(){
    blogs[1].style.width = "50%"
}
function blog1_leave(){
    blogs[1].style.width = "30%"
}
function blog2_enter(){
    blogs[3].style.width = "50%"
}
function blog2_leave(){
    blogs[3].style.width = "30%"
}
function blog3_enter(){
    blogs[5].style.width = "50%"
}
function blog3_leave(){
    blogs[5].style.width = "30%"
}