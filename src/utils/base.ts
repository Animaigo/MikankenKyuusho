const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");
const BASE_NO_TRAILING = BASE.replace(/\/$/, "");

/**
 * Prefix a root-relative path (e.g. "/blog") with the configured base path,
 * so links keep working when the site is deployed under a subpath.
 */
export function withBase(path: string): string {
	if (path === BASE_NO_TRAILING || path.startsWith(BASE)) return path;
	return path.startsWith("/") ? BASE_NO_TRAILING + path : path;
}

export default BASE;
