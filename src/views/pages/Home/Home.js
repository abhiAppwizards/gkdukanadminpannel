import React, { useState } from 'react';
import ImgComponent from './ImgComponent';
import axios from 'axios';
import config from 'src/config';

function Home() {
  const [previews, setPreviews] = useState({
    preview1: null,
    preview2: null,
    preview3: null,
    preview4: null,
    preview5: null,
    preview6: null,
  });

  const handleChange = (event, index) => {
    const file = event.target.files[0];
    console.log('File selected:', file);
    setPreviews((prevState) => ({
      ...prevState,
      [`preview${index}`]: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const topSlider = {
      image_url: previews.preview1,
      link: event.target.link1.value,
    };

    const topBanner = {
      image_url: previews.preview2,
      link: event.target.link2.value,
    };

    const categoriesSlider = [
      {
        category_name: event.target.category_name1.value,
        link: event.target.link3.value,
      },
      {
        category_name: event.target.category_name2.value,
        link: event.target.link4.value,
      },
      {
        category_name: event.target.category_name3.value,
        link: event.target.link5.value,
      },
    ];

    const secondBanner = {
      image_url: previews.preview4,
      link: event.target.link6.value,
    };

    const offerSection1 = [
      {
        product_id: event.target.product_id1.value,
        discount: event.target.discount1.value,
      },
    ];

    const offerSection2 = [
      {
        product_id: event.target.product_id2.value,
        discount: event.target.discount2.value,
      },
    ];

    const thirdBanner = {
      image_url: previews.preview5,
      link: event.target.link7.value,
    };

    const offerSection3 = [
      {
        product_id: event.target.product_id3.value,
        discount: event.target.discount3.value,
      },
    ];

    const postData = {
      top_slider: [topSlider],
      top_banner: topBanner,
      categories_slider: categoriesSlider,
      second_banner: secondBanner,
      offer_section1: offerSection1,
      offer_section2: offerSection2,
      third_banner: thirdBanner,
      offer_section3: offerSection3,
    };

    try {
      const response = await axios.post(`${config.baseURL}/admin/home`, postData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">Top Slider Section</h2>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 1</h1>
            <ImgComponent
              preview={previews.preview1}
              onChange={(e) => handleChange(e, 1)}
              name="image1"
            />
            <input
              name="link1"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 2</h1>
            <ImgComponent
              preview={previews.preview2}
              onChange={(e) => handleChange(e, 2)}
              name="image2"
            />
            <input
              name="link2"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 3</h1>
            <ImgComponent
              preview={previews.preview3}
              onChange={(e) => handleChange(e, 3)}
              name="image3"
            />
            <input
              name="link3"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
        </div>
        {/* Top  banner */}
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">Top Banner</h2>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 1</h1>
            <ImgComponent
              preview={previews.preview4}
              onChange={(e) => handleChange(e, 4)}
              name="image4"
            />
            <input
              name="link4"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
        </div>
        {/* Catagories Slider */}

        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">
            Categories Slider Section
          </h2>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Category 1</h1>
            <input
              name="category_name1"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
            <input
              name="link5"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
          </div>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Category 2</h1>
            <input
              name="category_name2"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
            <input
              name="link6"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
          </div>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Category 3</h1>
            <input
              name="category_name3"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
            <input
              name="link7"
              className="border-2 border-gray-400 outline-none  w-40 h-10 rounded-md px-2"
            />
          </div>
        </div>

        {/* Second  banner */}
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">Second Banner</h2>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 1</h1>
            <ImgComponent preview={previews.preview4} onChange={(e) => handleChange(e, 4)} name="image4" />
            <input
              name="link6"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
        </div>

        {/* Third  banner */}
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">Third Banner</h2>
          <div className="mt-8 flex justify-evenly items-center">
            <h1 className="font-semibold">Image 1</h1>
            <ImgComponent preview={previews.preview5} onChange={(e) => handleChange(e, 5)} name="image5" />
            <input
              name="link7"
              className="border-2 border-gray-400 outline-none  w-96 h-10 rounded-md px-2"
            />
          </div>
        </div>

        {/* Offer Section */}
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 ">
          <h2 className=" relative text-lg font-semibold text-heading ">Offer Sections</h2>

          <div className="flex justify-around mt-4">
            <div>
              <h1 className="font-semibold">Offer Section 1</h1>
              <div>
                <input
                  name="product_id1"
                  placeholder="Product ID"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
                <input
                  name="discount1"
                  placeholder="Discount"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Offer Section 2</h1>
              <div>
                <input
                  name="product_id2"
                  placeholder="Product ID"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
                <input
                  name="discount2"
                  placeholder="Discount"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Offer Section 3</h1>
              <div>
                <input
                  name="product_id3"
                  placeholder="Product ID"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
                <input
                  name="discount3"
                  placeholder="Discount"
                  className="border-2 px-2 border-gray-400 outline-none  w-80 mt-2 h-10 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="border px-4 py-2 mb-5 rounded bg-green-400 text-white hover:bg-gray-400">
          Submit
        </button>
      </form>
    </>
  );
}

export default Home;


// const handleChange1 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview1(URL.createObjectURL(file))
// }

// const handleChange2 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview2(URL.createObjectURL(file))
// }

// const handleChange3 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview3(URL.createObjectURL(file))
// }
// const handleChange4 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview4(URL.createObjectURL(file))
// }
// const handleChange5 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview5(URL.createObjectURL(file))
// }
// const handleChange6 = (event) => {
//   const file = event.target.files[0]
//   console.log('File selected:', file)
//   setPreview6(URL.createObjectURL(file))
// }
