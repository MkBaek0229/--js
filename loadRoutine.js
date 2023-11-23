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
  $Form1.innerHTML += 
  `<div>
        <input type="text id="plus_Workout Placeholder="찾으시는 운동검색"></input>
        <div id="Select">
        <input type="button" value="북마크✨">
        </input><input type="button" value="하체"></input><input type="button" value="가슴"></input><input type="button" value="등"></input>
    </div>
  `
    
   
}
