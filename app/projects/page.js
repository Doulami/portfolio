
'use client';
import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apolloClient';
import { motion } from 'framer-motion';

const GET_PROJECTS = gql`
  query {
    acfProjects {
      nodes {
        title
        projectFields {
          role
          projectUrl
          description
        }
      }
    }
  }
`;


export default function ProjectsPage() {
  const { loading, error, data } = useQuery(GET_PROJECTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.acfProjects.nodes.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-gray-300 dark:border-zinc-700 rounded shadow"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm italic">{project.projectFields?.role}</p>
            <p className="mt-2">{project.projectFields?.description}</p>
            <a
              href={project.projectFields?.projectUrl}
              className="text-blue-600 underline block mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
  console.log({ loading, error, data });

}
