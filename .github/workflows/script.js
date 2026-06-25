/* ============================================================
   TECHVERSE — script.js
   Starfield · Component Cards · Modal · Reviews · Visitor Counter
   ============================================================ */

/* ── 1. STARFIELD ── */
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  const STAR_COUNT = 280;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.twinkle += s.twinkleSpeed;
      const alpha = s.alpha * (0.65 + 0.35 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,234,246,${alpha})`;
      ctx.fill();
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(drawStars);
  }

  resize();
  createStars();
  drawStars();
  window.addEventListener('resize', () => { resize(); createStars(); });
})();


/* ── 2. NAV SCROLL EFFECT ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});


/* ── 3. HAMBURGER MENU ── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});


/* ── 4. COMPONENT DATA ── */
const COMPONENTS = [
  {
    emoji: '🧠',
    name: 'CPU',
    fullName: 'Central Processing Unit',
    tagline: 'The brain of your computer',
    category: 'Core Processing',
    badge: 'badge-core',
    badgeText: 'CORE',
    description: 'The CPU is the primary component that executes instructions in a computer. It performs basic arithmetic, logical, control, and input/output operations specified by the instructions in programs. Modern CPUs contain billions of transistors and can execute billions of instructions per second.',
    howItWorks: 'The CPU fetches instructions from RAM, decodes them, executes the operation (addition, comparison, data movement), and writes results back. This Fetch-Decode-Execute cycle repeats billions of times per second per core.',
    keySpecs: [
      { spec: 'Clock Speed', value: '3.0 – 6.0+ GHz' },
      { spec: 'Core Count', value: '4 – 64+ cores' },
      { spec: 'Cache', value: 'L1/L2/L3 up to 256MB' },
      { spec: 'TDP', value: '65W – 250W' },
      { spec: 'Socket', value: 'AM5 (AMD) · LGA1851 (Intel)' }
    ],
    buyingTips: [
      'Match your CPU socket to your motherboard — they must be compatible',
      'More cores help with multitasking, streaming, and rendering',
      'Higher single-core clock speed benefits gaming most',
      'Check TDP to size your CPU cooler correctly',
      'Look for CPUs with integrated GPU if you need a fallback display output'
    ],
    topBrands: 'Intel Core Ultra, AMD Ryzen 9000 series'
  },
  {
    emoji: '🎮',
    name: 'GPU',
    fullName: 'Graphics Processing Unit',
    tagline: 'Renders your visual world',
    category: 'Visual Processing',
    badge: 'badge-core',
    badgeText: 'CORE',
    description: 'The GPU handles all graphics rendering, producing the images you see on screen. With thousands of smaller cores designed for parallel processing, GPUs also power AI workloads, video encoding, and scientific simulations at incredible speed.',
    howItWorks: 'GPUs receive scene data (geometry, textures, lighting) from the CPU, run vertex and fragment shaders on thousands of tiny processor cores simultaneously, and output finished pixel data to your monitor via the display port.',
    keySpecs: [
      { spec: 'VRAM', value: '8GB – 24GB+ GDDR7' },
      { spec: 'CUDA/Shader Cores', value: '2,048 – 16,384+' },
      { spec: 'Memory Bandwidth', value: '300 – 1,800 GB/s' },
      { spec: 'TDP', value: '75W – 600W' },
      { spec: 'Interface', value: 'PCIe 4.0 / 5.0 x16' }
    ],
    buyingTips: [
      'For 1080p gaming, 8GB VRAM is sufficient; 12–16GB for 1440p/4K',
      'Check your PSU wattage — high-end GPUs need 850W+',
      'Ray tracing performance varies heavily between GPU generations',
      'NVIDIA cards have better DLSS; AMD offers FSR (open-source)',
      'Measure your PC case — some GPUs are over 340mm long'
    ],
    topBrands: 'NVIDIA RTX 5000 series, AMD RX 9000 series'
  },
  {
    emoji: '🧮',
    name: 'RAM',
    fullName: 'Random Access Memory',
    tagline: 'Your system\'s short-term memory',
    category: 'System Memory',
    badge: 'badge-memory',
    badgeText: 'MEMORY',
    description: 'RAM is volatile, high-speed memory that temporarily holds data the CPU is actively using. Unlike storage, RAM loses its contents when powered off. More RAM allows more applications to run simultaneously without slowdown.',
    howItWorks: 'The CPU reads and writes data to RAM billions of times per second. Memory controllers on the CPU handle requests via memory channels. DDR5 uses a 64-bit bus (or wider with dual-channel) to achieve high bandwidth.',
    keySpecs: [
      { spec: 'Type', value: 'DDR4 / DDR5' },
      { spec: 'Speed', value: '3200 MHz – 8000+ MHz' },
      { spec: 'Capacity', value: '8GB – 128GB per stick' },
      { spec: 'Latency (CL)', value: 'CL14 – CL40' },
      { spec: 'Channels', value: 'Single / Dual / Quad' }
    ],
    buyingTips: [
      '16GB is the minimum for gaming in 2025; 32GB is recommended',
      'Use matched pairs of sticks to enable dual-channel mode (doubles bandwidth)',
      'Enable XMP/EXPO in BIOS to run RAM at advertised speeds',
      'Lower CL (latency) numbers are better for performance',
      'DDR5 is now the standard for AM5 and Intel 13th Gen and newer'
    ],
    topBrands: 'Corsair Dominator, G.Skill Trident Z5, Kingston Fury'
  },
  {
    emoji: '🖥️',
    name: 'Motherboard',
    fullName: 'System Board / Mainboard',
    tagline: 'Connects all components together',
    category: 'Core Infrastructure',
    badge: 'badge-core',
    badgeText: 'CORE',
    description: 'The motherboard is the main circuit board that interconnects all components. It houses the CPU socket, RAM slots, PCIe lanes for GPU and NVMe drives, SATA ports, USB headers, and the chipset that manages communication between everything.',
    howItWorks: 'The CPU communicates with the motherboard chipset via DMI (Intel) or Infinity Fabric (AMD). The chipset manages slower peripherals while high-speed components like GPU and NVMe connect directly to CPU PCIe lanes for maximum bandwidth.',
    keySpecs: [
      { spec: 'Form Factor', value: 'ATX / Micro-ATX / Mini-ITX' },
      { spec: 'Socket', value: 'AM5 (AMD) · LGA1851 (Intel)' },
      { spec: 'RAM Slots', value: '2 – 8 DIMM slots' },
      { spec: 'PCIe Slots', value: 'PCIe 4.0 / 5.0 x16' },
      { spec: 'Chipset', value: 'Z890 / X870E / B650' }
    ],
    buyingTips: [
      'CPU and motherboard socket must match — always verify compatibility',
      'ATX boards have more expansion slots; Mini-ITX for compact builds',
      'Higher-end chipsets (Z890, X870E) support CPU overclocking',
      'Check the number of M.2 slots for NVMe SSD expansion',
      'VRM quality matters for CPU overclocking stability'
    ],
    topBrands: 'ASUS ROG, MSI MEG, Gigabyte AORUS, ASRock Taichi'
  },
  {
    emoji: '💾',
    name: 'SSD',
    fullName: 'Solid State Drive (NVMe)',
    tagline: 'Ultra-fast permanent storage',
    category: 'Primary Storage',
    badge: 'badge-storage',
    badgeText: 'STORAGE',
    description: 'NVMe SSDs connect directly to PCIe lanes on your CPU or motherboard, offering storage speeds 10–20× faster than traditional SATA SSDs. They store your operating system, applications, and files permanently — even without power.',
    howItWorks: 'Data is stored in NAND flash memory cells. The NVMe protocol uses PCIe lanes to transfer data at up to 14,000 MB/s on PCIe 5.0 drives. There are no moving parts, making SSDs silent, shock-resistant, and extremely fast.',
    keySpecs: [
      { spec: 'Interface', value: 'PCIe 4.0 / 5.0 NVMe' },
      { spec: 'Read Speed', value: '3,500 – 14,000 MB/s' },
      { spec: 'Write Speed', value: '2,500 – 12,000 MB/s' },
      { spec: 'NAND Type', value: 'TLC / QLC / MLC' },
      { spec: 'Form Factor', value: 'M.2 2280 (most common)' }
    ],
    buyingTips: [
      'PCIe 4.0 NVMe is the sweet spot — great speed at reasonable prices',
      'PCIe 5.0 SSDs are faster but run hotter and cost more',
      'TLC NAND outlasts QLC in write endurance',
      'Check TBW (terabytes written) rating for lifespan estimate',
      '1TB minimum for a system drive; 2TB recommended for gaming'
    ],
    topBrands: 'Samsung 990 Pro, WD Black SN850X, Seagate FireCuda'
  },
  {
    emoji: '🗄️',
    name: 'HDD',
    fullName: 'Hard Disk Drive',
    tagline: 'High-capacity bulk storage',
    category: 'Bulk Storage',
    badge: 'badge-storage',
    badgeText: 'STORAGE',
    description: 'HDDs use spinning magnetic platters to store data at high capacities for low cost. While much slower than SSDs, they excel as secondary storage for archives, media collections, and backups where raw speed is less critical.',
    howItWorks: 'Magnetic platters spin at 5400–7200 RPM. A read/write head floats nanometers above the surface on an arm, reading magnetic domains that represent bits. Access times are 5–15ms — 100× slower than an NVMe SSD.',
    keySpecs: [
      { spec: 'RPM', value: '5400 / 7200 RPM' },
      { spec: 'Capacity', value: '1TB – 30TB+' },
      { spec: 'Interface', value: 'SATA III (6 Gb/s)' },
      { spec: 'Cache Buffer', value: '64MB – 512MB' },
      { spec: 'Read Speed', value: '100 – 280 MB/s' }
    ],
    buyingTips: [
      'Use HDDs as secondary storage alongside an SSD primary drive',
      '7200 RPM drives are faster; 5400 RPM runs quieter and cooler',
      'Check warranty length — Seagate IronWolf and WD Red are NAS-rated',
      'Avoid using HDDs for OS or frequently accessed applications',
      'CMR drives are more reliable for NAS/RAID than SMR'
    ],
    topBrands: 'Seagate Barracuda, WD Blue, Toshiba MG series'
  },
  {
    emoji: '⚡',
    name: 'PSU',
    fullName: 'Power Supply Unit',
    tagline: 'Delivers clean power to every component',
    category: 'Power',
    badge: 'badge-power',
    badgeText: 'POWER',
    description: 'The PSU converts AC wall power to regulated DC voltages (+12V, +5V, +3.3V) required by all PC components. A quality PSU with sufficient wattage and 80+ certification ensures system stability and efficiency.',
    howItWorks: 'An internal transformer steps down AC voltage. Rectifiers convert AC to DC, and voltage regulators stabilize output. Modular PSUs let you use only the cables you need, improving airflow and cable management.',
    keySpecs: [
      { spec: 'Wattage', value: '550W – 1600W+' },
      { spec: 'Efficiency', value: '80+ Bronze/Gold/Platinum/Titanium' },
      { spec: 'Rails', value: 'Single +12V rail (preferred)' },
      { spec: 'Connector', value: 'ATX 3.0 / PCIe 5.0 ready' },
      { spec: 'Modularity', value: 'Non / Semi / Fully Modular' }
    ],
    buyingTips: [
      'Add your CPU TDP + GPU TDP + 100W headroom to determine wattage needs',
      '80+ Gold is the sweet spot — better than Bronze without Platinum prices',
      'Fully modular PSUs make cable management much easier',
      'Tier lists from reputable reviewers (Tom\'s Hardware, JonnyGURU) matter here',
      'For RTX 5090 or RX 9070 XT builds, go 1000W+ for headroom'
    ],
    topBrands: 'Seasonic Prime, Corsair RMx, EVGA SuperNOVA, be quiet! Straight Power'
  },
  {
    emoji: '❄️',
    name: 'CPU Cooler',
    fullName: 'CPU Thermal Solution',
    tagline: 'Keeps your processor from burning up',
    category: 'Thermal',
    badge: 'badge-thermal',
    badgeText: 'THERMAL',
    description: 'CPU coolers dissipate heat generated by the processor. Air coolers use heatsinks and fans; AIO (All-In-One) liquid coolers use a pump, radiator, and fans for superior cooling. Proper cooling maintains peak performance and longevity.',
    howItWorks: 'A copper or aluminum baseplate contacts the CPU via thermal paste. Heat pipes or liquid coolant carry heat away to fins or a radiator, where fans push the heat into the case airflow. The goal is keeping CPU temperatures under 90°C under load.',
    keySpecs: [
      { spec: 'Type', value: 'Air Cooler / AIO Liquid' },
      { spec: 'Radiator Size', value: '120mm / 240mm / 360mm' },
      { spec: 'TDP Rating', value: '150W – 350W+' },
      { spec: 'Socket Support', value: 'AM5, LGA1851, etc.' },
      { spec: 'Noise Level', value: '20 – 45 dBA' }
    ],
    buyingTips: [
      'Budget CPUs (65W) are fine with stock coolers or budget air coolers',
      '125W+ CPUs need at least a 240mm AIO or large dual-tower air cooler',
      'Apply thermal paste in a small pea-sized dot in the center',
      'Check clearance — tall air coolers may not fit all cases',
      'Noctua, be quiet! and Arctic make the quietest high-performers'
    ],
    topBrands: 'Noctua NH-D15, be quiet! Dark Rock Pro 5, ARCTIC Liquid Freezer III'
  },
  {
    emoji: '📦',
    name: 'PC Case',
    fullName: 'Computer Chassis',
    tagline: 'Houses and protects your build',
    category: 'Enclosure',
    badge: 'badge-io',
    badgeText: 'BUILD',
    description: 'The PC case houses all components, manages airflow, and determines the aesthetic of your build. A good case provides room for cable management, adequate fan mounts, proper airflow paths, and fits your chosen components.',
    howItWorks: 'Cases create an airflow channel: intake fans at the front/bottom draw in cool air; exhaust fans at the rear/top expel hot air. Positive pressure (more intake than exhaust) reduces dust accumulation.',
    keySpecs: [
      { spec: 'Form Factor', value: 'Full Tower / Mid Tower / Mini-ITX' },
      { spec: 'GPU Clearance', value: '280mm – 420mm+' },
      { spec: 'Radiator Support', value: '120mm – 420mm' },
      { spec: 'Fan Mounts', value: '4 – 10+ positions' },
      { spec: 'Drive Bays', value: '2 – 8 storage bays' }
    ],
    buyingTips: [
      'Measure your GPU length and cooler height before buying a case',
      'Mesh front panels offer superior airflow vs solid panels',
      'Mid towers (ATX) fit most builds with room to spare',
      'Check which radiator sizes fit — front, top, and side mounts vary',
      'Tempered glass side panels show off your build beautifully'
    ],
    topBrands: 'Fractal Design Define 7, Lian Li PC-O11D, NZXT H7 Flow'
  },
  {
    emoji: '🖱️',
    name: 'Monitor',
    fullName: 'Display / Monitor',
    tagline: 'Your window into the digital universe',
    category: 'Output',
    badge: 'badge-io',
    badgeText: 'I/O',
    description: 'The monitor converts digital signals from your GPU into visible images. Key specs are resolution (sharpness), refresh rate (smoothness), and panel type (color accuracy vs response time). Choosing the right monitor depends heavily on your use case.',
    howItWorks: 'The GPU sends frame data via DisplayPort or HDMI to the monitor\'s scaler. Pixels are lit by backlight (IPS, VA, OLED) at a rate defined by the refresh rate. G-Sync and FreeSync sync the display to GPU frame output to eliminate screen tearing.',
    keySpecs: [
      { spec: 'Resolution', value: '1080p / 1440p / 4K / 8K' },
      { spec: 'Refresh Rate', value: '60Hz – 480Hz' },
      { spec: 'Panel Type', value: 'IPS / VA / OLED / Mini-LED' },
      { spec: 'Response Time', value: '0.03ms – 5ms GtG' },
      { spec: 'Sync', value: 'G-Sync / FreeSync / VRR' }
    ],
    buyingTips: [
      '1440p 165Hz is the sweet spot for gaming value in 2025',
      'OLED panels have perfect blacks but risk burn-in with static elements',
      'IPS panels have the best color accuracy for creative work',
      'For competitive gaming, prioritize refresh rate over resolution',
      'Make sure your GPU can push frames equal to your monitor\'s Hz'
    ],
    topBrands: 'LG UltraGear, ASUS ROG Swift, Samsung Odyssey, Dell Alienware'
  },
  {
    emoji: '🔊',
    name: 'Sound Card',
    fullName: 'Audio Interface / Sound Card',
    tagline: 'Elevates your audio experience',
    category: 'Audio',
    badge: 'badge-io',
    badgeText: 'I/O',
    description: 'Sound cards convert digital audio signals to analog output for speakers and headphones, and convert analog input from microphones to digital. Dedicated sound cards outperform onboard audio for audiophiles, streamers, and musicians.',
    howItWorks: 'A Digital-to-Analog Converter (DAC) processes audio data from the OS and converts it to an electrical signal for your speakers or headphones. An ADC does the reverse for microphone input. Higher bit-depth and sampling rate mean higher fidelity.',
    keySpecs: [
      { spec: 'DAC Bit Depth', value: '16-bit – 32-bit' },
      { spec: 'Sample Rate', value: '44.1kHz – 192kHz' },
      { spec: 'SNR', value: '100 – 130+ dB' },
      { spec: 'Interface', value: 'PCIe / USB External' },
      { spec: 'Channels', value: '2.0 – 7.1 surround' }
    ],
    buyingTips: [
      'Onboard audio is sufficient for most users — only upgrade if you notice issues',
      'USB audio interfaces (Focusrite Scarlett) are better for recording musicians',
      'PCIe cards like Creative Sound Blaster AE-9 reduce electrical interference',
      'Audiophiles pair dedicated sound cards with quality headphone amplifiers',
      'Virtual surround sound is useful for gaming with stereo headphones'
    ],
    topBrands: 'Creative Sound Blaster AE-9, Focusrite Scarlett, ASUS Xonar'
  },
  {
    emoji: '🌐',
    name: 'Network Card',
    fullName: 'Network Interface Card (NIC)',
    tagline: 'Your gateway to connectivity',
    category: 'Networking',
    badge: 'badge-io',
    badgeText: 'I/O',
    description: 'NICs connect your computer to wired or wireless networks. While most motherboards include Gigabit Ethernet and Wi-Fi 6E, dedicated PCIe NICs offer 2.5G / 10G wired speeds or Wi-Fi 7 for cutting-edge connectivity.',
    howItWorks: 'Wired NICs encode data into electrical signals over CAT cables using the Ethernet standard. Wireless NICs encode data into radio waves transmitted by antennas. The MAC address on each NIC uniquely identifies your device on the network.',
    keySpecs: [
      { spec: 'Wired Speed', value: '1G / 2.5G / 10G Ethernet' },
      { spec: 'Wi-Fi Standard', value: 'Wi-Fi 6E / Wi-Fi 7' },
      { spec: 'Wi-Fi Bands', value: '2.4 GHz / 5 GHz / 6 GHz' },
      { spec: 'Interface', value: 'PCIe x1 / M.2 E-key' },
      { spec: 'Bluetooth', value: 'Bluetooth 5.3 – 5.4' }
    ],
    buyingTips: [
      '2.5G Ethernet is now the standard for enthusiast builds',
      'Wi-Fi 7 offers multi-link operation — significant latency improvement',
      'For gaming, wired Ethernet always beats Wi-Fi for consistency',
      'Check if your router supports the standard before upgrading the NIC',
      'Most modern motherboards include adequate onboard networking'
    ],
    topBrands: 'Intel I226-V (2.5G), ASUS PCE-AXE59BT (Wi-Fi 6E), Fenvi FV-T919'
  }
];


/* ── 5. RENDER COMPONENT CARDS ── */
const grid = document.getElementById('componentsGrid');

COMPONENTS.forEach((c, idx) => {
  const card = document.createElement('div');
  card.className = 'comp-card';
  card.innerHTML = `
    <span class="comp-emoji">${c.emoji}</span>
    <div class="comp-name">${c.name}</div>
    <div class="comp-tagline">${c.tagline}</div>
    <span class="comp-badge ${c.badge}">${c.badgeText}</span>
  `;
  card.addEventListener('click', () => openModal(idx));
  grid.appendChild(card);
});


/* ── 6. MODAL ── */
const overlay  = document.getElementById('modalOverlay');
const modalEl  = document.getElementById('modal');

function openModal(idx) {
  const c = COMPONENTS[idx];
  document.getElementById('modalIcon').textContent     = c.emoji;
  document.getElementById('modalCategory').textContent = c.category;
  document.getElementById('modalTitle').textContent    = `${c.name} — ${c.fullName}`;

  const specsRows = c.keySpecs.map(s =>
    `<tr><td>${s.spec}</td><td>${s.value}</td></tr>`
  ).join('');

  const tips = c.buyingTips.map(t => `<li>${t}</li>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <p>${c.description}</p>
    <h3>How It Works</h3>
    <p>${c.howItWorks}</p>
    <h3>Key Specifications</h3>
    <table class="spec-table">
      <thead><tr><th>Specification</th><th>Typical Range</th></tr></thead>
      <tbody>${specsRows}</tbody>
    </table>
    <h3>Buying Tips</h3>
    <ul>${tips}</ul>
    <h3>Leading Brands</h3>
    <p>${c.topBrands}</p>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ── 7. STAR RATING ── */
let selectedRating = 0;
const stars = document.querySelectorAll('#starRating span');

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.dataset.val);
    stars.forEach((s, i) => s.classList.toggle('active', i < val));
  });
  star.addEventListener('mouseout', () => {
    stars.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
  });
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.val);
    stars.forEach((s, i) => s.classList.toggle('active', i < selectedRating));
  });
});


/* ── 8. REVIEWS ── */
const REVIEWS_KEY = 'techverse_reviews_v2';

function loadReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY)) || [];
  } catch { return []; }
}

function saveReviews(reviews) {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

function renderReviews() {
  const reviews = loadReviews();
  const list = document.getElementById('reviewsList');
  list.innerHTML = '';

  if (reviews.length === 0) {
    list.innerHTML = '<p style="color: var(--text-muted); font-size: 0.875rem; text-align: center; padding: 2rem 0;">No reviews yet — be the first explorer to share your experience!</p>';
    return;
  }

  [...reviews].reverse().forEach(r => {
    const div = document.createElement('div');
    div.className = 'review-item';
    const starStr = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    div.innerHTML = `
      <div class="review-top">
        <span class="review-author">${escapeHtml(r.name)}</span>
        <span class="review-component-badge">${escapeHtml(r.component)}</span>
      </div>
      <div class="review-stars">${starStr}</div>
      <div class="review-text">${escapeHtml(r.text)}</div>
      <div class="review-date">${r.date}</div>
    `;
    list.appendChild(div);
  });
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

document.getElementById('submitReview').addEventListener('click', () => {
  const name      = document.getElementById('reviewName').value.trim();
  const component = document.getElementById('reviewComponent').value;
  const text      = document.getElementById('reviewText').value.trim();

  if (!name || !component || !text || selectedRating === 0) {
    alert('Please fill in all fields and select a star rating before submitting.');
    return;
  }

  const reviews = loadReviews();
  reviews.push({
    name,
    component,
    rating: selectedRating,
    text,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  });
  saveReviews(reviews);

  // Reset form
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewComponent').value = '';
  document.getElementById('reviewText').value = '';
  selectedRating = 0;
  stars.forEach(s => s.classList.remove('active'));

  renderReviews();
});

renderReviews();


/* ── 9. VISITOR COUNTER ── */
const VISITOR_KEY = 'techverse_visitors_v1';
const SESSION_KEY = 'techverse_session_v1';

function getVisitorCount() {
  return parseInt(localStorage.getItem(VISITOR_KEY) || '0');
}

function initVisitorCounter() {
  let count = getVisitorCount();
  const isNewSession = !sessionStorage.getItem(SESSION_KEY);

  if (isNewSession) {
    count += 1;
    localStorage.setItem(VISITOR_KEY, count.toString());
    sessionStorage.setItem(SESSION_KEY, '1');
  }

  animateCounter(count);
  document.getElementById('footerVisitor').textContent =
    `${count.toLocaleString()} space explorers visited`;
}

function animateCounter(target) {
  const el = document.getElementById('visitorCount');
  if (!el) return;
  let current = 0;
  const duration = 1200;
  const step = Math.max(1, Math.floor(target / 60));
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current >= target) clearInterval(interval);
  }, duration / 60);
}

initVisitorCounter();


/* ── 10. CONTACT FORM ── */
document.getElementById('sendContact').addEventListener('click', () => {
  const name  = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg   = document.getElementById('contactMsg').value.trim();
  const fb    = document.getElementById('contactFeedback');

  if (!name || !email || !msg) {
    fb.style.color = '#f87171';
    fb.textContent = '⚠ Please fill in all fields before transmitting.';
    return;
  }

  if (!email.includes('@')) {
    fb.style.color = '#f87171';
    fb.textContent = '⚠ Please enter a valid email address.';
    return;
  }

  fb.style.color = '#4ade80';
  fb.textContent = '✓ Transmission received! We\'ll respond from orbit soon.';

  document.getElementById('contactName').value  = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMsg').value   = '';

  setTimeout(() => { fb.textContent = ''; }, 5000);
});


/* ── 11. SMOOTH SCROLL for NAV links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
      document.getElementById('mobileMenu').classList.remove('open');
    }
  });
});


/* ── 12. INTERSECTION OBSERVER — animate spec bars on scroll ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.spec-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = w; }, 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.specs-grid').forEach(el => observer.observe(el));


/* ── 11. ACTIVE USERS COUNTER ── */
(function () {
  const BASE_ACTIVE = 257;         // starting point
  const FLUCTUATION = 12;          // ± swing per tick
  const TICK_MS     = 3500;        // update interval (ms)
  const ANIM_STEPS  = 20;          // animation smoothness

  let currentActive = BASE_ACTIVE;

  function randomDelta() {
    // Weighted so the number tends to drift back toward the base
    const drift  = (BASE_ACTIVE - currentActive) * 0.08;  // gentle pull to center
    const random = (Math.random() - 0.48) * FLUCTUATION;  // slight upward bias
    return Math.round(drift + random);
  }

  function animateTo(target) {
    const countEl  = document.getElementById('activeUserCount');
    const footerEl = document.getElementById('footerActiveCount');
    if (!countEl && !footerEl) return;

    const start = currentActive;
    const diff  = target - start;
    let   step  = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / ANIM_STEPS;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val   = Math.round(start + diff * eased);
      if (countEl)  countEl.textContent  = val.toLocaleString();
      if (footerEl) footerEl.textContent = val.toLocaleString();
      if (step >= ANIM_STEPS) clearInterval(timer);
    }, TICK_MS / ANIM_STEPS);
  }

  function tick() {
    const delta = randomDelta();
    const next  = Math.max(BASE_ACTIVE - FLUCTUATION * 2,
                   Math.min(BASE_ACTIVE + FLUCTUATION * 2,
                   currentActive + delta));
    animateTo(next);
    currentActive = next;
  }

  // Initialise displays immediately
  const countEl  = document.getElementById('activeUserCount');
  const footerEl = document.getElementById('footerActiveCount');
  if (countEl)  countEl.textContent  = BASE_ACTIVE.toLocaleString();
  if (footerEl) footerEl.textContent = BASE_ACTIVE.toLocaleString();

  // Start fluctuating
  setInterval(tick, TICK_MS);
})();
