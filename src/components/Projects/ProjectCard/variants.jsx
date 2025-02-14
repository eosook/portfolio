export const cardVariants = (isMobile, isTablet) => {
    if (isMobile) {
        cardVariants = {
          expanded: { width: "100vw", height: "600px", borderRadius: 16 },
          collapsed: { width: "200px", height: "200px", borderRadius: 16 },
        };
      } else if (isTablet) {
        cardVariants = {
          expanded: {
            width: "100vw",
            height: "600px",
            borderRadius: 16,
            zIndex: 1,
          },
          collapsed: {
            width: "250px",
            height: "400px",
            borderRadius: 16,
            zIndex: 0,
          },
        };
      } else {
        cardVariants = {
          expanded: {
            width: ["300px", "600px", "1200px"],
            height: "600px",
            borderRadius: 16,
            zIndex: 1,
            position: ["absolute", "absolute", "relative"]
          },
          collapsed: {
            width: "300px",
            height: "500px",
            borderRadius: 16,
          },
        };
      }
};
