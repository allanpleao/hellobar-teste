"use client";

import { Facebook, Instagram } from "lucide-react";
import Pinterest from "./modules/Pinterest";

/**
 * Hello Bar component for the storefront
 * Barra preta superior com mensagem de boas-vindas e ícones de redes sociais.
 * @returns Hello Bar component
 */

export function getChristmasMessage (date = new Date()) : string {

    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    console.log(today)
    let xmas = new Date( today.getFullYear(), 11, 25)

    if(today > xmas) {
      xmas = new Date(today.getFullYear() + 1, 11, 25)
    }  

    const msPerDay = 86_400_000; // 24 horas em milessegundos


    const remainingDays = Math.round((xmas.getTime() - today.getTime()) / msPerDay)
    console.log(remainingDays)
    
    if (remainingDays > 1 ) {
      return `Faltam ${remainingDays} dias para o Natal`;
    } if (remainingDays === 1) {
      return "Falta 1 dia para o Natal"
    };
    return "Feliz Natal!"


}

export function HelloBar() {


  return (
    <div className="hidden md:block sticky top-0 z-50 w-full bg-red-900 py-2 md:py-2.5 shadow-sm ">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] flex items-center justify-between relative">

        {/* Mensagem de boas-vindas */}
        <div className="flex-1 flex items-center justify-center">
          <span className="text-white text-sm md:text-sm font-medium tracking-widest uppercase select-none">
            SEJA BEM-VINDO AO SITE OFICIAL BRASFOOT 
          </span>
          <span className="text-yellow-200 font-bold px-10 text-sm md:text-sm uppercase ">
              {getChristmasMessage()}
                 
            </span>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex items-center gap-x-3 shrink-0">
          <a
            href="https://www.facebook.com/BrasfootPresentes"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-secondary transition-colors duration-200"
            title="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/brasfootpresentes/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-secondary transition-colors duration-200"
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://pin.it/77vfPE6"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-secondary transition-colors duration-200"
            title="Pinterest"
          >
            <Pinterest size="20" className="transition-colors duration-200" />
          </a>
        </div>

      </div>
    </div>
  );
}
