
<script lang="ts">
    import ProductList from "../components/ProductList.svelte";
    import CarruselList from "../components/CarruselList.svelte";

    export let data;
</script>

<style>
    .u-hr {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>

<div class="container">
	<ProductList products_data={data.products} />
	<hr class="u-hr"/>
	<CarruselList/>
	<hr class="u-hr"/>
</div>