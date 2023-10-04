export const EXTERNAL_URL_RE = /^[a-z]+:/i


/**
 * Join two paths by resolving the slash collision.
 */
export function joinPath(base: string, path: string) {
  return `${base}${path}`.replace(/\/+/g, '/')
}

/**
 * Append base to internal (non-relative) urls
 */
export function withBase(path: string) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith('/')
    ? path
    : joinPath("/", path)
}
