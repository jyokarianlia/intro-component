const app = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        classErrorName: '',
        classErrorLastName: '',
        classErrorEmail: '',
        classErrorPassword: '',
        msjErrorNane: false,
        msjErrorLastName: false,
        msjErrorEmail: false,
        msjErrorPassword: false,
        expRegular: {
            name: /^[a-zA-ZÀ-ÿ\s]+$/,
            numero: /\D/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[A-Za-z0-9]+$/
        }
    },
    methods: {
        btnClaimFree() {
            if (this.firstName == '') {
                this.msjErrorNane = true;
                this.classErrorName = 'inputError';
            } else {
                let first = this.expRegular.name.test(this.firstName);
                let sec = this.expRegular.numero.test(this.firstName);
                if(first && sec) {
                    this.msjErrorNane = false;
                    this.classErrorName = '';
                } else {
                    this.msjErrorNane = true;
                    this.classErrorName = 'inputError';
                }
            }

            if (this.lastName == '') {
                this.msjErrorLastName = true; 
                this.classErrorLastName = this.claseDeError(this.msjErrorNane);
            } else {
                const last = this.expRegular.name.test(this.lastName);
                if(last) {
                    this.msjErrorLastName = false; 
                    this.classErrorLastName = '';
                } else {
                    this.msjErrorLastName = true; 
                    this.classErrorLastName = this.claseDeError(this.msjErrorNane);
                }
            }

            if (this.email == '') { 
                this.msjErrorEmail = true; 
                this.classErrorEmail = this.claseDeError(this.msjErrorLastName);
            } else {
                const dato = this.expRegular.email.test(this.email);
                if(dato) {
                    this.msjErrorEmail = false; 
                    this.classErrorEmail = '';
                } else {
                    this.msjErrorEmail = true; 
                    this.classErrorEmail = this.claseDeError(this.msjErrorLastName);
                }
            }

            if (this.password == '') { 
                this.msjErrorPassword = true; 
                this.classErrorPassword = this.claseDeError(this.msjErrorEmail);
            } else {
                this.msjErrorPassword = false; 
                this.classErrorPassword = '';
            }
        },
        claseDeError(condicion) {
            if (condicion) {
                return 'inputError marginError';
            } else {
                return 'inputError marginError2';
            }
        }
    }
})