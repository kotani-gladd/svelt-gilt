<script lang="ts">
    let buttonProps = {
        class: ['c-btn', $$restProps.class].filter(Boolean).join(' ')
    }
</script>

<button
		on:click
		on:mouseover
		on:mouseenter
		on:mouseleave
		{...buttonProps}>
	<slot/>
</button>

<style>
    .c-btn {
        cursor: pointer;
    }

    /* Modificadores de variante */
    :global(.c-btn--primary) {
        color: green;
    }
    :global(.c-btn--danger) {
        color: red;
    }

    /* Modificadores de tamaño */
    :global(.c-btn--sm) {
        font-size: 1em;
        padding: 0.1em;
    }
    :global(.c-btn--lg) {
        font-size: 2em;
    }
</style>