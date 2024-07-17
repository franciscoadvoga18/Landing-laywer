"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-transparent w-full font-montserrat font-bold fixed top-0 z-50 ${scrolled ? " bg-black/60" : ""}`}>
      <div className="max-w-screen-2xl mx-auto flex items-center py-4 px-4 lg:px-10 justify-between">
        <Link href="/">
          <Image objectFit="contain" width={147} height={37} src="/logo.png" alt="logo" />
        </Link>
        <nav className="flex lg:w-1/2 text-white">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="rounded-full flex flex-col items-center justify-center gap-1 lg:hidden ">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </button>
            </SheetTrigger>
            <SheetContent side="top">
              <ul className="flex flex-col items-start font-bold gap-4 text-black">
                <li className="hover:opacity-60 hover:transition-opacity">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="hover:opacity-60 hover:transition-opacity">
                  <Link href="#serviços">Serviços</Link>
                </li>
                <li className="hover:opacity-60 hover:transition-opacity">
                  <Link href="#sobre">Sobre</Link>
                </li>
                <li className="hover:opacity-60 hover:transition-opacity">
                  <Link href="#contato">Contato</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
          <ul className="lg:flex items-center justify-center hidden font-bold gap-8">
            <li className="hover:opacity-60 hover:transition-opacity">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:opacity-60 hover:transition-opacity">
              <a href="#services">Serviços</a>
            </li>
            <li className="hover:opacity-60 hover:transition-opacity">
              <Link href="#sobre">Sobre</Link>
            </li>
            <li className="hover:opacity-60 hover:transition-opacity">
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
          <Button aria-label="contato" className={`bg-white text-sm ml-auto lg:flex items-center justify-center hidden px-4 uppercase py-3 ${scrolled ? "text-black" : "text-red-600"} hover:text-white hover:bg-red-600`}>
            <a target="_blank" rel="noreferrer" href="https://wa.me/5584998941340">
              Consulta Gratís
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
