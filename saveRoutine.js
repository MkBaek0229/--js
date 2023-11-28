const $WORKBtn = document.querySelector("#CHBT") 
let $Work = document.querySelector("#RecordRoutine")

// 불러오기 / 운동선택하기 버튼 내용 로직 
function WorkBtnclick() {
    const saveRoutine = JSON.parse(localStorage.getItem("key"))
    console.log(saveRoutine)
    if($Work.style.display =="none") {
        $Work.style.display = "block";
        console.log("WorkbtnOn")
        const $Form2 = document.querySelector(".record_list")
        $Form2.innerHTML = 
        saveRoutine.map((saveRoutine) => `<li>${saveRoutine.routineName}${saveRoutine.routineList}</li>`)
    }
    else {
        $Work.style.display = "none"
        console.log("WorkbtnOff")
    }
}



$WORKBtn.addEventListener("click", WorkBtnclick)

















