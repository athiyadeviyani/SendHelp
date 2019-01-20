 var modal = document.querySelector(".modal");
 var trigger = document.querySelector(".trigger");
 var closeButton = document.querySelector(".close-button");

 function toggleModal() {
     modal.classList.toggle("show-modal");
 }

 function windowOnClick(event) {
     if (event.target === modal) {
         toggleModal();
     }
 }

 trigger.addEventListener("click", toggleModal);
 closeButton.addEventListener("click", toggleModal);
 window.addEventListener("click", windowOnClick);

 var modal1 = document.querySelector(".modal1");
 var trigger1 = document.querySelector(".trigger1");
 var closeButton1 = document.querySelector(".close-button1");

 function toggleModal1() {
     modal1.classList.toggle("show-modal1");
 }

 function windowOnClick1(event) {
     if (event.target === modal1) {
         toggleModal1();
     }
 }

 trigger1.addEventListener("click", toggleModal1);
 closeButton1.addEventListener("click", toggleModal1);
 window.addEventListener("click", windowOnClick1);


