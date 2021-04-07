// let link = document.querySelectorAll('.link')

// link.forEach(element => {
//     element.addEventListener('click' ,()=> {
//         element.classList.toggle('active')
//     })
// });

// let link = document.querySelectorAll('.w3_men')

// link.forEach(element => {
//     element.addEventListener('click' ,()=> {
//         element.classList.toggle('view762')
//     })
// });

// let toplink = document.querySelectorAll('.link_down')

// toplink.forEach(element => {
//     element.addEventListener('click' ,()=> {
//         element.classList.toggle('rot')
//     })
// });

let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link_down1 = document.getElementById('link_down1')
let link_down2 = document.getElementById('link_down2')
let menu = document.getElementById('w3_menu')
let menu2 = document.getElementById('w2_menu')

link1.addEventListener('click', function(){
    if(link_down1.classList.contains('rot')){
        link_down1.classList.remove('rot')
        menu.classList.remove('view762')
        menu2.classList.remove('view762')
    }else{
        link_down1.classList.add('rot')
        menu.classList.add('view762')
        menu2.classList.remove('view762')
        link_down2.classList.remove('rot')
    }
})
link2.addEventListener('click', function(){
    if(link_down2.classList.contains('rot')){
        link_down2.classList.remove('rot')
        menu2.classList.remove('view762')
        menu.classList.remove('view762')
    }else{
        link_down2.classList.add('rot')
        menu2.classList.add('view762')
        menu.classList.remove('view762')
        link_down1.classList.remove('rot')
    }
})

// let menu_black = document.getElementById('menu_black')
// let tri = document.querySelector('.tri')
// let att = document.querySelectorAll('.attribute')
// let area = document.querySelector('.view_right_example_area')

// menu_black.addEventListener('click', function(){
//     if(area.classList.contains('black')){
//         area.classList.remove('black')
//     }else{
//         area.classList.add('black')
//     }
// })
// menu_black.addEventListener('click', function(){
//     if(tri.classList.contains('green')){
//         tri.classList.remove('green')
//     }else{
//         tri.classList.add('green')
//     }
// })