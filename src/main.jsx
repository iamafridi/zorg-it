import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#1E1E1E]' >
      <div className='font-rethink-sans mx-auto '>
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
)
