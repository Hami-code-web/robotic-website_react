import robot from '/assets/hero-section.png';
import robotsData from './robotsData/data.json';
import membersData from './memberData/member.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import skybarLogo from '/robotImages/logo.png';

function App() {
  return (
    <div className="bg-[#021526] text-white overflow-x-hidden">
      <header className="flex justify-between px-10 py-5">
        <p className="text-lg">SKYBAR</p>
        <p className="text-lg">HOUSE OF IDEA</p>
      </header>

      <div className="relative flex items-center justify-center mt-12 md:mt-20 overflow-hidden font-sans">
        <h1 className="absolute uppercase z-0 text-[5rem] sm:text-[9rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem] 2xl:text-[25rem] font-extrabold text-[#e2e4e9] tracking-widest select-none text-center w-full whitespace-nowrap">
          skybar
        </h1>
        <img
          src={robot}
          alt="VR Robot"
          className="z-10 relative h-72 sm:h-96 md:h-120 lg:h-140 object-contain w-full px-4"
        />
      </div>

      <p className="text-center my-20 text-2xl tracking-[.3rem] roboto font-bold">
        Four Features Of Our Project
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="relative group w-50 h-50 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative h-[80%] w-full px-6 py-4 bg-linear-to-br from-purple-900/50 to-pink-900/10 rounded-2xl flex items-center justify-center border border-purple-400/30 backdrop-blur-md transition duration-500 group-hover:from-purple-800/60 group-hover:to-pink-800/20">
            <p className="sans text-purple-50 text-center text-sm tracking-tight md:tracking-widest leading-5 lowercase font-medium">
              a precise and stable line following system for accurate,
              error-free path tracking.
            </p>
          </div>
        </div>

        <div className="relative group w-50 h-50 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative h-[80%] w-full px-6 py-4 bg-linear-to-br from-cyan-900/50 to-indigo-900/10 rounded-2xl flex items-center justify-center border border-cyan-400/30 backdrop-blur-md transition duration-500 group-hover:from-cyan-800/60 group-hover:to-indigo-800/20">
            <p className="sans text-cyan-50 text-center text-sm tracking-tight md:tracking-widest leading-5 lowercase font-medium">
              audio playback and voice interaction capabilities through the
              built-in speaker for intelligent environmental communication.
            </p>
          </div>
        </div>

        <div className="relative group w-50 h-50 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-linear-to-r from-rose-500 via-red-500 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative h-[80%] w-full px-6 py-4 bg-linear-to-br from-rose-900/50 to-orange-900/10 rounded-2xl flex items-center justify-center border border-rose-400/30 backdrop-blur-md transition duration-500 group-hover:from-rose-800/60 group-hover:to-orange-800/20">
            <p className="sans text-rose-50 text-center text-sm tracking-tight md:tracking-widest leading-5 lowercase font-medium">
              a complete and creative simulation of the cooking process,
              featuring gas ignition sparks.
            </p>
          </div>
        </div>

        <div className="relative group w-50 h-50 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative h-[80%] w-full px-6 py-4 bg-linear-to-br from-emerald-900/50 to-cyan-900/10 rounded-2xl flex items-center justify-center border border-emerald-400/30 backdrop-blur-md transition duration-500 group-hover:from-emerald-800/60 group-hover:to-cyan-800/20">
            <p className="sans text-emerald-50 text-center text-sm tracking-tight md:tracking-widest leading-5 lowercase font-medium">
              intelligent human-following capability with safe distance
              maintenance using a distance sensor.
            </p>
          </div>
        </div>
      </div>

      <p className="capitalize text-center mt-20 mb-10 text-2xl tracking-[.3rem] roboto font-bold sans">
        about our robots
      </p>

      <div className="flex justify-evenly pb-10">
        <div className="flex flex-wrap gap-8 p-10 justify-center">
          {robotsData.map((robot, index) => (
            <div
              key={index}
              className="w-100 p-8 bg-gray-900/60 backdrop-blur-md rounded-3xl 
                        border border-gray-700/50 hover:border-cyan-400/50
                        transition-all duration-500 ease-out 
                        hover:-translate-y-3 
                        hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] 
                        group cursor-pointer relative overflow-hidden"
            >
              <img
                src={robot.imageUrl}
                alt={robot.title}
                className="absolute inset-0 w-full h-full object-cover z-999
                           translate-y-full group-hover:translate-y-0 
                           transition-transform duration-500 ease-out opacity-40 group-hover:opacity-100"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-700 z-10"></div>
              <div
                className="w-12 h-12 mb-6 rounded-full bg-linear-to-tr from-cyan-500 to-fuchsia-500 flex items-center justify-center 
                              group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.8)] 
                              transition-all duration-500 text-white text-xl z-20 relative"
              >
                ⚡
              </div>
              <h2
                className="mb-4 font-bold text-2xl tracking-tight 
                             bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent
                             group-hover:from-cyan-400 group-hover:to-fuchsia-500 transition-all duration-500 relative z-20"
              >
                {robot.title}
              </h2>
              <p className="font-light text-gray-400 leading-relaxed group-hover:text-gray-900 group-hover:font-medium transition-colors duration-300 relative z-20">
                {robot.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="capitalize text-center mt-10 mb-10 text-2xl tracking-[.3rem] roboto font-bold sans">
        about us
      </p>

      <div className="pb-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          loop="true"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="select-none w-full max-w-7xl mx-auto p-4"
        >
          {membersData.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full p-6 m-2 bg-gray-900/60 backdrop-blur-md rounded-2xl 
                             border border-gray-700/50 hover:border-fuchsia-400/50 
                             transition-all duration-300 ease-out flex flex-col
                             hover:-translate-y-2 
                             hover:shadow-[0_0_30px_-10px_rgba(217,70,239,0.3)]
                             group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4 gap-2">
                  <div className="flex items-center gap-4 sm:gap-1.5">
                    <img
                      src={member.img}
                      className="w-16 h-16 object-cover rounded-full border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors duration-300 bg-gray-800 shrink-0"
                      alt={member.name}
                    />
                    <h3 className="font-bold text-lg text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 transition-all capitalize">
                      {member.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 shadow-inner shrink-0">
                    <span className="text-xs font-mono text-cyan-400">
                      Age {member.age}
                    </span>
                  </div>
                </div>
                <p className="text-sm line-clamp-4 font-light text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 grow">
                  {member.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <footer className="relative mt-20 border-t border-gray-800 bg-gray-950/50 py-12 backdrop-blur-lg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src={skybarLogo}
                  className="w-16 h-16 rounded-full border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-500 relative z-10"
                  alt="Skybar Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                  SKYBAR
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold">
                  House of Idea
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                Connect with us
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-fuchsia-500 hover:scale-125 transition-all duration-300 text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="capitalize items-center flex gap-1 text-xs text-gray-400">
              <CiLocationOn size={20} />
              iran, tehran, house of idea Robotic Academy
            </p>
            <div className="flex gap-1 hover:text-white transition-colors items-center text-xs text-gray-500">
              <CiMail size={20} />
              <a href="#" className="">
                skybarOnstage@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
