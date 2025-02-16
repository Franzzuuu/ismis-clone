import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "KJHD83JHKH8932KJHSD83JHJKH8923JK"; 

// Hardcoded admin credentials
const adminUser = {
  email: "admin@example.com",
  password: bcrypt.hashSync("admin123", 10) // Hashed password for security
};

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if email matches admin credentials
    if (email !== adminUser.email) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    // Compare passwords
    const isValidPassword = await bcrypt.compare(password, adminUser.password);
    if (!isValidPassword) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ email: adminUser.email, role: "admin" }, SECRET, { expiresIn: "1h" });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
