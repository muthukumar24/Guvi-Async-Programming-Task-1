// Creating a div element for text content
const div = document.createElement("div");
// Attribute for the div element
div.setAttribute("id", "callback-hell-div");

// Creating a div element for indian flag image
const divTwo = document.createElement("div");
// Attribute for the div element
divTwo.setAttribute("id", "image-container");

// Creating Image Element
const img = document.createElement("img");
// Adding Image source
img.src = "./Assets/indianflag.jpg"
// Adding Image Description
img.alt = "Indian Flag"

// Starting of Callback Hell
setTimeout(() => {
    div.innerHTML = 10; // assigning value 10 inside div 
    document.body.appendChild(div);
    setTimeout(() => {
        div.innerHTML = 9; // assigning value 9 inside div 
        document.body.appendChild(div);
        setTimeout(() => {
            div.innerHTML = 8; // assigning value 8 inside div 
            document.body.appendChild(div);
            setTimeout(() => {
                div.innerHTML = 7; // assigning value 7 inside div 
                document.body.appendChild(div);
                setTimeout(() => {
                    div.innerHTML = 6; // assigning value 6 inside div 
                    document.body.appendChild(div);
                    setTimeout(() => {
                        div.innerHTML = 5; // assigning value 5 inside div 
                        document.body.appendChild(div);
                        setTimeout(() => {
                            div.innerHTML = 4; // assigning value 4 inside div 
                            document.body.appendChild(div);
                            setTimeout(() => {
                                div.innerHTML = 3; // assigning value 3 inside div 
                                document.body.appendChild(div);
                                setTimeout(() => {
                                    div.innerHTML = 2; // assigning value 2 inside div 
                                    document.body.appendChild(div);
                                    setTimeout(() => {
                                        div.innerHTML = 1; // assigning value 1 inside div 
                                        document.body.appendChild(div);
                                        setTimeout(() => {
                                            div.innerHTML = "Happy Independence Day!!"; // assigning text content inside div
                                            document.body.appendChild(div); // Appending the div element into document
                                            document.body.appendChild(divTwo); // Appending the divTwo element into document
                                            divTwo.appendChild(img); // Appending the image element into divTwo element
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
// End of Callback Hell