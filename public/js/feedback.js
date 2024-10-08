let feedbackForm = document.querySelector('.add-feedback');
feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let feedback = document.getElementById("feedback").value;
    if (validationFeedback(feedback)){
        let newFeedback = createFeedback(feedback);
        document.querySelector(".feedbacks-list").appendChild(newFeedback);
        let feedbackList = JSON.parse(localStorage.getItem("feedbacks") || '[]');
        feedbackList.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
        document.getElementById("feedback").value = "";
        Toastify({
            text: "Отзыв успешно добавлен", // текст внутри уведомления
            close: true, // возможность закрытия уведомления
            style: { //цвет уведомления
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNLdW8xsD33A--RJ0CnGNOTE_3t6aSwB_4GuJcUn1PA&s' //картинка перед текстом уведомления
        }).showToast();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    let feedbackList = JSON.parse(localStorage.getItem("feedbacks") || '[]');
    let el = document.querySelector(".feedbacks-list");
    for (let i = 0; i < feedbackList.length; i++) {
        el.appendChild(createFeedback(feedbackList[i]));
    }
})

function validationFeedback(feedback){
    return feedback.trim() !== "";
}

function createFeedback(feedback) {
    let template = document.getElementById('feedback-template');
    let clone = template.content.cloneNode(true);
    clone.children[0].textContent = feedback;
    return clone;
}

