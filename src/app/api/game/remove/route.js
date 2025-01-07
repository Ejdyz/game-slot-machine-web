import { removeGameByKey } from "@/lib/data";
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


  if(jsonBody.key === undefined || jsonBody.key === null || jsonBody.key.trim() === ""){
    return NextResponse.json({
      success: false,
      message: "Parameter is required"
    }, {
        status:  400
    })
  }
  
  console.log(jsonBody.key)
  try {
    const success = await removeGameByKey(jsonBody.key)
    if(success){
      return NextResponse.json({
        success: true
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Game not found"
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