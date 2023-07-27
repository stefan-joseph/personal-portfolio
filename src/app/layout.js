import "./globals.css";
import Navbar from "@/components/Navbar";
import { SmoothScrollProvider } from "@/contexts/SmoothScroll.context";
import LoadingScreen from "@/components/LoadingScreen";
import { neueMontreal } from "@/assets/fonts/fonts";

export const metadata = {
  title: "Stefan Joseph's Portfolio",
  description: "A portfolio showcasing the work of Stefan Joseph.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className="loading"
    >
      <body className={neueMontreal.className}>
        <SmoothScrollProvider>
          <LoadingScreen />
          <Navbar />
          <div id="page">
            <div data-scroll-container>
              <main>{children}</main>
              <footer></footer>
            </div>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
