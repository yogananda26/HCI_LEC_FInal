const slider = document.querySelector(".movie_content");
const slider1 = document.querySelector(".movie_content1");
const slider2 = document.querySelector(".movie_content2");
const slider3 = document.querySelector(".movie_content3");
const slider4 = document.querySelector(".movie_content4");
const change_class = document.querySelector(".humberger");
const more_list = document.querySelector(".more_in_humberger");
const body = document.querySelector('body'); 

var counter = 0; 
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;



change_class.addEventListener('click', function (){  
    const span = change_class.classList.toggle('is-active');
    more_list.classList.toggle('is-active');
    // body.classList.toggle('is-active'); 
    go_some(span);
})


const go_some = (span) =>{
    if(span){
        body.style.overflow = "hidden";
    }
    else{
        body.style.overflow = "auto"; 
        body.style.overflowX = "hidden"; 
    }
}

const go_next = () =>{
    if(counter > 1){
        return; 
    }
    counter++;
    slider.style.transform = `translateX(-${counter*30}%)`
    
}
const go_prev = () =>{
    if(counter <= 0){
        return
    }
    counter--;
    slider.style.transform = `translateX(-${counter*30}%)`
}
// this si for second slider
const go_next1 = () =>{
    if(counter1 > 1){
        return; 
    }
    counter1++;
    slider1.style.transform = `translateX(-${counter1*30}%)`
    
}
const go_prev1 = () =>{
    if(counter1 <= 0){
        return
    }
    counter1--;
    slider1.style.transform = `translateX(-${counter1*30}%)`
}
// this is for third slider
const go_next2 = () =>{
    if(counter2 > 1){
        return; 
    }
    counter2++;
    slider2.style.transform = `translateX(-${counter2*30}%)`
    
}
const go_prev2 = () =>{
    if(counter2 <= 0){
        return
    }
    counter2--;
    slider2.style.transform = `translateX(-${counter2*30}%)`
}

// this is for forth slider
const go_next3 = () =>{
    if(counter3 > 1){
        return; 
    }
    counter3++;
    slider3.style.transform = `translateX(-${counter3*30}%)`
    
}
const go_prev3 = () =>{
    if(counter3 <= 0){
        return
    }
    counter3--;
    slider3.style.transform = `translateX(-${counter3*30}%)`
}

// this is for fifth slider 

const go_next4 = () =>{
    if(counter4 > 1){
        return; 
    }
    counter4++;
    slider4.style.transform = `translateX(-${counter4*30}%)`
    
}
const go_prev4 = () =>{
    if(counter4 <= 0){
        return
    }
    counter4--;
    slider4.style.transform = `translateX(-${counter4*30}%)`
}