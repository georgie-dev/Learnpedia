'use client'
import { useStateContext } from "@/contexts/ContextProvider";
import SideNav from "./SideNav";
import Header from "./Header";

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    const {activeMenu}= useStateContext()
    return (
      <html lang="en">
        <body >
            <main className=" flex gap-0">
                <section className={activeMenu ? ' w-72 fixed z-50 ': 'w-0'}><SideNav/></section>
                <section className={activeMenu? 'md:ml-72 w-full': 'm-0'}>
                    <Header/>
                    <div className="py-3 px-5">{children}</div>
                </section>
            </main>
        </body>
      </html>
    );
  }
  