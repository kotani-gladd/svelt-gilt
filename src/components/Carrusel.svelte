<script lang="ts">
    import Siema from 'siema';
    import { onMount } from 'svelte';

    export let product: any;

    let sliderEl: HTMLElement;
    let slider: any;
    let radioSlider: any;
    let select = 0;

    onMount(() => {
        if (product?.img?.length > 1) {
            slider = new Siema({
                selector: sliderEl,
                duration: 200,
                easing: 'ease-in-out',
                perPage: 1,
                startIndex: 0,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: true,
                rtl: false,
                onChange: () => {
                    select = slider.currentSlide;
                },
            });
        }

        return () => {
            slider?.destroy();
        };
    });

    function goTo(i: number) {
        slider?.goTo(i);
        select = i;
    }
</script>

{#if product?.img?.length > 0}
	<div bind:this={sliderEl}>
		{#each product.img as d}
			<div class="slider">
				<img src="{d.val}" height="auto" width="100%" loading="lazy" alt={product.name}/>
			</div>
		{/each}
	</div>
	{#if product.img.length > 1}
		<div class="bullet">
			{#each product.img as _, i}
				<input
						type="radio"
						name="slider-radio-{product.id}"
						value={i}
						checked={select === i}
						on:click={() => goTo(i)}
						aria-label="スライド {i + 1}"
				/>
			{/each}
		</div>
	{/if}
{/if}

<style>
    .slider {
        background-color: white;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .bullet {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        background-color: lightgrey;
        transition: 0.2s all linear;
        margin-right: 5px;
        position: relative;
        top: 4px;
        cursor: pointer;
    }
    input:checked {
        background-color: grey;
    }
</style>