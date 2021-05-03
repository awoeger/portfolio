import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              I am currently a participant in the "Upleveled Fullstack Developer
              Bootcamp" and ready to learn JavaScript, React and Node.js. Before
              that, I finished my masters in nutritional science at the
              University of Vienna and worked as a key account manager at an IT
              - personnel service provider for 2 years.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
