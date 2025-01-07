import { generateGamesToDb } from "@/lib/data";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const req = await request;
  let jsonBody;

  try {
    jsonBody =  await req.json()
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      success: false,
      message: "JSON syntax error"
    }, {
        status:  400
    })
  }

  if(jsonBody.apiKey === undefined || jsonBody.apiKey === null || jsonBody.apiKey.trim() === "" || jsonBody.apiKey !== process.env.API_KEY){
    return NextResponse.json({
      success: false,
      message: "Invalid API key"
    }, {
        status:  401
    })
  }

  try {
    const success = await generateGamesToDb()
    if(success){
      return NextResponse.json({
        success: true
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Games generated"
      }, {
          status:  404
      })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      success: false,
      message: "Internal server error"
    }, {
        status:  500
    })
  }
}