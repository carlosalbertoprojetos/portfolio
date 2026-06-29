export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path) return siteBasePath || "/";
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}
