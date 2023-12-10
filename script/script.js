let form = document.querySelector(".todo_form");
let list = document.querySelector(".todo_list");
let input = document.querySelector(".todo_form_input")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
function add() {
    if (input.value == "") {
        alert("write something!")
    } else {
        let p = document.createElement("p")
        let btn = document.createElement("button")
        let listDiv = document.createElement("div")
        list.appendChild(listDiv)
        listDiv.classList.add("todo_list_div")
        btn.classList.add("todo_list_div_button")
        btn.textContent = "DELETE";
        p.textContent = input.value;
        listDiv.appendChild(p);
        listDiv.appendChild(btn)
        p.classList.add("todo_item")
        input.value = "";
        listDiv.addEventListener("click", () => {
            p.classList.toggle("checked")
        })
        btn.addEventListener("click", () => {
            listDiv.remove();
        })
    }
}

