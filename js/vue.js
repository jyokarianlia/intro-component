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
            }

            if (this.lastName == '') {
                this.msjErrorLastName = true; 
                this.classErrorLastName = 'inputError';
            }

            if (this.email == '') { 
                this.msjErrorEmail = true; 
                this.classErrorEmail = 'inputError';
            }

            if (this.password == '') { 
                this.msjErrorPassword = true; 
                this.classErrorPassword = 'inputError';
            }
            console.log('Si esta funcionando el evento');
        }
    }
})