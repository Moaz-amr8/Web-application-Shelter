import { geometry } from "@turf/turf";

export const shelterData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.330080, 30.064153] },
      properties: {
        id: 1,
        name: "ملجأ مدينة نصر",
        address: "الحي سابع مدينة نصر",
        capacity: 350,
        current_occupancy: 87,
        electricity_quality: "Excellent",
        gas_quality: "Good",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.316900, 30.096606] },
      properties: {
        id: 2,
        name: "Heliopolis",
        address: "حديقة الميرلاند",
        capacity: 9000,
        current_occupancy: 1030,
        electricity_quality: "bad",
        gas_quality: "Poor",
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point", coordinates: [31.4756824, 30.0652614]
      },
      properties: {
        id: 3,
        name: "محطة وقود موبيل الرحاب",
        address: "Mobil Gas Station (Rehab)",
        capacity: 200,
        current_occupancy: 10,
        electricity_quality: "bad",
        gas_quality: "Good",
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point", coordinates: [31.3379356,
          30.0542247]
      },
      properties: {
        id: 4,
        name: "Caltex",
        address: "شارع عباس العقاد",
        capacity: 10,
        current_occupancy: 0,
        electricity_quality: "Excellent",//bad Good Excellent
        gas_quality: "Acceptable",
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.278829, 30.065868 ] },
      properties: {
        id: 5,
        name: "ملجأ fionaر",
        address: "ر",
        capacity: 35,
        current_occupancy: 30,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
  ]
};
