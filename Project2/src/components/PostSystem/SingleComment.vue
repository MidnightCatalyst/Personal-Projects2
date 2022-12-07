<template>
    <div class="comment">
        <div class="avatar">
            <img :src="comment.avatar" alt="">
        </div>
        <div class="text">
            <a class="username" href="#">@{{ comment.user }}</a> <span>{{ comment.text }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'singleComment',
        props: ['comment']
    }
</script>

<style scoped>
/* Single-comment component */
.comment {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    color: #333;
    background-color: lightblue;
    border-radius: 30px;
    box-shadow: 1px 1px 3px rgba(237, 231, 231, 0.2);
}

.comment .avatar {
    align-self: flex-start;
}

.comment .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    align-self: start;
}

.comment .text {
    text-align: left;
    margin-left: 10px;
}

.comment .text span {
    margin-left: 10px;
}

.comment .text .username {
    font-weight: bold;
    color: rgb(23, 22, 22);
}

</style>