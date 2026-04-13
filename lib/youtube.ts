/**
 * Extrait l’identifiant d’une vidéo YouTube depuis une URL ou une chaîne brute.
 */
export function extractYoutubeVideoId(input: string | undefined | null): string | null {
  if (input == null) return null;
  const s = String(input).trim();
  if (!s) return null;

  const short = s.match(/youtu\.be\/([a-zA-Z0-9_-]{11})(?=[?&#/]|$)/);
  if (short?.[1]) return short[1];

  const watch = s.match(/[?&]v=([a-zA-Z0-9_-]{11})(?=[&#]|$)/);
  if (watch?.[1]) return watch[1];

  const embed = s.match(/\/embed\/([a-zA-Z0-9_-]{11})(?=[?&#/]|$)/);
  if (embed?.[1]) return embed[1];

  const shorts = s.match(/\/shorts\/([a-zA-Z0-9_-]{11})(?=[?&#/]|$)/);
  if (shorts?.[1]) return shorts[1];

  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;

  return null;
}
