let formData ={
    email: "", 
    message:"", 
};

const localStorageKey = "feedback-form-state";
const textarea = document.querySelector("#message");
const input = document.querySelector("input[name='email']");
const form = document.querySelector(".form");

if (Boolean(localStorage.getItem(localStorageKey))){
    const savedData = localStorage.getItem(localStorageKey);
    formData= JSON.parse(savedData);
    textarea.value= formData.message;
    input.value= formData.email;
};


function inputEvent(event){
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}
form.addEventListener("input", inputEvent);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(Boolean(formData.email.trim()) && Boolean(formData.message.trim())){
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
        formData = {email: "", message: ""};
    }
    else{
        alert("Fill please all fields");
    }
  });