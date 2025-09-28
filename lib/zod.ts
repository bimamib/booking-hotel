import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(6, "Name must be at least 6 characters long"),
  email: string()
    .min(6, "Email must be at least 6 characters long")
    .email("Please enter a valid email"),
  subject: string().min(6, "Subject must be at least 6 characters long"),
  message: string()
    .min(50, "Message must be at least 50 characters long")
    .max(200, "Message must be at most 200 characters long"),
});
