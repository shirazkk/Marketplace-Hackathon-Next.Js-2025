import { NextRequest, NextResponse } from "next/server";

const {
    NEXT_PUBLIC_SANITY_AUTH_TOKEN,
    NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID,
} = process.env;

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        // Validate Email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Invalid or missing email address." },
                { status: 400 }
            );
        }

        // Sanitize Input
        const sanitizedEmail = email.trim().replace(/[<>]/g, "");

        const mutations = {
            mutations: [
                {
                    create: {
                        _type: "newsletter",
                        _id: crypto.randomUUID(),
                        email: sanitizedEmail,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        };

        // Check Environment Variables
        if (!NEXT_PUBLIC_SANITY_AUTH_TOKEN || !NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET) {
            return NextResponse.json(
                { error: "Missing required environment variables." },
                { status: 500 }
            );
        }

        // Send Data to Sanity
        const response = await fetch(
            `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${NEXT_PUBLIC_SANITY_DATASET}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${NEXT_PUBLIC_SANITY_AUTH_TOKEN}`,
                },
                body: JSON.stringify(mutations),
            }
        );

        const responseData = await response.json();
        if (!response.ok || responseData.error) {
            console.error("Sanity API error:", responseData);
            return NextResponse.json(
                { error: "Failed to save data to Sanity", details: responseData },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Successfully subscribed to newsletter!", data: responseData },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
