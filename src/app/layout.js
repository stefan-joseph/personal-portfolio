import "./globals.css";
import Navbar from "@/components/Navbar";
import { SmoothScrollProvider } from "@/contexts/SmoothScroll.context";
import LoadingScreen from "@/components/LoadingScreen";
import { neueMontreal } from "@/assets/fonts/fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Stefan Joseph's Portfolio",
  description: "A portfolio showcasing the work of Stefan Joseph.",
  themeColor: "#fbf7f0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="loading">
      <body className={neueMontreal.className}>
        <SmoothScrollProvider>
          <LoadingScreen />
          <Navbar />
          {/* <div> */}
          <div id="page">
            <div data-scroll-container>
              <main>{children}</main>
              <Footer />
            </div>
            {/* </div> */}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
