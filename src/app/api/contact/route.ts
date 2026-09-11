import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const allowedPackages = new Set([
  "",
  "Launch",
  "Starter",
  "Growth",
  "Growth Plus",
]);

const allowedHelpOptions = new Set([
  "Social media",
  "Content",
  "Campaign",
  "Marketing",
  "Not completely sure yet",
]);

const allowedImprovementOptions =
  new Set([
    "Visibility",
    "Enquiries",
    "Bookings",
    "Sales",
    "Something else",
  ]);

const allowedContactMethods =
  new Set([
    "Email",
    "WhatsApp",
  ]);

function clean(value: unknown) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function isValidEmail(
  value: string
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

function isValidWhatsApp(
  value: string
) {
  const digits =
    value.replace(/\D/g, "");

  return (
    digits.length >= 8 &&
    digits.length <= 15
  );
}

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid request.",
        },
        { status: 400 }
      );
    }

    /*
      Honeypot:
      Bots filling this hidden field
      receive a fake successful response.
    */
    if (
      clean(
        (
          body as Record<
            string,
            unknown
          >
        ).website_honeypot
      )
    ) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    const data =
      body as Record<
        string,
        unknown
      >;

    const name =
      clean(data.name);

    const business =
      clean(data.business);

    const email =
      clean(data.email);

    const website =
      clean(data.website);

    const selectedPackage =
      clean(data.package);

    const help =
      clean(data.help);

    const improvement =
      clean(data.improvement);

    const message =
      clean(data.message);

    const contactMethod =
      clean(data.contactMethod);

    const whatsapp =
      clean(data.whatsapp);

    /*
      Required fields
    */

    if (
      !name ||
      name.length > 100
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid name.",
        },
        { status: 400 }
      );
    }

    if (
      !business ||
      business.length > 150
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid business name.",
        },
        { status: 400 }
      );
    }

    if (
      !email ||
      !isValidEmail(email) ||
      email.length > 200
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (
      !allowedPackages.has(
        selectedPackage
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please select a valid package.",
        },
        { status: 400 }
      );
    }

    if (
      !allowedHelpOptions.has(
        help
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please select what you need help with.",
        },
        { status: 400 }
      );
    }

    if (
      !allowedImprovementOptions.has(
        improvement
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please select what you want to improve.",
        },
        { status: 400 }
      );
    }

    if (
      !allowedContactMethods.has(
        contactMethod
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please select a contact method.",
        },
        { status: 400 }
      );
    }

    /*
      WhatsApp is conditionally required.

      If the visitor selects WhatsApp,
      a valid WhatsApp number MUST exist.
    */

    if (
      contactMethod === "WhatsApp"
    ) {
      if (
        !whatsapp ||
        !isValidWhatsApp(
          whatsapp
        )
      ) {
        return NextResponse.json(
          {
            error:
              "Please enter a valid WhatsApp number.",
          },
          { status: 400 }
        );
      }
    }

    /*
      If Email is selected,
      WhatsApp should not be supplied.
    */

    if (
      contactMethod === "Email" &&
      whatsapp
    ) {
      return NextResponse.json(
        {
          error:
            "Please select WhatsApp if you want to provide a WhatsApp number.",
        },
        { status: 400 }
      );
    }

    /*
      Optional fields
    */

    if (
      website.length > 300
    ) {
      return NextResponse.json(
        {
          error:
            "Website / Instagram is too long.",
        },
        { status: 400 }
      );
    }

    if (
      message.length > 3000
    ) {
      return NextResponse.json(
        {
          error:
            "Please keep the business description under 3000 characters.",
        },
        { status: 400 }
      );
    }

    /*
      Environment variables
    */

    const toEmail =
      process.env
        .CONTACT_TO_EMAIL;

    const fromEmail =
      process.env
        .CONTACT_FROM_EMAIL;

    if (
      !process.env.RESEND_API_KEY ||
      !toEmail ||
      !fromEmail
    ) {
      console.error(
        "Contact form environment variables are missing."
      );

      return NextResponse.json(
        {
          error:
            "The contact form is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    /*
      Send inquiry
    */

    const { error } =
      await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,

        subject:
          `New InsightBolt project inquiry — ${business}`,

        text: [
          "NEW INSIGHTBOLT PROJECT INQUIRY",
          "",
          `Name: ${name}`,
          `Business: ${business}`,
          `Email: ${email}`,
          `Website / Instagram: ${
            website || "Not provided"
          }`,
          `Package: ${
            selectedPackage ||
            "Not selected"
          }`,
          `Needs help with: ${help}`,
          `Trying to improve: ${improvement}`,
          `Best contact method: ${contactMethod}`,
          `WhatsApp: ${
            whatsapp ||
            "Not provided"
          }`,
          "",
          "BUSINESS DETAILS",
          message || "Not provided",
        ].join("\n"),
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "We couldn't send your brief right now. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your brief. Please try again.",
      },
      { status: 500 }
    );
  }
}