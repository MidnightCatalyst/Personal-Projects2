<template>
    <div class="comments">
        <div :class="comments_wrapper_classes">
            <single-comment 
                v-for="comment in comments"
                :comment="comment"
                :key="comment.id"
            ></single-comment>
        </div>
        <hr>
        <div class="reply">
            <div class="avatar">
                <img :src="current_user.avatar" alt="">
            </div>
            <input 
                type="text" 
                v-model.trim="reply" 
                class="reply--text" 
                placeholder="Begin Your Journey By Sharing Your Story!"
                required
                @keyup.enter="submitComment"
            />
            <button class="reply--button" @click.prevent="submitComment"><i class="fa fa-paper-plane"></i> POST</button>
        </div>
    </div>
</template>

<script>
import singleComment from '/src/components/PostSystem/UserPost.vue'
    export default {
        name: 'comments',
        components: {
            singleComment
        },
        data() {
            return {
                reply: ''
            }
        },
        methods: {
            submitComment() {
                if(this.reply != '') {
                    this.$emit('submit-comment', this.reply);
                    this.reply = '';
                }
            }
        },
        props: ['comments', 'current_user', 'comments_wrapper_classes']
    }
</script>

<style scoped>
.comments {
    margin-top: 20px;
    padding: 20px;
    padding-top: 0;
}

.comments-wrapper {
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: rgb(120, 114, 132);
}

.custom-scrollbar::-webkit-scrollbar
{
    width: 15px;
    background-color: rgb(217, 204, 204);
}

.custom-scrollbar::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgb(230, 173, 221);
}


.reply {
    display: flex;
    position: relative;
    align-items: center;
    background-color: lightblue;
    border-radius: 30px;
    padding: 5px 10px;
    overflow: hidden;
}

.reply .avatar {
    position: absolute;
}

.reply .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
}

.reply .reply--text {
    min-height: 40px;
    padding: 10px 10px 10px 55px;
    margin-right: 10px;
    border: 0;
    color: rgb(17, 16, 16);
    width: 100%;
    outline: 0;
    background-color: transparent;
    box-shadow: none;
}

.reply input.reply--text:valid {
    margin-right: 71px;
}

.reply input.reply--text:valid + .reply--button {
    right: 10px;
}


.reply .reply--button:hover {
    color: rgb(19, 18, 18);
    background-color: #2a629c;
}

.reply .reply--button:focus,
.reply .reply--button:active {
    box-shadow: 0 0 0 0.2rem rgba(238, 165, 236, 0.25);
}

hr {
    margin-top: 35px;
    margin-bottom: 10px;
}
</style>