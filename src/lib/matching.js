const MOOD_WEIGHT = 0.55;
const INTENSITY_WEIGHT = 0.25;
const ENDING_WEIGHT = 0.2;

function scoreMovie(movie, query) {
  let score = 0;
  let weightUsed = 0;

  if (query.mood) {
    const moodScore = movie.moodMatch[query.mood] ?? 50;
    score += moodScore * MOOD_WEIGHT;
    weightUsed += MOOD_WEIGHT;
  }

  const intensityDelta = Math.abs(movie.intensity - query.intensity);
  const intensityScore = Math.max(0, 100 - intensityDelta * 25);
  score += intensityScore * INTENSITY_WEIGHT;
  weightUsed += INTENSITY_WEIGHT;

  if (query.ending && query.ending !== "surprise") {
    const endingScore = movie.endings.includes(query.ending) ? 100 : 35;
    score += endingScore * ENDING_WEIGHT;
    weightUsed += ENDING_WEIGHT;
  } else {
    score += 80 * ENDING_WEIGHT;
    weightUsed += ENDING_WEIGHT;
  }

  const normalized = weightUsed > 0 ? score / weightUsed : score;
  return Math.round(Math.min(100, Math.max(0, normalized)));
}

export function getRecommendations(movies, query, limit = 8) {
  return movies
    .map((movie) => ({ movie, matchPercentage: scoreMovie(movie, query) }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, limit);
}

export function formatRuntime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}