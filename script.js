function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
  });
}

swiper();

var tl=gsap.timeline();

tl.from(".page1-left",{
  opacity: 0,
  y:-40,
  duration:1,
},'a')


tl.from(".page1-right",{
  opacity: 0,
  y:-40,
  duration:1,
},'a')


tl.from(".page1-images img",{
  opacity:0,
  stagger:0.1,
  y:-40,
  duration:1,
},'a')

tl.from("#page2 h2",{
  opacity: 0,
  y:-5,
  duration:0.2,
  scrollTrigger:{
    trigger:"#page2 h2",
    scroller:"body",

start:"top 70%",

}
})


tl.from("#page2 p",{
  opacity: 0,
  y:-5,
  duration:0.4,
  scrollTrigger:{
    trigger:"#page2 p",
    scroller:"body",

start:"top 75%",

}
})

var tl2=gsap.timeline();


tl2.from(".swiper-slide img",{
  opacity:0,
  y:-100,
  duration:2,
  scrollTrigger:{
    trigger:".swiper-slide img",
    scroller:"body",

start:"top 30%",

}
})



tl.from("#page3 h2",{
  opacity: 0,
  y:-5,
  duration:0.2,
  scrollTrigger:{
    trigger:"#page3 h2",
    scroller:"body",

start:"top 70%",

}
})



tl.from(".page3-left",{
  opacity: 0,
  x:-80,
  duration:3,
  scrollTrigger:{
    trigger:".page3-left",
    scroller:"body",
scrub:true,
start:"top 150%",


}
},'b')



tl.from(".page3-right",{
  opacity: 0,
  x:20,
  duration:3,
  scrollTrigger:{
    trigger:".page3-left",
    scroller:"body",
scrub:true,
start:"top 150%",


}
},'b')



tl.from(".page3-extra p",{
  opacity: 0,
  y:-100,
  duration:2,
  scrollTrigger:{
    trigger:".page3-extra p",
    scroller:"body",
start:"top 40%",


}
},'c')



tl.from(".page3-extra i",{
  opacity: 0,
  y:-100,
  duration:2,
  scrollTrigger:{
    trigger:".page3-extra i",
    scroller:"body",
start:"top 40%",


}
},'c')




tl.from("#box1,#box2,#box3",{
  opacity: 0,
  y:-100,
  duration:2,
  scrollTrigger:{
    trigger:".box",
    scroller:"body",
start:"top 50%",


}
},'c')


tl.from("#box4,#box5,#box6",{
  opacity: 0,
  y:-100,
  duration:2,
  scrollTrigger:{
    trigger:".box",
    scroller:"body",
start:"top -20%",

}
})

tl.from(".page5-left",{
  opacity: 0,
  y:-50,
  duration:1,
  scrollTrigger:{
    trigger:".page5-left",
    scroller:"body",
start:"top 50%",

}
},'d')


tl.from(".page5-right",{
  opacity: 0,
  y:50,
  duration:1,
  scrollTrigger:{
    trigger:".page5-left",
    scroller:"body",
start:"top 50%",

}
},'d')



tl.from("#page5 h3",{
  opacity: 0,
  y:-50,
  duration:2,
  scrollTrigger:{
    trigger:"#page5 h3",
    scroller:"body",
start:"top 78%",
}
},)

tl.from(".page5-extra",{
  opacity: 0,
  y:-50,
  duration:2,
  scrollTrigger:{
    trigger:".page5-extra",
    scroller:"body",
start:"top 85.2%",

}
})





