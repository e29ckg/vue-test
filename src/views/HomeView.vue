<script setup>;

</script>
<template>

<div class="mdl-grid mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top">
<!-- Robot card-->
<div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone">
    <div class="mdl-card mdl-shadow--2dp robot">
        <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">BB-8</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <div>
                A skittish but loyal astromech, BB-8 accompanied Poe Dameron on many missions for the
                Resistance helping keep his X-wing in working order.
            </div>
            <a href="http://www.starwars.com/databank/bb-8" target="_blank">Star Wars Databank</a>
        </div>
    </div>
</div>
<!-- ToDo_widget-->
<div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone">
    <div class="mdl-card mdl-shadow--2dp todo">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">To-do list</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <ul class="mdl-list">

            </ul>
        </div>
        <div class="mdl-card__actions">
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">remove selected</button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-shadow--8dp mdl-button--colored ">
                <i class="material-icons mdl-js-ripple-effect">add</i>
            </button>
        </div>
    </div>
</div>

</div>

</template>



