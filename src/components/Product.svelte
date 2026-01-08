<script lang="ts">
    import Carrusel from "./Carrusel.svelte";
    import { goto } from '$app/navigation';

    export let product: any;
</script>

<style>
    .c-product-card__title {
        font-family: Outfit;
        font-weight: 400;
        font-style: Regular;
        font-size: 12px;
        leading-trim: CAP_HEIGHT;
        line-height: 15px;
        letter-spacing: 1px;
        width: calc(100% - 20px);
    }

    .c-product-card__new-price {
        font-family: Outfit;
        font-weight: 500;
        font-style: Medium;
        font-size: 17px;
        leading-trim: CAP_HEIGHT;
        line-height: 20px;
        letter-spacing: 1px;
        color: #C9871B;
    }

    .c-product-card__line-price {
        font-family: Outfit;
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        leading-trim: CAP_HEIGHT;
        line-height: 16px;
        letter-spacing: 1px;
        text-decoration: line-through;
    }

	.c-product-card__content {
		padding-top: 22px;
        gap: 20px;
        display: grid;
        padding-right: 15px;
        padding-left: 15px;
	}
    c-product-card__title {

    }
</style>

<div class="col-12 col-sm-6 col-md-4 col-lg-4 p-4">
	<Carrusel {product}/>
	<div class="c-product-card__content" on:click="{() => goto(`/product/${product.products_id}`)}">
		<div class="d-flex">
			<div class="d-flex flex-wrap c-product-card__title">{product.name}</div>
			<a><img src="src/img/icon_heart.png" height="15" width="17"/></a>
		</div>
		<div>
			<div class="c-product-card__new-price">¥{product.new_price}</div>
			<div class="c-product-card__line-price">¥{product.price}</div>
		</div>
		<div class="d-flex flex-row">
			{#each product.size as size}
				<div class="pe-1">{size.val}</div>
			{/each}
		</div>
	</div>
</div>