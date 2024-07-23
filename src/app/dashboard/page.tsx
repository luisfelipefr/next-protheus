import React from 'react'
export default function Page() {
  return (
    <main>
      <h1 className="text-font-primary">
        Relatório de Demonstrativo de Apuração
      </h1>
      <form action="" className="flex justify-between text-black">
        <div className="w-full w-64">
          <label
            htmlFor="type"
            className="block text-sm text-font-secondary font-medium text-slate-700 mb-1 "
          >
            Tipo
          </label>
          <div className="inline-block overflow-hidden border-2 rounded text-center">
            <select
              id="type"
              name="type"
              required
              className="mt-1 mb-1  pl-2 pr-10 border-0 outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="all" className="text-label">
                Todos
              </option>
              <option value="intern">Interno</option>
              <option value="external">Externo</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="library">Livro de ISS?</label>
          <select id="library" name="library" required>
            <option value="">Selecione</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <div>
          <label htmlFor="monthInitial">Data Inicial</label>
          <input type="date" id="monthInitial" name="monthInitial" required />
        </div>
        <div>
          <label htmlFor="monthFinish">Data Final</label>
          <input type="date" id="monthFinish" name="monthFinish" required />
        </div>
        <button type="submit">Gerar Relatório</button>
      </form>
    </main>
  )
}
