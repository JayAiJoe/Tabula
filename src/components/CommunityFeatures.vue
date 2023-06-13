<template>
    <div class="wrap">
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="../assets/pfp4.jpg">
      <div class="title-flex">
        <h3 class="box-title">Chelsea Natividad</h3>
        <p class="user-follow-info">Treasure Hunter</p>
      </div>
      <p class="description">One man's trash is another girl's treasure! Sell your old parts to me. I like to make keyboard art haha.</p>
    </div>
    <a href="#" class="button">Follow Chelsea</a>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="../assets/pfp3.jpg">
      <div class="title-flex">
        <h3 class="box-title">Mark Cayas</h3>
        <p class="user-follow-info">15 Projects - Designer</p>
      </div>
      <p class="description">Hello please check my designs. I do small batches of custom orders. You can follow me @MarKEYSss on Facebook and Twitter.</p>
    </div>
    <a href="#" class="button">Follow Mark</a>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="../assets/pfp2.jpg">
      <div class="title-flex">
        <h3 class="box-title">Tanya Sy</h3>
        <p class="user-follow-info">Diamond Collector</p>
      </div>
      <p class="description">I like cute designs hehe. Add me if you wanna share some cute designs and also make pasabuy.</p>
    </div>
    <a href="#" class="button">Follow Tanya</a>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="../assets/pfp1.jpg">
      <div class="title-flex">
        <h3 class="box-title">Isaiah Jocson</h3>
        <p class="user-follow-info">Noob</p>
      </div>
      <p class="description">Just got into this hobby but no budget yet for the big bois. Recommendations are super welcome!</p>
    </div>
    <a href="#" class="button">Follow Isaiah</a>
  </div>
</div>

</template>

<script>

</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --purple: hsl(240, 80%, 89%);
  --pink: hsl(0, 59%, 94%);
  --light-bg: hsl(204, 37%, 92%);
  --light-gray-bg: hsl(0, 0%, 94%);
  --white: hsl(0, 0%, 100%);
  --dark: hsl(0, 0%, 7%);
  --text-gray: hsl(0, 0%, 30%);
}

body {
  background: var(--light-bg);
  font-family: "Space Grotesk", sans-serif;
  color: var(--dark);
}

h3 {
  font-size: 1.5em;
  font-weight: 700;
}

p {
  font-size: 1em;
  line-height: 1.7;
  font-weight: 300;
  color: var(--text-gray);
}

.description {
  white-space: wrap;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  gap: 24px;
  padding: 24px;
  flex-wrap: wrap;
}

.box {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  position: relative;
  padding: 24px;
  background: #fff;
  border-radius: 10px;
}

.box-top {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  margin-bottom: 36px;
}

.box-image {
  width: 100%;
  object-fit: cover;
  object-position: 50% 20%;
}

.title-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-title {
  border-left: 3px solid var(--purple);
  padding-left: 12px;
}

.user-follow-info {
  color: hsl(0, 0%, 60%);
}

.button {
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  padding: 16px;
  color: #000;
  background: transparent;
  box-shadow: 0px 0px 0px 1px black inset;
  transition: background 0.4s ease;
  border-radius: 10px;
}

.button:hover {
  background: var(--purple);
}

.fill-one {
  background: var(--light-bg);
}

.fill-two {
  background: var(--pink);
}

/* RESPONSIVE QUERIES */

@media (min-width: 320px) {
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
  .user-follow-info {
    margin-top: 6px;
  }
}

@media (min-width: 460px) {
  .title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
  .user-follow-info {
    margin-top: 6px;
  }
}

@media (min-width: 640px) {
  .box {
    flex-basis: calc(50% - 12px);
  }
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
  .user-follow-info {
    margin-top: 6px;
  }
}

@media (min-width: 840px) {
  .title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
  .user-follow-info {
    margin-top: 6px;
  }
}

@media (min-width: 1024px) {
  .box {
    flex-basis: calc(33.3% - 16px);
  }
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
  .user-follow-info {
    margin-top: 6px;
  }
}

@media (min-width: 1100px) {
  .box {
    flex-basis: calc(25% - 18px);
  }
}
</style>
