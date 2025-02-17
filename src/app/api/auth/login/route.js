export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Hardcoded admin credentials
    const adminEmail = "admin@ismis.com";
    const adminPassword = "turned3"; // Change this in production!

    if (email !== adminEmail || password !== adminPassword) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    // Generate a basic session token (not secure for production)
    const token = { user: { email: adminEmail, role: "admin" } };

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
