"use client";

import { ChangeEvent, useState } from "react";

type Runner = {
  id: string;
  name: string;
  province: string;
  provinceCode?: string;
  postcode?: string;
  level: string;
  totalDistance: number;
  eventsJoined: number;
};

type PassportCardProps = {
  runner: Runner;
};

export default function PassportCard({
  runner,
}: PassportCardProps) {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(
    null
  );

  const handlePhotoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfilePhoto(imageUrl);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">
        <div className="bg-blue-700 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">
            WING LAEN LON THAILAND
          </h1>

          <p className="mt-2 text-blue-100">
            National Runner Passport
          </p>
        </div>

        <div className="grid gap-10 p-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <label
              htmlFor="profile-photo"
              className="group relative flex h-40 w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 text-6xl"
            >
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>🏃</span>
              )}

              <span className="absolute inset-0 flex items-end justify-center bg-black/0 pb-4 text-sm font-semibold text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                เปลี่ยนรูป
              </span>
            </label>

            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />

            <p className="mt-4 text-gray-500">
              Profile Photo
            </p>

            <p className="mt-1 text-xs text-gray-400">
              คลิกรูปเพื่อเลือกรูปโปรไฟล์
            </p>

            <div className="mt-6 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ACTIVE MEMBER
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold">
              {runner.name}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              National Runner ID
            </p>

            <p className="font-mono text-2xl font-bold text-blue-700">
              {runner.id}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Province
                </p>

                <h3 className="text-xl font-bold">
                  {runner.province}
                </h3>

                {runner.provinceCode && (
                  <p className="text-sm text-gray-400">
                    {runner.provinceCode}
                  </p>
                )}
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Level
                </p>

                <h3 className="text-xl font-bold">
                  {runner.level}
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Total Distance
                </p>

                <h3 className="text-xl font-bold">
                  {runner.totalDistance} km
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Events Joined
                </p>

                <h3 className="text-xl font-bold">
                  {runner.eventsJoined}
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Member Since
                </p>

                <h3 className="text-xl font-bold">
                  {new Date().getFullYear()}
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Passport Status
                </p>

                <h3 className="text-xl font-bold text-green-600">
                  ACTIVE
                </h3>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border-2 border-dashed p-8 text-center">
              <div className="text-6xl">
                📱
              </div>

              <p className="mt-4 font-semibold">
                QR CODE
              </p>

              <p className="mt-2 font-mono text-blue-700">
                {runner.id}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                QR Code Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}