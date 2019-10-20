let list = document.querySelector('ul'),
    todos;
if(localStorage.getItem('todos')){
  list.innerHTML=localStorage.getItem('todos');
}
const toLocal = () =>{
  todos=list.innerHTML;
  localStorage.setItem('todos',todos);
}

list.addEventListener('click', (ev) => {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
       toLocal();
    } 
    if(ev.target.tagName === "SPAN") {
      let div = ev.target.parentNode;
       div.remove();
       toLocal();
    }
    
}, false);

const newEl = () => {
  let li = document.createElement('li'),
     inputValue = document.getElementById('toDoEl').value;
     li.className="toItem";
     if(inputValue == "") {
      inputValue = "Пусто";
    } 
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
       document.getElementById('list').appendChild(li);
    
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN'),
     txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();
}
document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    newEl();
  }
});
