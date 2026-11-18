
(() => {
  const button = document.getElementById("acquisition-button");

  if (!button || typeof qualifications === "undefined") {
    return;
  }

  const pageName = window.location.pathname.split("/").pop();

  const currentQualification = qualifications.find((item) => {
    return item.url === pageName;
  });

  if (!currentQualification) {
    return;
  }

  const storageKey = "acquiredQualifications";

  function getAcquiredQualifications() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch (error) {
      return [];
    }
  }

  function updateButton() {
    const acquired = getAcquiredQualifications();
    const isAcquired = acquired.includes(currentQualification.url);

    button.setAttribute("aria-pressed", String(isAcquired));

    if (isAcquired) {
      button.innerHTML =
        '<span aria-hidden="true">✓</span>取得済み';
      button.setAttribute("aria-label", "取得済みから外す");
    } else {
      button.innerHTML =
        '<span aria-hidden="true">＋</span>取得済みに追加';
      button.setAttribute("aria-label", "取得済みに追加");
    }
  }

  button.addEventListener("click", () => {
    const acquired = getAcquiredQualifications();
    const url = currentQualification.url;

    const updated = acquired.includes(url)
      ? acquired.filter((item) => item !== url)
      : [...acquired, url];

    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
      updateButton();
    } catch (error) {
      alert("登録情報を保存できませんでした。ブラウザの設定を確認してください。");
    }
  });

  updateButton();
})();
