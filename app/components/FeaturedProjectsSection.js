"use client";

import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";

const GET_PROJECTS_SIMPLE = gql`
  query {
    acfprojects {
      nodes {
        id
        title
      }
    }
  }
`;


export function FeaturedProjectsSection() {
  const { loading, error, data } = useQuery(GET_PROJECTS_SIMPLE);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error loading projects</p>;


console.log("DATA", data)
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {data.acfprojects.nodes.map((project) => {
          const { title, uri, projectFields } = project;
          const { projectUrl, role, screenshot } = projectFields;

          return (
            <motion.a
              href={projectUrl || uri}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block rounded-2xl overflow-hidden shadow-xl transition-all bg-gray-100"
            >
              <img
                src={screenshot?.sourceUrl || "/placeholder.jpg"}
                alt={title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-200">{role}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
