const accordion = document.querySelectorAll(".question");

accordion.forEach((item) => {
  const questionHead = item.querySelector(".question-head");
  questionHead.addEventListener("click", () => {
    const content = item.querySelector(".content");

    const contentActived = document.querySelector(".active");

    VerifyActive(item, content, contentActived);
  });
});

function VerifyActive(item, content, contentActived) {
  const iconItem = item.querySelector(".icon");

  if (contentActived) {
    contentActived.style.height = 0;
    contentActived.classList.remove("active");
    iconItem.src = "../assets/images/icon-plus.svg";
  }

  if (content !== contentActived) {
    iconItem.src = "../assets/images/icon-minus.svg";
    content.classList.add("active");
    content.style.height = content.scrollHeight + "px";
  }
}
