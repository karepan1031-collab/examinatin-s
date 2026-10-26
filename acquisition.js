(() => {
  const button = document.getElementById("acquisition-button");

  if (!button) {
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
    const savedData = localStorage.getItem(storageKey);

    if (!savedData) {
      return [];
    }

    try {
      return JSON.parse(savedData);
    } catch {
      return [];
    }
  }

  function updateButton() {
    const acquiredQualifications = getAcquiredQualifications();

    const isAcquired = acquiredQualifications.includes(
      currentQualification.url
    );

    button.setAttribute("aria-pressed", String(isAcquired));

    if (isAcquired) {
      button.innerHTML =
        '<span aria-hidden="true">✓</span>取得済み';

      button.setAttribute(
        "aria-label",
        "取得済みから外す"
      );
    } else {
      button.innerHTML =
        '<span aria-hidden="true">＋</span>取得済みに追加';

      button.setAttribute(
        "aria-label",
        "取得済みに追加"
      );
    }
  }

  button.addEventListener("click", () => {
    const acquiredQualifications = getAcquiredQualifications();

    const qualificationUrl = currentQualification.url;

    const isAcquired =
      acquiredQualifications.includes(qualificationUrl);

    let newAcquiredQualifications;

    if (isAcquired) {
      newAcquiredQualifications =
        acquiredQualifications.filter((url) => {
          return url !== qualificationUrl;
        });
    } else {
      newAcquiredQualifications = [
        ...acquiredQualifications,
        qualificationUrl
      ];
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify(newAcquiredQualifications)
    );

    updateButton();
  });

  updateButton();
})();
