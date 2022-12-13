 // Get the modal
 let modal = document.getElementById("myModal");
      
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 let img = document.getElementById("myImg");
 let modalImg = document.getElementById("img01");
 let captionText = document.getElementById("caption");
 img.onclick = function()
 {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 
 // Get the <span> element that closes the modal
 let span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() 
 { 
   modal.style.display = "none";
 }
/////
let modal1 = document.getElementById("myModal");
 
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 img = document.getElementById("myImg1");
 let modalImg1 = document.getElementById("img02");
 let captionText1 = document.getElementById("caption1");
 img.onclick = function()
 {
   modal1.style.display = "block";
   modalImg1.src = this.src;
   captionText1.innerHTML = this.alt;
 }
 
 // Get the <span> element that closes the modal
 span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal1.style.display = "none";
 }

let modal2 = document.getElementById("myModal");
 
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 img = document.getElementById("myImg2");
 let modalImg2 = document.getElementById("img03");
 let captionText2 = document.getElementById("caption2");
 img.onclick = function()
 {
   modal2.style.display = "block";
   modalImg2.src = this.src;
   captionText2.innerHTML = this.alt;
 }
 
 // Get the <span> element that closes the modal
 span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() 
 { 
   modal2.style.display = "none";
 }
