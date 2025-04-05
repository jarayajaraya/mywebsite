const stateData = {
  "IN-AP": {
    name: "Andhra Pradesh",
    gdp: "₹10.49 lakh crore",
    debt: "₹3.57 lakh crore",
  },
  "IN-AR": {
    name: "Arunachal Pradesh",
    gdp: "₹0.29 lakh crore",
    debt: "₹0.12 lakh crore",
  },
  "IN-AS": { name: "Assam", gdp: "₹3.74 lakh crore", debt: "₹1.31 lakh crore" },
  "IN-BR": { name: "Bihar", gdp: "₹6.79 lakh crore", debt: "₹2.44 lakh crore" },
  "IN-CT": {
    name: "Chhattisgarh",
    gdp: "₹3.62 lakh crore",
    debt: "₹1.32 lakh crore",
  },
  "IN-GA": { name: "Goa", gdp: "₹0.73 lakh crore", debt: "₹0.16 lakh crore" },
  "IN-GJ": {
    name: "Gujarat",
    gdp: "₹18.85 lakh crore",
    debt: "₹2.89 lakh crore",
  },
  "IN-HR": {
    name: "Haryana",
    gdp: "₹8.71 lakh crore",
    debt: "₹1.92 lakh crore",
  },
  "IN-HP": {
    name: "Himachal Pradesh",
    gdp: "₹1.82 lakh crore",
    debt: "₹0.62 lakh crore",
  },
  "IN-JH": {
    name: "Jharkhand",
    gdp: "₹3.83 lakh crore",
    debt: "₹1.34 lakh crore",
  },
  "IN-KA": {
    name: "Karnataka",
    gdp: "₹22.42 lakh crore",
    debt: "₹4.57 lakh crore",
  },
  "IN-KL": {
    name: "Kerala",
    gdp: "₹9.78 lakh crore",
    debt: "₹3.61 lakh crore",
  },
  "IN-MP": {
    name: "Madhya Pradesh",
    gdp: "₹10.25 lakh crore",
    debt: "₹3.28 lakh crore",
  },
  "IN-MH": {
    name: "Maharashtra",
    gdp: "₹31.97 lakh crore",
    debt: "₹5.75 lakh crore",
  },
  "IN-MN": {
    name: "Manipur",
    gdp: "₹0.28 lakh crore",
    debt: "₹0.10 lakh crore",
  },
  "IN-ML": {
    name: "Meghalaya",
    gdp: "₹0.34 lakh crore",
    debt: "₹0.13 lakh crore",
  },
  "IN-MZ": {
    name: "Mizoram",
    gdp: "₹0.22 lakh crore",
    debt: "₹0.09 lakh crore",
  },
  "IN-NL": {
    name: "Nagaland",
    gdp: "₹0.27 lakh crore",
    debt: "₹0.11 lakh crore",
  },
  "IN-OR": {
    name: "Odisha",
    gdp: "₹6.10 lakh crore",
    debt: "₹1.98 lakh crore",
  },
  "IN-PB": {
    name: "Punjab",
    gdp: "₹5.42 lakh crore",
    debt: "₹2.31 lakh crore",
  },
  "IN-RJ": {
    name: "Rajasthan",
    gdp: "₹9.15 lakh crore",
    debt: "₹3.39 lakh crore",
  },
  "IN-SK": {
    name: "Sikkim",
    gdp: "₹0.28 lakh crore",
    debt: "₹0.11 lakh crore",
  },
  "IN-TN": {
    name: "Tamil Nadu",
    gdp: "₹21.79 lakh crore",
    debt: "₹4.85 lakh crore",
  },
  "IN-TG": {
    name: "Telangana",
    gdp: "₹11.54 lakh crore",
    debt: "₹2.45 lakh crore",
  },
  "IN-TR": {
    name: "Tripura",
    gdp: "₹0.55 lakh crore",
    debt: "₹0.22 lakh crore",
  },
  "IN-UP": {
    name: "Uttar Pradesh",
    gdp: "₹17.05 lakh crore",
    debt: "₹5.11 lakh crore",
  },
  "IN-UT": {
    name: "Uttarakhand",
    gdp: "₹2.53 lakh crore",
    debt: "₹0.91 lakh crore",
  },
  "IN-WB": {
    name: "West Bengal",
    gdp: "₹12.54 lakh crore",
    debt: "₹4.63 lakh crore",
  },
  "IN-AN": {
    name: "Andaman and Nicobar Islands",
    gdp: "₹0.06 lakh crore",
    debt: "₹0.02 lakh crore",
  },
  "IN-CH": {
    name: "Chandigarh",
    gdp: "₹0.34 lakh crore",
    debt: "₹0.07 lakh crore",
  },
  "IN-DN": {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    gdp: "₹0.16 lakh crore",
    debt: "₹0.04 lakh crore",
  },
  "IN-DL": { name: "Delhi", gdp: "₹9.23 lakh crore", debt: "₹1.02 lakh crore" },
  "IN-JK": {
    name: "Jammu and Kashmir",
    gdp: "₹1.76 lakh crore",
    debt: "₹0.85 lakh crore",
  },
  "IN-LA": {
    name: "Ladakh",
    gdp: "₹0.18 lakh crore",
    debt: "₹0.08 lakh crore",
  },
  "IN-LD": {
    name: "Lakshadweep",
    gdp: "₹0.01 lakh crore",
    debt: "₹0.004 lakh crore",
  },
  "IN-PY": {
    name: "Puducherry",
    gdp: "₹0.73 lakh crore",
    debt: "₹0.16 lakh crore",
  },
};

fetch("images/india.svg")
  .then((res) => res.text())
  .then((svgText) => {
    const mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = svgText;
    initMapInteractions();
  });

function initMapInteractions() {
  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.padding = "8px";
  tooltip.style.background = "white";
  tooltip.style.border = "1px solid #ccc";
  tooltip.style.borderRadius = "4px";
  tooltip.style.boxShadow = "0px 2px 8px rgba(0,0,0,0.2)";
  tooltip.style.display = "none";
  tooltip.style.zIndex = "1000";
  document.body.appendChild(tooltip);

  const paths = document.querySelectorAll("svg path[id^='IN-']");
  paths.forEach((path) => {
    const id = path.id;

    path.style.cursor = "pointer";
    path.style.transition = "transform 0.2s, fill 0.2s";

    path.addEventListener("mouseenter", () => {
      const data = stateData[id];
      if (data) {
        path.style.fill = "#4caf50";
        path.style.transform = "scale(1.05)";

        tooltip.innerHTML = `<strong>${data.name}</strong><br>GDP: ${data.gdp}<br>Debt: ${data.debt}`;
        tooltip.style.display = "block";
      }
    });

    path.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY - 30 + "px";
    });

    path.addEventListener("mouseleave", () => {
      path.style.fill = "";
      path.style.transform = "scale(1)";
      tooltip.style.display = "none";
    });
  });
}
