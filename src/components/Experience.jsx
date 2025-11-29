import React from 'react'

/**
 * Experience — A small vertical timeline POC.
 * Current org: Chetan Sharma Pvt Limited — joined in 2022 (first org / no previous entries).
 */
export default function Experience() {
  const entries = [
    {
      year: '2022 — Present',
      title: 'Software Engineer',
      org: 'Chetan Sharma Pvt Limited',
      description:
        'Contributing to front-end web applications, focusing on performant front-end experiences, accessibility, and maintainable codebases. First role after graduation — ownership of features and end-to-end delivery.'
    }
  ]

  return (
    <section id="Experience" className="w-screen flex justify-center items-center mt-12 lg:mt-24 px-6 lg:px-0 ">
      <div className="mx-auto max-w-[1200px] w-full">
        <div className="mb-6 text-left lg:text-left">
          <p className="text-base text-gray-300">CAREER</p>
          <h2 className="text-3xl md:text-4xl font-bold  font-poppins text-[#9354E4] mt-2">Experience</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-[900px]  mt-3">A quick timeline of my professional experience — concise, readable, and mobile-first.</p>
        </div>

        <div className="relative pl-6 md:pl-12">
          {/* vertical line */}
          <div className="absolute top-0 left-3 md:left-6 h-full w-0.5 bg-gradient-to-b from-[#7A5CFF] via-[#9354E4] to-transparent opacity-40" aria-hidden />

          <ol className="space-y-8">
            {entries.map((e, idx) => (
              <li key={e.org} className="relative">
                {/* timeline marker */}
                <div className="absolute -left-[3.6rem] md:-left-[4.6rem] top-0 flex flex-col items-center">
                  {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#7A5CFF] to-[#3AD1FF] border border-white/10 shadow-lg text-black font-semibold"> {idx + 1} </div> */}
                </div>

                <div className="rounded-xl p-5 bg-[#0b0a14]/60 border border-white/5 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                    <div>
                      <div className="text-sm text-gray-400">{e.year}</div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mt-1">{e.title}</h3>
                      <div className="text-sm text-violet-200 mt-1 font-medium">{e.org}</div>
                    </div>

                    <div className="mt-3 md:mt-0 md:max-w-[420px] text-sm text-gray-300 leading-6">
                      {e.description}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
