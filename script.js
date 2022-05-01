import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

// Inmediately invoked function expression IIFE
(  () => {

    const btn = document.querySelector("[data-form-btn]"); //Lo llamamos con un data atribute

    const createTask = evento => {
        evento.preventDefault(); //Evitamos que recargue la pagina
        const input = document.querySelector("[data-form-input");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card"); //le asignamos una clase al li
        console.log(checkComplete());
        const taskContent = document.createElement("div") // creando el div
        taskContent.appendChild(checkComplete()); //le asignamos el check como hijo del div
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask); // le asignamos el span como hijo del div
        task.appendChild(taskContent); //le asignamos el div como hijo del li
        task.appendChild(deleteIcon()); // le asignamos el boton delete como hijo del div
        list.appendChild(task); //el li sera parte del ul lista de tareas

        input.value = ""; //Vaciamos la caja
    };

    //Arrow function o funcion anonima
    btn.addEventListener("click", createTask);

})();