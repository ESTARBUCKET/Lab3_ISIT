export class ToastComponent {
    constructor(message) {
      this.message = message
      this.toast = document.createElement("div")
      this.toast.id = "toast"
      this.toast.innerHTML = `<p>${this.message}</p>`
      document.body.appendChild(this.toast)
<<<<<<< Updated upstream
      this.toastBtn = document.getElementById("back-button")
      this.toastBtn.addEventListener("click", () => this.show())
=======
      //this.toastBtn = document.getElementById("back-button")
      //this.toastBtn.addEventListener("click", () => this.show())
>>>>>>> Stashed changes
    }

    show() {
      this.toast.classList.add("show")
      setTimeout(() => {
        this.toast.classList.remove("show")
      }, 3000) // Hide after 3 seconds 
    }
  }