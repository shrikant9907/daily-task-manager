import { Inter } from "next/font/google";
import './styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Task Manager App | React To Next",
  description: "It help developer to manage their daily tasks and learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dtm-app">
          <header>
            <h1>Daily Task Manager</h1>
          </header>
          {children}

          <footer>
            <p>&copy; 2024 React To Next</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
