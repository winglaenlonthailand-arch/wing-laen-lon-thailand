export const runners = [
  {
    id: "CNX-50000-R000001",
    name: "Runner Demo 01",

    province: "เชียงใหม่",
    provinceCode: "CNX",
    postcode: "50000",

    level: "Advanced",

    totalDistance: 850,
    eventsJoined: 12,

    memberSince: "2026-07-21",
    status: "ACTIVE",

    nationality: "Thai",
    gender: "Male",
    bloodGroup: "O",

    club: "Chiang Mai Running Club",

    photo: "/images/runners/default.png",
  },

  {
    id: "NAN-55000-R000001",
    name: "Runner Demo 02",

    province: "น่าน",
    provinceCode: "NAN",
    postcode: "55000",

    level: "Intermediate",

    totalDistance: 320,
    eventsJoined: 6,

    memberSince: "2026-07-21",
    status: "ACTIVE",

    nationality: "Thai",
    gender: "Female",
    bloodGroup: "A",

    club: "Nan Running Club",

    photo: "/images/runners/default.png",
  },

  {
    id: "BKK-10200-R000001",
    name: "Runner Demo 03",

    province: "กรุงเทพมหานคร",
    provinceCode: "BKK",
    postcode: "10200",

    level: "Beginner",

    totalDistance: 50,
    eventsJoined: 2,

    memberSince: "2026-07-21",
    status: "ACTIVE",

    nationality: "Thai",
    gender: "Male",
    bloodGroup: "B",

    club: "Bangkok Running Club",

    photo: "/images/runners/default.png",
  },
];

export const events = [
  {
    id: "E001",
    name: "Chiang Mai Marathon",
    province: "เชียงใหม่",
    provinceCode: "CNX",
    date: "2026-11-15",
    distance: "Marathon",
    participants: 5000,
  },

  {
    id: "E002",
    name: "Nan Running Festival",
    province: "น่าน",
    provinceCode: "NAN",
    date: "2026-12-05",
    distance: "Half Marathon",
    participants: 1800,
  },
];

export const provinces = [
  {
    id: "P001",
    code: "CNX",
    name: "เชียงใหม่",
    region: "เหนือ",
    postcode: "50000",
    runnerCount: 1200,
    eventCount: 35,
    communityCount: 18,
  },

  {
    id: "P002",
    code: "NAN",
    name: "น่าน",
    region: "เหนือ",
    postcode: "55000",
    runnerCount: 350,
    eventCount: 12,
    communityCount: 8,
  },

  {
    id: "P003",
    code: "BKK",
    name: "กรุงเทพมหานคร",
    region: "กลาง",
    postcode: "10200",
    runnerCount: 5000,
    eventCount: 120,
    communityCount: 65,
  },
];