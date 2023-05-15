<script setup>
  import { reactive  } from 'vue';

  import Header from './components/Header.vue';
  import Form from './components/Form.vue';
  import Resultado from './components/Resultado.vue';

  const state = reactive({
    number1: 0,
    number2: 0,
    operator: 'somar'
  })

  const sum = () => {
    return parseInt(state.number1) + parseInt(state.number2);
  }

  const subtract = () => {
    return state.number1 - state.number2;
  }

  const multiply = () => {
    return state.number1 * state.number2;
  }

  const division = () => {
    return state.number1 / state.number2;
  }

  const calculate = () => {
    const { operator } = state;

    switch(operator) {
      case 'sum':
        return sum();

      case 'subtract':
        return subtract();

      case 'multiply':
        return multiply();

      case 'division':
        return division();
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <Form 
      :n1="event => state.number1 = event.target.value"
      :n2="event => state.number2 = event.target.value"
      :operator="event => state.operator = event.target.value"
    />
    <Resultado
      :result="calculate()"
    />
  </div>
</template>

<style scoped>
  .container {
    max-width: 560px;
    width: 100%;
    height: 450px;
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
