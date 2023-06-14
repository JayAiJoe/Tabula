<template>
    

<div class="wrap">
    <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center" style="flex-wrap: wrap;">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">BoardMaster</h6> <span>1 week ago</span>
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div class="badge"> <span>Keyboard</span> </div>
                
                <div class="mt-2">
                    <h3 class="heading">ILY5000</h3>
                    <div class="mt-3">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 94%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">47 pledgers <span class="text2">of 50 units</span></span> </div>
                    </div>
                </div>
            </div>


  <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center" style="flex-wrap: wrap;">
                        <div class="icon"> <i class="bx bxl-dribbble"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Keyng</h6> <span>1 day ago</span>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="badge"> <span>Keycaps</span> </div>

                <div class="mt-2">
                    <h3 class="heading">Kaizen DSA</h3>
                    <div class="mt-3">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 33%; background-color: yellowgreen;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">50 pledgers <span class="text2">of 150 units</span></span> </div>
                    </div>
                </div>
            </div>

            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center" style="flex-wrap: wrap;">
                        <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Count Tabula</h6> <span>4 days ago</span>
                        </div>
                        
                    </div>
                </div>
                <div class="badge"> <span>Keyboard</span> </div>
                <div class="mt-2">
                    <h3 class="heading">Nightshade X3</h3>
                    <div class="mt-3">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">128 pledgers <span class="text2">of 160 units</span></span> </div>
                    </div>
                </div>
            </div>
  </div>

  
</template>

<script>
export default{
}
</script>

<style scoped>
body {
    background-color: #6e6e6e
}

.card {
    border: none;
    border-radius: 10px;
    background-color: #F8F9FA;
    min-width: 300px;
    margin: auto;
}

.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #212529;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}

.badge span {
    background-color: #212529;
    width: 75px;
    height: 25px;
    padding: 0px;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    color: #6e6e6e;
    justify-content: center;
    align-items: center;
    filter: brightness(180%);
    overflow: hidden;
    float: left;
}

.progress {
    height: 10px;
    border-radius: 10px
}

.progress div {
    background-color: red
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}

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