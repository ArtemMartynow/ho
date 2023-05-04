<script setup>

</script>

<template>
    <div class="message">
        <h2>Hi! We await your message</h2>
        <form @submit.prevent.stop="submit">
            <input type="text" placeholder="NAME SURNAME">
            <input type="email" placeholder="E-MAIL" id="email">
            <textarea  placeholder="| MESSAGE"></textarea>
            <button class="form-btn">send</button>
        </form>
    </div>
</template>