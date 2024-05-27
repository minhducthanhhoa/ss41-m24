import React from 'react'

export default function Bai5() {
  return (
    <div>
        <h1>Bài 5</h1>
        <div className="relative bg-blue-200 p-6 rounded-lg w-64 h-40">
            <div className="relative bg-blue-300 p-4 rounded w-full h-full">
                <p className="text-blue-500 font-bold">Relative parent</p>
                <button className="absolute bottom-4 left-4 bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
                    Asbolute child
                </button>
            </div>
        </div>
    </div>
  )
}
