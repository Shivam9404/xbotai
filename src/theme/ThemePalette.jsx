const ThemePalette = {
    light: {
      background: "linear-gradient(#F9FAFA 60%, #EDE4FF)",
      sidebar: "#E8DAFF",
      sidebarText: "#4A3F78",
      chatBubbleUser: "#F3EDFF",
      chatBubbleAI: "#E6D9FF",
      chatText: "#4A3F78",
      border: "#BCAAE0",
      inputBackground: "#FFFFFF",
      buttonBackground: "#BCAAE0",
      buttonText: "#4A3F78",
    },
    dark: {
      background: "#121212",
      sidebar: "#1E1E1E",
      sidebarText: "#E0E0E0",
      chatBubbleUser: "#333333",
      chatBubbleAI: "#444444",
      chatText: "#FFFFFF",
      border: "#666666",
      inputBackground: "#222222",
      buttonBackground: "#444444",
      buttonText: "#FFFFFF",
    },
  };
  
  export const getThemePalette = (mode) => ThemePalette[mode] || ThemePalette.light;
  
  export default ThemePalette;
  