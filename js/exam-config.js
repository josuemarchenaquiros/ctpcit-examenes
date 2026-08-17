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
          { name: "TICs", icon: "bi-pc-display", url: "" },
          { name: "Instalaciones eléctricas", icon: "bi-lightning-charge", url: "" },
          { name: "Semiconductores", icon: "bi-cpu", url: "" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Electrónica Analógica", icon: "bi-broadcast-pin", url: "" },
          { name: "Automatismo Industrial", icon: "bi-gear-wide-connected", url: "" },
          { name: "Electrónica Digital", icon: "bi-motherboard", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
          { name: "Programación", icon: "bi-code-slash", url: "" },
          { name: "Introducción a la inteligencia artificial y redes de dispositivos", icon: "bi-robot", url: "" },
          { name: "Bases de Datos", icon: "bi-database", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
          { name: "Compras", icon: "bi-cart-check", url: "" },
          { name: "Importaciones y Exportaciones", icon: "bi-globe2", url: "" },
          { name: "Logística", icon: "bi-truck", url: "" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Logística", icon: "bi-truck", url: "" },
          { name: "Administración de Inventarios", icon: "bi-box-seam", url: "" },
          { name: "Operaciones de manufactura", icon: "bi-buildings", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
          { name: "Control y garantía de calidad", icon: "bi-check2-circle", url: "" },
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "" },
          { name: "Diagnóstico industrial", icon: "bi-clipboard-data", url: "" }
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
              { name: "TICs", icon: "bi-pc-display", url: "" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "" }
            ]
          },
          {
            name: "10-B",
            subareas: [
              { name: "TICs", icon: "bi-pc-display", url: "" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "" }
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
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
            ]
          },
          {
            name: "11-C",
            subareas: [
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
          { name: "Programación", icon: "bi-code-slash", url: "" },
          { name: "Técnicas para diseño publicitario", icon: "bi-megaphone", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
          { name: "Desarrollo de aplicaciones móviles y bases de datos", icon: "bi-phone", url: "" },
          { name: "Soporte y seguridad de aplicaciones móviles", icon: "bi-shield-check", url: "" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "" }
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
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "" },
              { name: "TICs", icon: "bi-pc-display", url: "" }
            ]
          },
          {
            name: "10-D",
            subareas: [
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "" },
              { name: "TICs", icon: "bi-pc-display", url: "" }
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
