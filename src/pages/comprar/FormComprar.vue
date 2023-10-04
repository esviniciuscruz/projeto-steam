<script>
export default {
    name: 'FormComprar',
    data() {
        return {
            validated: '',
            invalidFeedbackName: '',
            invalidFeedbackEmail: 'invalid-feedback',
            invalidFeedbackPhone: 'invalid-feedback',
            invalidFeedbackAddress: 'invalid-feedback',
            invalidFeedbackCpf: 'invalid-feedback',
            invalidFeedbackPayment: 'invalid-feedback',
            name: '',
            email: '',
            phone: '',
            address: '',
            cpf: '',
            payment: '',
            agreement: false
        }
    },
    methods: {
        async submitPurchase(e) {
            e.preventDefault()

            this.validated = 'was-validated'

            if(!this.validationName()) {
                this.invalidFeedbackName = 'invalid-feedback'
            }
            
            if(!this.validationEmail()) {
                this.invalidFeedbackEmail = 'invalid-feedback'
            }

            if(!this.validationPhone()) {
                this.invalidFeedbackPhone = 'invalid-feedback'
            }

            if(!this.validationAddress()) {
                this.invalidFeedbackAddress = 'invalid-feedback'
            }

            if(!this.validationCpf()) {
                this.invalidFeedbackCpf = 'invalid-feedback'
            }
        },
        validationName() {
            if(this.name.trim() !== '') {
                return true
            } else {
                return false
            }
        },
        validationEmail() {
            const emailRegex = new RegExp(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
            )

            if(this.email.trim() !== '' && emailRegex.test(this.email))  {
               return true
            } else {
                return false
            }
        },
        validationPhone() {
            const phoneRegex = /^\d{11}$/

            if(this.phone.trim() !== '' && phoneRegex.test(this.phone)) {
               return true
            } else {
                return false
            }
        },
        validationAddress() {

            if(this.address.trim() !== '' && this.address.length > 9) {
                return true
            } else {
                return false
            }
        },
        validationCpf() {

            if(this.cpf.trim() !== '') {
                this.cpf = this.cpf.replace(/[^\d]/g, ''); // Remove all non-numeric characters
            if (this.cpf.length !== 11) {
                return false; // The CPF must have 11 digits
            }

            // Checks if all digits are the same (invalid CPF, but can pass size validation)
            if (/^(\d)\1+$/.test(this.cpf)) {
                return false;
            }

            // Calculates the first check digit
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += parseInt(this.cpf.charAt(i)) * (10 - i);
            }
            let remainder = 11 - (sum % 11);
            let firstDigit = (remainder === 10 || remainder === 11) ? 0 : remainder;

            // Calculates the second check digit
            sum = 0;
            for (let i = 0; i < 10; i++) {
                sum += parseInt(this.cpf.charAt(i)) * (11 - i);
            }
            remainder = 11 - (sum % 11);
            let secondDigit = (remainder === 10 || remainder === 11) ? 0 : remainder;

            // Verifies that the calculated check digits match the original check digits
            if (parseInt(this.cpf.charAt(9)) === firstDigit && parseInt(this.cpf.charAt(10)) === secondDigit) {
                return true; // CPF valid
            } else {
                return false; // CPF invalid
            }
            } else {
                return false
            }
            
        },
        validationPayment() {

        },
        validationAgreement() {

        }
        
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center container px-5 mx-5 text-white">
        <h1 class="my-4">Formulário para compra</h1>
        <form :class="'needs-validation ' + validated + ' w-75'" @submit="submitPurchase" novalidate>
            <div class="form-row w-100 px-5">
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom01">Nome Completo</label>
                    <input type="text" class="form-control" id="validationCustom01" v-model="name" placeholder="Nome Completo" required>
                    <div v-if="invalidFeedbackName" :class="invalidFeedbackName">
                        Nome Completo inválido! 
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Email</label>
                    <input type="email" class="form-control" id="validationCustom02" v-model="email" placeholder="Email" required>
                    <div :class="invalidFeedbackEmail">
                        Email inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Telefone</label>
                    <input type="text" class="form-control" id="validationCustom02" minlength="11" v-model="phone" placeholder="Telefone" required>
                    <div :class="invalidFeedbackPhone">
                        Telefone inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Endereço</label>
                    <input type="text" class="form-control" id="validationCustom02" minlength="10" v-model="address" placeholder="Endereço" required>
                    <div :class="invalidFeedbackAddress">
                        Endereço inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Seu CPF</label>
                    <input type="text" class="form-control" id="validationCustom02" minlength="11" v-model="cpf" placeholder="Seu CPF" required>
                    <div :class="invalidFeedbackCpf">
                        CPF inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Forma de pagamento</label>
                    <select class="custom-select form-control w-100" id="validationCustom02" v-model="payment" required>
                        <option value="">Selecione a forma de pagamento</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="invalid-feedback">
                        Forma de pagamento inválido!
                    </div>
                </div>
            </div>
            <div class="form-group px-5">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="invalidCheck" v-model="agreement" required>
                    <label class="form-check-label" for="invalidCheck">
                        Concordo com os termos e condições
                    </label>
                    <div class="invalid-feedback">
                        Você deve concordar antes de enviar.                        
                    </div>
                </div>
            </div>
            <button class="btn btn-primary my-3 mx-5" type="submit">Confirmar compra</button>
        </form>
    </div>
</template>
