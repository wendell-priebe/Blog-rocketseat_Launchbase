// =====VIDEOS=====
const videos = document.querySelectorAll('.script_video')

for(let video of videos){
    video.addEventListener("click",function(){
        const videoID = video.getAttribute("id")
        window.location.href = `/video?id=${videoID}`
    })
}
// =====BLOG=====
const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')  //querySelectorAll pega uma coleçao de itens

for(let card of cards){
    card.addEventListener("click",function(){
        const postID = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postID}`
    })
}

document.querySelector('#close').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
    modalOverlay.classList.remove('modal_overlay_full')
    modalOverlay.querySelector('#open_in_full').innerHTML='open_in_full'
})

document.querySelector('#open_in_full').addEventListener("click",function(){
    if (modalOverlay.classList.contains('modal_overlay_full')) {
        modalOverlay.classList.remove('modal_overlay_full')
        modalOverlay.querySelector('#open_in_full').innerHTML='open_in_full'
    } else {
        modalOverlay.classList.add('modal_overlay_full')
        modalOverlay.querySelector('#open_in_full').innerHTML='close_fullscreen'
    }
})

