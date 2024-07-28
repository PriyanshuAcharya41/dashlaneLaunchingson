gsap.from(".head1 h1",{
    x:-1000,
    
    duration:1,
    ease: "circ.out",
    
})
gsap.from(".head2 h1",{
    
    duration:1,
    ease: "power1.out",
    x:1000,
})
gsap.from(".head3 h2",{
    
    duration:1,
    ease: "power1.out",
    x:-1000,
    delay:1.2
})
gsap.from(".button",{
    
    duration:1,
    scale:0,
    ease: "power1.out",
    y:200,
    delay:2.2
})
gsap.from(".head4 h5",{
    
    duration:1,
    
    ease: "power1.out",
    scale:0,
    delay:3.2
})
gsap.from(".logo img",{
    scale:0,
    duration:1.5,
    delay:2
})