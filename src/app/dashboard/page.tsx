import React from 'react'
export default function Page() {
  return (
    <main className="max-w-screen-xl my-0 mx-auto">
      <h1 className="text-font-primary my-8 text-label mx-2 text-label-primary">
        Relatório de Demonstrativo de Apuração
      </h1>
      <form action="" className="flex text-black min-w-80 justify-center">
        <div className="flex justify-between text-black min-w-80 gap-9">
          <div>
            <label
              htmlFor="type"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1"
            >
              Tipo
            </label>
            <div className="inline-block overflow-hidden rounded-sm border w-56">
              <select
                id="type"
                name="type"
                required
                className=" m-1 border-0 outline-none cursor-pointer w-52"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="all">Todos</option>
                <option value="intern">Interno</option>
                <option value="external">Externo</option>
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
            <div className="inline-block overflow-hidden rounded-sm border w-56">
              <select
                id="library"
                name="library"
                required
                className="m-1 border-0 outline-none cursor-pointer w-52"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="monthInitial"
              className="block text-sm text-font-secondary font-medium text-slate-700 mb-1"
            >
              Data Inicial
            </label>
            <input
              type="date"
              id="monthInitial"
              name="monthInitial"
              required
              className="rounded-sm border text-center py-0.5 cursor-pointer w-56 p-2"
            />
          </div>
          <div>
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
              className="rounded-sm text-center border py-0.5 cursor-pointer w-56 p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="border-0 rounded-lg p-2 w-px-24 flex-none w-40 h-10 mx-20 my-5 mx-10 bg-label-primary hover:bg-label-hover"
        >
          <span className="text-font-balance">Gerar Relatório</span>
        </button>
      </form>
    </main>
  )
}
