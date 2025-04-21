const formData = {
    email: "",
    message: "" 
}

const savedValue = localStorage.getItem("feedback-form-state");
if (savedValue) {
    const parsedValue = JSON.parse(savedValue);
    formData.email = parsedValue.email;
    formData.message = parsedValue.message;
}

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

emailInput.value = formData.email;
messageInput.value = formData.message;

form.addEventListener("input", (event) => {
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
            alert("Fill please all fields");
            return;
        }
        console.log(formData)
        form.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    });