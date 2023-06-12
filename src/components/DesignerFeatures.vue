<template>
    <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="images">
                    <img src="https://www.keebtalk.com/uploads/db8059/original/3X/7/a/7a7189094f3c7a8cb5005d70acb859a418258a83.jpeg" />
                </div>
                <div class="slideshow-buttons">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
                <p class="pick">view</p>
                <div class="sizes">
                    <div class="size">Top</div>
                    <div class="size">Profile</div>
                    <div class="size">Under</div>
                    <div class="size">Switches</div>
                </div>
                <div class="product">
                    <p>BoardMaster</p>
                    <h1>ILY3000 - Infinity</h1>
                    <h2>P13,500.00</h2>
                    <textarea readonly="yes" rows="5" style="margin-top: 10px; margin-bottom: 10px; font-size: 0.8em;">The new colors look way better. Nice mockup. I was so scared that the other colors would win the vote set in the last iteration hahaha.</textarea>
                    <div class="buttons">
                        <button class="add">Comment</button>
                        <button class="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card">
                <div class="images">
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2022/11/compact-mechanical-keyboard-2048px-6661.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" />
                </div>
                <div class="slideshow-buttons">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
                <p class="pick">view</p>
                <div class="sizes">
                    <div class="size">Top</div>
                    <div class="size">Profile</div>
                    <div class="size">Under</div>
                    <div class="size">Switches</div>
                </div>
                <div class="product">
                    <p>BoardMaster</p>
                    <h1>YnYng MX</h1>
                    <h2>P17,500.00</h2>
                    <p style="margin-right:30%; margin-bottom: 25%;">Inspired by the forces of yin and yang, you get two boards as a set. This design was made with balance in mind so the switches are ...</p>
                    <div class="buttons">
                        <button class="add">Pledge</button>
                        <button class="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
export default{

}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
$font: 'Lato', sans-serif;

$white: #F5F5F5;
$light: #E0C9CB;
$tan: #C3A1A0;
$pink: #D9AAB7;
$rose: #BA7E7E;
$dark: #4E4E4E;

/* center container in the middle */
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

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 60%;
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
  cursor: pointer;
  &:hover {
    background: $rose;
    transition: all .4s ease-in-out;
  }
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}

.sizes {
  display: grid;
  color: $pink;
  grid-template-columns: repeat(auto-fill, 60px);
  width: 50%;
  grid-gap: 4px;
  margin-left: 20px;
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
  font-size: 0.7em;
  text-align: center;
  &:hover{
    background: $rose;
    color: $white;
    transition: all .4s ease-in-out;
  }
}

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
</style>