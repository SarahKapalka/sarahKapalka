import React from 'react';
import Layout from '../components/layout/Layout';
const skills = ["VSCode", "Github", "Figma", "Windows", "Mac", "HTML5", "CSS3", "TailwindCSS", "SASS", "Javascript", "React", "Next JS", "Gatsby", "Graphql", "Mongoose", "Apollo Client"];

function About() {
  return (
    <Layout>
      <div className="bg-zinc-800 text-white text-4xl md:pb-9 md:px-12 p-6 mb-8">
        <div className="font-black text-5xl">About</div>
      </div>
      <div className="flex flex-wrap text-lg gap-4 m-10 md:m-20">
        <div className="text-xl max-w-[500px]">
          <div>
            <span className='text-amber-500 font-bold'>Hello</span>, Sarah Kapalka here! full time Front end engineer with 5 plus years of illustration freelance experience. Detail and design oriented with hobby of learning more.
          </div>
          <div className='mt-10 text-lg'>Skills include:</div>
          <div className="flex flex-wrap gap-3 my-3">
            {skills.map((tag, index) => <div className="py-1 px-3 rounded-full bg-gray-200 text-sm">{tag}</div>)}
          </div>
        </div>
        <div>
          <div><span className='text-md font-light opacity-50'>Email:</span> sarahnj73bc@gmail.com</div>
          <div><span className='text-md font-light opacity-50'>Github:</span> Click <a target="_blank" rel="noreferrer" href='https://github.com/SarahKapalka' className="hover:underline font-bold text-amber-500">here</a> to view github profile</div>
        </div>
      </div>
    </Layout>
    
  )
}

export default About