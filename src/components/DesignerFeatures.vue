<template>
  <div class="wrap">
        <div class="box" style="padding:30px">
        <div class="box-top">
          <img class="box-image" src="https://www.keebtalk.com/uploads/db8059/original/3X/7/a/7a7189094f3c7a8cb5005d70acb859a418258a83.jpeg">
          
          <div class="title-flex">

            <div class="product">
                <p>BoardMaster</p>
                <h1>ILY3000 - Infinity</h1>
                <h2>P13,500.00</h2>
            </div>
            
          </div>
          
            <div class="sizes">
              <div class="size">Top</div>
              <div class="size">Profile</div>
              <div class="size">Under</div>
              <div class="size">Switches</div>
          </div>


          <textarea readonly="yes" rows="3" style="margin-top: 10px; margin-bottom: 10px; font-size: 0.8em;">The new colors look way better. Nice mockup. I was so scared that the other colors would win the vote set in the last iteration hahaha.</textarea>
        </div>
        <div class="buttons">
            <button class="add">Comment</button>
            <button class="like"><span>♥</span></button>
        </div>
      </div>

      <div class="box" style="padding:30px">
        <div class="box-top">
          <img class="box-image" src="https://cdn.thewirecutter.com/wp-content/media/2022/11/compact-mechanical-keyboard-2048px-6661.jpg?auto=webp&quality=75&crop=1.91:1&width=1200">
          
          <div class="title-flex">

            <div class="product">
                <p>BoredMonkey</p>
                <h1>YnYng MX</h1>
                <h2>P17,500.00</h2>
            </div>
            
          </div>
          
            <div class="sizes">
              <div class="size">Top</div>
              <div class="size">Profile</div>
              <div class="size">Under</div>
              <div class="size">Switches</div>
          </div>

          <p>Inspired by the forces of yin and yang, you get two boards as a set. This design was made with balance in mind so the switches are ...</p>

        </div>
        <div class="buttons">
            <button class="add">Pledge</button>
            <button class="like"><span>♥</span></button>
        </div>
      </div>

  </div>



</template>

<script>
export default{

}
</script>


<style scoped lang="scss">
/**/ 
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
$font: 'Lato', sans-serif;

$white: #F5F5F5;
$light: #E0C9CB;
$tan: #C3A1A0;
$pink: #D9AAB7;
$rose: #BA7E7E;
$dark: #4E4E4E;

/* center container in the middle 
html {
  display: grid;
  min-height: 100%;
}

body {
  display: grid;
  background: $light;
  font-family: $font, sans-serif;
  text-transform: uppercase;
}

.card {
  overflow: hidden;
  height: 350px;
  background: $white;
  box-shadow: 5px 5px 15px rgba($rose, .5);
  border-radius: 10px;
}


*/
p:not(#des-text) {
  font-size: 0.6em;
  color: $rose;
  letter-spacing: 1px;
}

h1:not(#des-title) {
  font-size: 1.2em;
  color: $dark;
  margin-top: -5px;
}

h2 {
  color: $tan;
  margin-top: -5px;
}
/*
img {
    width: 220px; 
    height: 220px; 
    object-fit: cover;
  margin-top: 40px;
  margin-left: 40px;
}


.slideshow-buttons {
  top: 70%;
  display: none;
}

.one, .two, .three, .four {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: $light;
}

.one {
  left: 22%;
}
.two {
  left: 27%;
}
.three {
  left: 32%;
}
.four {
  left: 37%;
}
/* 
.product {
  position: absolute;
  width: 80%;
  height: 100%;
  top: 67%;
  left: 0%;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: $dark;
  font-size: .7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}
*/
button {
  background: darken($light, 10%);
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $white;
  max-height: 150px;
  cursor: pointer;
  &:hover {
    background: $rose;
    transition: all .4s ease-in-out;
  }
}


.add {
  width: 75%;
}

.like {
  width: 25%;
}


.sizes {
  display: grid;
  color: $pink;
  grid-template-columns: repeat(auto-fill, 75px);
  width: 100%;
  grid-gap: 10px;
  
  
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
}

.pick {
  margin-top: 11px;
  margin-bottom:0;
  margin-left: 20px;
}

.size {
  padding: 0px;
  border: 1px solid $light;
  font-size: 0.9em;
  text-align: center;
  overflow: hidden;
  &:hover{
    background: $rose;
    color: $white;
    transition: all .4s ease-in-out;
  }
}
/*
.focus{
  background: $rose;
  color: $white;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 10px;
  p:not(#des-text) {
    letter-spacing: 3px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #7d7d7d;
    }
  }
}
*/
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
  font-size: 40px;
  line-height: 1;
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
  height: 200px;
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
/*
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
}
*/

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
    flex-basis: calc(50% - 18px);
  }
}

#container {
    position: relative;
}

#my-text-area {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}

textarea {
    height: 100%;
    width: 100%;
}
</style>