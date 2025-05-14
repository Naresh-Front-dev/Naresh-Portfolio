const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Medi-clinic
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Medic-Clinic – An innovative healthcare platform designed to bridge the gap between patients and medical professionals. Built with HTML, CSS, JavaScript, and Bootstrap, it features a responsive design, intuitive navigation, and dynamic sections to showcase services, doctor profiles, and patient testimonials.
              Optimized for fast loading and seamless user experience,
            </p>
            <a
              href="https://naresh-front-dev.github.io/Medi-Clone-Project-1/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Max-Wear
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An innovative footwear showcase platform built using HTML, CSS, and Bootstrap. It utilizes a flexible grid system to present a wide variety of shoe products with stylish layouts, interactive features, and responsive design, providing a premium shopping experience.
            </p>
            <a
              href="https://naresh-front-dev.github.io/Max-Wear-Project-2/"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Flight-Booking App
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A dynamic, real-time flight booking platform built with React, Bootstrap, and CSS. It features API integration for live flight data, seamless booking management, and responsive design for an optimized user experience. Hosted on the backend using Node.js and Render, it offers fast, secure, and scalable performance, making travel planning effortless.
            </p>
            <a
              href="https://naresh-front-dev.github.io/Flight-Booking-React-Project-3/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>


        </div>

        {/* Project 3 and 4 in one row */}
       
      </div>
    </div>
  );
};

export default Project;
