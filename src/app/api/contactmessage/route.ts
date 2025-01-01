
import { NextResponse } from "next/server";

const { SANITY_TOKEN, NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID } = process.env;

export async function POST(request: Request) {
    try {
        const contactForm = await request.json();
        const { name, email, subject, usermessage } = contactForm;

        // Validate required fields
        if (!name || !email || !usermessage) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Sanitize email
        const sanitizedEmail = email.trim().replace(/[<>]/g, "");
        if (!sanitizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        const mutations = {
            mutations: [
                {
                    create: {
                        _type: "contactmessage",
                        _id: crypto.randomUUID(),
                        name,
                        email,
                        subject,
                        usermessage,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        };


        // Send data to Sanity
        const response = await fetch(
            `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${NEXT_PUBLIC_SANITY_DATASET}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${SANITY_TOKEN}`,
                },
                body: JSON.stringify(mutations),
            }
        );

        const responseData = await response.json();
        // Handle Sanity API errors
        if (!response.ok || responseData.error) {
            console.error("Sanity API error:", responseData);
            return NextResponse.json(
                { error: "Failed to save data to Sanity", details: responseData },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "Data received successfully and saved to Sanity",
                data: responseData,
            },
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



export async function GET() {
    try {
        const query = `*[_type == "contactmessage"]{
            _id,
            name,
            email,
            subject,
            usermessage,
            createdAt
        }`;
        const response = await fetch(
            `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${SANITY_TOKEN}`,
                },
            }
        );
        const responseData = await response.json();
        if (!response.ok || responseData.error) {
            console.error("Sanity API error:", responseData);
            return NextResponse.json(
                { error: "Failed to fetch data", details: responseData },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Data fetched successfully", data: responseData.result },
            { status: 200 }
        );
    }

    catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json(
            { message: "Error fetching data" },
            { status: 500 }
        );
    }
}



