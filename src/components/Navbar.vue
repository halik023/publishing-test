<template>
<div>
    <nav class="navbar navbar-expand-sm nav-bb">
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav d-flex">
                <li class="nav-item ml-4 mr-4">
                    {{infoNavbar.pages}} Pages
                </li>
                <li class="nav-item ml-4 mr-4 li-main">
                    {{infoNavbar.sheets}} Sheets
                </li>
                <li class="nav-item ml-4 mr-4">
                    {{infoNavbar.screens}} Screens
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    props: {
        infoNavbar: Object
    }
};
</script>

<style lang="scss" scoped>
.li-main {
    font-weight: 600;
    color: cadetblue;
}

.nav-bb {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
