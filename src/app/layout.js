import "./globals.css";

export const metadata = {
  title: "WESLUX | Mentorship Program for Education in Luxembourg",
  description: "WESLUX - WES Luxembourg for Education. Non-profit association creating opportunities for personal and professional growth through mentorship in Luxembourg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}