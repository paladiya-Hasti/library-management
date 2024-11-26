import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer class="bg-black text-white  py-4 mt-5">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div>
            <h4 class="text-lg font-semibold mb-3">About SocialChef Community</h4>
            <ul class="space-y-2">
              <li class="text-sm">New Orleans Food & Drink Events</li>
              <li class="text-sm">San Francisco Holiday Events</li>
              <li class="text-sm">Chicago Events</li>
              <li class="text-sm">Events in Dallas Today</li>
              <li class="text-sm">Washington Events</li>
              <li class="text-sm">Sell Tickets Online</li>
            </ul>
          </div>
  
     
          <div>
            <h4 class="text-lg font-semibold mb-3">Need help?</h4>
            <ul class="space-y-2">
              <li class="text-sm">Create Events</li>
              <li class="text-sm">Event Planning</li>
              <li class="text-sm">Post your event online</li>
              <li class="text-sm">Sitemap</li>
              <li class="text-sm">Virtual Events Platform</li>
              <li class="text-sm">New York Events</li>
            </ul>
          </div>
  
         
          <div>
            <h4 class="text-lg font-semibold mb-3">Connect With Us</h4>
            <ul class="space-y-2">
              <li class="text-sm">Contact Support</li>
              <li class="text-sm">Contact Sales</li>
              <li class="text-sm">Facebook</li>
              <li class="text-sm">LinkedIn</li>
              <li class="text-sm">Instagram</li>
              <li class="text-sm">TikTok</li>
            </ul>
          </div>
  
        </div>
  
        <hr class="border-t border-gray-600 my-4" />
  
        <div class="text-center">
          <p class="text-sm">
            Copyright @2024 SocialChef. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
  
  )
}

export default Footer