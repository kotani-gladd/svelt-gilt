<script lang="ts">
    import { onMount } from 'svelte';
    import ProductList from "../components/ProductList.svelte";
    import CarruselList from "../components/CarruselList.svelte";
    import { products } from "../stores/productStore";

    onMount(async () => {
        const res = await fetch('https://r9qo1h6603.execute-api.us-east-1.amazonaws.com/prod/api/products');
        if (res.ok) {
            const data = await res.json();
            products.set(data);
        }
    });
</script>

<style>
    .u-hr {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>

<div class="container">
	<ProductList />
	<hr class="u-hr"/>
	<CarruselList/>
	<hr class="u-hr"/>
</div>