import Spline from '@splinetool/react-spline'
import { Code2, Rocket, Sparkles, Star, Zap, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero with Spline */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs mb-4">
              <Sparkles size={14}/> Available for freelance
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Building delightful digital experiences
            </h1>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Im Jorge, a creative full‑stack developer crafting modern, performant, and accessible web apps.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#work" className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">View work</a>
              <a href="/contact" className="px-5 py-2.5 rounded-full border border-gray-300 hover:border-gray-400">Contact</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <a className="hover:text-gray-900" href="#"><Github size={20}/></a>
              <a className="hover:text-gray-900" href="#"><Linkedin size={20}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Core skills</h2>
          <p className="text-gray-600 mt-2">A focused stack for shipping fast and reliably.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: <Code2/>, title: 'Frontend', desc: 'React, Next.js, Tailwind CSS, Framer Motion'},
              {icon: <Rocket/>, title: 'Backend', desc: 'Node.js, FastAPI, MongoDB'},
              {icon: <Zap/>, title: 'Performance', desc: 'Accessibility, Lighthouse, Core Web Vitals'},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white grid place-items-center">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work showcase */}
      <section id="work" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Selected work</h2>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Start a project →</a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white/70 hover:shadow-xl transition-all">
                <div className="aspect-[16/10] bg-gray-100" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-amber-500">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  <h3 className="mt-2 font-semibold">Case study #{i}</h3>
                  <p className="text-gray-600 text-sm mt-1">Short description of the project highlighting impact and outcomes.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">Have an idea? Lets build it together.</h3>
            <p className="text-white/80 mt-2 max-w-2xl">I partner with startups and teams to craft beautiful, fast, and scalable products.</p>
            <a href="/contact" className="inline-block mt-6 px-5 py-2.5 rounded-full bg-white text-gray-900 hover:bg-gray-100">Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
