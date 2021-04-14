<template>
<div>
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav d-flex">
                <li class="nav-item ml-1 mr-1">
                    <router-link to="/print-edition" tag="div" class="btn btn-outline-dark" active-class="active">Print Edition</router-link>
                </li>
                <li class="nav-item ml-1 mr-1">
                    <router-link to="/manager" tag="div" class="btn btn-outline-dark" active-class="active">Manager</router-link>
                </li>
                <li class="nav-item ml-1 mr-1">
                    <router-link to="/digital-edition" tag="div" class="btn btn-outline-dark" active-class="active">Digital Edition</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
</style>
