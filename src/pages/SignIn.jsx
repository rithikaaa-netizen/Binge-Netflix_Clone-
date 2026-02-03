import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="min-h-screen bottom-0 left-0 w-full h-56 bg-linear-to-t from-black via-black to-[#3f1517] rounded-t-[0%]  text-white">
      <header className="px-10 py-6">
        <img src={logo} alt="Netflix" className="w-47" />
      </header>
      <div className="flex justify-center mt-24 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">
            Enter your info to sign in
          </h1>
          <p className="text-gray-300 mb-6">
            Or get started with a new account.
          </p>
          <input
            type="text" placeholder="Email or mobile number"
            className="w-full px-4 py-4 rounded bg-black/40  border border-gray-500 placeholder-gray-400 focus:outline-none focus:border-gray-300 mb-4"
          />
          <nav>
            <Link to="/profile">
              <button
                className="w-full py-4 bg-[#E50914] text-white font-bold rounded text-lg hover:bg-[#f6121d] transition">
                Continue
              </button>
            </Link>
          </nav>
          <div className="mt-6">
            <button className="text-sm text-gray-300 hover:underline">
              Get Help ▾
            </button>
          </div>
          <p className="mt-10 text-xs text-gray-400 ">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Learn more
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
