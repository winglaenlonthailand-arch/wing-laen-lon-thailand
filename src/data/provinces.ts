// FILE: src/data/provinces.ts

export interface ProvinceMember {
  id: string;
  passportId: string;
  runnerName: string;
  profileImage?: string;
}

export interface Province {
  id: string;
  slug: string;
  name: string;
  region: string;

  runnerCount: number;
  eventCount: number;
  totalDistance: number;

  coverImage?: string;

  members: ProvinceMember[];
}

export const provinces: Province[] = [

  {
    id: "001",
    slug: "nan",
    name: "น่าน",
    region: "ภาคเหนือ",

    runnerCount: 0,
    eventCount: 0,
    totalDistance: 0,

    coverImage: "/images/provinces/nan.jpg",

    members: [],
  },

  {
    id: "002",
    slug: "chiang-mai",
    name: "เชียงใหม่",
    region: "ภาคเหนือ",

    runnerCount: 0,
    eventCount: 0,
    totalDistance: 0,

    coverImage: "/images/provinces/chiang-mai.jpg",

    members: [],
  },

  {
    id: "003",
    slug: "bangkok",
    name: "กรุงเทพมหานคร",
    region: "ภาคกลาง",

    runnerCount: 0,
    eventCount: 0,
    totalDistance: 0,

    coverImage: "/images/provinces/bangkok.jpg",

    members: [],
  },

];

export function getProvinceBySlug(slug: string) {
  return provinces.find((province) => province.slug === slug);
}

export function getProvinceById(id: string) {
  return provinces.find((province) => province.id === id);
}

export function getProvinceCount() {
  return provinces.length;
}

export function getTotalRunnerCount() {
  return provinces.reduce(
    (total, province) => total + province.runnerCount,
    0
  );
}

export function getTotalEventCount() {
  return provinces.reduce(
    (total, province) => total + province.eventCount,
    0
  );
}