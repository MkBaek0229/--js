
const $WORKBtn = document.querySelector("#CHBT") 
let $Work = document.querySelector("#RecordRoutine")





// 불러오기 / 운동선택하기 버튼 내용 로직 
function WorkBtnclick() {
    if($Work.style.display =="none") {
        $Work.style.display = "block";
        console.log("WorkbtnOn")
        const $Form2 = document.querySelector("#WorkForm")
        $Form2.innerHTML = 
        `
        <h1>운동 기록</h1>
        `
    }
    else {
        $Work.style.display = "none"
        console.log("WorkbtnOff")
    }
}



$WORKBtn.addEventListener("click", WorkBtnclick)

















