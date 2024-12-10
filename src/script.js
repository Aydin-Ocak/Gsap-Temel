
gsap.from("#box", {
    x:500,
    duration: 3,
    rotate: 180
});

const box1 = document.getElementById("box1");

box1.addEventListener("click", ()=>{
    gsap.to("#box1",{
        background: "orange",
        width: "500px",
        height: "500px",
        duration: 2
    })
});

box1.addEventListener("mousedown", ()=>{
    gsap.to("#box1", {
        background: "blue",
        duration: 1
    })
})

const box2 = document.getElementById("box2");

gsap.to(box2, {
    y:-100,
    duration:3,
    repeat:-1,
    yoyo:true
})


var tl = gsap.timeline({
    repeat: 2,
    repeatDelay:1
})

tl.to("#box3", {x:100, duration: 2})
tl.to("#box3", {y:100, duration: 2})
tl.to("#box3", {width: 250,height:250, background:"orange", duration: 2})


gsap.to("#box4", {
    motionPath: {
        path: [{x:0, y:0}, {x:20, y:0}, {x:30, y:50}, {x:50, y:50}],
        type: "cubic"
      },
    transformOrigin: "50% 50%",
    duration: 5,
  });