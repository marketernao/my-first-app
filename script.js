const phrases = [
  "小さな一歩が大きな成果につながる。",
  "あせらず、でも止まらずに進もう。",
  "笑顔でいると、きっと良いことがある。",
  "今の努力は必ず未来の自分を助ける。",
  "深呼吸して、もう一度チャレンジ。",
  "感謝の気持ちを忘れずに。",
  "できる理由を探してみよう。",
  "今日の自分をちょっとだけ褒めよう。",
  "やってみることに価値がある。",
  "小さな親切が世界を明るくする。"
];

const messageElement = document.getElementById("message");
const button = document.getElementById("generate");

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

button.addEventListener("click", () => {
  messageElement.style.opacity = 0;

  setTimeout(() => {
    messageElement.textContent = getRandomPhrase();
    messageElement.style.opacity = 1;
  }, 200);
});
