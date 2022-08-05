window.addEventListener("load", function() {

    var questions = document.getElementsByClassName("question");
    console.log(questions)
    console.log(questions[0])
    var arrows = document.getElementsByClassName("arrow");

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function(e) {
            let active = this.classList.contains("active");
            let answer = this.nextElementSibling;
            // let arrow = arr;

            [...questions].forEach(function(item) {
                item.classList.remove("active");
                item.nextElementSibling.style.maxHeight = null;
                item.nextElementSibling.style.marginBottom = "0px";
            });

            if (!active) {
                this.classList.add("active");
                answer.style.maxHeight = "100px";
                answer.style.marginBottom = "20px";
            }

        })
    }
})