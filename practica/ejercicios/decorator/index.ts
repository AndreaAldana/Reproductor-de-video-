class Field {
    errors: string[]
    input: HTMLInputElement

    constructor(input: HTMLInputElement) {
        this.input = input
        this.errors = []

        let errorMessage = document.createElement('p')
        errorMessage.className = 'text-danger'

        //Esto es para insertar el p 
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling)


        //La validacion solo ocurre al cambiar el valor del campo
        this.input.addEventListener('input', () => {
            this.errors = []
            //Valida y pusea si hay error
            this.validate()
            errorMessage.innerText = this.errors[0] || ''
        })
    }
    validate() { }
}

function RequiredFieldDecorator(field: Field): Field {
    let validate = field.validate;
    field.validate = function () {
        validate()
        let value = field.input.value;
        if (!value) {
            field.errors.push("Requerido")
        }

    }
    return field
}


function EmailFieldDecorator(field: Field): Field {
    let validate = field.validate;
    field.validate = function () {
        validate()
        let value = field.input.value;
        //el guion significa que el value no sea -1, esto quiere decir, que no exista
        if (!~value.indexOf('@')) {
            field.errors.push("Debe ser un email")
        }

    }
    return field
}

let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field)
field = EmailFieldDecorator(field)