let takinput = document.querySelector('.inputbox');
let listcont = document.querySelector('.list-container');
let clk = document.querySelector('.addtask');

clk.addEventListener('click', ()=>{
    if(takinput.value == ""){
        alert("Enter some thing");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = takinput.value;
        li.style.fontWeight = 'bold';
        listcont.appendChild(li);
        takinput.value = "";
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
})

listcont.addEventListener('click', (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});


