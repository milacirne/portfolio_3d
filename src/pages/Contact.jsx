import { Suspense, useRef } from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import emailjs from '@emailjs/browser'
import useAlert from "../hooks/useAlert"

import Alert from "../components/Alert"
import Loader from "../components/Loader"

import Fox from "../models/Fox"

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => setCurrentAnimation('walk')

  const handleBlur = () => setCurrentAnimation('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Camila',
        from_email: form.email,
        to_email: 'camila.cirne22@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      showAlert({
        show: true,
        text: "Obrigada pela sua mensagem! 😃",
        type: "success",
      })

      setTimeout(() => {
        hideAlert(false)
        setCurrentAnimation("idle")
        setForm({ name: '', email: '', message: '' })
      }, [3000])

    }).catch((error) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      showAlert({
        show: true,
        text: "Eu não recebi a sua mensagem 😢",
        type: "danger",
      })
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Entre em contato</h1>
        
        <form 
          className="w-full flex flex-col gap-5 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">Nome</label>
          <input 
            type="text" 
            name="name" 
            className="input" 
            placeholder="O seu nome" 
            required 
            value={form.name} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur}></input>
          <label className="text-black-500 font-semibold">E-mail</label>
          <input 
            type="email" 
            name="email" 
            className="input" 
            placeholder="o_seu_email@gmail.com" 
            required value={form.email} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur}></input>
          <label className="text-black-500 font-semibold">A sua mensagem</label>
          <textarea 
            type="text" 
            name="message" 
            rows={4} 
            className="textarea resize-none" 
            placeholder="Deixe-me saber como posso te ajudar!" 
            required value={form.message} 
            onChange={handleChange} 
            onFocus={handleFocus} 
            onBlur={handleBlur}/>
          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation} 
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact