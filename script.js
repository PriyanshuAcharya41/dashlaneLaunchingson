// // gsap.from(".text1 h1",{
// //     x:-450,
// //     duration:2,
// //     delay:1,
// //     // scrollTrigger:".text h1"
// //     scrollTrigger:{
// //         trigger:".text h1",
// //         scroller:".main",
// //         markers:true,
// //         start:"top 40%",
        
// //     }
// // })
// let a=gsap.timeline();
// gsap.from(".text1 h1",{
//     x:-1000,
//     duration:1,
//     delay:1
// })
// gsap.from(".text2 h1",{
//     x:1000,
//     duration:1,
//     delay:2
// })

// let c=document.querySelector(".text1 h1")

// // setTimeout(function(){
// //     c.innerHTML="hello"
// // },5000)
let tl=gsap.timeline();
tl.from(".logo img",{
    opacity:0,
    duration:1.5,
    
})
tl.from(".head1 h1",{
    y:500,
    opacity:0,
    duration:.7,
    ease: "circ.out",
    
})
tl.from(".head2 h1",{
    opacity:0,
    duration:.7,
    ease: "power1.out",
    y:1000,
})
tl.from(".head3 h2",{
    opacity:0,
    duration:.5,
    ease: "power1.out",
    x:1000,
    
})
tl.from(".button",{
    
    duration:.5,
    opacity:0,
    ease: "power1.out",
    x:-200,
    
})
tl.from(".head4 h5",{
    
    duration:1,
    
    ease: "power1.out",
    opacity:0,
    
})


gsap.from(".second",{
    
    y:200,
    opacity:0,
    delay:0,
    duration:1,
    // scrollTrigger:".second",
    scrollTrigger:{
        trigger:".second",
        
        start:40,
        y:200,
        
    }
})

gsap.from(".contact_left",{
    
    y:0,
    x:100,
    duration:1,
    scrollTrigger:{
        trigger:".contact_left",
        start:700,
        y:0,
        x:200,
        scrub:1
    }
})
// gsap.from(".contact_right",{
//     y:0,
//     x:200,
//     duration:1,
//     scrollTrigger:{
//         trigger:".contact_right",
//         start:800,
//         y:0,
        
//         scrub:1,
//     }
// })