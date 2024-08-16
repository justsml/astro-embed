const urlPattern =
	/(?:https?:)??(?:\/\/)??(?:gist\.github\.com)\/([^\b\s'"]+)?/gim;

/**
 * Return a Gist URL from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Gist URL Path & Query, or undefined if none matched
 */
export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[1];
}
