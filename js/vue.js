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
        msjErrorPassword: false
    },
    methods: {
        btnClaimFree() {
            if (this.firstName == '') {
                this.msjErrorNane = true;
                this.classErrorName = 'inputError';
            } else {
                this.msjErrorNane = false;
                this.classErrorName = '';
            }

            if (this.lastName == '') {
                this.msjErrorLastName = true; 
                if (this.msjErrorNane) {
                    this.classErrorLastName = 'inputError marginError';
                } else {
                    this.classErrorLastName = 'inputError marginError2';
                }
            } else {
                this.msjErrorLastName = false; 
                this.classErrorLastName = '';
            }

            if (this.email == '') { 
                this.msjErrorEmail = true; 
                if (this.msjErrorLastName) {
                    this.classErrorEmail = 'inputError marginError';
                } else {
                    this.classErrorEmail = 'inputError marginError2';
                }
            } else {
                this.msjErrorEmail = false; 
                this.classErrorEmail = '';
            }

            if (this.password == '') { 
                this.msjErrorPassword = true; 
                if (this.msjErrorEmail) {
                    this.classErrorPassword = 'inputError marginError';
                } else {
                    this.classErrorPassword = 'inputError marginError2';
                }
            } else {
                this.msjErrorPassword = false; 
                this.classErrorPassword = '';
            }
            console.log('Si esta funcionando el evento');
        }
    }
})