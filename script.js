let subBtn=document.querySelectorAll('.subBtn')
let ttl=document.querySelector('.title')
let desc=document.querySelector('.desc')
let crossSymbol=document.querySelector('crossSymbol')

addNote = () => {
    if (!ttl.value) {
        alert("Empty title not allowed");
    } else {
        var obj = {
            title: ttl.value,
            desc: desc.value,
            id: Date.now()
        };

        // Retrieve existing todos from localStorage
        var existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

        // Add the new object to the existing todos
        existingTodos.push(obj);

        // Update the todos in localStorage
        localStorage.setItem("todos", JSON.stringify(existingTodos));

        // Perform any additional operations like updating the UI
        addItem(obj);
        clearField();
        
    }
};

addItem=(obj)=>{
    const notesContainer = document.getElementById('notesContainer');
    const noteElement = document.createElement('div');
    noteElement.className="notesBox"
    noteElement.innerHTML = `
     <div class="crossSymbol" onclick="deleteToDo(${obj.id})">&#x2716;</div>
     <p class="displayTitle" >${ttl.value}</p>
     <p class="displayDesc">${desc.value}</p>
    `;
    notesContainer.prepend(noteElement);
}
clearField=()=>{
    let ttl=document.querySelector('.title')
    let desc=document.querySelector('.desc')
    ttl.value="";
    desc.value="";
}
displayNotes = () => {
    const notesContainer = document.getElementById('notesContainer');
    const value = localStorage.getItem("todos");

    if (value && value.length > 0) {
        let todos = JSON.parse(value);

        for (let i = 0; i < todos.length; i++) {
            const noteElement = document.createElement('div');
            noteElement.className = "notesBox";
            noteElement.innerHTML = `
                <div class="crossSymbol" onclick="deleteToDo(${todos[i].id})">&#x2716;</div>
                <p class="displayTitle">${todos[i].title}</p>
                <p class="displayDesc">${todos[i].desc}</p>
            `;
            notesContainer.prepend(noteElement);
        }
    }
};


displayNotes()
deleteToDo=(id)=>{
    //first of all we need to get all the local storage to matc id
    var existingTodos = JSON.parse(localStorage.getItem("todos")); //"existingTodos" is array of objects
    existingTodos= existingTodos.filter((arr)=>arr.id !== id ) //"existingTodos" is update , now it dont have notes of that id
    localStorage.setItem("todos", JSON.stringify(existingTodos));
 // Reload the page
 location.reload();

}
deleteAllNotes=()=>{
    // alert("all notes will be deleted")
    localStorage.clear(); //delete krne se delete to ho gaya,dom ko bhi update krna pdega  
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = `
   `;
}




