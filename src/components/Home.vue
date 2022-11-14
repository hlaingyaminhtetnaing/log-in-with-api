<template>
    <div>
        <h1 id="successText">Home</h1>
        <v-card class="mx-auto" max-width="800" color="transparent"
         style="padding-top:30px;padding-left: 30px;padding-bottom: 30px;">
            <v-card-text class="subtitle">
                Id: <span class="sub">
                    {{ this.user.id }}
                </span>
            </v-card-text>
            <v-card-text class="subtitle">
                Name: <span class="sub">
                    {{ this.user.name }}
                </span>
            </v-card-text>
            <v-card-text class="subtitle">
                User Name : <span class="sub">
                    {{ this.user.username }}
                </span>
            </v-card-text>

            <v-card-text class="subtitle">
                Email : <span class="sub">
                    {{ this.user.email }}
                </span>
            </v-card-text>
            <v-card-text class="subtitle">
                Phone : <span class="sub">
                    {{ this.user.phone }}
                </span>
            </v-card-text>
            <v-card-text class="subtitle">
                Address : <span class="sub">
                    {{ this.address.zipcode }},{{ this.address.suite }},{{ this.address.street }},{{ this.address.city }}
                </span>
            </v-card-text>
            <v-card-text class="subtitle">
                Company Name : <span class="sub">
                    {{ this.company.name }}
                </span>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            user: [],
            address: [],
            company: []
        }
    },
    async mounted() {
        let self = this;
        self.showUserName();
    },
    methods: {
        async showUserName() {
            let self = this;
            let value=parseInt(self.$route.params.id); 
                   
            await axios.get(`https://jsonplaceholder.typicode.com/users/${value+1}`)
                .then((response) => {
                    self.user = response.data;
                    self.address = response.data.address;
                    self.company = response.data.company;
                });
        }
    }
}
</script>
<style scoped>
#successText {
    margin-top: 50px;
    font-family: "Futara";
    text-align: center;
    font-size: 50px;
    color:black;
}

.subtitle {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Corbel";
}

.sub {
    margin-top: 20px;
    font-size: 20px;
    font-family: "Comic Sans MS";
    color:blueviolet;
}

</style>