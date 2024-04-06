const hora1 = new Date("2024-01-09T00:00:00.616Z");
const hora2 = new Date("2024-01-11T00:00:00.616Z");
console.log(hora1);
console.log(hora2);
console.log(hora1.getTime());
console.log(hora2.getTime());
console.log(Date.now() - hora1.getTime());

console.log("<<<<<<<<<<<<<<<<<<<<<");

console.log(hora1.getFullYear());
console.log(hora1.getDay());
console.log(hora1.getMonth());
console.log(hora1.getDate());

const limiteFecha = new Date();
console.log(limiteFecha);
limiteFecha.setDate(limiteFecha.getDate() - 2);

// console.log(limiteFecha)
// const limiteFecha = new Date();
// console.log(new Date("2024-01-09T00:00:00.616Z"));
// limiteFecha.setDate(limiteFecha.getDate() - 2);
// console.log(limiteFecha);

// const s = "07:05:45PM"
// const fecha = new Date("2000-01-01 " + s.slice(0, s.length-2)+" " +s.slice(s.length - 2, s.length))
// console.log(fecha.toString().slice(16,24))

const array = [
  [
    "Operaciones",
    "En el proceso de cuadratura se identificaron diferencias ",
    "Riesgo Operacional ",
    "Bajo ",
    "Aplicar las medidas correctivas necesarias para ajustar la conciliacion ",
    "31-01-2021",
    "Rodolfo Moya",
    "Operaciones",
    "Rodolfo.Moya_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Operaciones",
    "No existe segregación de funciones",
    "Riesgo Operacional ",
    "Medio",
    "Se regularizará",
    "31-01-2021",
    "Rodolfo Moya",
    "Operaciones",
    "Rodolfo.Moya_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Operaciones",
    "no existe un plan de continuidad",
    "Riesgo Operacional ",
    "Alto",
    "Se regularizará",
    "31-01-2021",
    "Rodolfo Moya",
    "Operaciones",
    "Rodolfo.Moya_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Cuentas por Cobrar",
    "cuentas por cobrar distinta a contabilidad",
    "Riesgo Operacional ",
    "Medio",
    "Se corregirán los análisis de cuenta y se incorporará control de revisión de los analisis",
    "31-01-2021",
    "Francisco Aguilera",
    "Contabilidad",
    "Francisco.Aguilera_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Cuentas por Cobrar",
    "cobranza fuera de horario",
    "Riesgo Legal",
    "Bajo ",
    "Será solucionado con Proyecto de Automatización ",
    "31-01-2021",
    "Francisco Aguilera",
    "Contabilidad",
    "Francisco.Aguilera_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Cuentas por Cobrar",
    "cuentas por cobrar de personas que estan al día",
    "Riesgo Operacional",
    "Alto",
    "Será solucionado con Proyecto de Automatización ",
    "31-01-2021",
    "Francisco Aguilera",
    "Contabilidad",
    "Francisco.Aguilera_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Riesgo",
    "Falta un plan de \tconcienciación\t",
    "Riesgo Tecnológico",
    "Medio",
    "Se implementará un plan de capacitación",
    "31-01-2021",
    "Katherine Vega",
    "Riesgo",
    "Katherine.Vega_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "TI ",
    "no tiene controles suficientes para el acceso a la información ",
    "Riesgo Operacional ",
    "Medio",
    "\n\nSe debe implementarán controles",
    "31-01-2021",
    "Ivania Garafulic",
    "Tecnología",
    "Ivania.Garafulic_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "TI ",
    "Las políticas de seguridad no cubren las amenazas o riesgos inherentes ",
    "Riesgo Tecnológico",
    "Alto",
    "Se redactará un documento y un procedimiento",
    "31-01-2021",
    "Ivania Garafulic",
    "Tecnología",
    "Ivania.Garafulic_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Financiero",
    "La empresa aún realiza el cálculo diario de indicadores en planillas Excel ",
    "Riesgo Operacional ",
    "Medio",
    "Una política de calculo de indices será confeccionada",
    "31-01-2021",
    "Sofía Rauld",
    "Finanzas ",
    "Sofía.Rauld_yyy1234@Hotmail.com",
    "Regularizado",
  ],
  [
    "Contabilidad",
    "Registró un cargo por M$XXX en el rubro Otras cuentas por pagar, en circunstancias que debió registrarse en cuentas por cobrar con partes relacionadas no fiscalizadas. ",
    "Riesgo Operacional ",
    "Alto",
    "La observación fue subsanada ",
    "31-01-2021",
    "Arturo Guzman ",
    "Finanzas ",
    "Arturo.Guzman _yyy1234@Hotmail.com",
    "Regularizado",
  ],
];
