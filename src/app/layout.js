import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';

import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight:['400','500','600','800']
})
export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight:['400','500','600','800']
})

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className}min-h-full flex flex-col bg-base-200`}>
        {children}
        <ToastContainer />
        </body>
    </html>
  );
}
