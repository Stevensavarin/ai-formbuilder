import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    // bg-[url('/grid.svg')]
    <section className=" h-[500px] bg-[url('/grid.svg')]">
  <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Create your Form
        <strong className="font-extrabold text-primary sm:block"> In Seconds Not  in Hours </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
      Generate, publish and share your form right away with AI. Dive into insightful results, charts and analytics.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
          href="#"
        >
          + Create AI Form
        </a>

        {/* <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a> */}
      </div>
    </div>
  </div>
  {/* <img src='/grid.svg' className=' absolute w-full h-[400px] '/> */}
<section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-56 pb-12">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

      <p className="mt-4 text-gray-300">
      Our AI makes it easy to create forms. 
      Just enter your needs and our advanced artificial 
      intelligence will generate a custom form, 
      then review and edit as needed, and deploy your form instantly. 
      It's that quick and easy!
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

       <h2 className="mt-4 text-xl font-bold text-black">Write prompt for your form</h2>

        <p className="mt-1 text-sm text-gray-600">
          Create perfect forms in minutes with our advanced AI. Just tell us what you need, and we'll take care of the rest. Easy, fast, and hassle-free.
        </p>
      </a>
      

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
        href="#"
      >
        <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Edit Your Form</h2>

        <p className="mt-1 text-sm text-gray-600">
          Customize your form effortlessly with our intuitive editor. Make adjustments in just a few clicks and get the perfect form tailored to your needs.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
        href="#"
      >
      <Share2 className='h-8 w-8' />

      <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

      <p className="mt-1 text-sm text-gray-600">
        Share your form with a click and start collecting responses instantly. Seamlessly gather and analyze data with ease.
      </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/sign-in"
        className="inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>
</section>
  )
}

export default Hero