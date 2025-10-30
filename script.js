document.getElementById("getAdvice").addEventListener("click", () => {
  const crop = document.getElementById("crop").value;
  const ph = parseFloat(document.getElementById("ph").value);
  const adviceText = document.getElementById("adviceText");

  if (!crop || isNaN(ph)) {
    adviceText.textContent = "⚠️ Please select a crop and enter soil pH.";
    return;
  }

  let advice = "";

  // Basic soil pH advice
  if (ph < 6) {
    advice += "Soil is acidic. Add lime to raise pH. ";
  } else if (ph > 7.5) {
    advice += "Soil is alkaline. Add sulfur or organic compost to lower pH. ";
  } else {
    advice += "Soil pH is ideal for most crops. ";
  }

  // Crop-specific tips
  switch (crop) {
    case "rice":
      advice += "Ensure adequate water; prefers slightly acidic soil (pH 5.5–6.5).";
      break;
    case "wheat":
      advice += "Prefers neutral to slightly alkaline soil (pH 6–7.5).";
      break;
    case "maize":
      advice += "Ensure good drainage and moderate nitrogen fertilizer.";
      break;
    case "cotton":
      advice += "Cotton thrives in slightly alkaline soils and warm climates.";
      break;
    default:
      advice += "Choose the best crop based on your region and climate.";
  }

  adviceText.textContent = advice;
});
