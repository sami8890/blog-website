"use client"; // Ensure this component runs only on the client side
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Indicate that the component has mounted on the client side
    setIsClient(true);
  }, []);

  const menuItems = [
    { Name: "Home", href: "/" },
    { Name: "About", href: "/about" },
    { Name: "Services", href: "/services" },
    { Name: "Contact", href: "/contact" },
  ];

  if (!isClient) {
    // Prevent the component from rendering server-side to avoid hydration errors
    return null;
  }

  return (
    <nav className="flex sticky top-0 items-center justify-between p-4 bg-[#0a192f]/95 text-[#64ffda] backdrop-blur-md shadow-xl z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">Sami Gabol</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 mr-16">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="transition-all duration-300 hover:font-bold "
          >
            {item.Name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Sheet) shade-Cn  */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="px-4 py-2">
            <CiMenuFries className="w-7 h-6 text-white" />
          </SheetTrigger>
          <SheetContent className="w-64 bg-[#0F172A]">
            <SheetHeader>
              <SheetTitle className="text-2xl text-white">
                Sami Gabol .
              </SheetTitle>
              <SheetDescription>
                <ul className="mt-9 space-y-2 text-white text-lg ">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block p-2 transition-all duration-300 hover:font-bold "
                      >
                        {item.Name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
