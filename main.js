let close = document.getElementsByClassName("close");
/**querySelector : 한가지 요소만 가져오며, 동일한 요소가 있으면 첫번째 요소만 가져온다. */
let list = document.querySelector('ul');
let li = document.createElement("li");
let addBtn = document.getElementById("addBtn");

/**추가 */
function addElement() {
    li = document.createElement("li");
    let addInput = document.getElementById("addInput").value;
    let txt = document.createTextNode(addInput);

    if(addInput === '') {
        alert("내용을 입력 해주세요");
        return false;
    }

    li.appendChild(txt);
    
    list.appendChild(li);

    document.getElementById("addInput").value = "";

    let span = document.createElement("span");
    let closeTxt  = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(closeTxt);

    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var li = this.parentElement;
            li.style.display = "none";
        }
    }    

    console.log("listTag : " + listTag);
    console.log("list : " + list);
    
}

/**리스트 클릭 시 완료 표시 */
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
});

/**추가버튼 클릭 */
addBtn.addEventListener('click', addElement);