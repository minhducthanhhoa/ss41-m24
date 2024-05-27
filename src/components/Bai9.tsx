import React,{useState} from 'react'

export default function Bai9() {
    const [lightMode, setLightMode] = useState(true);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };
  return (
    <div>
        <div className={`bg-white shadow-lg w-64 py-6 px-4 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
      <div className="flex items-center mb-8">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <nav className="mb-8">
        <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
              fill="currentColor"
            />
          </svg>
          Dashboard
        </a>
        <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6H4C2.9 6 2 6.9 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18ZM8 14H16V16H8V14ZM8 10H16V12H8V10Z"
              fill="currentColor"
            />
          </svg>
          Posts
        </a>
      </nav>

      <div className="flex items-center mb-8">
        <img
          src="https://via.placeholder.com/40x40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">John Doe</p>
          <p className="text-gray-500">Admin</p>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <span className="mr-2">Light Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={lightMode} onChange={toggleLightMode} className="sr-only" />
          <div
            className={`w-11 h-6 bg-gray-200 rounded-full shadow-inner ${
              lightMode ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <div
              className={`absolute left-1 top-1 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
                lightMode ? 'translate-x-4' : 'translate-x-0'
              } w-4 h-4`}
            ></div>
          </div>
        </label>
      </div>
    </div>
    </div>
  )
}
