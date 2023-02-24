let emailCollector = document.getElementById("email-collector");


emailCollector.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    let updatedHTMLContent = ` 
    <div class="container">
    <h2>Congratatulations, ${userFirstName}</h2>
            <p>Youre on your way to becomming BBq Master!
            </p>
             <p class="fine-print">We will send you Weekly BBQ tips to: ${userEmailAddress}</p>
    </div>`

    let ourMainContent = document.getElementById("main-content")
    ourMainContent.innerHTML = updatedHTMLContent
})