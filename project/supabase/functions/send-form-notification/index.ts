import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FormSubmission {
  table: string;
  record: any;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { table, record }: FormSubmission = await req.json();

    let emailSubject = "";
    let emailBody = "";

    if (table === "leads") {
      emailSubject = "Nueva Solicitud de Información - Idiomas Ya";
      emailBody = `
        <h2>Nueva Solicitud de Información</h2>
        <p><strong>Nombre:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Teléfono:</strong> ${record.phone}</p>
        <p><strong>Programa:</strong> ${record.program}</p>
        ${record.wants_trial_class ? `
          <h3>Clase de Prueba Solicitada</h3>
          <p><strong>Fecha preferida:</strong> ${record.trial_class_date}</p>
          <p><strong>Hora preferida:</strong> ${record.trial_class_time}</p>
        ` : ""}
        <p><strong>Fecha de registro:</strong> ${new Date(record.created_at).toLocaleString('es-CO')}</p>
      `;
    } else if (table === "living_english_registrations") {
      emailSubject = "Nueva Inscripción Living English - Idiomas Ya";
      emailBody = `
        <h2>Nueva Inscripción Living English</h2>
        <p><strong>Nombre:</strong> ${record.full_name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Teléfono:</strong> ${record.phone}</p>
        <p><strong>Fecha de sesión:</strong> ${record.session_date}</p>
        <p><strong>Hora de sesión:</strong> ${record.session_time}</p>
        <p><strong>Fecha de registro:</strong> ${new Date(record.created_at).toLocaleString('es-CO')}</p>
      `;
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Idiomas Ya <notifications@idiomasya.com.co>",
        to: ["admin@idiomasya.com.co"],
        subject: emailSubject,
        html: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailResult = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, emailId: emailResult.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
