<script lang="ts">
	import PostThumbnails from '@/components/PostCardVariants/PostThumbnails.svelte';
	import BoardButton from '@/components/BoardButton.svelte';
    import ThreadPost from '@/components/PostCardVariants/ThreadPost.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<PostThumbnails
	board="tech"
	postId="alusy8o12kjl3hk1l2jhg3k"
	commentCount={10}
	username="test"
	subtitle="Yes you are the only one responsible for forest fires"
	body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
	imgs={[
		'https://w.wallhaven.cc/full/w5/wallhaven-w557rr.jpg',
		'https://w.wallhaven.cc/full/yq/wallhaven-yqqvv7.jpg',
		'https://w.wallhaven.cc/full/3q/wallhaven-3qqdg6.jpg',
		'https://w.wallhaven.cc/full/3q/wallhaven-3q3z9d.jpg'
	]}
	title="Only You Can Stop Forest Fires"
/>

<BoardButton
    img="https://w.wallhaven.cc/full/w5/wallhaven-w557rr.jpg"
    name="Technology"
    link="g"
/>
<ThreadPost
	board="tech"
	postId="alusy8o12kjl3hk1l2jhg3k"
	commentCount={10}
	username="test"
	subtitle="Yes you are the only one responsible for forest fires"
	body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
	imgs={[
		'https://w.wallhaven.cc/full/w5/wallhaven-w557rr.jpg',
		'https://w.wallhaven.cc/full/yq/wallhaven-yqqvv7.jpg',
		'https://w.wallhaven.cc/full/3q/wallhaven-3qqdg6.jpg',
		'https://w.wallhaven.cc/full/3q/wallhaven-3q3z9d.jpg'
	]}
	title="Only You Can Stop Forest Fires"
    />