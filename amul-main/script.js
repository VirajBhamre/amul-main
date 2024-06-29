function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// locomotive();


function loadingPage(){
    document.addEventListener("DOMContentLoaded", function() {
        const loadingScreen = document.querySelector('.loading-screen');
        const mainContent = document.querySelector('.main');
        const milkVideo = document.querySelector('.milk-video');
        const body = document.body;
    
        milkVideo.addEventListener('ended', () => {
            loadingScreen.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                loadingScreen.style.display = 'none'; 
                mainContent.style.display = 'block'; 
                body.style.overflow = 'auto'; 
                setTimeout(() => {
                    mainContent.style.opacity = '1';

                    bottle();
                    navbar();
                   

                }, 50); 
            }, 1000); 
           
        });
    });
    
    
}


function navbar(){
    let centerCircle=document.querySelector("#centrecircle");
    let navLinks=document.querySelector(".nav-links");
    let amulImage=document.querySelector("#amulImage");
    let navBar=document.querySelector("#navbar");
    
    let centerCircleVal=0;

    gsap.to(".nav-links", {
        y: 200,
        duration: 0.8,
    });

    var timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".one",
            start: "bottom 80%", 
            end: "center 50%", 
            scrub: true,
        }
    });
    timeline1.to(".nav-links",{
        y: -200,
        duration: 0.5,
    })
    

    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".one",
            start: "bottom 95%", 
            end: "center 50%", 
            scrub: true,
        }
    });
   

    timeline.to({}, {
        onStart: function() {
           
            centerCircle.onmouseenter = () => {
                gsap.to("#amulImage", {
                    opacity: 0,
                    duration: 0.5,
                });

                gsap.to(".nav-links", {
                    y: 200,
                    duration: 0.8,
                });
            };

            navBar.onmouseleave = function() {
                gsap.to("#amulImage", {
                    opacity: 1,
                    duration: 0.5,
                });

                gsap.to(".nav-links", {
                    y: -210,
                    duration: 1,
                });
            };
        }
    });
   
    
}



    function bottle() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "top 95%", // Start when the trigger element reaches the top of the viewport
                end: "center 50%", // End when the trigger element is at the center of the viewport
                scrub: true,
            }
        });
    
        tl.to("#bottle", {
            height: "70%", // Increase height of the bottle
            top: "130%", // Move the bottle down
        }, "same");
    
        tl.to("#amul", {
            height: "70%", // Adjust height of the amul image
            top: "100%", // Move the amul image down
        }, "same");
    
        tl.to("#scene", {
            width: "100%", // Increase width of the scene
            opacity: 1, // Fade in the scene
        }, "same");
    
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "top 95%", // Start when the trigger element reaches the top of the viewport
                end: "center 50%", // End when the trigger element is at the center of the viewport
                scrub: true,
            }
        });
    
        tl2.to("#bottle", {
            height: "60%", // Adjust height of the bottle
            top: "220%", // Move the bottle further down
            left: "20%", // Adjust left position of the bottle
        }, 'a');
    
        tl2.to("#scene", {
            opacity: 0, // Fade out the scene
        }, "a");
    
        tl2.to("#amul", {
            opacity: 0, // Fade out the amul image
        }, "a");
    
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".four",
                start: "top 95%", // Start when the trigger element reaches the top of the viewport
                end: "center 80%", // End when the trigger element is 80% down the viewport
                scrub: true,
            }
        });
    
        tl3.to("#bottle", {
            height: "80%", // Increase height of the bottle
            top: "260%", // Move the bottle further down
            rotate: "30deg" // Rotate the bottle
        });
    
        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".four",
                start: "center 80%", // Start when the trigger element is 80% down the viewport
                end: "center 50%", // End when the trigger element is at the center of the viewport
                scrub: true,
            }
        });
    
        tl4.to("#bottle", {
            height: "60%", // Adjust height of the bottle
            top: "320%", // Move the bottle further down
            rotate: 0 // Reset rotation of the bottle
        });
    }
   

loadingPage();