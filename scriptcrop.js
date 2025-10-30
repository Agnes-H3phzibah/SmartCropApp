document.getElementById("getCrops").addEventListener("click", () => {
  const soil = document.getElementById("soilType").value;
  const region = document.getElementById("region").value;
  const fertilizer = document.getElementById("fertilizer").value;
  const cropResult = document.getElementById("cropResult");

  if (!soil || !region || !fertilizer) {
    cropResult.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  let crops = [];

  // --- SOIL TYPE LOGIC ---
  if (soil === "clay") {
    crops.push("Rice", "Wheat", "Soybean");
  } else if (soil === "sandy") {
    crops.push("Groundnut", "Maize", "Millet");
  } else if (soil === "loam") {
    crops.push("Tomato", "Potato", "Sugarcane", "Cotton");
  } else if (soil === "black") {
    crops.push("Cotton", "Sunflower", "Sorghum");
  } else if (soil === "red") {
    crops.push("Maize", "Peanuts", "Millet");
  }

  // --- REGION / CLIMATE ADJUSTMENT ---
  if (region === "tropical") {
    crops.push("Banana", "Paddy", "Sugarcane");
  } else if (region === "temperate") {
    crops.push("Wheat", "Barley", "Apple");
  } else if (region === "dry") {
    crops.push("Millet", "Cactus Pear", "Sorghum");
  } else if (region === "humid") {
    crops.push("Rice", "Jute", "Tea");
  }

  // --- FERTILIZER EFFECT ---
  if (fertilizer === "nitrogen") {
    crops.push("Maize", "Rice", "Leafy Vegetables");
  } else if (fertilizer === "phosphorus") {
    crops.push("Root Vegetables", "Peas", "Soybean");
  } else if (fertilizer === "potassium") {
    crops.push("Banana", "Potato", "Tomato");
  } else if (fertilizer === "organic") {
    crops.push("Vegetables", "Fruits", "Cereals");
  }

  // Remove duplicates and display
  const uniqueCrops = [...new Set(crops)];
  cropResult.innerHTML = `<b>Best Suitable Crops:</b> <br> ${uniqueCrops.join(", ")}`;
});
