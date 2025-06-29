export function handleScrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
   element.scrollIntoView({ behavior: "smooth" });
  }
 }
 
 if (typeof window !== "undefined") {
   window.onload = function () {
       const hash = window.location.hash;
       if (hash) {
           const elemento = document.querySelector(hash);
           if (elemento) {
               elemento.scrollIntoView({ behavior: "smooth" });
           }
       }
   };
 }
 