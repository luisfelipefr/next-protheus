'use client'

import { useFormStatus } from 'react-dom'
export function SearchButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="flex-none w-44 h-10 mx-20 my-5 bg-label-primary hover:bg-label-hover focus:outline-none rounded-lg transition duration-300 ease-out hover:scale-110 hover:-translate-y-1  "
    >
      <span className="text-font-balance">
        {pending ? 'Carregando...' : 'Buscar'}
      </span>
    </button>
  )
}
