window.addEventListener("load", RoutineBtnclick);

const $RoutineBtn = document.querySelector("#RTBT");
let $Routine = document.querySelector("#Myroutine");
let RoutineCount = 0;


let Routine_list = JSON.parse(localStorage.getItem("key")) || [];



// 불러오기 버튼 눌렀을시 최초
function RoutineBtnclick() {
  if ($Routine.style.display == "none") {
    $Routine.style.display = "block";
    console.log("RtbtnOn");
    const $Form1 = document.querySelector("#routineForm");

    localStorage.setItem("key" , JSON.stringify(Routine_list))
    const saveRoutine = JSON.parse(localStorage.getItem("key"))

    $Form1.innerHTML = `<strong>민기님의 루틴</strong><input id="plus_Routine" type="button" value="추가"></input>

    <p>전체 ${saveRoutine.length}개</p>

          <div id="save_Routine"> 
              <h2>루틴 목록 
              <ol class="first_ul">
              ${saveRoutine.map((saveRoutine) => `<li id="${saveRoutine.id}" class="Routine_click">${saveRoutine.routineName}${saveRoutine.routineList}<button id="work_start">운동시작</button></li>`).join(" ")}
              </ol>
              </h2>
          </div>
      `;
    
    const $addButton = document.querySelector("#plus_Routine");
    $addButton.addEventListener("click", showRoutineForm);
  } else {
    $Routine.style.display = "none";
    console.log("RtbtnOff");
  }
  const $work_start = document.querySelectorAll("#work_start");
  $work_start.forEach((startbutton) => {
  startbutton.addEventListener("click", () => startwork(startbutton));
  startbutton.addEventListener("click", () => stopwacth() )
})
}



$RoutineBtn.addEventListener("click", RoutineBtnclick);

function showRoutineForm() {
  const $Form1 = document.querySelector("#routineForm");
  $Form1.innerHTML = `<div>
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

let routineName = "";

function handleSubmit(event) {
  const $Form1 = document.querySelector("#routineForm");
  event.preventDefault(); // 기본 제출 동작 방지
  const $input = document.querySelector("#routine_name");
  routineName = $input.value;
  console.log(routineName);
  // 입력된 값 처리 로직 구현
  if (routineName.length > 0) {
    RoutineCount += 1;
    console.log(RoutineCount);
    $Form1.innerHTML = `
    <h3>루틴 : ${routineName}에 대한 운동을 선택합니다.</h3>
    <div class="choice_work">
        <input type="text id="plus_Workout" Placeholder="찾으시는 운동검색"></input>
        <div id="Select">
        <input id="bookmark" type="button" value="북마크✨"></input>
        <input id="leg_ex" type="button" value="하체"></input>
        <input id="chest_ex" type="button" value="가슴"></input>
        <input id="back_ex" type="button" value="등"></input>
        </div>
    </div>
    <div>
      <h1>선택한 운동</h1><button id="save">저장하기</button>
      <ul class="choice_worklist"></ul>
    </div>
   `;
    const $Bookmark = document.querySelector("#bookmark");
    $Bookmark.addEventListener("click", bookmark);

    const $Leg = document.querySelector("#leg_ex");
    $Leg.addEventListener("click", leg);

    const $Chest = document.querySelector("#chest_ex");
    $Chest.addEventListener("click", chest);

    const $Back = document.querySelector("#back_ex");
    $Back.addEventListener("click", back);
  } else {
    alert("루틴 제목이 입력 되지않았습니다.");
  }

  const $saveButton = document.querySelector("#save");
  $saveButton.addEventListener("click", () => save(routineName));
}

// 저장버튼누르면 처음폼으로돌아가도록
function save(routineName) {
  const newWorkObj = {
    routineName: routineName,
    id: Date.now(),
    routineList: selectedExercises,
  };
  selectedExercises = [];
  Routine_list.push(newWorkObj);
  // localstrogae에 저장해놓기? 문제! 문자형(string) 데이터 타입만 지원받음. 객체형 데이터를 어떻게 저장할까?
  // json 형태로 데이터를 읽고 쓰게하자.
  localStorage.setItem("key" , JSON.stringify(Routine_list))
  const saveRoutine = JSON.parse(localStorage.getItem("key"))
  console.log(saveRoutine);
  const $Form1 = document.querySelector("#routineForm");
  $Form1.innerHTML = `<strong>민기님의 루틴</strong><input id="plus_Routine" type="button" value="추가"></input>

      <p>전체 ${RoutineCount}개</p>

      <div id="save_Routine"> 
          <h2>루틴 목록 
          <ol class="first_ul">          
          </ol>
          </h2>
      </div>
  `;  
  
  const $first_ul = document.querySelector(".first_ul");
  $first_ul.innerHTML += saveRoutine.map((saveRoutine) => `<li id="${saveRoutine.id}" class="Routine_click">${saveRoutine.routineName}${saveRoutine.routineList}<button id="work_start">운동시작</button></li>`).join(" ")
  

  const $addButton = document.querySelector("#plus_Routine");
  $addButton.addEventListener("click", showRoutineForm);

  const $save_routines = document.querySelectorAll(".Routine_click");
  console.log($save_routines);
  $save_routines.forEach(($save_routine) => {
    $save_routine.addEventListener("click", (event) => console.log(event))
  });

  const $work_start = document.querySelectorAll("#work_start");
  $work_start.forEach((startbutton) => {
  startbutton.addEventListener("click", () => startwork(startbutton));
  startbutton.addEventListener("click", () => stopwacth() )
  })
}

function startwork(startbutton) {
  // click(button)된 부모태그의 id?
const routineId = startbutton.parentElement.id;
const routineId2 = startbutton.parentElement
console.log(routineId2)
console.log(routineId)
// Routine_list 배열안에 id가 routineId와 일치하는객체를 찾아 변수에할당
const selectedRoutine = Routine_list.find((routine) => routine.id == routineId);
const $Form1 = document.querySelector("#routineForm");
$Form1.innerHTML = `
  <div>
    <h1>오늘의 운동 - ${selectedRoutine.routineName}</h1>
    <ul class="exercise_list">
      ${selectedRoutine.routineList.map((exercise) => `<li>${exercise}</li>`).join("")}
    </ul>
    <div class="wrapper">
      <h1>운동 진행 시간</h1>
      <p><span id="minute">00</span> : <span id="seconds">00</span> : <span id="centiseconds">00</span></p>
      <button id="button-stop">운동 완료</button>
      <button id="button-reset">운동 시간 초기화</button>
    </div>

  </div>`;
}


// 운동 불러오기 폼에서 완료시간을 알게하기위한 배열변수선언 ??
const clearworkarr = []

  // 스톱워치 만들기 
function stopwacth() {
    // 스톱워치를 이용하기 위한 변수들
    let minute = 0; // minute 분단위
    let seconds = 0;      // seconds 초단위 
    let centiseconds = 0; // 1/100 seconds 밀리초단위?
    let spanMiniute = document.getElementById('minute'); // 분 
    let spanSeconds = document.getElementById('seconds'); //초
    let spanCentiseconds = document.getElementById('centiseconds'); // 밀리초 
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let interval;  // 1/100 초씩 자동실행되는 곳에 사용할 변수   
  // 운동 시작하면 바로 타이머 시작 
    interval = setInterval(startTimer, 10); // startTimer함수를 10/1000초마다 실행하겠다.
   
  // 운동 완료 버튼을 누를시 실행함수
  buttonStop.onclick = function(event) {
    clearInterval(interval); // 1/100초마다 실행되는 함수 멈춤
    console.log(event);

     // 완료 눌린 시점 시간 저장해놓기
     let clearwork = {
      min : spanMiniute.innerText,
      sec : spanSeconds.innerText,
      csec : spanCentiseconds.innerText,
    }
  
    clearworkarr.push(clearwork);


  // 완료 눌린 시점 시간 사용자에게 알리기.
    alert(`운동을 완료했습니다. ${clearwork.min}분 : ${clearwork.sec}초`)
   
  }
   

  // 운동 시간 초기화 버튼 누를시 실행함수
  buttonReset.onclick = function() {
    clearInterval(interval); // 1/100초마다 실행되는 함수 멈춤
    centiseconds = 0;
    seconds = 0;
    spanCentiseconds.innerText = '00';
    spanSeconds.innerText = '00';
    interval = setInterval(startTimer, 10); // starttimer 함수 재실행
  }
   
  function startTimer() { // 1초, 2초......시간 계산하는 함수
    centiseconds++;  // 1 증가 // centiseconds = centiseconds + 1
    if(centiseconds <= 9) spanCentiseconds.innerText = '0'+centiseconds;
    else spanCentiseconds.innerText = centiseconds;
   
    if(centiseconds > 99) {
      seconds++; // 1초 상승
      if(seconds <= 9) spanSeconds.innerText = '0' + seconds;
      else spanSeconds.innerText = seconds;
      centiseconds = 0;
      spanCentiseconds.innerText = '00';
    } else if(seconds > 59) {
      minute++; // 1분 상승
      if(minute <= 9) spanMiniute.innerText = '0' + minute;
      else spanMiniute.innerText = minute;
      seconds = 0;
      spanSeconds.innerText = '00';
    }
  }
}

// 어떤 운동 목록 찾고있는지 버튼
let button_Switch = 0;

function bookmark() {
  button_Switch = 1;
  console.log(button_Switch);
  const $choice_work = document.querySelector(".choice_work");

  if (button_Switch == 1) {
    $choice_work.innerHTML = `
    <div>
      <h2>북마크에 저장된 운동이 없습니다.</h2>
      <span>자주 수행하는 운동들을 북마크에 담아보세요</span>
    </div>
    <div>
    <input id="bookmarkplus_work"type="button" value="운동 추가하기"></input>
    </div>
    `;
  }
}
// leg 버튼내용 구현
function leg() {
  button_Switch = 2;
  console.log(button_Switch);
  const $choice_work = document.querySelector(".choice_work");
  if (button_Switch == 2) {
    $choice_work.innerHTML = `
  <div>
    <button id="squat">스쿼트</button>
    <button id="leg_extension">레그익스텐션</button>
    <button id="lunge">런지</button>
    <button id="conventionnal_deadlift">컨벤셔널 데드리프트</button>
    <button id="select">뒤로가기</button>
  </div>
  `;
  }
  const $squat = document.querySelector("#squat");
  $squat.addEventListener("click", () => ex_list("스쿼트"));

  const $leg_extension = document.querySelector("#leg_extension");
  $leg_extension.addEventListener("click", () => ex_list("레그익스텐션"));

  const $lunge = document.querySelector("#lunge");
  $lunge.addEventListener("click", () => ex_list("런지"));

  const $conventionnal_deadlift = document.querySelector(
    "#conventionnal_deadlift"
  );
  $conventionnal_deadlift.addEventListener("click", () =>
    ex_list("컨벤셔널 데드리프트")
  );

  // 뒤로가기 버튼 눌르면 다시 이전화면으로 돌아가게
  const $select = document.querySelector("#select");
  $select.addEventListener("click", () => select());
}

function select() {
  const $choice_worklist = document.querySelector(".choice_worklist");
  $choice_worklist.innerHTML = selectedExercises
    .map((exercise) => `<li>${exercise}</li>`)
    .join("");
  console.log(selectedExercises);
  const $choice_work = document.querySelector(".choice_work");
  $choice_work.innerHTML = `
  <input type="text" id="plus_Workout" placeholder="찾으시는 운동 검색"></input>
  <div id="Select">
    <input id="bookmark" type="button" value="북마크✨"></input>
    <input id="leg_ex" type="button" value="하체"></input>
    <input id="chest_ex" type="button" value="가슴"></input>
    <input id="back_ex" type="button" value="등"></input>
  </div>
  `;

  const $Bookmark = document.querySelector("#bookmark");
  $Bookmark.addEventListener("click", bookmark);

  const $Leg = document.querySelector("#leg_ex");
  $Leg.addEventListener("click", leg);

  const $Chest = document.querySelector("#chest_ex");
  $Chest.addEventListener("click", chest);

  const $Back = document.querySelector("#back_ex");
  $Back.addEventListener("click", back);
}
// 선택된 운동 목록 저장 배열
let selectedExercises = [];

function ex_list(choice) {
  selectedExercises.push(choice);
  console.log(selectedExercises);
  const $choice_worklist = document.querySelector(".choice_worklist");
  $choice_worklist.innerHTML = selectedExercises
    .map((exercise) => `<li>${exercise}</li>`)
    .join("");
}
// chest 버튼내용 구현
function chest() {
  button_Switch = 3;
  console.log(button_Switch);
  const $choice_work = document.querySelector(".choice_work");
  if (button_Switch == 3) {
    $choice_work.innerHTML = `
  <div>
  <button id="bench_press">벤치프레스</button>
  <button id="chest_fly">체스트 플라이</button>
  <button id="incine_benchpress">인클라인 벤치프레스</button>
  <button id="chest_press">체스트 프레스</button>
  <button id="select">뒤로가기</button
  </div>
  `;
  }
  const $bench_press = document.querySelector("#bench_press");
  $bench_press.addEventListener("click", () => ex_list("벤치프레스"));

  const $chest_fly = document.querySelector("#chest_fly");
  $chest_fly.addEventListener("click", () => ex_list("체스트플라이"));

  const $incine_benchpress = document.querySelector("#incine_benchpress");
  $incine_benchpress.addEventListener("click", () =>
    ex_list("인클라인 벤치프레스")
  );

  const $chest_press = document.querySelector("#chest_press");
  $chest_press.addEventListener("click", () => ex_list("체스트프레스"));

  // 등록 버튼 눌르면 다시 이전화면으로 돌아가게
  const $select = document.querySelector("#select");
  $select.addEventListener("click", () => select());
}

// back 버튼내용 구현
function back() {
  button_Switch = 4;
  console.log(button_Switch);
  const $choice_work = document.querySelector(".choice_work");
  if (button_Switch == 4) {
    $choice_work.innerHTML = `
  <div>
  <button id="barbelrow">바벨로우</button>
  <button id="latfulldown">렛풀다운</button>
  <button id="seatedrow">시티드로우</button>
  <button id="pullup">풀업</button>
  <button id="select">뒤로가기</button
  </div>
  `;
  }
  const $barbelrow = document.querySelector("#barbelrow");
  $barbelrow.addEventListener("click", () => ex_list("바벨로우"));

  const $latfulldown = document.querySelector("#latfulldown");
  $latfulldown.addEventListener("click", () => ex_list("렛풀다운"));

  const $seatedrow = document.querySelector("#seatedrow");
  $seatedrow.addEventListener("click", () => ex_list("시티드로우"));

  const $pullup = document.querySelector("#pullup");
  $pullup.addEventListener("click", () => ex_list("풀업"));

  // 등록 버튼 눌르면 다시 이전화면으로 돌아가게
  const $select = document.querySelector("#select");
  $select.addEventListener("click", () => select());
}
