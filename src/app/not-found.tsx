// import Link from 'next/link';

// export default function NotFound() {
//   return (
//     <section className="section-container relative flex min-h-[80vh] items-center">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[var(--color-green)]/10 blur-3xl animate-[slow-drift_18s_ease-in-out_infinite_alternate]" />
//         <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--color-green)]/15 blur-3xl animate-[slow-drift_16s_ease-in-out_infinite_alternate]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
//       </div>

//       <div className="relative mx-auto max-w-6xl">
//         <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-container-light)] bg-[var(--color-container)]/90 shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur">
//           <div className="pointer-events-none absolute inset-0">
//             <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(25,210,111,0.08),transparent_60%)]" />
//             <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
//             <div className="absolute -right-12 top-16 h-40 w-40 rounded-full border border-white/10" />
//             <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full border border-white/10" />
//           </div>

//           <div className="relative grid gap-10 p-8 md:grid-cols-[1fr_1.25fr] md:items-center md:p-14">
//             <div className="relative flex items-center justify-center">
//               <div className="relative">
//                 <div className="absolute left-1/2 top-[86%] h-9 w-36 -translate-x-1/2 rounded-full bg-[var(--color-green)]/60 blur-xl animate-[glow-pulse_3.5s_ease-in-out_infinite]" />
//                 <div className="absolute -inset-4 rounded-[28px] border border-white/10" />
//                 <div className="relative flex h-56 w-56 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#0f1412] via-[#161c19] to-[#0b0f0d] shadow-[0_0_40px_rgba(25,210,111,0.25)]">
//                   <div className="absolute inset-6 rounded-[22px] border border-white/10" />
//                   <svg
//                     className="relative h-44 w-44 text-white/95 animate-[float-soft_6s_ease-in-out_infinite]"
//                     viewBox="0 0 160 160"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M35 74C35 50.1 53.9 31 77.8 31H82.2C106.1 31 125 50.1 125 74V120C125 129.9 117 138 107.1 138C97.3 138 89.3 129.9 89.3 120C89.3 129.9 81.3 138 71.4 138C61.6 138 53.6 129.9 53.6 120C53.6 129.9 45.6 138 35.8 138C26 138 18 129.9 18 120V74C18 73.4 18 72.7 18.1 72.1"
//                       fill="currentColor"
//                     />
//                     <circle cx="62" cy="74" r="7" fill="#7ee4b2" />
//                     <circle cx="98" cy="74" r="7" fill="#7ee4b2" />
//                   </svg>
//                   <div className="absolute bottom-5 right-5 h-3 w-3 rounded-full bg-[#7ee4b2] shadow-[0_0_10px_rgba(126,228,178,0.8)]" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
//                 System signal
//                 <span className="h-2 w-2 rounded-full bg-[var(--color-green)] shadow-[0_0_10px_rgba(25,210,111,0.9)]" />
//               </div>
//               <p className="mt-4 text-6xl font-black leading-none text-transparent md:text-7xl">
//                 <span className="animated-gradient-text">404</span>
//               </p>
//               <h1 className="mt-4 text-2xl font-semibold uppercase tracking-[0.18em] text-white/90 md:text-3xl">
//                 Uh oh! Una 404 salvaje aparecio
//               </h1>
//               <p className="mt-4 text-base text-white/70 md:text-lg">
//                 Tu navegador logro comunicarse con el servidor, pero no se encontro la
//                 pagina solicitada. Si llegaste hasta aqui, el enlace esta roto o el
//                 recurso ya no existe.
//               </p>

//               <div className="mt-6 grid gap-3 text-sm text-white/70 md:grid-cols-2 md:text-base">
//                 <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                   <p className="text-sm font-semibold text-white">Contraste claro</p>
//                   <p className="mt-2 text-sm text-white/70">
//                     Jerarquia visual marcada con tipografia, glow y acentos verdes.
//                   </p>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                   <p className="text-sm font-semibold text-white">Forma y ritmo</p>
//                   <p className="mt-2 text-sm text-white/70">
//                     Capas, curvas y gradientes crean profundidad sin perder legibilidad.
//                   </p>
//                 </div>
//               </div>

//               <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-white/70 md:text-base">
//                 <li>No entres en panico.</li>
//                 <li>Revisa que la URL este escrita correctamente.</li>
//               </ul>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link
//                   href="/"
//                   className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-white/40 hover:bg-white/10"
//                 >
//                   Volver al inicio
//                 </Link>
//                 <Link
//                   href="/#portfolio"
//                   className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/60 transition hover:border-white/30 hover:text-white/90"
//                 >
//                   Ver proyectos
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section
      className="section-container relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-body)', color: 'var(--color-text)' }}
    >
      <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(at 0% 0%, var(--color-green) 0px, transparent 50%), radial-gradient(at 100% 100%, var(--color-second-green) 0px, transparent 50%)',
              'radial-gradient(at 100% 0%, var(--color-second-green) 0px, transparent 50%), radial-gradient(at 0% 100%, var(--color-green) 0px, transparent 50%)',
              'radial-gradient(at 0% 0%, var(--color-green) 0px, transparent 50%), radial-gradient(at 100% 100%, var(--color-second-green) 0px, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
      {/* ── Background: dot grid (matches site pattern) ── */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(circle, var(--color-green-alpha) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ── Ambient glow orbs ── */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: 'var(--color-green)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full blur-[100px] opacity-15"
        style={{ backgroundColor: 'var(--color-green)' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Status label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border px-5 py-2"
          style={{
            borderColor: 'var(--color-green-alpha)',
            backgroundColor: 'var(--color-container)',
          }}
        >
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{
              backgroundColor: 'var(--color-green)',
              boxShadow: '0 0 8px var(--color-green)',
            }}
          />
          <span
            className="font-mono text-[11px] uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-green)' }}
          >
            Página no encontrada
          </span>
        </motion.div>

        {/* Giant 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Shadow "404" behind for depth */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
            aria-hidden="true"
          >
            <span
              className="text-[180px] font-black leading-none tracking-tighter opacity-[0.04] md:text-[240px]"
              style={{ color: 'var(--color-green)' }}
            >
              404
            </span>
          </div>

          {/* Main "404" with green gradient */}
          <h1 className="relative text-[140px] font-black leading-none tracking-tighter md:text-[200px]">
            <span
              style={{
                background:
                  'linear-gradient(180deg, var(--color-green) 0%, var(--color-text) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              404
            </span>
          </h1>

          {/* Decorative line under 404 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 h-[2px] w-24 origin-center"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--color-green), transparent)',
            }}
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2
            className="mb-4 text-xl font-bold tracking-tight md:text-2xl"
            style={{ color: 'var(--color-text)' }}
          >
            Esta ruta no lleva a ningún lugar
          </h2>
          <p
            className="mx-auto max-w-md text-sm leading-relaxed md:text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            El enlace está roto o el recurso ya no existe. Puedes volver al
            inicio o explorar mis proyectos.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary: Go home */}
          <Link
            href="/"
            className="group relative overflow-hidden rounded-full border-2 px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--color-green)',
              color: 'var(--color-green)',
            }}
          >
            {/* Hover fill */}
            <span
              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ backgroundColor: 'var(--color-green-alpha)' }}
            />
            <span className="relative">← Volver al inicio</span>
          </Link>

          {/* Secondary: Portfolio */}
          <Link
            href="/#portfolio"
            className="rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--color-container-light)',
              backgroundColor: 'var(--color-container)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Ver proyectos
          </Link>
        </motion.div>

        {/* Technical hint card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-14 max-w-sm rounded-2xl border p-5"
          style={{
            borderColor: 'var(--color-container-light)',
            backgroundColor: 'var(--color-container)',
          }}
        >
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold"
              style={{
                backgroundColor: 'var(--color-green-alpha)',
                border: '1px solid var(--color-green)',
                color: 'var(--color-green)',
              }}
            >
              ?
            </span>
            <div className="text-left">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-text)' }}
              >
                ¿Cómo llegaste aquí?
              </p>
              <p
                className="mt-1 text-xs leading-relaxed"
                style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}
              >
                Verifica que la URL esté escrita correctamente. Si el problema
                persiste, puede que el contenido haya sido movido.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}