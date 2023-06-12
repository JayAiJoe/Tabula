<template>
    <nav :class ="[`navbar-light`, `bg-light`, 'navbar', 'navbar-expand']">
        <div class="container">
            <router-link to="/" class="nav-link" style="float: left;"><span class="keycap">T</span>abula</router-link>
            <div class="collapse navbar-collapse flex-grow-0">
                <ul class="navbar-nav justify-content-center">
                    <li class="hoverable">
                        <router-link to="/" class="nav-link"><span class="">F</span>eatures</router-link>
                    </li>
                    <li class="hoverable">
                        <!--<router-link to="/join" class="nav-link"><span class="">J</span>oin</router-link>-->
                        <a href="https://forms.gle/dzHVBbJv5fxXD43R7" class="nav-link"><span class="">J</span>oin</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
import FeatureTable from './FeatureTable.vue';
export default{
    components:{
        FeatureTable
    }

}
</script>

<style scoped>
a {
    font-size: 1.5em;
}
button {
    margin-right: 30px;
    font-size: 1.5em;
}

button:hover{
    text-decoration: underline;
}





</style>
