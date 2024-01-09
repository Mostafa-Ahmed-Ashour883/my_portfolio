"use strict"

let sliderImg = document.getElementById("sliderImg");
let slider = document.getElementById("slider");
let showDoc = document.getElementById("showDoc");
let mycontainer = document.getElementById("mycontainer");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let servieces = document.getElementById("servieces");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let darkModeBtn = document.getElementById("darkModeBtn");
let modeContainer = document.getElementById("modeContainer");


let mode = "light";

$("#showDoc").click(()=>{

    $("#mycontainer").toggle(500);
 
})

$(".doc-img").click(()=>{

    $("#mycontainer").show(500)
  
 
   
})


$("#hideDoc").click(()=>{
 
    $("#mycontainer").hide(500)
    
})


$("#closeSlider").click(()=>{

    $("#slider").hide(1)


})

$(".innerImge").click((e)=>{


    let imgSrc = e.target.src;
    slider.style.display='flex';
    sliderImg.src = imgSrc;


})

$(".img").click((e)=>{


    let imgSrc = e.target.src;
    slider.style.display='flex';
    sliderImg.src = imgSrc;


})

let aboutTopPosition = $("#about").offset().top;
let skillsTopPosition = $("#skills").offset().top;
let serviecesTopPosition = $("#servieces").offset().top;




let wScroll;


$(window).scroll(function () {

    wScroll = $(window).scrollTop();
    if(wScroll > aboutTopPosition -100){

        $("nav").css("background","var(--main-color)");
        $(".scroll-up").css("display","block");
        $("#btnUp").fadeIn(500 , function () {

            $("#btnUp").click(function () {


                $(window).scrollTop(0);
                
            })
            
        });
        
    }else{

        $("nav").css("background","transparent");
        $(".scroll-up").css("display","none");
        $("#btnUp").fadeOut(500);
    }
    
})




$(document).ready(function () {


    $("#loading .spinner").fadeOut(1000 , function () {

        $("#loading").fadeOut(500 , function () {

            $(document.body).css("overflow-y" , "auto")
            
        })
    })
    
})
