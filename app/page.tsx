import Names from "./clientcomponent"
export default function Home() {
  return (
    <main className="page">
      <section className="two-col">
        <h1 className="headline">Creative coder and final year cs student</h1>
        <h2 className="intro">
          I'm studying computer science at <em>Babeş-Bolyai University</em> and doing research there{" "}  
          <em>
            <a className="intro a" href="https://www.core-network.ai/ubb" target="_blank" rel="noopener noreferrer">
              @CoreLabs UBB
            </a>
          </em>
          , part of a network with{" "}
          <em>
            <a href="https://www.core-network.ai/core-labs" target="_blank" rel="noopener noreferrer">
              two universities in Germany
            </a>
          </em>
        </h2>
      </section>
    </main>
  ); 
}
