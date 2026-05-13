/**
 * SOF Device Database — devices.js
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE YOU NEED TO EDIT to add or update devices.
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
 * wavelength     e.g. "780–850 nm"
 * window         Treatment window. e.g. "8 × 8 mm"
 * frequency      e.g. "Every 20–60 days"
 * cooling        true / false
 * scanning       true / false
 * skinSensor     true / false / null  (null = N/A — use for laser devices)
 * lifespan       e.g. "100,000,000 flashes"
 *
 * skinTones      Array of up to 6 values (Fitzpatrick I–VI).
 *                Only include tones the device is compatible with.
 *                Use "ok" for fully compatible, "caution" for use with care.
 *                Incompatible tones should be OMITTED entirely.
 *                Format: [fitzI, fitzII, fitzIII, fitzIV, fitzV, fitzVI]
 *                e.g. ["ok","ok","ok","caution",null,null] means safe for I-III,
 *                caution for IV, not safe for V-VI (omit V and VI).
 *
 * hairColors     Array of 5 values in this exact order:
 *                [black, darkBrown, lightBrown, darkBlonde, auburn]
 *                "ok" = compatible (image shown), "x" = not compatible (image hidden)
 *                No caution needed — incompatibility is shown by omitting the image.
 *
 * wins           Array of strings.
 * cons           Array of strings.
 * userReports    String or null. 1-2 sentences from Reddit/reviews.
 *
 * discountCode   String or null.
 * discountSaving String or null. e.g. "$105 off"
 * bestFor        Short badge string or null. e.g. "SOF Pick"
 *
 * links          Object:
 *   .buy         Primary buy URL (required)
 *   .buyLabel    e.g. "Buy on ViQure.com"
 *   .buy2        Secondary buy URL or null
 *   .buy2Label   e.g. "Also on Amazon" or null
 *   .review      SOF review URL or null
 *   .compare     SOF comparison article URL or null
 */

const DEVICES = [
  {
    id: "viqure_epipro",
    name: "ViQure EpiPro",
    type: "laser",
    fluenceNum: 30,
    fluence: "30 J/cm²",
    price: 5,
    priceLabel: "$$$$$",
    wavelength: "808 nm",
    window: "12 × 14 mm",
    frequency: "Every 20–60 days",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "5,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","ok","ok","ok"],
    wins: [
      "Highest fluence of any at-home device",
      "Safe for dark skin (Fitzpatrick VI)",
      "Works on dark blonde / light brown / dark auburn hair"
    ],
    cons: [
      "Highest price point",
      "Must be used with ultrasound gel"
    ],
    userReports: "Many users report purchasing the EpiPro after other devices have failed them, though its high price tag often deters first-time buyers. Users consistently say the high fluence delivers successful results for stubborn areas like male facial hair, and overall reviews are generally positive.",
    discountCode: "WELCOME",
    discountSaving: "10% off",
    bestFor: null,
    links: {
      buy: "https://viqure.com/PLACEHOLDER",
      buyLabel: "Get it: ViQure.com →",
      buy2: null,
      buy2Label: null,
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
    wavelength: "780–850 nm",
    window: "8 × 8 mm",
    frequency: "Every 20–60 days",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "100,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok",null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Best fluence-to-price ratio of any at-home device",
      "Works on brown skin (Fitzpatrick IV–V)",
      "Effective on hormonal hair (face, pubic region)",
      "Highest lifetime flash count of any device tested"
    ],
    cons: [
      "Must be used with ultrasound gel"
    ],
    userReports: "Users report significant hair reduction across various skin and hair types, including Fitzpatrick IV-V and stubborn areas like the Brazilian. The cooling tip makes pain more manageable, especially in sensitive areas, despite not being completely painless.",
    discountCode: "SOF15",
    discountSaving: "$105 off",
    bestFor: null,
    links: {
      buy: "https://viqure.com/PLACEHOLDER",
      buyLabel: "Get it: ViQure.com →",
      buy2: null,
      buy2Label: null,
      review: "https://scienceoverfluff.com/viqure-s-ld-review",
      compare: "https://compare.scienceoverfluff.com",
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
    wavelength: "810 nm",
    window: "10 mm circular",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: false,
    skinSensor: null,
    lifespan: "90,000 flashes",
    skinTones: ["ok","ok","ok","ok",null,null],
    hairColors: ["ok","ok","ok","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
      review: null,
      compare: "https://scienceoverfluff.com/tria-vs-viqure",
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
    wavelength: "810 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok",null],
    hairColors: ["ok","ok","ok","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
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
    wavelength: "1064 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000 flashes",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","ok","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
      review: null,
      compare: null,
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
    wavelength: "550–1200 nm",
    window: "3.9 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: true,
    lifespan: "300,000 flashes",
    skinTones: ["ok","ok","ok",null,null,null],
    hairColors: ["ok","ok","x","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: "https://ulike.com/PLACEHOLDER",
      buy2Label: "Get it: Ulike.com →",
      review: "https://scienceoverfluff.com/ulike-air-10-review",
      compare: null,
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
    wavelength: "550–1200 nm",
    window: "3.3 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: false,
    lifespan: "300,000 flashes",
    skinTones: ["ok","ok","ok",null,null,null],
    hairColors: ["ok","ok","x","x","x"],
    wins: [
      "Most affordable at-home IPL device",
      "Highest fluence of any IPL tested"
    ],
    cons: [
      "High frequency of use required",
      "No skin tone sensor"
    ],
    userReports: "users generally report positive results with this device.",
    discountCode: "SOF4",
    discountSaving: "$52 off",
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: "https://ulike.com/PLACEHOLDER",
      buy2Label: "Get it: Ulike.com →",
      review: null,
      compare: "https://scienceoverfluff.com/ulike-comparison",
    },
  },
  {
    id: "ulike_x",
    name: "Ulike X",
    type: "ipl",
    fluenceNum: 6.67,
    fluence: "6.67 J/cm²",
    price: 1,
    priceLabel: "$",
    wavelength: "550–1200 nm",
    window: "3.9 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: true,
    lifespan: "300,000 flashes",
    skinTones: ["ok","ok","ok",null,null,null],
    hairColors: ["ok","ok","x","x","x"],
    wins: [
      "Affordable at-home IPL device",
      "High fluence"
    ],
    cons: [
      "High frequency of use required",
      "No skin tone sensor"
    ],
    userReports: "users generally report positive results with this device.",
    discountCode: "SOF4",
    discountSaving: "$52 off",
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: "https://ulike.com/PLACEHOLDER",
      buy2Label: "Get it: Ulike.com →",
      review: null,
      compare: "https://scienceoverfluff.com/ulike-comparison",
    },
  },
  {
    id: "braun_pro5",
    name: "Braun Silk Expert Pro 5",
    type: "ipl",
    fluenceNum: 6,
    fluence: "6 J/cm²",
    price: 2,
    priceLabel: "$$",
    wavelength: "510–2000 nm",
    window: "1.5 / 3 / 4 cm²",
    frequency: "Once per week",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "400,000 flashes",
    skinTones: ["ok","ok","ok",null,null,null],
    hairColors: ["ok","ok","x","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
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
    wavelength: "475–1200 nm",
    window: "3 cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "600,000 flashes",
    skinTones: ["ok","ok","ok","caution",null,null],
    hairColors: ["ok","ok","x","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
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
    wavelength: "520–1200 nm / 590–1200 nm",
    window: "2 / 3 / 4.1 cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "450,000 flashes",
    skinTones: ["ok","ok","ok","caution","caution",null],
    hairColors: ["ok","ok","x","x","x"],
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
    bestFor: null,
    links: {
      buy: "https://amazon.com/dp/PLACEHOLDER",
      buyLabel: "Get it on Amazon →",
      buy2: null,
      buy2Label: null,
      review: null,
      compare: null,
    },
  },
];

const SKIN_META = [
  { color: "#FFECE3", label: "Fitzpatrick I",   roman: "I"   },
  { color: "#F6DEC4", label: "Fitzpatrick II",  roman: "II"  },
  { color: "#EFC795", label: "Fitzpatrick III", roman: "III" },
  { color: "#D69F78", label: "Fitzpatrick IV",  roman: "IV"  },
  { color: "#9F6D56", label: "Fitzpatrick V",   roman: "V"   },
  { color: "#64483E", label: "Fitzpatrick VI",  roman: "VI"  },
];

const HAIR_META = [
  { label: "Black",       img: "https://raw.githubusercontent.com/ScienceOverFluff/Hair-Removal-Devices/main/Images/Black-Hair.png"      },
  { label: "Dark brown",  img: "https://raw.githubusercontent.com/ScienceOverFluff/Hair-Removal-Devices/main/Images/Dark-Brown-Hair.png" },
  { label: "Light brown", img: "https://raw.githubusercontent.com/ScienceOverFluff/Hair-Removal-Devices/main/Images/Light-Brown-Hair.png"},
  { label: "Dark blonde", img: "https://raw.githubusercontent.com/ScienceOverFluff/Hair-Removal-Devices/main/Images/Dark-Blonde-Hair.png"},
  { label: "Auburn",      img: "https://raw.githubusercontent.com/ScienceOverFluff/Hair-Removal-Devices/main/Images/Auburn-Hair.png" },
];
