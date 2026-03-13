<script>
  import CarouselHorizontal from "./CarouselHorizontal.svelte";

  let items = [
    { brand: 'MARNI', days: '残り3日' },
    { brand: 'GUCCI', days: '残り5日' },
    { brand: 'PRADA', days: '残り2日' },
    { brand: 'VERSACE', days: '残り1日' },
    { brand: 'FENDI', days: '残り4日' },
    { brand: 'DIOR', days: '残り6日' },
  ];
</script>

<!-- Desktop: CarouselHorizontal con 3 slides -->
<div class="d-none d-md-block c-sale-carousel__wrapper">
	<CarouselHorizontal autoplay={2000} perPage={3}>
		{#each items as item, index (index)}
			<div class="c-sale-carousel__slide">
				<img class="c-sale-carousel__image" src="/img/img_sales.png" width="100%" height="345" alt={item.brand}/>
				<div class="c-sale-carousel__info">
					<div class="c-sale-carousel__brand">{item.brand}</div>
					<div class="c-sale-carousel__days">{item.days}</div>
				</div>
			</div>
		{/each}
	</CarouselHorizontal>
</div>

<!-- Mobile: scroll horizontal libre -->
<div class="d-md-none c-sale-scroll">
	{#each items as item}
		<div class="c-sale-scroll__item">
			<img class="c-sale-scroll__image" src="/img/img_sales.png" width="100%" height="220" alt={item.brand}/>
			<div class="c-sale-scroll__info">
				<div class="c-sale-scroll__brand">{item.brand}</div>
				<div class="c-sale-scroll__days">{item.days}</div>
			</div>
		</div>
	{/each}
</div>

<style>
    /* c-sale-carousel */
    .c-sale-carousel__wrapper {
        padding: 0 40px;
    }
    .c-sale-carousel__slide {
        position: relative;
        width: 100%;
        padding: 0 8px;
    }
    .c-sale-carousel__info {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    .c-sale-carousel__brand {
        font-weight: bold;
        color: white;
    }
    .c-sale-carousel__days {
        color: white;
        font-size: 12px;
    }

    /* c-sale-scroll */
    .c-sale-scroll {
        display: flex;
        overflow-x: auto;
        gap: 12px;
        padding: 0 16px 12px;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }
    .c-sale-scroll::-webkit-scrollbar {
        display: none;
    }
    .c-sale-scroll__item {
        flex: 0 0 88vw;
        max-width: 88vw;
        position: relative;
        scroll-snap-align: start;
        border-radius: 4px;
        overflow: hidden;
    }
    .c-sale-scroll__info {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    .c-sale-scroll__brand {
        font-weight: bold;
        color: white;
    }
    .c-sale-scroll__days {
        color: white;
        font-size: 12px;
    }
</style>