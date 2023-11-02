export async function load({ parent, data }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});

	return {
		...data,
		story: dataStory.data.story
	};
}
