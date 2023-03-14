import * as React from "react"
import { Projects } from "../../data/projects"
import Layout from "../components/layout/Layout"
// import Skills from "../components/skills"
// import Logo from "../images/github.svg"

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-zinc-800 text-white text-4xl md:pb-9 md:px-12 p-6 mb-8">
        <div className="font-black text-5xl">Sarah Kapalka</div>
        <small className="text-lg">Front end developer | illustrator</small>
      </div>
      <div className="flex flex-wrap gap-y-10 gap-x-8 m-8 justify-center">
        {Projects.map((project, index) => {
          return(
            <div className="shadow-md w-[450px] md:w-[380px] hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between transition">
              <div className="p-4">
                <a href={project.url} className="text-2xl font-black texg-zinc-800">{project.title}</a>
                <div className="mt-4">{project.subTitle}</div>
                <div className="flex flex-wrap gap-3 my-3">
                  {project.skills.map((tag, index) => <div className="py-1 px-3 rounded-full bg-gray-100 text-xs">{tag}</div>)}
                </div>
                {project.reference.url && (
                  <div className="flex gap-3 items-center">
                    <div className="font-light">Reference:</div>
                    <a href={project.reference.url} className="texg-zinc-800 py-1 px-3 rounded-full border border-white hover:border-zinc-800 transition-all">
                      {project.reference.name}
                    </a>
                  </div>
                )}
              </div>
              <div className="w-full px-4 pb-4 flex gap-1">
                {/* <a href="#" className="hover:opacity-50 transition-all">
                  <img src={Logo} height={40} width={40} alt="github-logo" />
                </a> */}
                <a href={project.url} target="_blank" rel="noreferrer" className="rounded-md bg-amber-500 block py-2 text-center hover:bg-amber-400 transition grow">
                  View Site
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="hover:bg-zinc-900 hover:text-white border border-zinc-900 rounded-md text-center py-2 px-3 transition-all">
                  Repo
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
