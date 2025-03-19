//Gallerie

$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// Formulaire de contact

//Validation des champs requis
//NOM
let messageNom = document.getElementById("messageNom");
let inputNom = document.getElementById("nom")
inputNom.addEventListener("input",function(){
    let nomValue = this.value;
    let nomPattern = /^[a-zA-ZÀ-ÿ' -]{2,}$/;
    

    if (nomValue.trim() === ""){
        messageNom.textContent = "";
        inputNom.classList.remove("valid");
        vérificationForm();
        return;
    }

    if (nomPattern.test(nomValue)){
        messageNom.textContent = "✅ Nom valide";
        inputNom.classList.add("valid");
    } else{
        messageNom.textContent = "❌ Nom invalide";
        inputNom.classList.remove("valid");
    };
    vérificationForm();
});

//EMAIL
let messageEmail = document.getElementById("messageEmail");
let inputEmail = document.getElementById("email");
inputEmail.addEventListener("input",function(){
    let emailValue = this.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if (emailValue.trim() === ""){
        messageEmail.textContent = "";
        inputEmail.classList.remove("valid");
        vérificationForm();
        return;
    }

    if (emailPattern.test(emailValue)){
        messageEmail.textContent = "✅ Email valide";
        inputEmail.classList.add("valid");
    } else{
        messageEmail.textContent = "❌ Email invalide";
        inputEmail.classList.remove("valid");
    };
    vérificationForm();
});

//MESSAGE
let messageMessage = document.getElementById("messageMessage");
let textAreaMessage = document.getElementById("message");
textAreaMessage.addEventListener("input", function(){
    let messageValue = this.value;

    if (messageValue.trim() === ""){
        messageMessage.textContent = "";
        textAreaMessage.classList.remove("valid");
        vérificationForm();
        return;
    }

    if (messageValue.length > 1){
        messageMessage.textContent = "✅ Message valide";
        textAreaMessage.classList.add("valid");
        console.log(textAreaMessage);
    } else{
        messageMessage.textContent = "❌ Message trop court";
        textAreaMessage.classList.remove("valid");
    };
    vérificationForm();
})

//Modification dynamique du bouton + validation formulaire
//Modifs bouton cliquable si form complet et valide
function vérificationForm(){
    const submitInput = document.getElementById("envoyer");

    if (inputNom.classList.contains("valid") && inputEmail.classList.contains("valid") && textAreaMessage.classList.contains("valid")){
        submitInput.disabled = false
    } else{
        submitInput.disabled = true
    }
};


//Validation formulaire
const form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    const messageSend = document.getElementById("messageSend");
    messageSend.textContent = "✅ Votre message à bien été envoyé. Je reviens vers vous au plus vite! Vérifiez régulièrement votre boite mail. A bientôt !";
    form.appendChild(messageSend);

    form.reset();
    messageMessage.textContent = "";
    textAreaMessage.classList.remove("valid");
    messageEmail.textContent = "";
    inputEmail.classList.remove("valid");
    messageNom.textContent = "";
    inputNom.classList.remove("valid");
    vérificationForm();
});