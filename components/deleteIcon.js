//Creando el boton de eliminar
const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

//Eliminar tarea
const deleteTask = (evento) => {
    const parent = evento.target.parentElement; //Nos trae el padre
    parent.remove(); //Eliminamos el padre
}

export default deleteIcon;