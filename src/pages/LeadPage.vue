<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "LeadPage",
    data() {
        return {
            store,
            status:false,
            isError: false,
            errorMessage: null,
            formData: {
                author: '',
                content: ''
            }
        }
    },
    methods: {
        sendLead() {
            this.status=false
            const data = {
                author: this.formData.author,
                content: this.formData.content,
            };
            this.formData.author=''
            this.formData.content=''
            axios.post(this.store.apiBaseUrl + '/leads', data)
                .then((response) => {
                    if(response.status === 201){
                        this.status=true
                        console.log(response);
                    } 
                })
                .catch((error) => {
                    console.log(error)
                });
        },
    },
}
</script>


<template>
    <section>
        <div class="container">
            <h1>Contact us</h1>
            <span class="badge badge-pill text-success" v-if="status">Message sent!!</span>
            <form @submit.prevent="sendLead">
                <div class="mb-3">
                    <label for="author" class="form-label">Author</label>
                    <input type="text" class="form-control" id="author" v-model="formData.author">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Text</label>
                    <textarea class="form-control" id="content" rows="3" v-model="formData.content"></textarea>
                </div>
                <button class="btn btn-success" >Send</button>
            </form>
        </div>
    </section>
</template>