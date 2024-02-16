export class ToastComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }
    
    getHTML() {
        return (
            `
            <div class="toast" role="alert" aria-live="assertive">
                <div class="toast-icon"></div>
                <div class="toast-message"></div>
                <button class="toast-close" aria-label="Close"></button>
            </div>
            `
        )
    }

    showToast(message, icon, options) {
        var toast = document.querySelector(".toast");
        var toastIcon = toast.querySelector(".toast-icon");
        var toastMessage = toast.querySelector(".toast-message");

        if (toast.classList.contains("show")) {
            setTimeout(function () {
            showToast(message, icon, options);
            }, 1000);
        } else {
            // Set the message and icon
            toastIcon.style.backgroundImage = url("https://a.raskraski.link/img/6/8/4/Бутерброд-Еда-еда-бутерброды-сендвич-684.jpg");
            toastMessage.innerText = "Hello!";
    
            // Set the options
        
            // Show the toast
            toast.classList.add("show");

            // Hide the toast
            setTimeout(function () {
                toast.classList.remove("show");
            }, options.duration || 3000);

            showToast("Success!", "https://clipart-library.com/images_k/success-transparent/success-transparent-5.jpg", { duration: 5000 });
            }
        }
    
    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}