<script lang="ts">

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
	}
    c-product-card__title {

    }
</style>

<div>
	<img src="src/img/img_product.png" height="369" width="277"/>
	<div class="c-product-card__content">
		<div class="d-flex">
			<div class="d-flex flex-wrap c-product-card__title">BRAND NAME BRAND NAMEBRAND NAMEBRAND NAME</div>
			<a><img src="src/img/icon_heart.png" height="15" width="17"/></a>
		</div>
		<div>
			<div class="c-product-card__new-price">¥25,300</div>
			<div class="c-product-card__line-price">¥55,300</div>
		</div>
		<div class="d-flex flex-row">
			<div class="pe-1">M</div>
			<div class="pe-1">L</div>
		</div>
	</div>
</div>