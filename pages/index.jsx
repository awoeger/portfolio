import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hello, my name is Andrea Wöger</h1>
            <p className="description">
              I am a participant of the "Upleveled Fullstack Developer Bootcamp"
            </p>

            <Link href="/contact">
              <a className="cta">Contact Andrea</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <img
              id="profilpicture"
              src="/Profilbild.jpg"
              alt="Profile Picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
