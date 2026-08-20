

const examConfig = {
  electronica: {
    name: "Electrónica Industrial",
    levels: {
      decimo: {
        name: "Décimo",
        subareas: [
          { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/uEnnKX1Pwt?origin=lprLink" },
          { name: "Instalaciones eléctricas", icon: "bi-lightning-charge", url: "https://forms.cloud.microsoft/r/H0Twx2f6J8?origin=lprLink" },
          { name: "Semiconductores", icon: "bi-cpu", url: "https://forms.cloud.microsoft/r/RgLE8JkZac?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Electrónica Analógica", icon: "bi-broadcast-pin", url: "https://forms.cloud.microsoft/r/fAvdzRFqaT?origin=lprLink" },
          { name: "Automatismo Industrial", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/aKhALFCpiv?origin=lprLink" },
          { name: "Electrónica Digital", icon: "bi-motherboard", url: "https://forms.cloud.microsoft/r/12gD3W4vc5?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/ZtkYbYhKny?origin=lprLink" }
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
          { name: "Programación", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/BXyvyeM63d?origin=lprLink" },
          { name: "Introducción a la inteligencia artificial y redes de dispositivos", icon: "bi-robot", url: "https://forms.cloud.microsoft/r/xKqT3CidXT?origin=lprLink" },
          { name: "Bases de Datos", icon: "bi-database", url: "https://forms.cloud.microsoft/r/HjB2tWZXa9" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/HGex70yu04" }
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
          { name: "Compras", icon: "bi-cart-check", url: "https://forms.cloud.microsoft/r/esazXHGCBa?origin=lprLink" },
          { name: "Importaciones y Exportaciones", icon: "bi-globe2", url: "https://forms.cloud.microsoft/r/uQFXeEEQ54?origin=lprLink" },
          { name: "Logística", icon: "bi-truck", url: "https://forms.cloud.microsoft/r/cPGxy0wMPS?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Logística", icon: "bi-truck", url: "https://forms.cloud.microsoft/r/QnBabUpntK?origin=lprLink" },
          { name: "Administración de Inventarios", icon: "bi-box-seam", url: "https://forms.cloud.microsoft/r/30RL58vu7f?origin=lprLink" },
          { name: "Operaciones de manufactura", icon: "bi-buildings", url: "https://forms.cloud.microsoft/r/NvMkMyBwHP?origin=lprLink" },
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
          { name: "Control y garantía de calidad", icon: "bi-check2-circle", url: "https://forms.cloud.microsoft/r/7HmzNMtWmk?origin=lprLink" },
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/8N0AP0mjXq?origin=lprLink" }
        ]
      },
      undecimo: {
        name: "Undécimo",
        subareas: [
          { name: "Sistemas modernos de manufactura, control y calidad", icon: "bi-gear-wide-connected", url: "https://forms.cloud.microsoft/r/VEM20Xu2TT?origin=lprLink" },
          { name: "Diagnóstico industrial", icon: "bi-clipboard-data", url: "https://forms.cloud.microsoft/r/viSiw6wc0x?origin=lprLink" }
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
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/a70FSd3SST" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/uMspGNt1MD?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/wgueeMKM1C?origin=lprLink" }
            ]
          },
          {
            name: "10-B",
            subareas: [
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/yk2HWRuJg9?origin=lprLink" },
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/uMspGNt1MD?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/wgueeMKM1C?origin=lprLink" }
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
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/CDt0G9P176?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/bynbTL2hZa?origin=lprLink" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/FBCf9yXhKp?origin=lprLink" }
            ]
          },
          {
            name: "11-C",
            subareas: [
              { name: "Programación y prueba de la seguridad del software", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/EfLeW87TE3?origin=lprLink" },
              { name: "Operaciones ciberseguras", icon: "bi-shield-lock", url: "https://forms.cloud.microsoft/r/5nwRCmsuAr?origin=lprLink" },
              { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/6hjETAaH9v?origin=lprLink" }
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
          { name: "Programación", icon: "bi-code-slash", url: "https://forms.cloud.microsoft/r/3xcXuQPRg7?origin=lprLink" },
          { name: "Técnicas para diseño publicitario", icon: "bi-megaphone", url: "https://forms.cloud.microsoft/r/bezXH14TL7?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/4xVuC4mi9E?origin=lprLink" }
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
          { name: "Desarrollo de aplicaciones móviles y bases de datos", icon: "bi-phone", url: "https://forms.cloud.microsoft/r/cT3G4mkXzd?origin=lprLink" },
          { name: "Soporte y seguridad de aplicaciones móviles", icon: "bi-shield-check", url: "https://forms.cloud.microsoft/r/DTY7Zz5VeU?origin=lprLink" },
          { name: "Emprendimiento", icon: "bi-lightbulb", url: "https://forms.cloud.microsoft/r/Yf8HmQwGbw?origin=lprLink" }
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
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "https://forms.cloud.microsoft/r/LJdrJvnzNd?origin=lprLink" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "https://forms.cloud.microsoft/r/vKK78pSMp1?origin=lprLink" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "https://forms.cloud.microsoft/r/mNsvVNKLt2?origin=lprLink" },
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/3Wj3yw8Yqk" }
            ]
          },
          {
            name: "10-D",
            subareas: [
              { name: "Principios y técnicas de diseño gráfico", icon: "bi-brush", url: "https://forms.cloud.microsoft/r/gTzP7M4tMu?origin=lprLink" },
              { name: "Diseño gráfico digital", icon: "bi-vector-pen", url: "https://forms.cloud.microsoft/r/SK4g1f50aV?origin=lprLink" },
              { name: "Diseño de la Imagen", icon: "bi-image", url: "https://forms.cloud.microsoft/r/UmmDSjkR0p?origin=lprLink" },
              { name: "TICs", icon: "bi-pc-display", url: "https://forms.cloud.microsoft/r/3Wj3yw8Yqk" }
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
