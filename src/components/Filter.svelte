<script lang="ts">
    import Tab from "./Tab.svelte";

    export let products: any;
</script>

<style>
	.c-filter__container {
		min-height: 94px;
	}
    .c-filter__item {
        font-family: Noto Sans;
        font-weight: 400;
        font-style: Regular;
        font-size: 13px;
        leading-trim: CAP_HEIGHT;
        line-height: 21px;
        letter-spacing: 2%;
        vertical-align: middle;
    }
    .c-filter__itemicon {
        font-family: Noto Sans;
        font-weight: 400;
        font-style: Regular;
        font-size: 13px;
        leading-trim: CAP_HEIGHT;
        line-height: 21px;
        letter-spacing: 2%;
        vertical-align: middle;
    }
</style>
<Tab/>
{#if $products.length > 0}
	<div class="row c-filter__container">
		<div class="c-filter__itemicon col-4 text-start d-flex align-items-center">
			<img src="src/img/icon_filter.png" height="14" width="14"/>絞り込み</div>
		<div class="c-filter__item col-4 text-center d-flex align-items-center justify-content-center">{$products.length}商品</div>
		<div class="c-filter__itemicon col-4 text-end d-flex align-items-center justify-content-end">
			<img src="src/img/icon_order.png" height="13" width="13"/>おすすめ</div>
	</div>
{/if}

