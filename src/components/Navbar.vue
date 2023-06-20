<template>
    <nav :class ="[`navbar-light`, `bg-light`, 'navbar', 'navbar-expand', 'fixed']">
        <div class="container">
            <router-link to="/" class="nav-link" style="float: left;"><span class="keycap">T</span>abula</router-link>
            <div class="collapse navbar-collapse flex-grow-0">
                <ul class="navbar-nav justify-content-center">
                    <!--<li class="hoverable">
                        <router-link to="/" class="nav-link"><span class="">F</span>eatures</router-link>
                    </li>-->
                    <li class="hoverable">
                        <!--<router-link to="/join" class="nav-link"><span class="">J</span>oin</router-link>-->
                        <a href="#" @click="randomForm" class="nav-link">Group Buy</a>
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

<script setup>
var forms = [
        'https://forms.gle/5HLcr4q9BoPMSZ1L8',
        'https://forms.gle/Un79wk1bgwsTX7zP7',
        'https://forms.gle/Mmo2dbjxVxLh16mz8',
        'https://forms.gle/iEKnGvwzj7Ra1wXj8',
        'https://forms.gle/d41313qogtWVgG3h7'
        ];

        function randomForm() {
            var i = parseInt(Math.random() * forms.length);
            location.href = forms[i];
        }
</script>


<style scoped lang="scss">
a {
    font-size: 1.5em;
}
button {
    margin-right: 30px;
    font-size: 1.5em;
}

button:hover{
    text-decoration: underline;
    font-size: 5em;
}

.fixed{
    //position: fixed;
    top: 0; 
    height: 95px;
    width: 100%;
    z-index: 100;
}

li{
    font-size: 1.2em;
    margin-left: 15px;
}

</style>
