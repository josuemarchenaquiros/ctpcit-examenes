/*
 * CIT - Navegación de pruebas sumativas
 * Flujo: Trimestre -> Carrera -> Nivel -> Sección (si aplica) -> Subárea
 */

const careerIcons = {
  electronica: "bi-cpu",
  ia: "bi-robot",
  logistica: "bi-truck",
  calidad: "bi-check2-circle",
  ciberseguridad: "bi-shield-lock",
  disenoDigital: "bi-palette",
  movil: "bi-phone",
  disenoGrafico: "bi-brush"
};

const levelMeta = {
  decimo: { name: "Décimo", icon: "bi-1-circle" },
  undecimo: { name: "Undécimo", icon: "bi-2-circle" }
};

const careerView = document.getElementById("careerView");
const careerGrid = document.getElementById("careerGrid");
const navigationPanel = document.getElementById("navigationPanel");
const careerTitle = document.getElementById("careerTitle");
const levelGrid = document.getElementById("levelGrid");
const sectionPanel = document.getElementById("sectionPanel");
const sectionGrid = document.getElementById("sectionGrid");
const selectedSection = document.getElementById("selectedSection");
const subareaPanel = document.getElementById("subareaPanel");
const subareaGrid = document.getElementById("subareaGrid");
const selectedLevel = document.getElementById("selectedLevel");
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbCareer = document.getElementById("breadcrumbCareer");
const breadcrumbLevel = document.getElementById("breadcrumbLevel");
const breadcrumbLevelArrow = document.getElementById("breadcrumbLevelArrow");
const breadcrumbSection = document.getElementById("breadcrumbSection");
const breadcrumbSectionArrow = document.getElementById("breadcrumbSectionArrow");
const backButton = document.getElementById("backButton");

// Marca automáticamente el trimestre correspondiente a la copia abierta.
const trimesterByFile = {
  "index.html": "I",
  "index-II.html": "II",
  "index-III.html": "III"
};

const currentFile = window.location.pathname.split("/").pop() || "index.html";
const currentTrimester = trimesterByFile[currentFile] || "I";
document.querySelectorAll(".trimester-link").forEach(link => {
  link.classList.toggle("active", link.dataset.trimester === currentTrimester);
});

let selectedCareerKey = null;
let selectedLevelKey = null;
let selectedSectionIndex = null;

function renderCareers() {
  careerGrid.innerHTML = "";

  Object.entries(examConfig).forEach(([careerKey, career]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "career-card";
    button.innerHTML = `
      <div class="career-icon"><i class="bi ${careerIcons[careerKey] || "bi-mortarboard"}"></i></div>
      <div class="career-info">
        <h3>${escapeHtml(career.name)}</h3>
        <span><i class="bi bi-layers"></i> ${Object.values(career.levels).map(x => x.name).join(" · ")}</span>
      </div>
      <div class="career-arrow"><i class="bi bi-chevron-right"></i></div>
    `;
    button.addEventListener("click", () => selectCareer(careerKey));
    careerGrid.appendChild(button);
  });
}

function selectCareer(careerKey) {
  const career = examConfig[careerKey];
  if (!career) return;

  selectedCareerKey = careerKey;
  selectedLevelKey = null;
  selectedSectionIndex = null;

  careerTitle.innerHTML = `<i class="bi ${careerIcons[careerKey] || "bi-mortarboard"}"></i> ${escapeHtml(career.name)}`;
  breadcrumbCareer.textContent = career.name;
  breadcrumb.classList.add("active");
  breadcrumbLevel.style.display = "none";
  breadcrumbLevelArrow.style.display = "none";
  breadcrumbSection.style.display = "none";
  breadcrumbSectionArrow.style.display = "none";

  renderLevels(career);
  hideSectionAndSubareas();

  careerView.style.display = "none";
  navigationPanel.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLevels(career) {
  levelGrid.innerHTML = "";

  Object.entries(career.levels).forEach(([levelKey, level]) => {
    const meta = levelMeta[levelKey] || { name: level.name, icon: "bi-book" };
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-card";
    button.innerHTML = `
      <i class="bi ${meta.icon}"></i>
      <strong>${escapeHtml(level.name)}</strong>
      <small>${level.sections ? `${level.sections.length} secciones` : `${level.subareas.length} subáreas`}</small>
    `;
    button.addEventListener("click", () => selectLevel(levelKey, button));
    levelGrid.appendChild(button);
  });
}

function selectLevel(levelKey, button) {
  const career = examConfig[selectedCareerKey];
  const level = career?.levels[levelKey];
  if (!level) return;

  selectedLevelKey = levelKey;
  selectedSectionIndex = null;

  document.querySelectorAll(".level-card").forEach(x => x.classList.remove("active"));
  button.classList.add("active");

  selectedLevel.textContent = `Nivel seleccionado: ${level.name}`;
  breadcrumbLevel.textContent = level.name;
  breadcrumbLevel.style.display = "inline";
  breadcrumbLevelArrow.style.display = "inline";
  breadcrumbSection.style.display = "none";
  breadcrumbSectionArrow.style.display = "none";

  subareaPanel.classList.remove("active");

  if (Array.isArray(level.sections) && level.sections.length) {
    renderSections(level.sections);
    sectionPanel.classList.add("active");
  } else {
    sectionPanel.classList.remove("active");
    renderSubareas(level.subareas || []);
    subareaPanel.classList.add("active");
  }

  setTimeout(() => {
    (level.sections ? sectionPanel : subareaPanel).scrollIntoView({ behavior: "smooth", block: "center" });
  }, 80);
}

function renderSections(sections) {
  sectionGrid.innerHTML = "";

  sections.forEach((section, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-card section-card";
    button.innerHTML = `
      <i class="bi bi-people"></i>
      <strong>Sección ${escapeHtml(section.name)}</strong>
      <small>${section.subareas.length} subáreas</small>
    `;
    button.addEventListener("click", () => selectSection(index, button));
    sectionGrid.appendChild(button);
  });
}

function selectSection(sectionIndex, button) {
  const level = examConfig[selectedCareerKey]?.levels[selectedLevelKey];
  const section = level?.sections?.[sectionIndex];
  if (!section) return;

  selectedSectionIndex = sectionIndex;
  document.querySelectorAll(".section-card").forEach(x => x.classList.remove("active"));
  button.classList.add("active");

  selectedSection.textContent = `Sección seleccionada: ${section.name}`;
  breadcrumbSection.textContent = section.name;
  breadcrumbSection.style.display = "inline";
  breadcrumbSectionArrow.style.display = "inline";

  renderSubareas(section.subareas || []);
  subareaPanel.classList.add("active");

  setTimeout(() => subareaPanel.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
}

function renderSubareas(subareas) {
  subareaGrid.innerHTML = "";

  subareas.forEach((subarea, index) => {
    const button = document.createElement("button");
    const configured = typeof subarea.url === "string" && subarea.url.trim().length > 0;

    button.type = "button";
    button.className = `subarea-btn${configured ? "" : " not-configured"}`;
    button.innerHTML = `
      <span class="subarea-icon"><i class="bi ${subarea.icon || "bi-journal-text"}"></i></span>
      <span class="subarea-name">${escapeHtml(subarea.name || `Subárea ${index + 1}`)}</span>
      <span class="subarea-arrow"><i class="bi bi-box-arrow-up-right"></i></span>
    `;
    button.addEventListener("click", () => openExam(subarea.url));
    subareaGrid.appendChild(button);
  });
}

function openExam(url) {
  if (!url || !url.trim()) {
    alert("Esta subárea todavía no tiene una prueba configurada.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function hideSectionAndSubareas() {
  sectionPanel.classList.remove("active");
  subareaPanel.classList.remove("active");
}

function goBackToCareers() {
  selectedCareerKey = null;
  selectedLevelKey = null;
  selectedSectionIndex = null;
  navigationPanel.classList.remove("active");
  hideSectionAndSubareas();
  careerView.style.display = "block";
  breadcrumb.classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

backButton.addEventListener("click", goBackToCareers);

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  const k = e.key.toLowerCase();
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(k)) || (e.ctrlKey && k === "u")) {
    e.preventDefault();
  }
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderCareers();
