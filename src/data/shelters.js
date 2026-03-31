export const shelterData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point", coordinates: [31.447778, 30.033841 ] },
      properties: {
        id: 1,
        name: "ملجأ مدينة القاهرة الجديدة",
        address: "Salah eldin international school",
        capacity: 12000,
        current_occupancy: 87,
        electricity_quality: "Excellent",
        gas_quality: "Good",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.3322, 48.8703] },
      properties: {
        id: 2,
        name: "Abri du Parc des Batignolles",
        address: "8 Rue Cardinet, 75017 Paris",
        capacity: 2200,
        current_occupancy: 178,
        electricity_quality: "Acceptable",
        gas_quality: "Poor",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.3611, 48.8440] },
      properties: {
        id: 3,
        name: "Salle Polyvalente Nation",
        address: "5 Avenue du Trône, 75012 Paris",
        capacity: 500,
        current_occupancy: 214,
        electricity_quality: "Good",
        gas_quality: "Excellent",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.3102, 48.8425] },
      properties: {
        id: 4,
        name: "Gymnase Vaugirard Emergency",
        address: "15 Boulevard Vaugirard, 75015 Paris",
        capacity: 280,
        current_occupancy: 280,
        electricity_quality: "Poor",
        gas_quality: "Acceptable",
      },
    },
  ],
};
