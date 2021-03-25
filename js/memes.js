document.addEventListener("DOMContentLoaded", function(){
    let createForm = document.getElementById("create-form");
    let createdMemes = document.getElementById("memes");

    createForm.addEventListener("submit", function(event){
        event.preventDefault();

        let newMeme = document.createElement("li");
        let img = document.createElement("img");
        img.src = document.getElementById("image").value;

        let upperText = document.createElement("div");
        upperText.setAttribute("id", "upper");
        upperText.innerText = document.getElementById("upper-text").value;

        let lowerText = document.createElement("div");
        lowerText.setAttribute("id", "lower");
        lowerText.innerText = document.getElementById("lower-text").value;
        


        createdMemes.appendChild(newMeme);
        newMeme.appendChild(img);
        newMeme.appendChild(upperText);
        newMeme.appendChild(lowerText);

        createForm.reset();

    });
});