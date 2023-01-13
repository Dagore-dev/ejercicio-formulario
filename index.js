window.addEventListener('DOMContentLoaded', main)

function main() {
    const form = document.getElementById('form')
    const passwdInput = document.getElementById('contraseña')
    const repeatPasswdInput = document.getElementById('repeat-contraseña')

    form.addEventListener('submit', handleSubmit)

    /**
     * @param {SubmitEvent} e
     */
    function handleSubmit (e) {
        e.preventDefault()
        
        if (passwdInput.value === repeatPasswdInput.value) {
            form.submit()
        }
    }
}
