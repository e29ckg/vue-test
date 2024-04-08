<script setup>
import { watch } from 'vue';
import {RouterLink, RouterView} from 'vue-router'
import HeaderLayout from './components/layout/HeaderLayout.vue';
import NavLayout from './components/layout/NavLayout.vue';


</script>

<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-small-screen" v-if="($route.name != 'login')">            
        <HeaderLayout> </HeaderLayout>
        <NavLayout>
            <template #nameApp>
                E29ckg
            </template>
        </NavLayout>
            
            <main class="mdl-layout__content">
                <div class="mdl-grid mdl-grid--no-spacing dashboard">
                    <div class="mdl-grid mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top">
                        <RouterView />      

                        </div>

                </div>
            </main>      
            
        </div>
        <div v-else>

            <RouterView />            
        </div>
    
          
</template>