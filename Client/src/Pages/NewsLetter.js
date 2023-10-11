import React from "react";

export default function NewsLetter() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F54748] py-10 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
          </div>
          <dl className="max-w-xl lg:max-w-lg">
            <div className="mt-6 flex max-w-lg gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-transparent outline-none px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-[#FDECEC] focus:ring-2 focus:ring-inset focus:ring-[#FDECEC] sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#FDECEC] px-3.5 py-2.5 text-sm font-semibold text-[#F54748] shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Subscribe
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
