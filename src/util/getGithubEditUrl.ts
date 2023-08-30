import type {AstroGlobal} from 'astro';

/** Gets the URL to edit the page on GitHub */

export function getGithubEditUrl(Astro: Readonly<AstroGlobal>) {
	const currentPage = Astro.url.pathname;
	const filePath = `src/content/docs${currentPage.replace(/\/$/, '')}.mdx`;
	return `https://github.com/VitessePSP/tf-data-analytics/blob/main/${filePath}`;
}
