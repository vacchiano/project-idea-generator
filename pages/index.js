import { useState, Fragment } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {

  const [topic, setTopic] = useState("")
  const [projectIdea, setProjectIdea] = useState("")

  const handleChange = (e) => {
    setTopic(e.target.value)
    console.log(topic);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(topic);

    const res = await fetch(`/api/idea?topic=${topic}`)
    const data = await res.json()
    // console.log(data.text);
    setProjectIdea(data.text)
  }

  return (
    <div className="relative bg-gray-50 overflow-hidden min-h-screen">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">

      

        <main className="mt-16 mx-auto max-w-4xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="mb-12 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Generate your next</span>{' '}
              <span className="block text-indigo-600 xl:inline">hackathon project idea</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Enter a topic below or leave blank and click generate
            </p>
            <div className="min-w-full mt-4 mb-16 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="min-w-full">
              <form className='border-none outline-none mx-4 sm:mx-0' onSubmit={handleSubmit}>
                <input className='block w-full sm:inline sm:w-1/2 max-w-xl p-2 outline-none shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md' onChange={handleChange} value={topic} type="text" name="topic" id="topic" placeholder='Enter a topic' />
                <input className='block w-full mt-4 sm:mt-0 sm:inline sm:w-1/4 sm:ml-3 py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type="submit" value="Generate" />
                
              </form>
              </div>
            </div>
            {projectIdea && (
              <div>
                <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-xl md:mt-5 md:text-2xl md:max-w-4xl">
                  {projectIdea}
                </p>
              </div>
              )}
          </div>
        </main>
      </div>
    </div>
  )
}