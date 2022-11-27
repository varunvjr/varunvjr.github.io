$(document).ready(function(){
    $('#menu').click(function(){
         $(this).toggleClass('fa-times');
         $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
     $('#menu').removeClass('fa-times');
     $('header').removeClass('toggle');
     if($(window).scrollTop()>0){
       $('.top').show();
     }else{
       $('.top').hide();
     }
    });
 
    $(window).on('scroll load',function(){
     $(this).toggleClass('fa-times');
     $('header').toggleClass('toggle');  
    });
    
    $('a[href*="#"]').on('click',function(e){
       e.preventDefault();
       $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top,
       },
          500,
          'linear'
       )
    });
 })
 const submit=document.querySelector("#send")
 submit.addEventListener("click",function(e){
    e.preventDefault();
 const form=document.querySelector("#contactForm");
 const name=document.querySelector("#formName");
 const email=document.querySelector("#formEmail");
 const subject=document.querySelector("#formSubject");
 const message=document.querySelector("#formMessage");
 console.log(email.value)
 // Function to send an email
 Email.send({
    SecureToken : "3d870a50-356d-4213-bdbe-3c999f1ca9fe",
    To : 'raju@pdx.edu',
    From : email.value,
    Subject :subject.value,
    Body : message.value
 }).then(
  message => alert(message)
 );
 
 })
 
 
 