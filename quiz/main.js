//value
//const clickBtn = document.getAttribute("answer1");
//const clickBtn2 = document.getAttribute("answer2");
//const clickBtn3 = document.getAttribute("answer3");
//const clickBtn4 = document.getAttribute("answer4");

console.log("fire");

// let answer2 = document.querySelector("#answer2");
//クリックでクラスを取得
let circleElement = document.getElementById("circle");
let answerButtonElements = document.querySelectorAll(".answerBtn");
let crossElement = document.getElementById("cross");

//クラスを追加する処理
//let toggleClass = function (el) {
//el.classList.toggle("judgeObject");
//};

//正解したときToggleClassを実行
//function onClick(x) {
//if (x === 2) {
//正解
// const isCorrect = true;
// if (isCorrect) {
//   circleElement.classList.set(".hidden");
// }

// btn.addEventListener(
//   "click",
//   function () {
//     console.log("clicked");
//     toggleClass(judge);
//   },
//   false
// );
//} else {
//不正解
//}
//}

/**
 * 回答ボタンをクリックしたときのハンドラー
 * @param answer 選択した回答
 * @param correctAnswer 正解の回答
 */
function sendAnswer(answer, correctAnswer) {
  const isCorrect = answer === correctAnswer;
  const isInCorrect = answer !== correctAnswer;

  if (isCorrect) {
    // 正解だった場合、hiddenを削除して、丸を表示すr
    circleElement.classList.remove("hidden");
  } else if (isInCorrect) {
    crossElement.classList.remove("hidden2");
  }

  // 回答を送信したら、disabledにしてハンドラーを実行できないようにする & disabled用のクラスを追加する
  answerButtonElements.forEach((element) => {
    element.setAttribute("disabled", true);
    element.classList.add("disabled-button");
  });
}
