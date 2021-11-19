const list = document.querySelector(".to-do__list");
const btn = document.querySelector(".to-do__btn");

const toogleCheckbooxActive =  function(){
    event.target.classList.toggle("to-do__checkboox--active");
}
const toogleTaskActive =  function(){
    event.target.nextElementSibling.classList.toggle("to-do__task--active");
}
const completTask =  function(){
    toogleCheckbooxActive();
    toogleTaskActive();
}


const deletTask =  function(){
    event.target.parentElement.remove();
}

const createTextItem = function (text) {
    let textTask = document.querySelector(".to-do__input").value;
    document.querySelector(".to-do__input").value = "";
    return textTask;
}
const createItem = function (text) {
    let newTask = document.createElement("div");
    newTask.classList.add("to-do__item");
    newTask.innerHTML =`
    <div class="to-do__checkboox "></div>
    <div class="to-do__task">${createTextItem()}</div>
    <div class="to-do__edit"></div>
    <div class="to-do__cart"></div>
    `
    list.append(newTask);
}

const closeEditForm = function (){
    document.querySelector(".to-do__edit-window").classList.add("to-do__edit-window--none");
    document.querySelector(".to-do__edit-form").classList.add("to-do__edit-form--none");
}
const showEditForm = function (){
    document.querySelector(".to-do__edit-window").classList.remove("to-do__edit-window--none");
    document.querySelector(".to-do__edit-form ").classList.remove("to-do__edit-form--none");
    document.addEventListener("click", function (event) {
        if(event.target.closest('.to-do__cancell-btn')){
            closeEditForm();
        }
    });

    changeTextTask();
}
const changeTextTask = function (){
    let task = event.target.previousElementSibling;
    document.querySelector(".to-do__edit-btn").onclick = function(){
        event.preventDefault();
        if(document.querySelector(".to-do__edit-input").value == "") return;
        task.innerHTML = `${document.querySelector(".to-do__edit-input").value}`;
        document.querySelector(".to-do__edit-input").value = "";
        closeEditForm();
    };
}
const editTask = function () {
    showEditForm();
}

const closeEror = function (){
    document.querySelector(".to-do__eror").classList.add("to-do__eror--none");
    document.querySelector(".to-do__eror-window").classList.add("to-do__eror-window--none");
}
const showEror = function (){
    document.querySelector(".to-do__eror").classList.remove("to-do__eror--none");
    document.querySelector(".to-do__eror-window").classList.remove("to-do__eror-window--none");

    document.querySelector(".to-do__eror").addEventListener("click", function(event){
        if(!event.target.closest('.to-do__eror-window')) closeEror();
    })
}


btn.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".to-do__input").value != "" ? createItem(): showEror();
});

list.addEventListener("click", function(event){
    if(event.target.closest('.to-do__checkboox')) completTask();
    if(event.target.closest('.to-do__cart')) deletTask();
    if(event.target.closest('.to-do__edit')) editTask();
});