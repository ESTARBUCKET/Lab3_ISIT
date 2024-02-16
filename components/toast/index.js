function showToast(message, icon, options) {
    var toast = document.querySelector(".toast");
    var toastIcon = toast.querySelector(".toast-icon");
    var toastMessage = toast.querySelector(".toast-message");

    if (toast.classList.contains("show")) {
        setTimeout(function () {
          showToast(message, icon, options);
        }, 1000);
      } else {
        // Set the message and icon
        toastIcon.style.backgroundImage = "url(" + icon + ")";
        toastMessage.innerText = message;
  
        // Set the options
    
        // Show the toast
        toast.classList.add("show");

        // Hide the toast
        setTimeout(function () {
            toast.classList.remove("show");
        }, options.duration || 3000);

        showToast("Success!", "success.png", { duration: 5000 });
        }
    }