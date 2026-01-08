<script>
  import CarouselHorizontal from "./CarouselHorizontal.svelte";

  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
</script>

<CarouselHorizontal autoplay="2000">
	{#each colors as color, index (index)}
		<div style="height:345px;width:345px;">
			<img src="src/img/img_sales.png" height="345" width="345"/>
			<div>
				<div>MARNI</div>
				<div>残り3日</div>
			</div>
		</div>
	{/each}
	<!--<span slot="left-control">Left</span>
	<span slot="right-control">Right</span>-->
</CarouselHorizontal>

<style>
    div {
        height: 8rem;
        width: 8rem;
    }

    span {
        display: inline-block;
        margin-top: 6rem;
    }
</style>