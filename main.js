const close = document.getElementsByClassName('closeSpan')
/** querySelector : 한가지 요소만 가져오며, 동일한 요소가 있으면 첫번째 요소만 가져온다.
 * getElementsBy, getElementsBy : 배열 요소로 동일 한 모든 name을 가져오기 때문에 무조건 배열로 접근해야 한다. getElementsById는 별개임. id는 한개만 존재 가능하니까.
 *
 * ul태그가 한개만 존재하기 때문에 이럴 때는 querySelector를 사용하는 것도 나쁘지 않아 보인다.
*/
const list = document.querySelector('ul')
let li = document.createElement('li')
const addBtn = document.getElementById('addBtn')
const addInput = document.getElementById('addInput')

/** 추가 */
function addElement () {
  li = document.createElement('li')
  const addInputVlaue = addInput.value
  const txt = document.createTextNode(addInputVlaue)

  if (addInputVlaue === '') {
    alert('내용을 입력 해주세요')
    return false
  }

  // 등록일자 생성
  const dateSpan = document.createElement('dateSpan')
  const date = new Date()
  const regiDate = document.createTextNode(date.getYear() + 1900 + '년' + date.getMonth() + 1 + '월' + date.getDate() + '일')

  dateSpan.className = 'dateSpan' 
  dateSpan.appendChild(regiDate)

  li.appendChild(dateSpan)

  // 입력내용 생성
  li.appendChild(txt)

  list.appendChild(li)

  document.getElementById('addInput').value = ''

  // 닫기버튼 생성
  const closeSpan = document.createElement('closeSpan')
  const closeTxt = document.createTextNode('\u00D7')

  closeSpan.className = 'closeSpan'
  closeSpan.appendChild(closeTxt)

  li.appendChild(closeSpan)

  for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      const li = this.parentElement
      li.remove()
      addInput.focus()
    })
  }

  addInput.focus()
}

/** 리스트 클릭 시 완료 표시 */
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked')
  }
})

function enterKey (event) {
  if (event.keyCode == 13) {
    addElement()
  }
}

/** 이벤트 **************************************************************************/

/** 추가버튼 클릭 */
addBtn.addEventListener('click', addElement)

/** 입력칸 엔터 */
addInput.addEventListener('keydown', enterKey)
