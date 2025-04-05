console.log("Script loaded!");

async function createIndiaDebtChart() {
  console.log("Creating chart...");
  try {
    const response = await fetch("data/india_debt_data.csv");
    if (!response.ok) throw new Error("CSV load failed");

    const csvData = await response.text();
    console.log("CSV data loaded:", csvData.substring(0, 50) + "...");

    const rows = csvData.split("\n").slice(1);
    const allData = [];
    const labels = [];

    rows.forEach((row) => {
      if (row.trim()) {
        const [year, debt, gdp, ratio] = row.split(",");
        labels.push(year);
        allData.push({
          year,
          debt: parseFloat(debt),
          gdp: parseFloat(gdp),
          ratio: parseFloat(ratio),
        });
      }
    });

    const canvas = document.getElementById("indiaDebtChart");
    if (!canvas) {
      throw new Error("Canvas element not found");
    }

    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Debt-to-GDP Ratio (%)",
            data: allData.map((item) => item.ratio),
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.1)",
            borderWidth: 3,
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const data = allData[context.dataIndex];
                return [
                  `GDP: $${data.gdp} billion`,
                  `Debt: $${data.debt} billion`,
                  `Ratio: ${data.ratio}%`,
                ];
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Chart error:", error);
  }
}

function setupTabs() {
  console.log("Setting up tabs...");
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const defaultContent = document.querySelector(".default-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove "active" from all buttons and hide all tab content
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((tab) => (tab.style.display = "none"));

      // Set the active tab
      button.classList.add("active");
      const target = document.getElementById(button.dataset.target);
      if (target) target.style.display = "block";

      // Hide welcome message
      if (defaultContent) defaultContent.style.display = "none";
    });
  });

  // Show default first tab on load
  document.querySelector(".tab-button.active")?.click();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  setupTabs();
  createIndiaDebtChart();
});
