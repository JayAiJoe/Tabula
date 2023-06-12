<template>
    <h1>Join the Tabula waitlist!</h1>
    <form action="" class="container mb-3">
            <div class="row justify-content-center">
                <div class="col-md-5  ">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Email Address
                        </label>
                        <input 
                            type="text" 
                            class="form-control"
                            v-model="data.email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            class="form-control"
                            v-model="data.firstName"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            class="form-control"
                            v-model="data.lastName"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            What feature/s are you most excited about?
                        </label>
                        <textarea 
                            type="text" 
                            class="form-control"
                            rows="5"
                            v-model="data.faveFeatures"
                        ></textarea>
                    </div>
                    <div class="mb-3">
                        <button 
                            class="btn btn-primary hoverable"
                            :disabled="isFormInvalid"
                            @click.prevent="submitForm">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            
        </form>
</template>

<script setup>
import axios from 'axios';
import {ref, reactive, inject, computed} from 'vue';
import {useRouter} from 'vue-router';


const router = useRouter();
const data = reactive({
    email: '',
    firstName: '',
    lastName: '',
    faveFeatures: ''
});

const isFormInvalid = computed(()=>{
    return (!data.email || !data.firstName || !data.lastName || !data.faveFeatures);
})


function submitForm(){
            
    let apiURL = 'http://localhost:4000/api/create-signup'

    //let data = JSON.stringify(this.signUp);

    axios.post(apiURL, data)
    .then(function (response){
        clearForm();
        router.push({path: ''});
    })
    .catch(function (error) {
        console.log(error);
    });

}

function clearForm(){
    data.email = '';
    data.firstName = '';
    data.lastName = '';
    data.faveFeatures = '';
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 1em;
}

.btn {
    background: #e7e7e7;
    color: #212529;
    font-weight: bold;
    opacity: 1;
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -ms-filter: brightness(100%);
    -o-filter: brightness(100%);
    filter: brightness(100%);
}


.form-control{
    background: #e7e7e7;
}
.form-label{
    color:  #e7e7e7;
    font-style: bold;
}

.btn:disabled{
    -webkit-filter: brightness(60%);
    -moz-filter: brightness(60%);
    -ms-filter: brightness(60%);
    -o-filter: brightness(60%);
    filter: brightness(60%);
}
</style>

