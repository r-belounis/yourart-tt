import { motion } from "framer-motion"

export const Card = ({ profile, name, description }: any) => (
    <>
      <motion.div whileHover={{ translateY: "-5px", transition: { duration: 0.2 } }} className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200 p-6 dark:shadow-transparent">
        <figure>
          <span className="relative inline-flex items-center justify-center w-20 h-20 text-white rounded-full">
            <img src={profile} alt="user name" title="user name" width="80" height="80" className="max-w-full rounded-full" />
          </span>
        </figure>
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
        </header>
        {description ? <p className="text-slate-600">{description}</p> : null}
      </motion.div>
    </>
  )