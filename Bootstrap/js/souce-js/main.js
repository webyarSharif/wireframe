function Show_Accordion() {
  const accordionButtons = document.querySelectorAll('.accordion-btn');
  const accordionContents = document.querySelectorAll('.accordion-content');

  accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-accordion-target');
          accordionContents.forEach(content => {
              if (content.id === targetId) {
                  content.classList.remove('d-none');
              } else {
                  content.classList.add('d-none');
              }
          });
      });
  });
}

Show_Accordion();

const search_btn = document.querySelector('#search-btn');
const box_search = document.querySelector('#search-box');
const toogle_search  = document.querySelector('#toogle_search');
const hiddenSearch = document.querySelector('.hiddenSearchBox');

function result (){
  if(search_btn.addEventListener('click' ,() =>{
    box_search.classList.toggle('d-none');
  }));
  if (toogle_search.addEventListener('click' , () => {
    box_search.classList.add('d-none');
  }));
  if (hiddenSearch.addEventListener('click' , () => {
    box_search.classList.add('d-none');
  }));
}

result();


const webyar_top = document.querySelector('.accordion-button');
webyar_top.addEventListener('click' , ()=>{
    console.log("hello")
});