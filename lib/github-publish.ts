import type { SiteContent } from "@/lib/site";

type GithubConfig = SiteContent["github"];

async function githubFetch(
  path: string,
  token: string,
  init?: RequestInit
) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub ${res.status}: ${body.slice(0, 280)}`);
  }
  return res.json();
}

function encodeBase64(text: string) {
  return btoa(unescape(encodeURIComponent(text)));
}

export async function publishSiteContent(
  content: SiteContent,
  token: string
) {
  const { owner, repo, branch, contentPath } = content.github;
  const file = await githubFetch(
    `/repos/${owner}/${repo}/contents/${contentPath}?ref=${branch}`,
    token
  );
  const body = JSON.stringify(content, null, 2) + "\n";
  await githubFetch(`/repos/${owner}/${repo}/contents/${contentPath}`, token, {
    method: "PUT",
    body: JSON.stringify({
      message: "Update site content from /admin",
      content: encodeBase64(body),
      sha: file.sha,
      branch,
    }),
  });
}

export async function uploadPublicImage(
  github: GithubConfig,
  token: string,
  relativePath: string,
  file: File
) {
  const { owner, repo, branch } = github;
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  const content = btoa(binary);
  const apiPath = `/repos/${owner}/${repo}/contents/${relativePath.replace(/^\//, "")}`;

  let sha: string | undefined;
  try {
    const existing = await githubFetch(`${apiPath}?ref=${branch}`, token);
    sha = existing.sha;
  } catch {
    sha = undefined;
  }

  await githubFetch(apiPath, token, {
    method: "PUT",
    body: JSON.stringify({
      message: `Upload ${relativePath} from /admin`,
      content,
      branch,
      ...(sha ? { sha } : {}),
    }),
  });

  return `/${relativePath.replace(/^public\//, "").replace(/^\//, "")}`;
}
