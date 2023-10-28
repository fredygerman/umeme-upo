import Image from 'next/image';

export default function Home() {
  return (
    <main className='custom-background flex min-h-screen flex-col items-center justify-between py-8  md:py-16'>
      <div className='flex flex-col items-center justify-center '>
        <h2 className='mb-8 text-center text-3xl font-bold'>Power Status</h2>

        <Image
          className='mb-8'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-8 text-center text-2xl font-bold'>
          Next power check in
        </h4>
        <h3 className='mb-8 text-center text-2xl font-bold'>00:32:10</h3>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-8 text-center text-2xl font-bold'>
          “Home is ready for you”
        </h4>
        <h3 className='mb-8 text-center text-2xl font-bold'>
          Share on twitter
        </h3>
      </div>
    </main>
  );
}
