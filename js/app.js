
///function ........................................

function addItem(event){
    const input = document.querySelector("#add-food-textfield");

    document.querySelector('.result').style.display = 'block';
    document.querySelector('#wrapper').style.display = 'none';


    if (input.value === "") return  confirm("Please write the Name of food")

// create li and span
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.className ="name";
    span.textContent= input.value;
// radio add to span
    let result = "";
    let span1 = document.createElement("span");
    let radios = document.querySelectorAll("input[name=chooseSelect]");

    for(let radio of radios){
        if (radio.checked){
            result = radio.value;
        }
    }
    span1.textContent = result;

//add price to span
    let span2 = document.createElement("span");
    let price = document.querySelector("#write-cost");
    span2.textContent = price.value;


//add date to span
    let span3 = document.createElement("span");
    let date = document.querySelector("#choose-date");
    span3.textContent = date.value;


    //add remove to span
    let remove = document.createElement("span");
    remove.className = "remove";
    remove.textContent="remove";


    //add message to span
    let span4 = document.createElement("span");
    let message = document.querySelector("#sms");
    span4.textContent = message.value;



//add span and remove to li
    li.appendChild(span);
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    li.appendChild(span4);
    li.appendChild(remove);
//add li to div
    const divAdd = document.querySelector(".food-list");
    divAdd.appendChild(li);

    // clear
    input.value = "";




}
///// click on button remove
function removeButton(event){
    
    const btnremove = event.target.className;
    if ( btnremove == "remove") {
        const reBtn = event.target.parentElement;
        reBtn.remove();
    }

}

function buttonShow (event){
    const show = document.getElementById("wrapper");
    show.style.display = "block";
    document.querySelector('.result').style.display = 'none';

}



let search = document.querySelector("span");
    console.log(search);





/// search

//
function searchFood (event){
    let text = btnSearchIntput.value.toLowerCase();
    let listFood=document.querySelectorAll('li');
    for (let div of listFood){
      let title =div.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(text)===-1){
        div.style.display="none";
      }else{
        div.style.display="";
      };
    }
}





let buttonremove = document.querySelector(".food-list");
buttonremove.addEventListener("click", removeButton);


let btnAdd = document.querySelector(".button-add");
btnAdd.addEventListener("click", addItem);

let btnSearchIntput = document.getElementById('search-food');
btnSearchIntput.addEventListener('keyup',searchFood);

  