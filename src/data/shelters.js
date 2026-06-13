import { geometry } from "@turf/turf";


export const shelterData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.5722007751465 ,29.993200302124] },
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
      geometry: { type: "Point", coordinates: [31.4866008758545,29.9918994903564] },
      properties: {
        id : 2,
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
        type: "Point", coordinates: [31.6100006103516, 30.0405006408691]
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
        type: "Point", coordinates: [31.8575992584229, 29.9895000457764]
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
      geometry: { type: "Point", coordinates: [31.8066997528076, 29.9855003356934 ] },
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
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.5941009521484,29.9827003479004] },
      properties: {
        id:6 ,
        name: "2",
        address: "sa",
        capacity: 900 ,
        current_occupancy: 100,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.7688999176025,29.9747009277344] },
      properties: {
        id: 7,
        name: "2s",
        address: "s",
        capacity: 1029,
        current_occupancy:213,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.6406993865967,29.9782009124756] },
      properties: {
        id: 8,
        name: "ss",
        address: "44",
        capacity:2031 ,
        current_occupancy:400,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,{
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.4202995300293,29.951000213623] },
      properties: {
        id: 9,
        name: "sxa",
        address: "asf",
        capacity: 2901 ,
        current_occupancy: 203,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.4050998687744,29.9372997283936] },
      properties: {
        id: 10,
        name: "ga",
        address: "adfs",
        capacity: 3013,
        current_occupancy:910,
        electricity_quality:"",
        gas_quality:"",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.618999481,	29.935499191] },
      properties: {
        id: 11,
        name: "dj",
        address: "5x",
        capacity: 912,
        current_occupancy:213,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,{
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.547100067,29.938400269] },
      properties: {
        id: 12,
        name: "sdac",
        address: "hjsj",
        capacity: 1903,
        current_occupancy:230,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.593500137	,29.916400909
] },
      properties: {
        id: 13,
        name: "shyt",
        address: "ys",
        capacity: 9221,
        current_occupancy:2021,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.716999054	,29.906700134
] },
      properties: {
        id:14 ,
        name: "hgs",
        address: "ryf",
        capacity:3021 ,
        current_occupancy:2331,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.532899857 ,	29.905399323
] },
      properties: {
        id: 15,
        name: "fgh",
        address: "agff",
        capacity:9102 ,
        current_occupancy:1021,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.759300232	,29.904899597
] },
      properties: {
        id: 16,
        name: "jsh",
        address: "gsh",
        capacity:9102 ,
        current_occupancy:3121,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.388700485	,29.921800613
] },
      properties: {
        id:17 ,
        name: "jsy",
        address: "ghh",
        capacity: 4120,
        current_occupancy:1223,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.821100235	,29.890800476
] },
      properties: {
        id:18 ,
        name: "",
        address: "",
        capacity: 8182,
        current_occupancy:1234,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.651899338 ,	29.896600723
] },
      properties: {
        id:19 ,
        name: "",
        address: "",
        capacity: 7293,
        current_occupancy:1023,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.519100189	,29.879600525
] },
      properties: {
        id:20 ,
        name: "",
        address: "",
        capacity: 7281,
        current_occupancy:5023,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.539899826	,29.877700806
] },
      properties: {
        id: 21,
        name: "",
        address: "",
        capacity: 7261,
        current_occupancy:513,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.415100098	,29.896400452
] },
      properties: {
        id: 22,
        name: "",
        address: "",
        capacity: 4012,
        current_occupancy:2334,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.537700653	,29.893100739
] },
      properties: {
        id:23 ,
        name: "",
        address: "",
        capacity:9201 ,
        current_occupancy:2921,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.374900818 ,	29.872900009
] },
      properties: {
        id: 24,
        name: "",
        address: "",
        capacity:2134 ,
        current_occupancy:882,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.644199371,	29.876399994
] },
      properties: {
        id: 25,
        name: "",
        address: "",
        capacity:6281 ,
        current_occupancy:3374,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.392599106,	29.865800858
] },
      properties: {
        id:26 ,
        name: "",
        address: "",
        capacity:8267 ,
        current_occupancy:7812,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.485700607,29.871099472
] },
      properties: {
        id: 27 ,
        name: "",
        address: "",
        capacity: 7833,
        current_occupancy:2034,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.451200485,	29.850900650
] },
      properties: {
        id: 28,
        name: "",
        address: "",
        capacity:21314 ,
        current_occupancy:2190,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.408000946,	29.845600128
] },
      properties: {
        id: 29,
        name: "",
        address: "",
        capacity:9182 ,
        current_occupancy:441,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.479200363,	29.825599670
] },
      properties: {
        id: 30,
        name: "",
        address: "",
        capacity:9173 ,
        current_occupancy:918,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.541500092,	29.829200745
] },
      properties: {
        id: 31,
        name: "",
        address: "",
        capacity:9104 ,
        current_occupancy:514,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.604299545 ,	29.812500000
] },
      properties: {
        id: 32,
        name: "",
        address: "",
        capacity:9310 ,
        current_occupancy:655,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.560699463,	29.811000824
] },
      properties: {
        id:33 ,
        name: "",
        address: "",
        capacity:8972 ,
        current_occupancy:4423,
        electricity_quality: "Excellent",
        gas_quality: "Poor",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.439300537,	29.816400528
] },
      properties: {
        id:34 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
    }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.584299088,	29.797800064
] },
      properties: {
        id: 35 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.492300034,	29.795900345
] },
      properties: {
        id:36 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.823799133,	29.799200058
] },
      properties: {
        id:37 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.669599533,29.792200089
] },
      properties: {
        id:38 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.773399353,	29.801500320
] },
      properties: {
        id: 39,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.561700821,	29.786800385
] },
      properties: {
        id: 40,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.283899307,	30.022399902
] },
      properties: {
        id:41 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.308599472,	30.002799988
] },
      properties: {
        id:42 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.327100754,	30.034299850
] },
      properties: {
        id:43 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.378900528,	30.011299133
] },
      properties: {
        id: 44,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.407199860,	30.044099808
] },
      properties: {
        id:45 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Acceptable",
        gas_quality:"Acceptable",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.389900208,	30.044099808
] },
      properties: {
        id:46 ,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.733600616,	30.119499207
] },
      properties: {
        id: 47,
        name: "",
        address: "",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"",
        gas_quality:"",
      }
     }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.697299957, 30.068300247] },
      properties: {
        id: 48,
        name: "",
        address: "",
        capacity: 2341,
        current_occupancy: 992,
        electricity_quality:"",
        gas_quality:"",
        
      }
     }
     
  ]
};
