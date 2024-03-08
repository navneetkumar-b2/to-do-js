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
        addItem();
        clearField();
        console.log(existingTodos);
    }
};

addItem=()=>{
    const notesContainer = document.getElementById('notesContainer');
    const noteElement = document.createElement('div');
    noteElement.className="notesBox"
    noteElement.innerHTML = `
     <div class="crossSymbol">&#x2716;</div>
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
displayNotes=()=>{
    const notesContainer = document.getElementById('notesContainer');
    const value = localStorage.getItem("todos"); 
   if(value && value.length > 0) {
    let to=JSON.parse(value); //this shouls be a array

    // Iterate through local storage keys and display the notes
    for (let i = 0; i < to.length; i++) {
        // <div class="crossSymbol">&#x2716;</div>
        // <div class="checkboxSymbol">&#x2714;</div>

        // const value = localStorage.getItem(key);

        const noteElement = document.createElement('div');
        noteElement.className="notesBox"
        noteElement.innerHTML = `
         <div class="crossSymbol">&#x2716;</div>
            <p class="displayTitle" >${to[i].title}</p>
            <p class="displayDesc">${to[i].desc}</p>
        `;
        notesContainer.appendChild(noteElement);
    }
}
}

displayNotes()

deleteAllNotes=()=>{
    // alert("all notes will be deleted")
    localStorage.clear(); //delete krne se delete to ho gaya,dom ko bhi update krna pdega  
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = `
   `;
}




