<template>
    <div id="centerText">
        <h1 id="title">Log In</h1>
        <v-form>
            <v-card class="mx-auto" max-width="400" outlined color="transparent">
                <v-card-text>
                    <v-text-field label="UserName"  clearable v-model="username"
                        :rules="usernameRules" />
                    <v-text-field label="Email Address" clearable v-model="email" :rules="emailRules" />                    
                </v-card-text>
                <v-btn depressed large color="#F8BBD0" @click="login(username,email)">
                    Log In
                </v-btn>
            </v-card>
        </v-form>
        <!-- <p v-if="Success == true" id="SuccessStatus">
            Log In Successfully
        </p> -->
        <p v-if="Error != null" id="errorStatus">
            {{ Error }}
        </p>
        <p id="signUpDesign">
            Don't have an account? &nbsp;&nbsp;<v-btn tile large color="#82B1FF" class="white--text">Sign Up</v-btn>
        </p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'LogIn',
    computed: {

        ...mapGetters({
            Success: 'getSuccess',
            Error: 'getErrorMessage'
        }),  
    },
    data() {
        return {
            email: '',
            username: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            usernameRules: [
                v => !!v || 'UserName is required'
            ],
            
        }
    },
    methods: {
        login(value, key) {
            this.$store.dispatch('login', {username: value, emailData: key });
        },

    },


}
</script>
<style scoped>
#title {
    font-style: oblique;
    font-size: 50px;
    font-family: "Segoe Script";
}

#centerText {
    text-align: center;
    margin-top: 50px;
}

#errorStatus{
    margin-top: 30px;
    color: red;
    font-size: 30px;
    font-family: "Futara";
    font-style: oblique;
}
#signUpDesign{
    margin-top: 200px;
    font-size: 26px;
    font-family: "Futara";
    font-style: oblique;
    color: blue;
}
#SuccessStatus{
    margin-top: 30px;
    color: green;
    font-size: 30px;
    font-family: "Futara";
    font-style: oblique;
}
</style>