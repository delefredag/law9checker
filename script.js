// 5과목 목록
const subjects = ["consti", "civil", "civil-proc", "commercial", "realtor"];

/**
 * 6개년(2019~2024) x 5과목 x 25문제 정답 데이터를 저장할 객체
 * - 예시로 일부만 넣어둡니다. 나머지는 직접 채워넣으세요.
 * - 값은 "1","2","3","4" 중 하나 (①=1, ②=2, ③=3, ④=4)
 */
const correctAnswers = {
  "2024": {
    "consti":          ["3", "3", "1", "2", "3", "1", "2", "1", "3", "1", "4", "4", "4", "4", "4", "3", "4", "3", "3", "2", "3", "2", "2", "3", "2"],
    "civil":          ["3", "1", "4", "3", "2", "2", "4", "3", "2", "1", "3", "2", "3", "2", "4", "2", "3", "4", "2", "1", "3", "4", "4", "1", "4"],
    "civil-proc":    ["3", "3", "2", "4", "4", "3", "2", "3", "1", "2", "3", "3", "2", "4", "2", "2", "3", "1", "3", "4", "2", "4", "1", "1", "4"],
    "commercial":          ["3", "1", "4", "4", "4", "3", "4", "4", "2", "1", "3", "1", "4", "2", "3", "3", "1", "1", "1", "2", "2", "4", "3", "4", "4"],
    "realtor":  ["2", "2", "3", "4", "1", "1", "1", "4", "4", "3", "4", "2", "1", "2", "1", "4", "3", "1", "3", "2", "3", "2", "4", "3", "3"]
  },
  "2023": {
    "consti":          ["3", "1", "2", "4", "1", "1", "2", "4", "2", "3", "4", "3", "1", "1", "3", "4", "4", "2", "1", "4", "1", "4", "3", "2", "4"],
    "civil":          ["2", "4", "2", "1", "1", "1", "3", "2", "2", "3", "1", "4", "4", "4", "1", "1", "3", "4", "1", "1", "1", "2", "4", "2", "3"],
    "civil-proc":    ["4", "1", "4", "4", "4", "4", "3", "3", "2", "4", "2", "2", "1", "4", "4", "3", "4", "2", "3", "2", "1", "1", "3", "2", "4"],
    "commercial":          ["2", "3", "4", "2", "4", "1", "4", "3", "4", "2", "4", "2", "2", "4", "4", "2", "2", "3", "3", "2", "1", "3", "3", "4", "2"],
    "realtor":  ["4", "4", "4", "4", "3", "3", "2", "1", "3", "3", "4", "1", "1", "1", "4", "4", "1", "3", "3", "2", "1", "4", "4", "3", "3"]
  },
  "2022": {
    "consti":          ["1", "2", "1", "1", "3", "2", "4", "1", "3", "2", "2", "4", "3", "1", "3", "4", "1", "3", "2", "3", "4", "2", "4", "2", "2"],
    "civil":          ["4", "2", "3", "4", "2", "3", "3", "1", "3", "2", "2", "4", "1", "4", "1", "1", "3", "1", "1", "3", "2", "1", "4", "4", "4"],
    "civil-proc":    ["1", "3", "3", "2", "2", "2", "2", "4", "2", "3", "4", "2", "2", "1", "3", "4", "2", "4", "4", "4", "1", "4", "1", "4", "4"],
    "commercial":          ["4", "2", "4", "4", "3", "3", "1", "3", "2", "2", "4", "2", "4", "3", "2", "2", "4", "3", "1", "3", "3", "2", "4", "4", "2"],
    "realtor":  ["1", "4", "4", "4", "1", "1", "3", "4", "2", "3", "1", "3", "4", "2", "4", "3", "2", "3", "3", "2", "4", "4", "3", "3", "3"]
  },
  "2021": {
    "consti":          ["3", "4", "4", "3", "4", "1", "2", "4", "2", "3", "3", "1", "4", "4", "4", "4", "1", "1", "2", "2", "2", "4", "2", "1", "4"],
    "civil":          ["4", "3", "2", "1", "4", "3", "4", "3", "4", "4", "1", "3", "3", "1", "4", "1", "4", "2", "3", "2", "3", "2", "3", "2", "4"],
    "civil-proc":    ["1", "3", "1", "4", "1", "2", "1", "3", "1", "4", "4", "1", "3", "2", "2", "3", "3", "1", "4", "4", "1", "1", "1", "2", "4"],
    "commercial":          ["2", "4", "3", "1", "3", "4", "2", "3", "2", "1", "4", "2", "3", "3", "4", "3", "3", "2", "1", "2", "4", "4", "4", "2", "2"],
    "realtor":  ["4", "4", "3", "1", "1", "1", "2", "3", "2", "2", "4", "2", "2", "3", "4", "1", "2", "3", "3", "4", "2", "2", "1", "4", "1"]
  },
  "2020": {
    "consti":          ["3", "1", "2", "3", "3", "2", "3", "4", "1", "4", "3", "1", "2", "4", "3", "3,4", "1", "1", "1", "1", "1", "4", "2", "2", "4"],
    "civil":          ["1", "1", "1", "4", "1", "2", "4", "4", "2", "4", "2", "3", "1", "3", "2", "4", "4", "3", "4", "1", "2", "4", "3", "4", "2"],
    "civil-proc":    ["2", "3", "1", "3", "1", "2", "1", "1", "2", "3", "3", "3", "2", "2", "2", "3", "1", "3", "3", "4", "1", "3", "3", "3", "3"],
    "commercial":          ["4", "3", "4", "4", "3", "2", "1", "4", "3", "2", "4", "2", "3", "3", "4", "4", "4", "2", "4", "1", "4", "1", "1", "1", "2"],
    "realtor":  ["4", "3", "3", "2", "3", "4", "1", "4", "1", "4", "2", "1", "3", "4", "1", "3", "1", "4", "4", "3", "4", "3", "4", "3", "4"]
  },
  "2019": {
    "consti":          ["3", "4", "2", "4", "2", "3", "2", "2", "3", "3", "2", "3", "2", "4", "1", "2", "4", "2", "2", "3", "4", "1", "4", "2", "2"],
    "civil":          ["1", "1", "4", "1", "2", "3", "4", "3", "1", "4", "3", "2", "1", "3", "2", "2", "2", "3", "2", "2", "1", "4", "2", "2", "3"],
    "civil-proc":    ["3", "1", "1", "2", "1", "3", "3", "2", "2", "3", "3", "2", "2", "2", "1", "2", "4", "4", "4", "3", "3", "4", "1", "4", "2"],
    "commercial":          ["4", "4", "4", "3", "2", "3", "4", "4", "1", "3", "1", "1", "3", "3", "4", "3", "4", "3", "3", "3", "1", "4", "2", "2", "4"],
    "realtor":  ["4", "4", "2", "4", "2", "2", "1", "2", "4", "3", "1", "2", "3", "4", "1", "4", "4", "3", "2", "4", "2", "2", "4", "4", "2"]
  }
};

// DOM 요소 참조
const omrContainer = document.getElementById("omr-container");
const yearSelect = document.getElementById("year-select");
const checkButton = document.getElementById("check-button");
const resultDiv = document.getElementById("result");

/**
 * OMR 표를 동적으로 생성해 #omr-container 에 추가
 * - subjects 배열에 있는 과목마다 테이블 1개 생성
 * - 각 테이블에 25문항 (1행 = 문제번호 + 4개 선택지)
 */
function generateOMR() {
  // 기존에 생성된 내용 제거
  omrContainer.innerHTML = "";

  subjects.forEach(subject => {
    const table = document.createElement("table");
    table.classList.add("subject-table");
    table.id = `table-${subject}`;

    // 테이블 헤더
    const thead = document.createElement("thead");
    const thRow = document.createElement("tr");
    const th = document.createElement("th");
    th.colSpan = 5;
    th.textContent = subject; // 과목명
    thRow.appendChild(th);
    thead.appendChild(thRow);
    table.appendChild(thead);

    // 테이블 바디
    const tbody = document.createElement("tbody");
    for (let i = 1; i <= 25; i++) {
      const tr = document.createElement("tr");

      // 문제 번호 셀
      const tdNumber = document.createElement("td");
      tdNumber.classList.add("question-number");
      tdNumber.textContent = i;
      tr.appendChild(tdNumber);

      // 4지선다
      for (let choice = 1; choice <= 4; choice++) {
        const tdOption = document.createElement("td");

        // 라디오 버튼
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `${subject}_${i}`;
        input.id = `${subject}_${i}_${choice}`;
        input.value = String(choice);

        // 라벨 (plain numeric text)
        const label = document.createElement("label");
        label.classList.add("circle-label");
        label.htmlFor = input.id;
        label.textContent = String(choice);  // e.g. "1", "2", "3", "4"

        tdOption.appendChild(input);
        tdOption.appendChild(label);
        tr.appendChild(tdOption);
      }

      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    omrContainer.appendChild(table);
  });
}

/**
 * 채점 함수
 * - 연도 선택 값에 따라 correctAnswers에서 정답 배열을 가져옴
 * - 각 과목, 각 문항에 대해 사용자 선택값과 비교 후 표시
 * - 최종 점수, 과목별 점수, 전체 평균을 #result에 출력
 */
function checkAnswersFunc() {
  const selectedYear = yearSelect.value;

  // 해당 연도 데이터 존재 여부
  if (!correctAnswers[selectedYear]) {
    alert("선택하신 연도에 대한 정답 데이터가 없습니다!");
    return;
  }

  // 과목별 정답 카운트
  const subjectScores = {
    "consti": 0,
    "civil": 0,
    "civil-proc": 0,
    "commercial": 0,
    "realtor": 0
  };

  let totalQuestions = 0;
  let totalScore = 0;

  subjects.forEach(subject => {
    const answers = correctAnswers[selectedYear][subject];
    if (!answers || answers.length === 0) return;

    for (let i = 1; i <= 25; i++) {
      const correct = answers[i - 1];
      if (!correct) continue;

      totalQuestions++;

      // 기존의 채점 표시 제거
      const labels = document.querySelectorAll(`input[name="${subject}_${i}"] + label`);
      labels.forEach(label => {
        label.classList.remove("correct-answer", "wrong-answer");
      });

      // 체크된 라디오 찾기
      const checkedInput = document.querySelector(`input[name="${subject}_${i}"]:checked`);
      if (checkedInput) {
        const userValue = checkedInput.value;
        const checkedLabel = checkedInput.nextElementSibling;

        // 단일 정답 비교 (복수 정답이면 split 처리)
        if (userValue === correct) {
          checkedLabel.classList.add("correct-answer");
          subjectScores[subject]++;
          totalScore++;
        } else {
          checkedLabel.classList.add("wrong-answer");
          // 정답 라벨도 표시
          const correctInput = document.querySelector(
            `input[name="${subject}_${i}"][value="${correct}"]`
          );
          if (correctInput) {
            correctInput.nextElementSibling.classList.add("correct-answer");
          }
        }
      }
    }
  });

  const maxQuestions = subjects.length * 25;
  let resultHTML = `<p>전체 점수: ${totalScore}/${maxQuestions}</p>`;
  resultHTML += `<p>과목별 점수:</p><ul>`;

  subjects.forEach(subject => {
    const subScore = subjectScores[subject];
    resultHTML += `<li>${subject}: ${subScore}/25</li>`;
  });
  resultHTML += `</ul>`;

  if (totalQuestions > 0) {
    const percentage = ((totalScore / totalQuestions) * 100).toFixed(2);
    resultHTML += `<p>전체 평균: ${percentage}%</p>`;
  } else {
    resultHTML += `<p>해당 연도/과목에 대한 정답 데이터가 없습니다.</p>`;
  }

  resultDiv.innerHTML = resultHTML;
}

// DOMContentLoaded 시점에 OMR 생성
window.addEventListener("DOMContentLoaded", () => {
  generateOMR();
});

// 연도 선택 시 테이블 재생성 & 결과 초기화
yearSelect.addEventListener("change", () => {
  generateOMR();
  resultDiv.textContent = "";
});

// "채점하기" 버튼 클릭 시
checkButton.addEventListener("click", () => {
  checkAnswersFunc();
});
