import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6 md:py-8 mt-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center sm:text-left">About SocialChef Community</h4>
              <ul className="space-y-2">
                <li className="text-sm">New Orleans Food & Drink Events</li>
                <li className="text-sm">San Francisco Holiday Events</li>
                <li className="text-sm">Chicago Events</li>
                <li className="text-sm">Events in Dallas Today</li>
                <li className="text-sm">Washington Events</li>
                <li className="text-sm">Sell Tickets Online</li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center sm:text-left">Need help?</h4>
              <ul className="space-y-2">
                <li className="text-sm">Create Events</li>
                <li className="text-sm">Event Planning</li>
                <li className="text-sm">Post your event online</li>
                <li className="text-sm">Sitemap</li>
                <li className="text-sm">Virtual Events Platform</li>
                <li className="text-sm">New York Events</li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center sm:text-left">Connect With Us</h4>
              <ul className="space-y-2">
                <li className="text-sm">Contact Support</li>
                <li className="text-sm">Contact Sales</li>
                <li className="text-sm">Facebook</li>
                <li className="text-sm">LinkedIn</li>
                <li className="text-sm">Instagram</li>
                <li className="text-sm">TikTok</li>
              </ul>
            </div>

          </div>

          <hr className="border-t border-gray-600 my-4" />

          <div className="text-center">
            <p className="text-sm">Copyright @2024 SocialChef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
