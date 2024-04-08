<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="mdl-layout__drawer">        
        <header><slot name="nameApp"></slot></header>
        <div class="scroll__wrapper" id="scroll__wrapper">
            <div class="scroller" id="scroller">
                <div class="scroll__container" id="scroll__container">
                    <nav class="mdl-navigation">
                        
                        <RouterLink to="/" class="mdl-navigation__link " active-class="mdl-navigation__link" exact-active-class="mdl-navigation__link--current">
                            <i class="material-icons" role="presentation">dashboard</i>
                            Dashboard
                        </RouterLink>
                        <RouterLink to="/about" class="mdl-navigation__link " active-class="mdl-navigation__link" exact-active-class="mdl-navigation__link--current">
                            <i class="material-icons" role="presentation">dashboard</i>
                            About
                        </RouterLink>
                        <RouterLink to="/profile" class="mdl-navigation__link " active-class="mdl-navigation__link" exact-active-class="mdl-navigation__link--current">
                            <i class="material-icons" role="presentation">person</i>
                            Profile
                        </RouterLink>
                        
                        
                        <div class="mdl-layout-spacer"></div>
                        <hr>
                        <a class="mdl-navigation__link" href="https://github.com/CreativeIT/getmdl-dashboard">
                            <i class="material-icons" role="presentation">link</i>
                            GitHub
                        </a>
                    </nav>
                </div>
            </div>
            <div class='scroller__bar' id="scroller__bar"></div>
        </div>
    </div>
</template>

