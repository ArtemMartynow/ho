<script setup>

</script>

<template>
    <div class="message">
        <h2>Hi! We await your message</h2>
        <form @submit.prevent.stop="submit">
            <input type="text">
            <input type="email">
            <textarea cols="30" rows="10"></textarea>
            <button class="form-btn">send</button>
        </form>
    </div>
</template>