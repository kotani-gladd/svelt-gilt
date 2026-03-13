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

<CarouselHorizontal autoplay="2000">
	{#each items as item, index (index)}
		<div class="slide-item">
			<img src="/img/img_sales.png" height="345" width="345" alt={item.brand}/>
			<div class="slide-info">
				<div class="slide-brand">{item.brand}</div>
				<div class="slide-days">{item.days}</div>
			</div>
		</div>
	{/each}
</CarouselHorizontal>

<style>
    .slide-item {
        height: 345px;
        width: 345px;
        position: relative;
    }
    .slide-info {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    .slide-brand {
        font-weight: bold;
        color: white;
    }
    .slide-days {
        color: white;
        font-size: 12px;
    }
</style>