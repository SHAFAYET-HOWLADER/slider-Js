


const images = [
    "images/forest (1).jpg",
    "images/forest (2).jpg",
    "images/forest (3).jpg",
    "images/forest (4).jpg",
    "images/forest (5).jpg",
]

const imageId = document.getElementById("img_slider");
let imageIndex = 0;
setInterval(()=>{
   if(imageIndex >= images.length){
    imageIndex = 0;
   }
   const imgUrl = images[imageIndex];
   imageId.setAttribute("src", imgUrl);
   imageIndex++;
},3000)

