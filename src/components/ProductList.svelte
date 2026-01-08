<script lang="ts">
    import {onMount} from "svelte";
    import {db} from "../models/db";
    import {products} from "../stores/productStore";
    import Product from "./Product.svelte";
    import Filter from "./Filter.svelte";

    onMount(() => {
        products.set(db);
    });
</script>

<style>
	.u-title {
        font-family: Noto Sans;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        leading-trim: CAP_HEIGHT;
        line-height: 20px;
        letter-spacing: 1px;
        text-align: center;
		min-height: 100px;
    }
</style>

<div class="row">
	<h3 class="u-title d-flex align-items-center justify-content-center">トップス</h3>
	<Filter {products}/>
	{#each $products as product}
		<Product {product}/>
	{/each}
</div>
