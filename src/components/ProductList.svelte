<script lang="ts">
    import { products } from "../stores/productStore";
    import Product from "./Product.svelte";
    import Filter from "./Filter.svelte";
</script>

<div class="row">
	<h3 class="u-title d-flex align-items-center justify-content-center">トップス</h3>
	<Filter />
	{#each $products as product}
		<Product {product} />
	{/each}
</div>

<style>
    .u-title {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 1px;
        text-align: center;
        min-height: 100px;
    }
</style>