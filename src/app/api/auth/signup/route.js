import bcrypt from "bcryptjs";

let adminUser = null; // Store admin details in memory

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if the admin user is already registered
    if (adminUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user (in memory)
    adminUser = { email, password: hashedPassword };

    return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
