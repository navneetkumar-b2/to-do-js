let subBtn=document.querySelectorAll('.subBtn')
let ttl=document.querySelector('.title')
let desc=document.querySelector('.desc')
addNote=()=>{
    if(!ttl.value){
        alert("empty title not allowed")
    }
    else{
        localStorage.setItem(ttl.value, desc.value);
      
        clearField()
        displayNotes()

    }
}
clearField=()=>{
    let ttl=document.querySelector('.title')
    let desc=document.querySelector('.desc')
    ttl.value="";
    desc.value="";
}
displayNotes=()=>{
    const notesContainer = document.getElementById('notesContainer');
    // Iterate through local storage keys and display the notes
    for (let i = 0; i < localStorage.length; i++) {
        // <div class="crossSymbol">&#x2716;</div>
        // <div class="checkboxSymbol">&#x2714;</div>

        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const noteElement = document.createElement('div');
        noteElement.className="notesBox"
        noteElement.innerHTML = `
         <div class="crossSymbol">&#x2716;</div>
            <p class="displayTitle" >${key}</p>
            <p class="displayDesc">${value}</p>
        `;
        notesContainer.appendChild(noteElement);
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


