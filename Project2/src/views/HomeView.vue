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
        <img src="https://content.thriveglobal.com/wp-content/uploads/2021/03/5-Powerful-Ways-Running-in-Nature-Can-Help-You-Weather-the-Pandemic.jpg" alt = "image" width="450" height="450">
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
        <img src="data:image/jpeg;base64,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" alt="Image" width="350" height="350">
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMairShZvJKdfQ9T996EOwvWQwCbqryvgkg&usqp=CAU" alt="Image" width="550" height="550">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5NBGsMsfY8bp9d8ie7jG-X5GXezDsvvyMA&usqp=CAU" alt="Image">     
       </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Hanna Smith</strong> <small>@HannaSmith</small> <small>1h</small>
          <br>
          Squated 225lbs today. Reached my max PR, feeling stronger! @Janisse You go girl :)
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



