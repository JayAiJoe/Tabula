<template>
    <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">BoardMaster</h6> <span>1 week ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Keyboard</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">ILY5000</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 94%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">47 pledgers <span class="text2">of 50 units</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-dribbble"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Keyng</h6> <span>1 day ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Keycaps</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Kaizen DSA</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 33%; background-color: yellowgreen;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">50 pledgers <span class="text2">of 150 units</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Count Tabula</h6> <span>4 days ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Keyboard</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Nightshade X3</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">128 Applied <span class="text2">of 160 capacity</span></span> </div>
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

<style scoped>
body {
    background-color: #6e6e6e
}

.card {
    border: none;
    border-radius: 10px;
    background-color: #F8F9FA;
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
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color: #6e6e6e;
    justify-content: center;
    align-items: center;
    filter: brightness(180%);
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
</style>