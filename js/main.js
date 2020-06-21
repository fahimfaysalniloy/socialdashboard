

//getting elements

const checkbox = document.querySelector("#checkbox");
const bigcards = document.querySelectorAll(".card-top");
const smallcards = document.querySelectorAll(".small-cards");

//listenng toggle click
checkbox.addEventListener('click',changeTheme);
//changing theme
function changeTheme(){
  if(checkbox.checked){
      body.classList.add('dark-body');


      bigcards.forEach((card)=> {
          card.classList.add('dark-cards');

      })
      smallcards.forEach((card)=>{
        card.classList.add('dark-cards');
      })
    } else {
        body.classList.remove('dark-body');


      bigcards.forEach((card)=> {
          card.classList.remove('dark-cards');

      })
      smallcards.forEach((card)=>{
        card.classList.remove('dark-cards');
      })
    }

}
