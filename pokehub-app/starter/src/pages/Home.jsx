import Wrapper from '../components/Wrapper';

function Home() {
  return (
    <>
      <header className="font-bold text-center text-lg text-lime-900 bg-lime-200 py-4">
        Pokemon Hub
      </header>
      <main className=" mx-auto py-12 min-h-screen mb-4">
        <Wrapper />
      </main>
      <footer className="font-bold text-center text-lg text-lime-900 bg-lime-200 py-4 relative bottom-0 left-0 right-0 min-w-full mb-0">
        Site built with ❤️ for training purpose!
      </footer>
    </>
  );
}

export default Home;
