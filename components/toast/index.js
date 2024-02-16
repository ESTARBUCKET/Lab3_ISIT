export class ToastComponent {

    constructor (parent) {
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
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="..." class="rounded me-2" alt="...">
                  <strong class="me-auto">Bootstrap</strong>
                  <small>11 мин назад</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                </div>
                <div class="toast-body">
                  Привет, мир! Это тост-сообщение.
                </div>
              </div>
            </div>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}