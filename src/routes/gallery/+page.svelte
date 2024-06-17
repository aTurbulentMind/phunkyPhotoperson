<script>
	import One from '$lib/assets/img/enerrr.jpg';
	import Two from '$lib/assets/img/endd.jpg';
	import Three from '$lib/assets/img/enderrr.png';
	import Four from '$lib/assets/img/envv.jpg';
	import Five from '$lib/assets/img/enzz.jpg';

	// Placeholder data for gallery sections
	const gallerySections = [
		{
			title: 'Neon Dreams',
			description:
				'A mesmerizing journey through neon-lit cityscapes, capturing the vibrant essence of vaporwave aesthetics.',
			images: [One, Two, Three, Four, Five]
		},
		{
			title: 'Retro Reverie',
			description:
				'A nostalgic exploration of retro-futuristic environments, blending past and future in stunning visual harmony.',
			images: [One, Two, Three, Four, Five]
		}
		// Add more sections as needed
	];
</script>

<div class="gallery-container">
	<p class="intro-paragraph">
		Vaporwave is a unique genre that blends music, art, and internet culture into a nostalgic yet
		futuristic aesthetic. Emerging in the early 2010s, this style draws heavily from 1980s and 1990s
		pop culture, incorporating elements such as retro computer graphics, early internet imagery, and
		smooth jazz or elevator music remixes.
	</p>

	{#each gallerySections as section}
		<div class="gallery-section">
			<h2 class="section-title">{section.title}</h2>
			<p class="section-description">{section.description}</p>
			<div class="carousel-container">
				{#each section.images as image}
					<img src={image} alt="Vaporwave fantasy" />
				{/each}
			</div>
		</div>
	{/each}
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.gallery-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 20px;
	}

	.intro-paragraph {
		margin-bottom: 40px;
		font-size: 1.2rem;
		line-height: 1.6;
	}

	.section-title {
		color: var(--highlight);
		font-size: 2rem;
		margin-bottom: 10px;
	}

	.section-description {
		margin-bottom: 20px;
	}

	.carousel-container {
		display: flex;
		overflow-x: auto;
		gap: 10px;
		margin-bottom: 40px;
	}

	.carousel-container img {
		max-width: 200px;
		border: 2px solid var(--highlight);
		border-radius: 8px;
		object-fit: cover;
	}
</style>
