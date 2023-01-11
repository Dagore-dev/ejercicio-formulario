window.addEventListener('DOMContentLoaded', main)

function main() {
    const form = document.getElementById('form')

    form.addEventListener('submit', handleSubmit)

    /**
     * @param {SubmitEvent} e
     */
    function handleSubmit (e) {
        e.preventDefault()
    }
}
