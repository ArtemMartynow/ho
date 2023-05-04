<script setup>

</script>

<template>
    <div class="message">
        <h2>Hi! We await your message</h2>
        <form @submit.prevent.stop="submit">
            <input type="text" placeholder="NAME SURNAME">
            <input type="email" placeholder="E-MAIL">
            <textarea 
                cols="30" 
                rows="10" 
                placeholder="|MESSAGE"
            ></textarea>
            <button class="form-btn">send</button>
        </form>
    </div>
</template>