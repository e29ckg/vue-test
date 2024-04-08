<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'

import CardL from '@/components/cards/CardL.vue'

// Declare variables using ref
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  timeZone: 'local', 
  locale: 'th',
  weekends: true,
  events: [
    { id: 1, title: 'Meeting', start: new Date() }
  ],
  eventColor: '#378006',
  defaultAllDay: true,
  eventClick: function(info) {
    eventClick(info)    
  },
  dateClick: function(arg) {
    console.log(arg.date.toString()); // use *local* methods on the native Date Object
    // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
  }
});

const eventClick = (info) => {
  alert('Event: ' + info.event.id);
 

    // change the border color just for fun
    info.el.style.borderColor = 'red';
}
</script>


<!-- ใน template ยังคงใช้ FullCalendar เหมือนเดิม -->
<template>
  
<div class="mdl-grid mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top">
  <CardL>
    <template #content>
      <div>          
        <FullCalendar :options="calendarOptions" >    
        </FullCalendar>
      </div>
    </template>
  </CardL>

</div>
</template>
