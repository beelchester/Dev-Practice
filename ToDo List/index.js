const input = document.getElementById('text');
const btn = document.getElementById('btn');
const ul = document.querySelector('ul')
    
btn.addEventListener('click',createListElement);

function createListElement() {
    if (input.value.length > 0){
	let li = document.createElement("li");
    txtNode = document.createTextNode(input.value)
	li.appendChild(txtNode); 
    button = document.createElement("button")
    button.innerHTML=" done"
    li.append(` `)
	li.appendChild(button);
	ul.appendChild(li); 
    button.addEventListener('click',stk);
    function stk(){
        li.remove()
    }
	input.value = ""; }
}

// ? Add deleted tasks to array
// ? Call array lists in completed expandable div
// ? Add reverse function to revert completed task to task list
