document.addEventListener("DOMContentLoaded", function () {
    const $WORKBtn = document.querySelector("#CHBT");
    let $Work = document.querySelector("#RecordRoutine");
  
    // 불러오기 / 운동선택하기 버튼 내용 로직
    function WorkBtnclick() {
      // 로컬 스토리지에서 데이터를 가져옴
      let Routine_list = JSON.parse(localStorage.getItem("key")) || [];
      let clearworkarr = JSON.parse(localStorage.getItem("clear")) || [];
  
      // 두 배열을 병합
      let mergedData = [...Routine_list, ...clearworkarr];
  
      // 병합된 데이터를 다시 로컬 스토리지에 저장
      localStorage.setItem("mergedData", JSON.stringify(mergedData));
  
      //  병합된 데이터에 접근
      let mergedDataFromLocalStorage = JSON.parse(localStorage.getItem("mergedData")) || [];
  
      console.log(mergedData);
  
      if ($Work.style.display == "none") {
        $Work.style.display = "block";
        console.log("WorkbtnOn");
        const $Form2 = document.querySelector(".record_list");
  
        if ($Form2) { // .record_list 요소가 존재하는지 확인
          // 병합된 데이터를 리스트로 표시
          $Form2.innerHTML = `<ul>${mergedDataFromLocalStorage.map(item => `<li>${formatItem(item)}</li>`).join('')}</ul>`;
        } else {
          console.error(".record_list 요소를 찾을 수 없습니다.");
        }
      } else {
        $Work.style.display = "none";
        console.log("WorkbtnOff");
      }
    }
  
    function formatItem(item) {
      let timeInfo = "";
      if (item.min && item.sec) {
        timeInfo = `${item.min}분 ${item.sec}초`;
      }
      let routineListInfo = item.routineList ? `- ${item.routineList.join(', ')}` : "";
      return `${timeInfo} ${routineListInfo}`;
    }
  
    $WORKBtn.addEventListener("click", WorkBtnclick);
  });
  