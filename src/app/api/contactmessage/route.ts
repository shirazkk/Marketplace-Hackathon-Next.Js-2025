
import { NextRequest, NextResponse } from "next/server";

const { NEXT_PUBLIC_SANITY_AUTH_TOKEN, NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID } = process.env;

export async function POST(request: NextRequest) {
    try {
        const contactForm = await request.json();
        const { name, email, subject, usermessage } = contactForm;

        // Validate required fields
        if (!name || !email || !usermessage) {
            return NextResponse.json(
                { error: "Missing required fields (name, email, message)." },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedName = name.trim().replace(/[<>]/g, "");
        const sanitizedEmail = email.trim().replace(/[<>]/g, "");
        const sanitizedMessage = usermessage.trim().replace(/[<>]/g, "");
        const sanitizedSubject = subject ? subject.trim().replace(/[<>]/g, "") : "";

        // Validate sanitized email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
            return NextResponse.json(
                { error: "Invalid email format." },
                { status: 400 }
            );
        }

        const mutations = {
            mutations: [
                {
                    create: {
                        _type: "contactmessage",
                        _id: crypto.randomUUID(),
                        name: sanitizedName,
                        email: sanitizedEmail,
                        subject: sanitizedSubject,
                        usermessage: sanitizedMessage,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        };

        // Check environment variables
        if (!NEXT_PUBLIC_SANITY_AUTH_TOKEN || !NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET) {
            return NextResponse.json(
                { error: "Missing required environment variables." },
                { status: 500 }
            );
        }

        // Send data to Sanity
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
            { message: "Data received successfully and saved to Sanity", data: responseData },
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





