document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("india-debt-tiles");

  const tileData = [
    { front: "GDP Growth", back: "8.2% in 2023" },
    { front: "Fiscal Deficit", back: "6.4% of GDP" },
    { front: "Debt-to-GDP", back: "85.1%" },
    { front: "Tax Revenue", back: "₹25 Lakh Cr" },
    { front: "Foreign Debt", back: "$620 Bn" },
    { front: "Inflation", back: "5.4%" },
    { front: "Reserves", back: "$582 Bn" },
    { front: "Public Spending", back: "₹39 Lakh Cr" },
    { front: "Subsidies", back: "₹4.5 Lakh Cr" },
    { front: "Debt Servicing", back: "₹9 Lakh Cr" },
    { front: "Infrastructure", back: "₹10 Lakh Cr" },
    { front: "Interest Rates", back: "6.5%" },
    { front: "Budget Allocation", back: "Union Budget 2024" },
    { front: "Population", back: "1.4 Billion" },
    { front: "CapEx", back: "₹11 Lakh Cr" },
    { front: "External Borrowing", back: "$150 Bn" },
  ];

  const sizeVariants = ["", "", "wide", "", "", "tall", "", "", "large", ""];
  const bgColors = [
    "#0078D7",
    "#D83B01",
    "#2D7D9A",
    "#00B294",
    "#FFB900",
    "#8E44AD",
    "#00A4EF",
    "#E81123",
    "#1E8449",
    "#E67E22",
    "#34495E",
    "#C0392B",
    "#2980B9",
    "#2ECC71",
    "#9B59B6",
  ];
  const fontColors = ["#ffffff", "#ffffff", "#000000"];

  tileData.forEach((item, index) => {
    const wrapper = document.createElement("div");
    const inner = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    const sizeClass =
      sizeVariants[Math.floor(Math.random() * sizeVariants.length)];
    wrapper.className = `tile ${sizeClass}`.trim();
    inner.className = "tile-inner";
    front.className = "tile-front";
    back.className = "tile-back";

    const bg = bgColors[index % bgColors.length];
    const font = fontColors[Math.floor(Math.random() * fontColors.length)];

    front.style.backgroundColor = bg;
    back.style.backgroundColor = bg;
    front.style.color = font;
    back.style.color = font;

    front.textContent = item.front;
    back.textContent = item.back;

    inner.appendChild(front);
    inner.appendChild(back);
    wrapper.appendChild(inner);
    container.appendChild(wrapper);
  });
});
