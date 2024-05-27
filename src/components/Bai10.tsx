import React,{useState} from 'react'

export default function Bai10() {
    const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [radioSelection, setRadioSelection] = useState('option1');
  const [dropdownOption, setDropdownOption] = useState('option');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputText" className="block text-gray-700 font-bold mb-2">
            Input Text Label
          </label>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-gray-700 font-bold">
              Remember Me
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="option1"
              name="radioSelection"
              value="option1"
              checked={radioSelection === 'option1'}
              onChange={(e) => setRadioSelection(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="option1" className="ml-2 block text-gray-700 font-bold">
              Radio Selection 1
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="option2"
              name="radioSelection"
              value="option2"
              checked={radioSelection === 'option2'}
              onChange={(e) => setRadioSelection(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="option2" className="ml-2 block text-gray-700 font-bold">
              Radio Selection 2
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="option3"
              name="radioSelection"
              value="option3"
              checked={radioSelection === 'option3'}
              onChange={(e) => setRadioSelection(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="option3" className="ml-2 block text-gray-700 font-bold">
              Radio Selection 3
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="dropdownOption" className="block text-gray-700 font-bold mb-2">
            Dropdown Option
          </label>
          <select
            id="dropdownOption"
            value={dropdownOption}
            onChange={(e) => setDropdownOption(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="option">Dropdown Option</option>
            <option value="option1">Dropdown Option 1</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}
