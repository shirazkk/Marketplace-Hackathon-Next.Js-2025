// // import client from "@/sanity/lib/client";
// import { NextResponse } from "next/server";

// let userDetails: { _id: string; name: string; email: string; subject: string; usermessage: string; createdAt: string }[] = [];


// // Handle GET requests
// export async function GET() {
//     if (userDetails.length === 0) {
//         return NextResponse.json({ error: 'No users found' }, { status: 404 });
//     }
//     return NextResponse.json(userDetails);
// }
// export async function POST(req: Request) {

//     try {
//         const body = await req.json();

//         if (!body.name || !body.email || !body.subject || !body.usermessage) {
//             return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//         }

//         const newUser = {
//             _id: crypto.randomUUID(),
//             name: body.name,
//             email: body.email,
//             subject: body.subject,
//             usermessage: body.usermessage,
//             createdAt: new Date().toISOString(),
//         };
//         const sanitizedEmail = body.email.trim().replace(/[<>]/g, "");
//         if (!sanitizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
//             return NextResponse.json(
//                 { message: "Please enter Valid email" },
//                 { status: 400 }
//             )
//         }

//         userDetails = [newUser, ...userDetails];

//         // const isDuplicate = userDetails.some((record) => record.email === body.email)
//         // if (isDuplicate) {
//         //     return NextResponse.json(
//         //         { message: "This email is already registered." },
//         //         { status: 400 }
//         //     )
//         // }




//         // const newMessage = await client.create({
//         //     _type: "contactmessage",
//         //     _id,
//         //     name,
//         //     email,
//         //     subject,
//         //     usermessage,
//         //     createdAt: new Date().toISOString(),
//         // });



//         return NextResponse.json(
//             { message: "Data received successfully", userdata: newUser },
//             { status: 200 }
//         );

//     }
//     catch (error) {
//         console.error("Error handling email subscription:", error);
//         return NextResponse.json(
//             { message: "Internal Server Error" },
//             { status: 500 }
//         );

//     }
// }









import { NextResponse } from "next/server";
import client from "@/sanity/lib/client"; // Import your Sanity client

let userDetails: { _id: string; name: string; email: string; subject: string; usermessage: string; createdAt: string }[] = [];

// Handle GET requests
export async function GET() {
    if (userDetails.length === 0) {
        return NextResponse.json({ error: "No users found" }, { status: 404 });
    }
    return NextResponse.json(userDetails);
}

// Handle POST requests
export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate the request body
        if (!body.name || !body.email || !body.subject || !body.usermessage) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Sanitize email
        const sanitizedEmail = body.email.trim().replace(/[<>]/g, "");
        if (!sanitizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
            return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
        }

        // Create a new user object
        const newUser = {
            _id: crypto.randomUUID(),
            name: body.name,
            email: body.email,
            subject: body.subject,
            usermessage: body.usermessage,
            createdAt: new Date().toISOString(),
        };

        // Save to in-memory array (optional)
        userDetails = [newUser, ...userDetails];

        // Save to Sanity
        const savedMessage = await client.create({
            _type: "contactmessage", // Ensure this matches your Sanity schema's type
            _id: crypto.randomUUID(),
            name: body.name,
            email: body.email,
            subject: body.subject,
            usermessage: body.usermessage,
            createdAt: new Date().toISOString(),
        });

        // Return success response
        return NextResponse.json(
            {
                message: "Data received successfully and saved to Sanity",
                userdata: savedMessage,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling email subscription:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
