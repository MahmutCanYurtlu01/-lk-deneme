let models=[
{
    name :'Kahve',
    Image:'img/Cappuccino .jpg',
    link:'#'

},
{
    name :'latte',
    Image:'img/Latte .jpg',
    link:'#'
},
{
    name :'türk kahvesi',
    Image:'img/türkkahvesi.jpg',
    link:'#'
}

];

let settings={
        duration:"3000",
        random:false

};


let index=0;
let slayCount=models.length;
let interval;

init(settings);
// sağ ve sol butonuna click elementi oluşturma

// sol buton
 document.querySelector(".fa-chevron-left").addEventListener
 ("click",function(){
      
     index--;
     showSlide(index);
     console.log(index);


 });

// //sağ buton 
 document.querySelector(".fa-chevron-right").addEventListener
 ("click",function(){
          
     index++;
     showSlide(index);
     console.log(index);

    
 });

 document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){

        clearInterval(interval);
    })
 })
 document.querySelectorAll(".arrow").forEach(function(item){
        item.addEventListener("mouseleave",function(){
            init(settings);
        })
 })

function init(settings){

    let prev;
       interval=setInterval(function(){
             if(settings.random){
                
                do {
                    index=Math.floor(Math.random()*slayCount);
                } while (index==prev);
                prev=index;
                                                                         //burda math.floor kullanırken amaç aşağı yuvarlaması ki slaycountun 5. slaytını almasın 4. indexde dursun.
             }
             else{
                if (slayCount==index+1) {
                    index=-1;
                }
                showSlide(index);
                console.log(index);
                index++;

             }
           
             showSlide(index);


       },settings.duration)


};


function showSlide(i){
    index=i;
    if(i<0){
        index=slayCount-1;
    }
    if(i>slayCount){
        index=0;
    }



     
document.querySelector(".card-img-top").
setAttribute("src",models[index].Image);

document.querySelector(".card-title").
textContent=models[index].name;

document.querySelector(".card-link").
setAttribute("href",models[index].link);

};




