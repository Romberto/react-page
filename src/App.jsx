import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  

  return (
    <>
      <div className='fixed w-full h-screen bg-gradient-to-br from-blue-500 to-blue-800 via-white flex justify-center items-center'>
        <div className='w-auto h-auto p-3 flex flex-col items-center'>
          <h1 className='font-semibold text-2xl text-sky-800 mb-2'>Drop & Drap</h1>
          
            <form className='w-96 h-80 bg-white border-2 border-sky-600 p-3 rounded-lg flex flex-col items-center justify-center '>
              <p className='text-sky-800 mb-2'>Перетащите файды сюда</p>
              <p className='text-sky-800 mb-2'>или</p>
              <label className='px-4 py-2 rounded-md bg-sky-800 shadow shadow-md shadow-sky-600 text-white'>
                Загрузите файлы
                <input type="file" className='m-0 hidden'/>
              </label>
            </form>
          
        </div>
      </div>
    </>
  )
}

export default App
