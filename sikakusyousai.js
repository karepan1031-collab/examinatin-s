// このページに対応する資格を探す
const qualification = qualifications.find((item) => {
  return item.url === "it-passport.html";
});

// 見つかった資格の名前と説明を表示する
if (qualification) {
  document.getElementById("qualification-name").textContent =
    qualification.name;

  document.getElementById("qualification-description").textContent =
    qualification.description;
}
