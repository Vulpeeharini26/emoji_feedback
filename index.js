let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");
let imageCon=document.getElementById("imageCon");
let img = document.createElement("img");
let feedback = document.createElement("p");
let s1=false;
let s2=false;
let s3=false;
let s4=false;
let s5=false;


star1.onclick = function () {
  s1=true;
  star1.classList.remove("fa-regular", "fa-star", "star");
  star1.classList.add("fa-solid","fa-star","star");
 
  img.src="https://toppng.com/uploads/preview/emoji-anger-emoticon-iphone-angry-emoji-115630146799aeoop7kx6.png";
  imageCon.appendChild(img);
  img.classList.add("img");
  imageCon.appendChild(feedback);
  feedback.textContent="Terrible";
  if(s2===true ){
    star2.classList.remove("fa-solid","fa-star","star");
     star2.classList.add("fa-regular", "fa-star", "star");
    s2=false;
  }
 
  if(s3===true ){
    star3.classList.remove("fa-solid","fa-star","star");
    star3.classList.add("fa-regular", "fa-star", "star");
    s3=false;
  }
  if(s4===true ){
    star4.classList.remove("fa-solid","fa-star","star");
     star4.classList.add("fa-regular", "fa-star", "star");
    s4=false;
  }
  if(s5===true ){
    star5.classList.remove("fa-solid","fa-star","star");
     star5.classList.add("fa-regular", "fa-star", "star");
    s5=false;
  }
 
};
star2.onclick= function(){
  s1=true;
  s2=true;
  
  star1.classList.remove("fa-regular", "fa-star", "star");
  star1.classList.add("fa-solid","fa-star","star");
  star2.classList.remove("fa-regular", "fa-star", "star");
  star2.classList.add("fa-solid","fa-star","star");
  
  img.src="https://tse1.mm.bing.net/th?id=OIP.DKClJYS7aPCFHJ7Vfi8zuAHaEK&pid=Api&P=0&h=180";
  imageCon.appendChild(img);
  img.classList.add("img");
  imageCon.appendChild(feedback);
  feedback.textContent="Moderate";
  

  if(s3===true ){
    star3.classList.remove("fa-solid","fa-star","star");
    star3.classList.add("fa-regular", "fa-star", "star");
    s3=false;
  }
  if(s4===true ){
    star4.classList.remove("fa-solid","fa-star","star");
     star4.classList.add("fa-regular", "fa-star", "star");
    s4=false;
  }
  if(s5===true ){
    star5.classList.remove("fa-solid","fa-star","star"); 
    star5.classList.add("fa-regular", "fa-star", "star");
    s5=false;
  }
}
star3.onclick =  function(){
   s1=true;
  s2=true;
  s3=true;
  
    star1.classList.remove("fa-regular", "fa-star", "star");
  star1.classList.add("fa-solid","fa-star","star");
  star2.classList.remove("fa-regular", "fa-star", "star");
  star2.classList.add("fa-solid","fa-star","star");
  star3.classList.remove("fa-regular", "fa-star", "star");
  star3.classList.add("fa-solid","fa-star","star");
  
  img.src="https://i.pinimg.com/736x/17/d2/5b/17d25b235339bc1cea30f02009d6c1de.jpg";
  imageCon.appendChild(img);
  img.classList.add("img");
  imageCon.appendChild(feedback);
  feedback.textContent="Average";
   if(s4===true ){
    star4.classList.remove("fa-solid","fa-star","star");
     star4.classList.add("fa-regular", "fa-star", "star");
    s4=false;
  }
  if(s5===true ){
    star5.classList.remove("fa-solid","fa-star","star");
     star5.classList.add("fa-regular", "fa-star", "star");
    s5=false;
  }
}
star4.onclick =  function(){
  s1=true;
  s2=true;
  s3=true;
  s4=true;
    star1.classList.remove("fa-regular", "fa-star", "star");
  star1.classList.add("fa-solid","fa-star","star");
  star2.classList.remove("fa-regular", "fa-star", "star");
  star2.classList.add("fa-solid","fa-star","star");
  star3.classList.remove("fa-regular", "fa-star", "star");
  star3.classList.add("fa-solid","fa-star","star");
    star4.classList.remove("fa-regular", "fa-star", "star");
  star4.classList.add("fa-solid","fa-star","star");
  
  img.src="http://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_grande.png?v=1480481059";
  imageCon.appendChild(img);
  img.classList.add("img");
  imageCon.appendChild(feedback);
  feedback.textContent="Good";
   if(s5===true ){
    star5.classList.remove("fa-solid","fa-star","star");
     star5.classList.add("fa-regular", "fa-star", "star");
    s5=false;
  }

}

star5.onclick =  function(){
  s1=true;
  s2=true;
  s3=true;
  s4=true;
  s5=true;
    star1.classList.remove("fa-regular", "fa-star", "star");
  star1.classList.add("fa-solid","fa-star","star");
  star2.classList.remove("fa-regular", "fa-star", "star");
  star2.classList.add("fa-solid","fa-star","star");
  star3.classList.remove("fa-regular", "fa-star", "star");
  star3.classList.add("fa-solid","fa-star","star");
    star4.classList.remove("fa-regular", "fa-star", "star");
  star4.classList.add("fa-solid","fa-star","star");
   star5.classList.remove("fa-regular", "fa-star", "star");
  star5.classList.add("fa-solid","fa-star","star");

  
  img.src="https://tse1.mm.bing.net/th?id=OIP.9m2q6vRnBpycT0Rw_5wqcgHaHa&pid=Api&P=0&h=180";
  imageCon.appendChild(img);
  img.classList.add("img");
  imageCon.appendChild(feedback);
  feedback.textContent="Great";

}
