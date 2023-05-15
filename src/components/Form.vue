<script setup>
    const props = defineProps(['n1', 'n2', 'operator']);
</script>

<template>
    <form>
        <input 
            type="number" 
            required
            @keyup="props.n1"
            placeholder="Digite um número..."
        />
        <input 
            type="number" 
            required
            @keyup="props.n2"
            placeholder="Digite um outro número..."
        />
        <select @change="props.operator">
            <option value="sum">Somar</option>
            <option value="subtract">Subtrair</option>
            <option value="multiply">Multiplicar</option>
            <option value="division">Dividir</option>
        </select>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 300px;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 20px;
    }

    select {
        padding: 10px;
        background-color: #f2f2f2;
    }
</style>