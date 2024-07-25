import React from 'react'
import { SearchButton } from './search-button'

export function Header() {
  return (
    <main className="flex flex-wrap">
      <h1 className="text-font-primary my-8 text-label text-label-primary ">
        Relatório de Demonstrativo de Apuração
      </h1>
      <form action="" className="flex text-black justify-center">
        <div className="flex justify-between text-black min-w-80 gap-9">
          <div>
            <label
              htmlFor="type"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1"
            >
              Tipo
            </label>
            <div className="w-56">
              <select
                id="type"
                name="type"
                required
                // className="m-1 border-0 outline-none cursor-pointer w-52 text-font-tertiary hover:text-label-primary appearance-none"
                className="h-10 border border-gray-300 text-gray-600 text-base rounded-lg block w-full px-1 cursor-pointer focus:outline-none focus:text-label-primary transition duration-300 hover:border-label-primary ease-out hover:scale-110 hover:-translate-y-1"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="all" className="text-font-primary">
                  Todos
                </option>
                <option value="intern" className="text-font-primary">
                  Interno
                </option>
                <option value="external" className="text-font-primary">
                  Externo
                </option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="library"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1"
            >
              Livro de ISS?
            </label>
            <div className="w-56">
              <select
                id="library"
                name="library"
                required
                className="h-10 border border-gray-300 text-gray-600 text-base rounded-lg block w-full px-1 cursor-pointer focus:outline-none focus:text-label-primary transition duration-300 hover:border-label-primary ease-out hover:scale-110 hover:-translate-y-1 "
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="yes" className="text-font-primary">
                  Sim
                </option>
                <option value="no" className="text-font-primary">
                  Não
                </option>
              </select>
            </div>
          </div>
          <div className="w-56">
            <label
              htmlFor="monthInitial"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1 "
            >
              Data Inicial
            </label>
            <input
              type="date"
              id="monthInitial"
              name="monthInitial"
              required
              className="h-10 border border-gray-300 text-gray-600 text-base rounded-lg block w-full px-1 cursor-pointer focus:outline-none focus:text-label-primary hover:border-label-primary transition duration-300 hover:border-label-primary ease-out hover:scale-110 hover:-translate-y-1"
            />
          </div>
          <div className="w-56">
            <label
              htmlFor="monthFinish"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1"
            >
              Data Final
            </label>
            <input
              type="date"
              id="monthFinish"
              name="monthFinish"
              required
              className="h-10 border border-gray-300 text-gray-600 text-base rounded-lg block w-full px-1 cursor-pointer focus:outline-none focus:text-label-primary transition duration-300 hover:border-label-primary ease-out hover:scale-110 hover:-translate-y-1"
            />
          </div>
        </div>
        <SearchButton />
      </form>
    </main>
  )
}
