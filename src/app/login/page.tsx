"use client";

import { useState } from "react";


export default function LoginPage() {

  const [message, setMessage] = useState("");


  const handleLogin = (provider: string) => {

    setMessage(
      `Login with ${provider} selected`
    );

  };


  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">


      <section className="w-full max-w-md rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">


        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Login
        </h1>


        <p className="mt-4 text-center text-gray-600">
          Thailand AI Running Platform
        </p>



        <div className="mt-8 space-y-4">


          <button
            onClick={() => handleLogin("Email")}
            className="w-full rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Login with Email
          </button>



          <button
            onClick={() => handleLogin("Google")}
            className="w-full rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Login with Google
          </button>



          <button
            onClick={() => handleLogin("LINE")}
            className="w-full rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Login with LINE
          </button>


        </div>



        {
          message && (

            <div className="mt-6 rounded-xl bg-blue-50 p-4 text-center">

              <p className="font-semibold text-blue-700">
                {message}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Authentication System Preparing
              </p>

            </div>

          )
        }



        <div className="mt-8 rounded-xl bg-gray-50 p-5 text-center">


          <h2 className="font-bold text-gray-900">
            Login System Coming Soon
          </h2>


          <p className="mt-2 text-sm text-gray-600">
            เธฃเธฐเธเธเธชเธกเธฒเธเธดเธ Runner Passport เนเธฅเธฐ Authentication
            เธเธณเธฅเธฑเธเธเธฑเธ’เธเธฒ
          </p>


        </div>


      </section>


    </main>

  );

}
