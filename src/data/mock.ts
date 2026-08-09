export const runners = [
  {
    id: "CNX-50000-R000001",
    name: "Runner Demo 01",

    province: "เน€เธเธตเธขเธเนเธซเธกเน",
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

    province: "เธเนเธฒเธ",
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

    province: "เธเธฃเธธเธเน€เธ—เธเธกเธซเธฒเธเธเธฃ",
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
    province: "เน€เธเธตเธขเธเนเธซเธกเน",
    provinceCode: "CNX",
    date: "2026-11-15",
    distance: "Marathon",
    participants: 5000,
  },

  {
    id: "E002",
    name: "Nan Running Festival",
    province: "เธเนเธฒเธ",
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
    name: "เน€เธเธตเธขเธเนเธซเธกเน",
    region: "เน€เธซเธเธทเธญ",
    postcode: "50000",
    runnerCount: 1200,
    eventCount: 35,
    communityCount: 18,
  },

  {
    id: "P002",
    code: "NAN",
    name: "เธเนเธฒเธ",
    region: "เน€เธซเธเธทเธญ",
    postcode: "55000",
    runnerCount: 350,
    eventCount: 12,
    communityCount: 8,
  },

  {
    id: "P003",
    code: "BKK",
    name: "เธเธฃเธธเธเน€เธ—เธเธกเธซเธฒเธเธเธฃ",
    region: "เธเธฅเธฒเธ",
    postcode: "10200",
    runnerCount: 5000,
    eventCount: 120,
    communityCount: 65,
  },
];
