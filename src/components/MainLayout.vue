<script setup>
import HeaderLayout from '@/components/layout/HeaderLayout.vue'

</script>

<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-small-screen">       
        <HeaderLayout />

        
        <slot name="main"></slot>    

        <main class="mdl-layout__content">
            <div class="mdl-grid mdl-grid--no-spacing dashboard">
                <div class="mdl-grid mdl-cell mdl-cell--9-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top">
                    <slot name="content"></slot>
                </div>
            </div>
        </main>
    </div>
</template>