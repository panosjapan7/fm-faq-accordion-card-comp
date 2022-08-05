/*--------------------------------- 
    ACCORDION FUNCTIONALIY
---------------------------------*/
// Runs the code below *after* the page has loaded all its elements
window.addEventListener("load", function() {

    // Finds all HTML elements with class "question"
    var questions = document.getElementsByClassName("question");

    // Loops through the array which contains all HTML elements with class "question"
    for (let i = 0; i < questions.length; i++) {
        
        // Adds an event listener to every HTML element with class "question"
        questions[i].addEventListener("click", function(e) {
            
            // Boolean flag: If the the clicked Element contains "active" in its class, it sets the active to true
            let active = this.classList.contains("active");
            console.log("active", active);

            // Saves the clicked element's next sibling ("answer element") to the 'answer' variable
            let answer = this.nextElementSibling;

            console.log(...questions);

            // Loops through the array which contains all HTML elements with class "question"
            [...questions].forEach(function(item) {
                
                // Removes "active" from the class of every "question element"
                item.classList.remove("active");
                
                // HIDES THE ANSWER OF "active" ELEMENT
                //Sets the maxHeight of the next sibling of "active" question element to null
                item.nextElementSibling.style.maxHeight = null;
                
                //Sets the maxHeight of the next sibling of "active" question element to 0px
                item.nextElementSibling.style.marginBottom = "0px";
            });

            // SHOWS THE ANSWER OF CLICKED "question" ELEMENT if it's not active
            if (!active) {
                this.classList.add("active");
                answer.style.maxHeight = "100px";
                answer.style.marginBottom = "20px";
            }

        })
    }
})