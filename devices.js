/**
 * SOF Device Database — devices.js
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE YOU NEED TO EDIT to add or update devices.
 *
 * TO ADD A DEVICE: copy any entry below, paste at the end of the array,
 * and fill in the values. Follow the field reference below.
 *
 * AFFILIATE LINKS: all buy/review URLs live in each device's `links` object.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * FIELD REFERENCE
 * ───────────────
 * id             Unique slug, no spaces. e.g. "viqure_sld"
 * name           Display name shown in the table header.
 * type           "laser" or "ipl"
 * fluenceNum     Numeric max fluence — used for sort. e.g. 25
 * fluence        Display string. e.g. "25 J/cm²"
 * price          1–5 integer — number of $ signs shown.
 * priceLabel     "$" through "$$$$$"
 * priceRange     Human-readable range. e.g. "$300–$400"
 * wavelength     e.g. "780–850 nm"
 * window         Treatment window. e.g. "8 × 8 mm"
 * frequency      e.g. "Every 20–60 days"
 * cooling        true / false
 * scanning       true / false
 * skinSensor     true / false / null  (null = N/A — use for laser devices)
 * lifespan       e.g. "100,000,000 flashes"
 *
 * skinTones      Array of 6 values, index 0 = Fitzpatrick I, 5 = Fitzpatrick VI.
 *                "ok" | "x" | "caution"
 *
 * hairColors     Array of 4 values: 0 = black, 1 = dark brown, 2 = medium brown,
 *                3 = light / blonde / red. Same values: "ok" | "x" | "caution"
 *
 * wins           Array of strings — what this device does well.
 * cons           Array of strings — drawbacks.
 *
 * userReports    String. One or two sentences summarising what people say on
 *                Reddit and in reviews. Write in your own voice. Use null if
 *                you don't have enough data yet — it won't show in the table.
 *
 * discountCode   String or null. e.g. "SOF15"
 * discountSaving String or null. e.g. "$105 off"
 *
 * links          Object with named URLs. All affiliate links go here.
 *   .buy         Primary buy URL (required)
 *   .buyLabel    Button label. e.g. "Buy on ViQure.com"
 *   .review      Your SOF review URL or null
 *   .compare     Your SOF comparison article URL or null
 */

const DEVICES = [
  {
    id: "braun_pro5",
    name: "Braun Silk Expert Pro 5",
    type: "ipl",
    fluenceNum: 6,
    fluence: "6 J/cm²",
    price: 2,
    priceLabel: "$$",
    priceRange: "$300–$400",
    wavelength: "510–2000 nm",
    window: "1.5 / 3 / 4 cm²",
    frequency: "Once per week",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "400,000 flashes",
    skinTones: ["ok","ok","ok","x","x","x"],
    hairColors: ["ok","ok","caution","x"],
    wins: [
      "Low frequency of use — once per week",
      "2 specialized treatment heads included"
    ],
    cons: [
      "Broader wavelength range carries higher burn risk for dark skin"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: null,
    },
  },
  {
    id: "dermrays_v6s",
    name: "DermRays V6S",
    type: "laser",
    fluenceNum: 7,
    fluence: "7 J/cm²",
    price: 3,
    priceLabel: "$$$",
    priceRange: "$400–$500",
    wavelength: "1064 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","ok","x"],
    wins: [
      "1064 nm wavelength — optimal for very dark skin up to Fitzpatrick VI",
      "Affordable diode option for darker skin tones",
      "Large treatment window"
    ],
    cons: [
      "High frequency of use required",
      "Low fluence",
      "Users report inconsistent results"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: null,
    },
  },
  {
    id: "dermrays_v8s",
    name: "DermRays V8S",
    type: "laser",
    fluenceNum: 9,
    fluence: "9 J/cm²",
    price: 3,
    priceLabel: "$$$",
    priceRange: "$400–$500",
    wavelength: "810 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","x"],
    hairColors: ["ok","ok","ok","x"],
    wins: [
      "Affordable entry point for diode laser",
      "High lifetime flash count",
      "Large treatment window covers area faster"
    ],
    cons: [
      "High frequency of use required (3× per week)",
      "Low fluence compared to premium options"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: null,
    },
  },
  {
    id: "philips_lumea",
    name: "Philips Lumea 9000",
    type: "ipl",
    fluenceNum: 5,
    fluence: "5 J/cm²",
    price: 4,
    priceLabel: "$$$$",
    priceRange: "$500–$600",
    wavelength: "520–1200 nm / 590–1200 nm",
    window: "2 / 3 / 4.1 cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "450,000 flashes",
    skinTones: ["ok","ok","x","x","x","x"],
    hairColors: ["ok","ok","caution","x"],
    wins: [
      "Lowest use frequency of any IPL (every 2 weeks)",
      "4 specialized treatment heads",
      "Companion guidance app"
    ],
    cons: [
      "Lower fluence than budget IPL options",
      "Price rivals far more effective laser devices"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: null,
    },
  },
  {
    id: "silkn_motion",
    name: "Silk'n Motion Premium",
    type: "ipl",
    fluenceNum: 5,
    fluence: "5 J/cm²",
    price: 1,
    priceLabel: "$",
    priceRange: "Up to $300",
    wavelength: "475–1200 nm",
    window: "3 cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "600,000 flashes",
    skinTones: ["ok","ok","x","x","x","x"],
    hairColors: ["ok","ok","x","x"],
    wins: [
      "Affordable",
      "Lowest use frequency of any IPL (every 2 weeks)",
      "Highest flash count of any IPL device"
    ],
    cons: [
      "Large device head — harder to maneuver",
      "Wavelength range carries higher burn risk for dark skin"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: null,
    },
  },
  {
    id: "tria_4x",
    name: "Tria 4X",
    type: "laser",
    fluenceNum: 20,
    fluence: "20 J/cm²",
    price: 4,
    priceLabel: "$$$$",
    priceRange: "$500–$600",
    wavelength: "810 nm",
    window: "10 mm circular",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: false,
    skinSensor: null,
    lifespan: "90,000 flashes",
    skinTones: ["ok","ok","ok","ok","x","x"],
    hairColors: ["ok","ok","ok","x"],
    wins: [
      "First at-home diode laser on the market",
      "Compact and maneuverable for small areas"
    ],
    cons: [
      "Painful to use — no cooling",
      "Long treatment sessions",
      "Poor battery life",
      "Very low lifetime flash count"
    ],
    userReports: null,
    discountCode: null,
    discountSaving: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Buy on Amazon",
      review: null,
      compare: "https://scienceoverfluff.com/tria-vs-viqure",
    },
  },
  {
    id: "ulike_air4",
    name: "Ulike Air 4",
    type: "ipl",
    fluenceNum: 7.27,
    fluence: "7.27 J/cm²",
    price: 1,
    priceLabel: "$",
    priceRange: "Up to $300",
    wavelength: "550–1200 nm",
    window: "3.3 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: false,
    lifespan: "300,000 flashes",
    skinTones: ["ok","ok","ok","x","x","x"],
    hairColors: ["ok","ok","caution","x"],
    wins: [
      "Most affordable at-home IPL device",
      "Highest fluence of any IPL tested"
    ],
    cons: [
      "High frequency of use required",
      "No skin tone sensor"
    ],
    userReports: null,
    discountCode: "SOF4",
    discountSaving: "$52 off",
    links: {
      buy: "https://ulike.com/PLACEHOLDER",
      buyLabel: "Buy on Ulike.com",
      review: null,
      compare: "https://scienceoverfluff.com/ulike-comparison",
    },
  },
  {
    id: "ulike_air10",
    name: "Ulike Air 10",
    type: "ipl",
    fluenceNum: 6.67,
    fluence: "6.67 J/cm²",
    price: 1,
    priceLabel: "$",
    priceRange: "Up to $300",
    wavelength: "550–1200 nm",
    window: "3.9 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: true,
    lifespan: "300,000 flashes",
    skinTones: ["ok","ok","ok","x","x","x"],
    hairColors: ["ok","ok","caution","x"],
    wins: [
      "Least painful IPL device — active cooling",
      "Affordable price point",
      "Dual Lights technology: 4 flashes per second"
    ],
    cons: [
      "High frequency of use (3× per week)",
      "Results vary on fine hair or medium-brown hair"
    ],
    userReports: null,
    discountCode: "SOF10",
    discountSaving: "$90 off",
    links: {
      buy: "https://ulike.com/PLACEHOLDER",
      buyLabel: "Buy on Ulike.com",
      review: "https://scienceoverfluff.com/ulike-air-10-review",
      compare: null,
    },
  },
  {
    id: "viqure_epipro",
    name: "ViQure EpiPro",
    type: "laser",
    fluenceNum: 30,
    fluence: "30 J/cm²",
    price: 5,
    priceLabel: "$$$$$",
    priceRange: "$600+",
    wavelength: "808 nm",
    window: "12 × 14 mm",
    frequency: "Every 20–60 days",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "5,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","caution","x"],
    wins: [
      "Highest fluence of any at-home device",
      "Safe for dark skin (Fitzpatrick VI)",
      "Works on dark blonde / light brown / dark auburn hair"
    ],
    cons: [
      "Highest price point",
      "Must be used with ultrasound gel"
    ],
    userReports: null,
    discountCode: "WELCOME",
    discountSaving: "10% off",
    links: {
      buy: "https://viqure.com/PLACEHOLDER",
      buyLabel: "Buy on ViQure.com",
      review: null,
      compare: null,
    },
  },
  {
    id: "viqure_sld",
    name: "ViQure S-LD",
    type: "laser",
    fluenceNum: 25,
    fluence: "25 J/cm²",
    price: 4,
    priceLabel: "$$$$",
    priceRange: "$500–$600",
    wavelength: "780–850 nm",
    window: "8 × 8 mm",
    frequency: "Every 20–60 days",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "100,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","x"],
    hairColors: ["ok","ok","ok","x"],
    wins: [
      "Best fluence-to-price ratio of any at-home device",
      "Works on brown skin (Fitzpatrick IV–V)",
      "Effective on hormonal hair (face, pubic region)",
      "Highest lifetime flash count of any device tested"
    ],
    cons: [
      "Must be used with ultrasound gel"
    ],
    userReports: null,
    discountCode: "SOF15",
    discountSaving: "$105 off",
    links: {
      buy: "https://viqure.com/PLACEHOLDER",
      buyLabel: "Buy on ViQure.com",
      review: "https://scienceoverfluff.com/viqure-s-ld-review",
      compare: "https://compare.scienceoverfluff.com",
    },
  },
];

const SKIN_META = [
  { color: "#f5d5b0", label: "Fitzpatrick I",   roman: "I"   },
  { color: "#e0a878", label: "Fitzpatrick II",  roman: "II"  },
  { color: "#c07840", label: "Fitzpatrick III", roman: "III" },
  { color: "#8c5030", label: "Fitzpatrick IV",  roman: "IV"  },
  { color: "#5a2e18", label: "Fitzpatrick V",   roman: "V"   },
  { color: "#2e1208", label: "Fitzpatrick VI",  roman: "VI"  },
];

const HAIR_META = [
  { color: "#1a1008", label: "Black"                },
  { color: "#3d1f0d", label: "Dark brown"           },
  { color: "#7a4520", label: "Medium brown"         },
  { color: "#c9843a", label: "Light / blonde / red" },
];
