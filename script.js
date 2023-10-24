// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }

// init()


let cursor = document.querySelector('.cursor');
let main = document.querySelector('.main');

main.addEventListener("mousemove",function(e){
    cursor.style.left = e.x +"px";
    cursor.style.top = e.y+"px";
})

let blocks = document.querySelectorAll('.blocks');

blocks.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        var att = e.getAttribute('data-img');
        cursor.style.width = "500px"
        cursor.style.height = "350px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
        cursor.style.mixBlendMode = "normal"
        cursor.style.backgroundPosition="center"
        cursor.style.backgroundSize="cover"
        cursor.style.backgroundRepeat="noRepeat"
        
    })
    e.addEventListener('mouseleave',()=>{
        cursor.style.width = "15px"
        cursor.style.height = "15px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `url()`
        console.log(e)
    })
})


gsap.from('.logo ,.about',{
    y:-100,
    opacity:0,
    delay:0.1,
    duration:0.5,
    stagger:0.2
})

gsap.from('.heading1',{
    opacity:0,
    x:-55,
  
},"animate")
//stagger -- same class name -- but will give time intercal bw them

gsap.from('.heading2',{
    opacity:0,
    x:55,
    
},"animate")

gsap.from(".to-down",{
    scale:0,
    opacity:0
    // delay:1
})

gsap.to(".to-down",{
    y:0.4 ,
    repeat:-1,
    yoyo:true
})


gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".heading1",
        scroller:"body",
        markers:false,
        start:"top 20%",
        end:"top 0",
        scrub:3
    }
})

tl.to('.heading1',{
    x:-40,
   
},"anim")

tl.to('.heading2',{
    x:40
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".card1",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 20%",
        scrub:3
    }
})
tl2.to('.main',{
    backgroundColor:"white",
    color:"white"
})

tl2.to('.content1,.card-head1',{
    scale:0.8
},"animation1")

tl2.to('#img1 ,.btn1',{
    scale:1.2
},"animation1")

tl2.to('.content2,.card-head1',{
    scale:0.8
},"animation2")

tl2.to('#img2 ,.btn2',{
    scale:1.2
},"animation2")

tl2.to('.content3,.card-head3',{
    scale:0.8
},"animation3")

tl2.to('#img3 ,.btn3',{
    scale:1.2
},"animation3")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:false,
        start:"top 65%",
        end:"top 0",    
        scrub:3
    }
})

tl3.to('.main',{
    backgroundColor:"black",
    border:"white",
    color:"white"
})





















// t1.from('.box4',{
//     x:-100,
//     opacity:0,
//     duration:0.7
// })

// t1.from('.box1,.box3',{
//     x:100,
//     opacity:0,
//     dutation:0.3,
//     stagger:0.1
// })
// // t1.from('.box1',{
// //     x:100,
// //     opacity:0,
// //     duration:0.3
// // })

// t1.from('.box2',{
//     y:-200,
//     opacity:0,
//     duration:0.5
// })

