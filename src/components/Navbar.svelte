<script lang="ts">
import InputIcon from "./InputIcon.svelte";
</script>

<style>
    .c-navbar__container {
		background-color: black;
		padding-left: 15px;
        padding-right: 15px;
    }
    .c-navbar__item {
        font-family: Noto Sans;
        font-weight: 400;
        font-style: Regular;
        font-size: 12px;
        leading-trim: CAP_HEIGHT;
        line-height: 19px;
        letter-spacing: 3%;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        color: #9D9D9D;
        cursor: pointer;
        white-space: nowrap;
    }
	.u-gap-20 {
		display: flex;
		gap:20px;
	}
	.u-p-v-10 {
		padding-top: 10px;
        padding-bottom: 10px;
	}
</style>

<div class="c-navbar__container">
	<div class="row u-p-v-10">
		<div class="col-4 col-sm-4 d-flex d-md-none justify-content-start align-items-center">
			<img src="src/img/icon_sandwitch.png" height="23" width="23"/>
		</div>
		<div class="col-4 col-sm-4 col-md-10 d-flex justify-content-center justify-content-md-start align-items-center u-gap-20">
			<img src="src/img/gilt_white.png" height="16" width="79"/>
			<div class="d-none d-md-flex align-items-center">
				<input />
			</div>
			<div class="d-none d-md-flex align-items-center">カテゴリから探す</div>
			<div class="d-none d-md-flex align-items-center">ブランドから探す</div>
		</div>
		<div class="col-4 col-sm-4 col-md-2 d-flex justify-content-end align-items-center u-gap-20">
			<div class="">
				<img src="src/img/icon_heart.png" height="18" width="18"/>
			</div>
			<div class="">
				<img src="src/img/icon_bag.png" height="18" width="18"/>
			</div>
			<div class="">
				<img src="src/img/icon_search.png" height="18" width="18"/>
			</div>
		</div>
	</div>
	<div class="row">
		<a class="col c-navbar__item" href="/">TOP</a>
		<a class="col c-navbar__item" href="/?type=women">WOMEN</a>
		<a class="col c-navbar__item" href="/?type=men">MEN</a>
		<a class="col c-navbar__item" href="/?type=kids">KIDS</a>
		<a class="col c-navbar__item" href="/?type=beauty">BEAUTY</a>
		<a class="col c-navbar__item" href="/?type=home">HOME</a>
		<a class="col c-navbar__item" href="/?type=city">CITY</a>
	</div>
</div>


