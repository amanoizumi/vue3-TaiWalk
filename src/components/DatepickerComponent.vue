<template>
  <Datepicker
    v-model="date"
    placeholder="請選擇日期"
    :enableTimePicker="false"
    :minDate="minDate"
    :maxDate="maxDate"
    :format="format"
    preventMinMaxNavigation
    autoApply
  ></Datepicker>
</template>

<script>
import { ref, computed, watch } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { addMonths, getMonth, getYear } from 'date-fns';


export default {
  components: { Datepicker },
  setup(props, { emit }) {
    const date = ref();
    const minDate = computed(() => new Date());
    const maxDate = computed(() => addMonths(new Date(getYear(new Date()), getMonth(new Date())), 3));

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${year}-${month}-${day}`;
    };

    const emitTime = (date) => {
      emit('emit-time', date);
    };

    watch(date, (n, o) => {
      const date = new Date(n);
      let day = date.getDate(n);
      let month = date.getMonth(n) + 1;
      let year = date.getFullYear(n);


      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;

      emitTime(`${year}-${month}-${day}`);

    });

    return {
      date,
      minDate,
      maxDate,
      format,
    };
  },
};
</script>

<style scope>
.dp__icon {
  left: initial;
  right: 0;
}
.dp__today {
  border: 1px solid #e88a7e;
}
.dp__active_date {
  background: #7f977b;
}

.dp__input {
  color: #6e7d60;
  border: initial;
  padding: 8px 30px;
}

.dp__input_icon {
  color: #6e7d60;
}

.dp__input:hover {
  border-color: transparent;
}
.dp__main {
  width: 100%;
}
</style>
