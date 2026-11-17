"use client";
// use client was needed because Error: Event handlers cannot be passed to Client Component props, 
// so i needed to make this a client component so it wouldbe rendered client side not server side as the default
export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1 className="text-9xl text-orange-900 italic" 
          onClick= {function() {
            console.log("clicked!")
            }
             }
              >
        Diana<span className="text-[#ffffff]"> + </span>Cristian
      </h1>
    </main>
  ); 
}
