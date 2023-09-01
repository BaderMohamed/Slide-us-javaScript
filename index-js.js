var imgList = document.getElementsByClassName("item-img");
var imgArray=[];
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var prevBtn =document.getElementById("prev");
var nextBtn =document.getElementById("next");
var closeBtn =document.getElementById("close");
var currentSlideIndex = 0;

for (var i=0;i<imgList.length; i++)
{
    imgArray.push(imgList[i]);
    
    imgArray[i].addEventListener("click" , function(e){

        currentSlideIndex = imgArray.indexOf(e.target);

        lightBoxContainer.style.display ="flex";
        var imgSrc = e.target.getAttribute("src");
       lightBoxItem.style.backgroundImage =`url(${imgSrc})`;







       document.body.addEventListener("keydown",function(e){
        if(e.keyCode == 39)
        {
            nextSlide();
        }
        else if(e.keyCode == 37)
        {
            prevSlide();
        }
        else if(e.keyCode == 27)
        {
            closeSlide();
        }
    })



    })
}
function nextSlide(){
    currentSlideIndex++;
  if(currentSlideIndex==imgArray.length)
  {
    currentSlideIndex=0;
  }
    lightBoxItem.style.backgroundImage =`url(${imgArray[currentSlideIndex].getAttribute("src")})`;

}
function prevSlide(){
    currentSlideIndex--;
  if(currentSlideIndex<0)
  {
    currentSlideIndex=imgArray.length -1;
  }
    lightBoxItem.style.backgroundImage =`url(${imgArray[currentSlideIndex].getAttribute("src")})`;

}
function closeSlide(){
    lightBoxContainer.style.display ="none";
}
lightBoxContainer.addEventListener("click",function(e){
    if(e.target.id != "lightBoxItem" && e.target.id != "prev" && e.target.id != "next")
    {
        closeSlide();
    }
})

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);
















