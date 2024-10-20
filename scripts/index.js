document.querySelector(".tag").addEventListener("click", function (e) {
  navigator.clipboard
    .writeText(e.target.textContent)
    .then(() => {
      console.log("Текст успешно скопирован!");
    })
    .catch((err) => {
      console.error("Ошибка копирования текста: ", err);
    });
});
