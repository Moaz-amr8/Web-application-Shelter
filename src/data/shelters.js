import { geometry } from "@turf/turf";


export const shelterData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.5722007751465 ,29.993200302124] },
      properties: {
        id: 1,
        name: "ملجأ الدائري الأوسط",
        address: "بجوار لافيستا سيتي",
        capacity: 450,
        current_occupancy: 350,
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
        name: "ملجأ احياءابو الهول",
        address: "علي طريق محور محمد نجيب",
        capacity: 9000,
        current_occupancy: 9000,
        electricity_quality: "Good",
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
        name: "ملجأ العاصمة الأدارية",
        address: "بجوار الطريق الدائري الأوسطي",
        capacity: 200,
        current_occupancy: 10,
        electricity_quality: "Excellent",
        gas_quality: "Excellent",
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point", coordinates: [31.8575992584229, 29.9895000457764]
      },
      properties: {
        id: 4,
        name: "ملجأ مطار العاصمة 1",
        address: "بجنوب مطار العاصمة",
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
        name: "ملجأ العاصمة 2",
        address: "علي محور الشيخ محمد بن زايد الجنوبي",
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
        name: "ملجأ لافيستا سيتي 2",
        address: "بجوار استاد الكلية الحربية بالكيان العسكري",
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
        name: "ملجأ العاصمة الأدارية 3",
        address: "علي محور الشيخ محمد بن زايد الجنوبي",
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
        name: " ملجأ جاردن سيتي",
        address: "بجوار جامعة هيرتفوردشاير الإنجليزية-العاصمة الإدارية ",
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
        name: "ملجأ التجمع الثالث",
        address: "علي طريق القطامبة ,العين السخنة",
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
        name: "ملجأ التجمع الثالث 2",
        address: "علي طريق الدائري الأوسطي",
        capacity: 3013,
        current_occupancy:910,
        electricity_quality:"Good",
        gas_quality:"Acceptable",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.618999481,	29.935499191] },
      properties: {
        id: 11,
        name: "ملجأ العاصمة 3",
        address: "بجوار كمبوند الؤلؤة",
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
        name: "ملجأ شرق ال waterway",
        address: "علي طريق الدائري الأوسطي",
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
        name: "ملجأ NASPS",
        address: "علي طريق المحاجر",
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
        name: "ملجأ ملعب العاصمة الأدارية",
        address: "بجوار محطة العاصمة الأدارية",
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
        name: "ملجأ المحاجر 1",
        address: "علي الطريق الدائري الأوسطي",
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
        name: "ملجأ سولي جولف ريزيدنس",
        address: "علي طريق العين السخنة",
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
        name: "ملجأ شق التعبان",
        address: "علي الطريق الدائري الأوسطي",
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
        name: "ملجأ جنوب العاصمة الأدارية",
        address: "علي طريق العين السخنة, القطامية",
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
        name: "ملجأ طريق حلوان عتاقة",
        address: "علي طريق حلوان",
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
        name: "ملجأ طريق المحاجر 2",
        address: "بجوار التجمع السادس",
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
        name: "ملجأ طريق المحاجر 3",
        address: "بجوار التجمع السادس",
        capacity: 7261,
        current_occupancy:513,
        electricity_quality: "Excellent",
        gas_quality: "Acceptable",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.415100098	,29.896400452
] },
      properties: {
        id: 22,
        name: "ملجأ شياخة مايو",
        address: "علي محور طلعت حرب",
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
        name: "ملجأ طريق المحاجر 4",
        address: "بجوار التجمع السادس",
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
        name: "ملجأ حلوان",
        address: "علي شارع النقل احمد عبدالعزيز",
        capacity:2134 ,
        current_occupancy:882,
        electricity_quality: "Excellent",
        gas_quality: "Good",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.644199371,	29.876399994
] },
      properties: {
        id: 25,
        name: "ملجأ الدائري الأقليمي",
        address: "علي الطريق الدائري الأقليمي",
        capacity:6281 ,
        current_occupancy:3374,
        electricity_quality: "Acceptable",
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
        name: "ملجأ مايو 15",
        address: "علي طريق الاوتوستراد",
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
        name: "ملجأ المطاريد",
        address: "جنوب طريق حلوان عتاقة",
        capacity: 7833,
        current_occupancy:2034,
        electricity_quality: "Excellent",
        gas_quality: "Excellent",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.451200485,	29.850900650
] },
      properties: {
        id: 28,
        name: "ملجأ مايو شياخة 3",
        address: "شرق شياخة مايو 3 علي طريق الاوتوستراد",
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
        name: "ملجأ مايو شياخة 1",
        address: "شرق مدينة مايو شياخة 1",
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
        name: "ملجأ الدائري الأقليمي",
        address: "جنوب الطريق الدائري الأقليمي",
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
        name: "ملجأ الطريق الدائري الأقليمي 2",
        address: "جنوب الطريق الدائري الأقليمي",
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
        name: "ملجأ الطريق الدائري الأقليمي 3",
        address: "جنوب الطريق الدائري الأقليمي",
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
        name: "ملجأ روما",
        address: "جنوب الطريق الدائري الأقليمي",
        capacity:8972 ,
        current_occupancy:4423,
        electricity_quality: "Excellent",
        gas_quality: "Good",
      }
    }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.439300537,	29.816400528
] },
      properties: {
        id:34 ,
        name: "ملجأ شعبي مايو",
        address: "شرق مايو شياخة 3",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Poor",
        gas_quality:"Poor",
      }
    }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.584299088,	29.797800064
] },
      properties: {
        id: 35 ,
        name: "ملجأ الدائري الأقليمي 4",
        address: "جنوب طريق الدائري الأقليمي",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Good",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.492300034,	29.795900345
] },
      properties: {
        id:36 ,
        name: "ملجأ كوم امبو",
        address: "جنوب الطريق الدائري الأقليمي",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Poor",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.823799133,	29.799200058
] },
      properties: {
        id:37 ,
        name: "ملجأ عتاقة",
        address: "غرب طريق حلوان عتاقة",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Acceptable",
        gas_quality:"Excellent",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.669599533,29.792200089
] },
      properties: {
        id:38 ,
        name: "ملجأ الأفراد",
        address: "جنوب الطريق الدائري الأقليمي",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Poor",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.773399353,	29.801500320
] },
      properties: {
        id: 39,
        name: "ملجأ العين السخنة",
        address: "بين طريق العين السخنة والطريق الدائري الأقليمي",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Poor",
        gas_quality:"Poor",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.561700821,	29.786800385
] },
      properties: {
        id: 40,
        name: "ملجأ اول دائري اقليمي",
        address: "في جنوب الدائري الأقليمي",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Good",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.283899307,	30.022399902
] },
      properties: {
        id:41 ,
        name: "ملجأ منشأة ناصر",
        address: "في شارع 33 متفرع من شارع المقطم وشارع مسجد ال احمد",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Acceptable",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.308599472,	30.002799988
] },
      properties: {
        id:42 ,
        name: "ملجأ الأباجية",
        address: "في شارع الزهور من شارع الأهرام",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Good",
        gas_quality:"Acceptable",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.327100754,	30.034299850
] },
      properties: {
        id:43 ,
        name: "ملجأ مدينة نصر",
        address: "علي محور الشهيد امام نادي السكة الحديد",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Good",
        gas_quality:"Excellent",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.378900528,	30.011299133
] },
      properties: {
        id: 44,
        name: "ملجأ المشير طنطاوي",
        address: "علي محور المشير طنطاوي طريق المدرعات",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Good",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.407199860,	30.044099808
] },
      properties: {
        id:45 ,
        name: "ملجأ اكاديمية الشرطة ",
        address: "غرب الأكاديمية علي الطريق الدائري",
        capacity: 8214,
        current_occupancy:8213,
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
        name: "ملجأ الحي العاشر",
        address: "في شارع عمر ابن الخطاب متفرع من شارع الميثاق",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Excellent",
        gas_quality:"Good",
      }
     }
    ,
     {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.733600616,	30.119499207
] },
      properties: {
        id: 47,
        name: "ملجأ مدينة ميت حلفا",
        address: "شرق الحي المتميز في شارع مدينة الشروق",
        capacity: 8213,
        current_occupancy:2345,
        electricity_quality:"Poor",
        gas_quality:"Good",
      }
     }
    ,
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.697299957, 30.068300247] },
      properties: {
        id: 48,
        name: "ملجأ المستقبل",
        address: "علي طريق المستقبل وجنوب طريق القاهرة السويس",
        capacity: 2341,
        current_occupancy: 992,
        electricity_quality:"Excellent",
        gas_quality:"Good",
        
      }
     }
     
  ]
};
