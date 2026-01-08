<script>
  import ProductList from "../components/ProductList.svelte";
  import CarruselList from "../components/CarruselList.svelte";
</script>

<style>
	.u-hr {
        margin-top: 50px;
        margin-bottom: 50px;
	}
</style>
<div class="container">
	<ProductList/>
	<hr class="u-hr"/>
	<CarruselList/>
	<hr class="u-hr"/>
</div>
