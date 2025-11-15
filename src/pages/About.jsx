import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent" />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs mb-6">
          <Sparkles size={14}/> About me
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div variants={fadeIn} initial="hidden" animate="show" className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">I design and build modern interfaces.</h1>
            <p className="text-gray-700">Over the last 5+ years, Ive worked across startups and agencies to deliver elegant user experiences with a focus on performance, accessibility, and maintainability.</p>
            <p className="text-gray-700">When Im not coding, youll catch me exploring new interaction patterns, contributing to open‑source, or sketching ideas for the next side‑project.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Design Systems","Motion & Micro‑interactions","Full‑stack","Performance"].map((tag, i) => (
                <motion.div key={i} whileHover={{ y: -3 }} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="font-medium">{tag}</p>
                  <p className="text-sm text-gray-600 mt-1">Concise explanation of how I approach {tag.toLowerCase()} in real projects.</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.1 }} className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200" />
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[{label:'Projects',value:36},{label:'Years',value:5},{label:'Clients',value:18}].map((s,i)=>(
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded-xl border border-gray-200 p-4">
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
