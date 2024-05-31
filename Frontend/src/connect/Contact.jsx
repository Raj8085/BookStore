// import React from 'react'

// const Contact = () => {
//   return (
//     <>
//         <div className="flex h-screen items-center justify-center border">
//             <form>
//                 <div className="mt-4 "> 
//                 <h2>Contact Us</h2>
//                 <label>Name<br/>
//                 <input  type='text' placeholder='Enter your full name'/></label><br/>
//                 </div>
//                 <div>
//                 <label>Email<br/>
//                 <input type='email' placeholder='Enter your email Id '/></label><br/>
//                 </div>
//                 <div>
//                 <label>Message<br/>
//                 <input type='text' placeholder='Enter your message'/></label>
//                 </div>
//             </form>
//         </div>
//     </>
//   )
// }

// export default Contact


// import React from 'react'

// const Contact = () => {
//   return (
//     <>
   
//       <div className="flex items-center justify-center">

// <form class="max-w-sm mx-auto items-start">
// <div class="mb-5">
//     <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your full name</label>
//     <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//   </div>
//   <div class="mb-5">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
//   </div>
//   <div class="flex items-start mb-5">
//     {/* <div class="flex items-center h-5">
//       <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />

//     </div> */}
//     <div>
//     <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
//   <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
//     </div>
 
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>

//     </div>
//     </>
//   )
// }

// export default Contact


import React from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/');
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form  onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md  w-[600px]">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter your full name</label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
