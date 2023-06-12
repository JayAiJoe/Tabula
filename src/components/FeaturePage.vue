<template>

<div style="margin:10%">
<div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-12">
            <h1 class="light title">Group Buys Galore!</h1><br>
            <p class="light paragraph">Get real time updates on brand new offerings. See which boards and designers are gaining traction.
                Never miss your opportunity to find the perfect board! The Tabula marketplace offers an organized catalogue of designer products
                to help you browse kayboards and parts with ease. Relevant information such as product specifications, photos, experiences from buyers,
                seller ratings, and real-time tracking of limited slots will be available to help you make the best choice when it comes to group buys.
            </p>
        </div>
    </div>
    </div>

    <feature-card></feature-card>

    <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-12">
            <h1 id="des-title" class="light title">Designer-centric Marketplace</h1><br>
            <p id="des-text" class="light paragraph">Whether you're a successful designer with a big following or an underdog entering the Keyboard
                design space, we've got your back! Tabula will allow you to share your designs with potential customers without much fuss. Simply share your
                brilliant ideas and let us handle the hassles of promotion and transactions. Interest checking features will help you plan out your project. Our platform will also allow you, if you chose, 
                to interact with your followers and customers so you can work together throughout the iterative design process. Through successful launches, you can grow your reputation with us
                and gain a larger following as a designer.
            </p>
        </div>
    </div>
    </div>

    <designer-features></designer-features>

    <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-12">
            <h1 class="light title">Together as a Keymunity</h1><br>
            <p class="light paragraph">The keyboard community is a relatively small community, so we have to stick together. Let people
                know about your incoming projects and latest group buys. Form connections with the local keyboard community. Maybe even meetup to discuss
                design ideas or make trades. With Tabula's community-centered features such as follows, profiles with badges , and design discussions,  you can get to know more about
                the people, designers and other customer, who share you passion.
            </p>
        </div>
    </div>
    </div>

    <community-features></community-features>


    <div class="form-center mt-5">
    <form style="">
        <button class="light hoverable"><span class="keycap">J</span>oin the waitlist</button>
    </form>
    </div>

    </div>
    

    <div style="height:200px;"></div>
 
</template>

<script>
import FeatureCard from './FeatureCard.vue';
import DesignerFeatures from './DesignerFeatures.vue';
import CommunityFeatures from './CommunityFeatures.vue';

export default{
  components: { 
    FeatureCard,
    DesignerFeatures,
    CommunityFeatures
 }
}
</script>

<style scoped>
button {
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  color: #212529;
  background: #F8F9FA;
  font-size: 2em;
  border-radius: 10px;

}
form {
    display: inline-block;
    margin:auto;
}

.form-center {
  display:flex;
  justify-content: center;
}
</style>