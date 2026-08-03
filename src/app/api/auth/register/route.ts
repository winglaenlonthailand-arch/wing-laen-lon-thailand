// FILE: src/app/api/auth/register/route.ts

import { NextResponse } from "next/server";


export async function POST(request: Request) {

  try {

    const body = await request.json();


    const {
      firstName,
      lastName,
      nickname,
      email,
      sports,
    } = body;


    if (!firstName || !lastName || !email) {

      return NextResponse.json(
        {
          success: false,
          message: "Required information missing",
        },
        {
          status: 400,
        }
      );

    }


    const athletePassport = {

      athleteId:
        "ATH-" + Date.now(),

      name:
        `${firstName} ${lastName}`,

      nickname,

      email,

      sports,

      level:
        "Beginner",

      xp:
        0,

      status:
        "pending",

    };


    return NextResponse.json({

      success: true,

      message:
        "Athlete Passport Registration Created",

      data:
        athletePassport,

    });


  } catch (error) {


    return NextResponse.json(

      {
        success: false,
        message: "Invalid request",
      },

      {
        status: 500,
      }

    );

  }

}