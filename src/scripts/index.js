const projectItem = document.querySelector(".projects__item");
const projectsList = document.querySelector(".projects__list");

function addProject() {
  for(let i = 0; i < 25; i++) {
    const project = document.createElement("li");
    project.className = "project__item project";
    project.innerHTML = projectItem.innerHTML;
    projectsList.appendChild(project);
  }
}

addProject();
addProject();

const favoritesButtons = document.querySelectorAll(".project__favorites__button");

favoritesButtons.forEach(btn => {
  btn.addEventListener('click',  function() {
    if(btn.classList.value.includes("project__favorites__button--active")){
      btn.classList.remove("project__favorites__button--active");
    } else{
      btn.classList.add("project__favorites__button--active");
    }
  })
});
