window.addEventListener('DOMContentLoaded', main)

function main() {
    const form = document.getElementById('form')
    /** @type {HTMLInputElement} */
    const passwdInput = document.getElementById('contraseña')
    /** @type {HTMLInputElement} */
    const repeatPasswdInput = document.getElementById('repeat-contraseña')
    /** @type {HTMLInputElement} */
    const phoneInput = document.getElementById('telefono')

    form.addEventListener('submit', handleSubmit)
    phoneInput.addEventListener('keypress', handlePhoneInput)
    passwdInput.addEventListener('input', handlePasswdInput)
    passwdInput.addEventListener('change', handlePasswdInput)
    repeatPasswdInput.addEventListener('input', handlePasswdEqualtoRepeatPasswd)
    repeatPasswdInput.addEventListener('change', handlePasswdEqualtoRepeatPasswd)
    
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    function handlePhoneInput (e) {
        const n = Number(e.key)

        if (e.key === ' ' || Number.isNaN(n)) {
            e.preventDefault()
        }
    }
    
    /**
     * @param {SubmitEvent} e
     */
    function handleSubmit (e) {
        e.preventDefault()

        if (passwdInput.value === repeatPasswdInput.value) {
            form.submit()
        }
    }

    function handlePasswdInput () {
        if (passwdInput.validity.patternMismatch) {
            passwdInput.reportValidity()
            passwdInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres con letras mayúsculas, minúsculas y números')
        } else {
            passwdInput.setCustomValidity('')
        }
    }

    function handlePasswdEqualtoRepeatPasswd () {
        if (passwdInput.value !== repeatPasswdInput.value) {
            repeatPasswdInput.reportValidity()
            repeatPasswdInput.setCustomValidity('Las constraseñas deben coincidir')
        } else {
            repeatPasswdInput.setCustomValidity('')
        }
    }
}
