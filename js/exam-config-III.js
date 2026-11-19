/*
 * ================================================================
 * CIT - CONFIGURACIÓN DE PRUEBAS SUMATIVAS
 * ================================================================
 *
 * Aquí se administran nombres, secciones y URLs de las pruebas.
 *
 * Cada URL se deja vacía para que pueda ser configurada.
 *
 * Para carreras con una sola sección, el nivel contiene directamente
 * el arreglo "subareas".
 *
 * Para carreras/niveles con varias secciones, el nivel contiene
 * "sections" y cada sección tiene su propio arreglo de subareas.
 *
 * IMPORTANTE: un archivo JavaScript del lado del cliente NO puede
 * ocultar realmente las URLs. Para seguridad real se necesita backend.
 * ================================================================
 */

const examConfig = {
  electronica: {
    name: "Electrónica Industrial",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/QMvmLwFpJF?origin=lprLink" },
          { name: "Instalaciones eléctricas", icon: "bi-lightning-charge", url: "https://forms.cloud.microsoft/r/VNy2a84G1E?origin=lprLink" },
          { name: "Semiconductores", icon: "bi-cpu", url: "https://forms.cloud.microsoft/r/Bf4yMtWHHR?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Electrónica Analógica", icon: "bi-broadcast-pin", url: "https://forms.cloud.microsoft/r/R2qWSSTDwR?origin=lprLink" },
          { name: "Automatismo Industrial", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/s2UCNzhbNt?origin=lprLink" },
          { name: "Electrónica Digital", icon: "bi-motherboard", url: "https://forms.cloud.microsoft/r/9xdKZd0mzr?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/aZFSHGbrDY?origin=lprLink" }
        ]
      }
    }
  },

  ia: {
    name: "Inteligencia Artificial",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "TICs", icon: "bi-pc-display", url: "" },
          { name: "Fundamentos matemáticos para inteligencia artificial", icon: "bi-calculator", url: "" },
          { name: "Introducción a la inteligencia artificial y redes de dispositivos", icon: "bi-robot", url: "" },
          { name: "Programación", icon: "bi-code-slash", url: "" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Programación", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/NzhE8tmpeW?origin=lprLink" },
          { name: "Introducción a la inteligencia artificial y redes de dispositivos", icon: "bi-robot", url: "https://forms.cloud.microsoft/r/YFQSguRiVC?origin=lprLink" },
          { name: "Bases de Datos", icon: "bi-database", url: "https://forms.cloud.microsoft/r/jp4XYUL0Xu?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/hnUQESZ9Av?origin=lprLink" }
        ]
      }
    }
  },

  logistica: {
    name: "Administración, Logística y Distribución",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "Compras", icon: "bi-cart-check", url: "https://forms.cloud.microsoft/r/N2yK46nmKZ?origin=lprLink" },
          { name: "Importaciones y Exportaciones", icon: "bi-globe2", url: "https://forms.cloud.microsoft/r/Ym8RRQw0yT?origin=lprLink" },
          { name: "Logística", icon: "bi-truck", url: "https://forms.cloud.microsoft/r/Ym8RRQw0yT?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Logística", icon: "bi-truck", url: "https://forms.cloud.microsoft/r/c9twwq0Wk2?origin=lprLink" },
          { name: "Administración de Inventarios", icon: "bi-box-seam", url: "https://forms.cloud.microsoft/r/YLkVrau56Z?origin=lprLink" },
          { name: "Operaciones de manufactura", icon: "bi-buildings", url: "https://forms.cloud.microsoft/r/CUKUY9inY8?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/dZq36wDzqS?origin=lprLink" }
        ]
      }
    }
  },

  calidad: {
    name: "Gestión de Calidad",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "Control y garantía de calidad", icon: "bi-check2-circle", url: "https://forms.cloud.microsoft/r/GZKczyPjB0?origin=lprLink" },
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/fM9t9idP4r?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/HhJrTdSaeA?origin=lprLink" },
          { name: "Diagnóstico industrial", icon: "bi-clipboard-data", url: "https://forms.cloud.microsoft/r/zRGymsqHje?origin=lprLink" }
        ]
      }
    }
  },

  ciberseguridad: {
    name: "Ciberseguridad",
    levels: {
      decimo: {
        name: "Décimo",
        sections: [
          {
            name: "10-A",
            subareas: [
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/7w8if68HZN?origin=lprLink" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/BRZkUGvVF9?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/a4X3ZrvsC6?origin=lprLink" }
            ]
          },
          {
            name: "10-B",
            subareas: [
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/vsu29Pn5dT?origin=lprLink" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/BRZkUGvVF9?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/a4X3ZrvsC6?origin=lprLink" }
            ]
          }
        ]
      },
      undecimo: {
        name: "Undécimo",
        sections: [
          {
            name: "11-A",
            subareas: [
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/zzhr7vWSmh?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/dPjaSFiSNr?origin=lprLink" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/62KVzz9PGX?origin=lprLink" }
            ]
          },
          {
            name: "11-C",
            subareas: [
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/mpqWVrBuqW?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/WnXZy7HEbN?origin=lprLink" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/dZq36wDzqS?origin=lprLink" }
            ]
          }
        ]
      }
    }
  },

  disenoDigital: {
    name: "Diseño y Desarrollo Digital",
    levels: {
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Programación", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/ARWHZsvAF0?origin=lprLink" },
          { name: "Técnicas para diseño publicitario", icon: "bi-megaphone", url: "https://forms.cloud.microsoft/r/bezXH14TL7?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/2xGVxrTGcd?origin=lprLink" }
        ]
      }
    }
  },

  movil: {
    name: "Desarrollo de Aplicaciones Móviles",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "TICs", icon: "bi-pc-display", url: "" },
          { name: "Desarrollo de aplicaciones móviles y bases de datos", icon: "bi-phone", url: "" },
          { name: "Soporte y seguridad de aplicaciones móviles", icon: "bi-shield-check", url: "" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Desarrollo de aplicaciones móviles y bases de datos", icon: "bi-phone", url: "https://forms.cloud.microsoft/r/ewwN0VAYC1?origin=lprLink" },
          { name: "Soporte y seguridad de aplicaciones móviles", icon: "bi-shield-check", url: "https://forms.cloud.microsoft/r/ZPyutxgvDs?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/vvH1YCRJ6B?origin=lprLink" }
        ]
      }
    }
  },

  disenoGrafico: {
    name: "Diseño Gráfico y Multimedia",
    levels: {
      decimo: {
        name: "Décimo",
        sections: [
          {
            name: "10-C",
            subareas: [
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "https://forms.cloud.microsoft/r/csE8CfjcqF?origin=lprLink" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "https://forms.cloud.microsoft/r/DaHyfcynkW?origin=lprLink" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "https://forms.cloud.microsoft/r/aUbhZJNe8a?origin=lprLink" },
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/7w8if68HZN?origin=lprLink" }
            ]
          },
          {
            name: "10-D",
            subareas: [
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "https://forms.cloud.microsoft/r/6ySGvwsM7R?origin=lprLink" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "https://forms.cloud.microsoft/r/YypSSUD1fq?origin=lprLink" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "https://forms.cloud.microsoft/r/ePuN48FLtq?origin=lprLink" },
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/7w8if68HZN?origin=lprLink" }
            ]
          }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "" },
          { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" },
          { name: "Multimedia e Impresión para diseño", icon: "bi-printer", url: "" }
        ]
      }
    }
  }
};
