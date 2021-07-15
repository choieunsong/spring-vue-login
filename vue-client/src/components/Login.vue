<template>
    <div>
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
        
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import GoogleLogin from 'vue-google-login';
export default {
    name: 'Login',
    setup(){
        const state = reactive({
            params: '22703579106-9dm070cirm60ndt14oghvccavs3i8t29.apps.googleusercontent.com'
        })
        const onSuccess = (googleUser) => {
            console.log(googleUser);

        }
        const onFailure = () => {
            console.log('failure');
        }
        return{
            state,
            onSuccess,
            onFailure
        }
    }
};
</script>