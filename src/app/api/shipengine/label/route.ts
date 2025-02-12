
import { shipEngine } from "@/helper/shipengine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const { rateId } = await req.json()

        if (!rateId) {
            return NextResponse.json(
                { error: "rateId is required" },
                { status: 400 }
            );
        }
        const creatingLabel = await shipEngine.createLabelFromRate({ rateId })
        console.log(creatingLabel)
        return NextResponse.json(creatingLabel, { status: 200 })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json(

            { error: "An error occurred while creating the label" },
            { status: 500 }
        )
    }
}