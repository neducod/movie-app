export const MOODS = [
    {
      id: "anxious",
      label: "Anxious",
      emoji: "😰",
      description: "Restless energy — lean into it or burn it off",
      glow: { primary: "#ff4d4d", secondary: "#7a0d0d", animation: "flicker" },
    },
    {
      id: "cozy",
      label: "Cozy",
      emoji: "🕯️",
      description: "Blanket weather, low stakes, warm light",
      glow: { primary: "#ffb347", secondary: "#7a4a06", animation: "pulse" },
    },
    {
      id: "melancholic",
      label: "Melancholic",
      emoji: "🌧️",
      description: "Something quiet and a little sad, on purpose",
      glow: { primary: "#6c7bff", secondary: "#1a1f4d", animation: "drift" },
    },
    {
      id: "euphoric",
      label: "Euphoric",
      emoji: "⚡",
      description: "Riding high, want the screen to match it",
      glow: { primary: "#ff2fb0", secondary: "#5c0d99", animation: "burst" },
    },
  ];
  
  export const INTENSITY_MARKS = [
    { value: 1, label: "Slow-burn" },
    { value: 2, label: "Measured" },
    { value: 3, label: "Balanced" },
    { value: 4, label: "High-voltage" },
    { value: 5, label: "Pure Adrenaline" },
  ];
  
  export const ENDING_PREFERENCES = [
    { id: "happy", label: "Happy / Uplifting", icon: "☀️", description: "Send me out on a high" },
    { id: "tragic", label: "Tragic / Dark", icon: "🖤", description: "Let it hurt a little" },
    { id: "mind-bending", label: "Mind-Bending / Ambiguous", icon: "🌀", description: "I want to argue about it after" },
    { id: "surprise", label: "Surprise Me", icon: "🎲", description: "No preference — just don't spoil it" },
  ];