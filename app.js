const titles = document.querySelectorAll(".sub-tab")
const text = document.querySelectorAll(".sub-tab-bot")

titles.forEach((title) =>
    title.addEventListener("click", (e) => {
        titles.forEach((t) => {
            t.classList.remove("open-tab-top")

            t.textContent == e.target.textContent &&
                t.classList.add("open-tab-top")
        })
        text.forEach((t) => {
            t.classList.remove("open-tab-bottom")

            t.classList.contains(e.target.textContent) &&
                t.classList.add("open-tab-bottom")
        })
    })
)
