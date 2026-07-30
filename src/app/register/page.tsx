export default function RegisterPage() {
  const sports = [
    "Running",
    "Trail Running",
    "Marathon",
    "Ultra Marathon",
    "Cycling",
    "Mountain Bike",
    "Swimming",
    "Triathlon",
    "Football",
    "Basketball",
    "Badminton",
    "Fitness",
    "Other",
  ];

  return (
    <main className="mx-auto max-w-5xl p-8">

      <h1 className="text-4xl font-bold">
        Athlete Passport Registration
      </h1>

      <p className="mt-2 text-gray-600">
        Thailand National Athlete Passport Platform
      </p>

      <form className="mt-8 space-y-6">

        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            1. Personal Information
          </h2>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="First Name"/>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Last Name"/>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Nickname"/>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Date of Birth"/>

          <select className="mt-3 w-full rounded border p-3">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            2. Contact Information
          </h2>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Email"/>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Phone Number"/>

          <input className="mt-3 w-full rounded border p-3"
          placeholder="Address"/>
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            3. Health Information
          </h2>

          <select className="mt-3 w-full rounded border p-3">
            <option>Blood Group</option>
            <option>A</option>
            <option>B</option>
            <option>AB</option>
            <option>O</option>
          </select>

          <textarea
          className="mt-3 w-full rounded border p-3"
          placeholder="Medical Condition / Allergy"
          />
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            4. Sports Profile
          </h2>

          <p className="mt-3">
            Select Your Sports
          </p>

          <div className="grid grid-cols-2 gap-3 mt-3">
            {sports.map((sport)=>(
              <label key={sport}
              className="flex gap-2">
                <input type="checkbox"/>
                {sport}
              </label>
            ))}
          </div>
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            5. Athlete Experience
          </h2>

          <select className="mt-3 w-full rounded border p-3">
            <option>Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Professional</option>
          </select>

          <input
          className="mt-3 w-full rounded border p-3"
          placeholder="Club / Team"
          />
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            6. GPS & Connected Device
          </h2>

          <input
          className="mt-3 w-full rounded border p-3"
          placeholder="Garmin / Strava / Coros / Apple Watch"
          />
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            7. Smart Athlete Card
          </h2>

          <label className="flex gap-2 mt-3">
            <input type="checkbox"/>
            Request Physical Smart Card
          </label>
        </section>


        <section className="rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            8. Consent
          </h2>

          <label className="flex gap-2 mt-3">
            <input type="checkbox"/>
            Accept Athlete Passport Terms
          </label>

          <label className="flex gap-2 mt-3">
            <input type="checkbox"/>
            Allow Ranking Display
          </label>
        </section>


        <section className="rounded-xl bg-gray-100 p-6">
          <h2 className="text-xl font-bold">
            System Generate
          </h2>

          <p>National Athlete ID</p>
          <p>Athlete Passport Number</p>
          <p>QR Code</p>
          <p>XP Level</p>
          <p>Smart Card ID</p>
        </section>


        <button
        className="rounded-xl bg-blue-600 px-8 py-3 text-white">
          Create Athlete Passport
        </button>


      </form>

    </main>
  );
}