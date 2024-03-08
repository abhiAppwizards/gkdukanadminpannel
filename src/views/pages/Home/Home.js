import React, { useState } from 'react'
import ImgComponent from './ImgComponent'
import axios from 'axios'
function Home() {
  const [preview1, setPreview1] = useState(null)
  const [preview2, setPreview2] = useState(null)
  const [preview3, setPreview3] = useState(null)
  const [preview4, setPreview4] = useState(null)
  const [preview5, setPreview5] = useState(null)
  const [preview6, setPreview6] = useState(null)

  const handleChange1 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview1(URL.createObjectURL(file))
  }

  const handleChange2 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview2(URL.createObjectURL(file))
  }

  const handleChange3 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview3(URL.createObjectURL(file))
  }
  const handleChange4 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview3(URL.createObjectURL(file))
  }
  const handleChange5 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview3(URL.createObjectURL(file))
  }
  const handleChange6 = (event) => {
    const file = event.target.files[0]
    console.log('File selected:', file)
    setPreview3(URL.createObjectURL(file))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('image1', event.target.image1.files[0])
    formData.append('image2', event.target.image2.files[0])
    formData.append('image3', event.target.image3.files[0])

    try {
      const response = await axios.post('https://your-api-url.com/upload', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
        <h2 className=" relative text-lg font-semibold text-heading ">Top Section</h2>
        <div className="mt-8 flex justify-evenly items-center">
          <h1 className="font-semibold">Image 1</h1>
          <ImgComponent preview={preview1} onChange={handleChange1} name="image1" />
          <input className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2" />{' '}
        </div>
        <div className="mt-8 flex justify-evenly items-center">
          <h1 className="font-semibold">Image 2</h1>
          <ImgComponent preview={preview2} onChange={handleChange2} name="image2" />
          <input className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2" />{' '}
        </div>
        <div className="mt-8 flex justify-evenly items-center">
          <h1 className="font-semibold">Image 3</h1>
          <ImgComponent preview={preview3} onChange={handleChange3} name="image3" />
          <input className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2" />{' '}
        </div>

        <button
          type="submit"
          className="mt-4 border rounded-md py-1 px-4 bg-green-100 hover:bg-slate-200"
        >
          Upload
        </button>
      </div>
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
        <h2 className=" relative text-lg font-semibold text-heading ">Second Banner Section</h2>
        <div className="mt-8 flex justify-around">
          <ImgComponent preview={preview4} onChange={handleChange4} name="image4" />
          <ImgComponent preview={preview5} onChange={handleChange5} name="image5" />
          <ImgComponent preview={preview6} onChange={handleChange6} name="image6" />
        </div>
        <button
          type="submit"
          className="mt-4 border rounded-md py-1 px-4 bg-green-100 hover:bg-slate-200"
        >
          Upload
        </button>
      </div>
    </>
  )
}

export default Home
