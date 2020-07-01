console.log("This is new App")

//This project use localStorage concept....we are adding notes into local storage 

let addBtn = document.getElementById("addBtn");
showNotes()
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    console.log(notes)
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes()
})


//Fetching data from localStorage
function showNotes()
{
    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes)
    }
    let html="";
    notesObj.forEach(function(elements,index){
        html+=` <div id="notes" class="row container-fluid">
        <div class="my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${elements}</p>
                <button id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let noteElem=document.getElementById("notes");
    if( notesObj.length!=0)
    {
        noteElem.innerHTML=html;
    }
    else
    {
        noteElem.innerHTML="<h2>No Notes saved yet</h2>"
    }
}


//Delete note

function DeleteNote(index)
{
    console.log(`I am Deleting ${index+1}st note`)

    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}