<script lang="ts">
  import Siema from 'siema';
  import { onMount } from 'svelte';
  export let product: any;

  let slider,prev,next,radioSlider;
  let select = 0

  onMount(() => {
      if (product.products_id) {
          slider = new Siema({
              selector: product.products_id,
              duration: 200,
              easing: 'ease-in-out',
              perPage: 1,
              startIndex: 0,
              draggable: true,
              multipleDrag: true,
              threshold: 20,
              loop: true,
              rtl: false,
              onInit: () => {
              },
              onChange: () => {
              },
          }); //end Siema constructor

          prev = () => {
              slider.prev()
              if (select > 0) {
                  select--
              }
          }

          next = () => {
              slider.next()
              if (select >= 0) {
                  select++
              }
          }
      }
  }) //end onMount


</script>

{#if product.img.length > 0}
<div class="{product.products_id}" bind:this={product.products_id}>
	{#each product.img as d}
		<div class='slider'>
			<div>
				<img src="{d.val}" height="auto" width="100%" style=""/>
			</div>
		</div>
	{/each}
</div>
{/if}
<div class='bullet'>
	{#each product.img as d, i}
		<input
				bind:this={radioSlider}
				type="radio"
				id={i} name="slider-radio"
				value={i}
				checked = { select == i }
				on:click= {() => {slider.goTo(i)}}
		>
	{/each}
</div>
<!--
<button on:click={prev}>
	prev
</button>
<button on:click={next}>
	next
</button>
-->
<style>
    .slider {
        background-color:white;
        height:300px;
        margin:1rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .bullet {
        width:100%;
        display:flex;
        justify-content:center;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        border-radius: 50%;
        width: 8px;
        height: 8px;

        background-color:lightgrey;
        transition: 0.2s all linear;
        margin-right: 5px;

        position: relative;
        top: 4px;
    }
    input:checked {
        background-color:grey;
    }
</style>