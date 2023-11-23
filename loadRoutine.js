function showRoutineForm() {
  const $Form1 = document.querySelector("#routineForm");
  $Form1.innerHTML += `<div>
        <h3>나만의 루틴을 만들어보세요!</h3>
        <form id="RoutineForm">
            <label for="routine_name">루틴 이름:</label>
            <input type="text" id="routine_name" name="Routine Name">
            <button id="ChoiceWorkBtn" type="submit">운동 선택하기</button>
        </form>
    </div>`;

  const $form = document.querySelector("#RoutineForm");
  $form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  const $Form1 = document.querySelector("#routineForm");
  event.preventDefault(); // 기본 제출 동작 방지
  const $input = document.querySelector("#routine_name");
  const routineName = $input.value;
  // 입력된 값 처리 로직 구현
  if(routineName.length > 0){
  $Form1.innerHTML += 
  `<h3>루틴 : ${routineName}에 대한 운동을 선택합니다.</h3>
    <div>
        <input type="text id="plus_Workout Placeholder="찾으시는 운동검색"></input>
        <div id="Select">
        <input id="bookmark" type="button" value="북마크✨">
        </input><input id="leg_ex" type="button" value="하체"></input><input id="chest_ex" type="button" value="가슴"></input><input id="back_ex" type="button" value="등"></input>
    </div>
  `
  const $Bookmark = document.querySelector("#bookmark");
  $Bookmark.addEventListener("click" , bookmark)

  const $Leg = document.querySelector("#leg_ex");
  $Leg.addEventListener("click" ,() => console.log("leg") )

  const $Chest = document.querySelector("#chest_ex");
  $Chest.addEventListener("click" , () => console.log("chest"))

  const $Back = document.querySelector("#back_ex");
 $Back.addEventListener("click" , () => console.log("back"))

} else {
    alert("루틴 제목이 입력 되지않았습니다.")
}
   
}

// 어떤 운동 목록 찾고있는지 버튼 
let button_Switch = 0;
// bookmark 버튼내용 구현
function bookmark(){
    button_Switch = 1;
    console.log(button_Switch)
    const $Form1 = document.querySelector("#routineForm");
    if(button_Switch == 1){
    $Form1.innerHTML += `
    <div>
    <h2>북마크에 저장된 운동이 없습니다.</h2>
    <span>자주 수행하는 운동들을 북마크에 담아보세요</span>
    </div>
    <div>
    <input type="button" value="운동 추가하기"></input>
    </div>
    `
    button_Switch = 0;
} else {
    
}
}

// leg 버튼내용 구현
function leg(){
    button_Switch = 0;
}