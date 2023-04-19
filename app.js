const titles = document.querySelectorAll(".sub-tab")
const text = document.querySelectorAll(".sub-tab-bot")

titles.forEach((title) =>
    title.addEventListener("click", (e) => {
        titles.forEach((t) => {
            t.classList.remove("open-tab-top")
        })
        text.forEach((t) => {
            t.classList.remove("open-tab-bottom")
        })

        e.target.classList.add("open-tab-top")
    })
)
