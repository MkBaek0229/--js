const $RoutineBtn = document.querySelector("#RTBT") 
const $WORKBtn = document.querySelector("#CHBT") 
let $Routine = document.querySelector("#Myroutine")
let $Work = document.querySelector("#ChoiceWork")
let RoutineCount = 0;

// 불러오기 / 운동선택하기 버튼 내용 로직 
function RoutineBtnclick() {
    if($Routine.style.display =="none" && $Work.style.display =="none") {
        $Routine.style.display = "block";
        console.log("RtbtnOn")
        const $Form1 = document.querySelector("#routineForm")
      
        $Form1.innerHTML = 
        `<strong>민기님의 루틴</strong><input id="plus_Routine" type="button" value="추가"></input>

            <p>전체 ${RoutineCount}개</p>

            <div id="save_Routine"> 
                루틴 목록            
            </div>
        `
        const $addButton = document.querySelector("#plus_Routine");
        $addButton.addEventListener("click", showRoutineForm)
    }
    else {
        $Routine.style.display = "none"
        console.log("RtbtnOff")
    }
}

function WorkBtnclick() {
    if($Work.style.display =="none" && $Routine.style.display =="none") {
        $Work.style.display = "block";
        console.log("WorkbtnOn")
        const $Form2 = document.querySelector("#WorkForm")
        $Form2.innerHTML = 
        `<input type="text id="plus_Workout Placeholder="찾으시는 운동검색"></input>
        <div id="Select">
        <input type="button" value="북마크✨">
        </input><input type="button" value="하체"></input><input type="button" value="가슴"></input><input type="button" value="등"></input>
        </div>
        
        `
    }
    else {
        $Work.style.display = "none"
        console.log("WorkbtnOff")
    }
}

$RoutineBtn.addEventListener("click", RoutineBtnclick)

$WORKBtn.addEventListener("click", WorkBtnclick)

















