var ul = document.getElementById("ulist");


document.getElementById("AddBtn").addEventListener("click", function (e) {
    e.preventDefault();

    var addinput = document.getElementById("inputText");

    if (addinput.value !== "") {
        var li = document.createElement("li");
        var paraFirst = document.createElement("p");
        var paraSecound = document.createElement("p");
        var iconDelete = document.createElement("i");
        var iconEdit = document.createElement("i");
        var input = document.createElement("input");


        iconDelete.className = "fa fa-pencil-square-o";
        iconEdit.className = "fa fa-times";

        input.className = "edit-note";
        input.setAttribute('type', 'text');

        paraFirst.textContent = addinput.value;
        paraSecound.appendChild(iconDelete);
        paraSecound.appendChild(iconEdit);

        li.appendChild(paraFirst);
        li.appendChild(paraSecound);
        li.appendChild(input);

        ul.appendChild(li);
        addinput.value = "";
    }
})

ul.addEventListener("click", function (e) {
    if (e.target.classList[1] === "fa-times") {
        var parentPara = e.target.parentNode.parentNode;
        console.log(parentPara);
        parentPara.parentNode.removeChild(parentPara);
    }
    else if (e.target.classList[1] === "fa-pencil-square-o") {
        var btns = e.target.parentNode;
        var text = btns.previousElementSibling;
        var input = btns.nextElementSibling;
        input.value = text.textContent;

        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                text.textContent = input.value;
            }
        })
        console.log(text);


    }
})



























// var input = document.getElementById("inputText");
// var btn = document.getElementById("btnn");
// var ul = document.getElementById("ulist");
// var Listli = [];
// var counter = 0;
// var listOfbtns;

// console.log(listOfbtns);

// function addListItem() {

//     if (input.value !== "") {
//         li = document.createElement("li");
//         li.name = counter;

//         newbtn = document.createElement("button");
//         newbtn.innerText = "Edit";
//         newbtn.name = counter;

//         newbtn1 = document.createElement("button");
//         newbtn1.innerText = "delete";
//         newbtn1.name = counter;

//         li.append(document.createTextNode(input.value));
//         li.append(newbtn);
//         li.append(newbtn1);

//         ul.append(li);
//         Listli.push(li);
//         input.value = "";
//         counter++;
//     }
// }

// function enterPress(event) {
//     if (event.which === 13) {
//         addListItem();
//     }
// }

// btn.addEventListener("click", addListItem);

// input.addEventListener("keypress", enterPress);

// document.body.addEventListener("click", function (e) {
//     var targetbtn = e.target;
//     var liItem;

//     // Listli.find(e.target)
//     for (var i = 0; i < Listli.length; i++) {
//         liItem = Listli.find(e.target);
//         console.log(liItem);
//     }

//     if (targetbtn) {
//         if (targetbtn.innerText === "delete") {
//             // console.log(Listli);
//         }
//     }
// })

