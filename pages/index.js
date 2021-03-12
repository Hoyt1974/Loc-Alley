import Image from "next/image";

function Home() {
  return (
    <>
      <div className="container">
        <h1>Loc-Alley</h1>
        <Image
          src="/d842c4007ec410315ea1770a70718c51.jpg"
          alt="pic of Arts and Crafts"
          width={400}
          height={400}
        />
        <h2>Welcome to Loc-Alley</h2>
        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}
export default Home;
