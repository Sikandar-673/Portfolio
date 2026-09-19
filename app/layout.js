import "./globals.css";

export const metadata = {
  title: "Sikandar Tariq | Teacher • Entrepreneur • Developer • Designer",
  description:
    "Personal portfolio of Sikandar Tariq — Computer Science Teacher, Business Owner, Game Developer, Graphic Designer and Marketing Manager.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}