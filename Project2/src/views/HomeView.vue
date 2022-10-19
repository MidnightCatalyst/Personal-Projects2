<script setup lang="ts">
import Activity from "../components/Activity/Activity.vue"

</script>

<template>
  
<article class="message">
  <div class="message-header">
    <p>WELCOME TO MY FITNESS WEBSITE</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    My name is Christian Collado the designer of this website. As a fitness trainer myself, I hope you are enjoying your journey to a healthier lifestyle. I have created this website to help you track your progress and to help you stay motivated. I hope you enjoy your experience here and I hope you find this website helpful.
  </div>
</article>
  
  <main>
    <Activity />    
  </main>
 
  <div>
    <article class="panel is-info">
  <p class="panel-heading">
    Activity Log
  </p>
  <p class="panel-tabs">
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
</article>
</div>



<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://encrypted-tbn0.gstatic.com/imges?q=tbn:ANd9GcQw5NBGsMsfY8bp9d8ie7jG-X5GXezDsvvyMA&usqp=CAU" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Janisse</strong> <small>@Janisse</small> <small>20m</small>
          <br>
          Just finished a 10KM run. I feel great!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>



    
  </article>
</div>



<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5NBGsMsfY8bp9d8ie7jG-X5GXezDsvvyMA&usqp=CAU">     
       </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Michael</strong> <small>@Michael</small> <small>45m</small>
          <br>
          Had a great workout today at the Gym. PULL DAY BABY!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>



<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5NBGsMsfY8bp9d8ie7jG-X5GXezDsvvyMA&usqp=CAU" alt="Image">     
       </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Hanna Smith</strong> <small>@HannaSmith</small> <small>1h</small>
          <br>
          Squated 225lbs today. Reached my max PR, feeling stronger!
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>



