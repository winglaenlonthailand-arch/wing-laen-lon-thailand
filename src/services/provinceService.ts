// FILE: src/services/provinceService.ts

import { provinces } from "@/data/provinces";
import { runnerProfiles } from "@/data/runnerProfiles";

export function getAllProvinces() {
  return provinces;
}

export function getProvinceBySlug(slug: string) {
  return provinces.find((province) => province.slug === slug);
}

export function getProvinceRunnerCount(slug: string) {
  return runnerProfiles.filter(
    (runner) =>
      runner.province.toLowerCase().replace(/\s+/g, "-") === slug
  ).length;
}

export function getProvinceRunners(slug: string) {
  return runnerProfiles.filter(
    (runner) =>
      runner.province.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function getProvinceTotalDistance(slug: string) {
  const runners = getProvinceRunners(slug);

  return runners.reduce(
    (total, runner) => total + runner.totalDistance,
    0
  );
}

export function getProvinceStatistics(slug: string) {
  return {
    province: getProvinceBySlug(slug),
    runnerCount: getProvinceRunnerCount(slug),
    totalDistance: getProvinceTotalDistance(slug),
    runners: getProvinceRunners(slug),
  };
}