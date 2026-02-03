import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 px-4 py-12 text-sm">
      <p>Questions? <u className='hover:cursor-pointer'>Call 000-800-919-1743</u></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 hover:cursor-pointer underline">
        <p>FAQ</p>
        <p>Help Centre</p>
        <p>Account</p>
        <p>Media Centre</p>
        <p>Investor Relations</p>
        <p>Jobs</p>
        <p>Ways to Watch</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Cookie Preferences</p>
        <p>Corporate Information</p>
        <p>Contact Us</p>
        </div>
        <p className="mt-8">Netflix India</p>
        <p className="mt-10 text-xs text-gray-400 ">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
                Learn more
            </span>
        </p>
    </footer>
  )
}

export default Footer