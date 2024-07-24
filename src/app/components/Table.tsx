import React from 'react'

export function Table() {
  return (
    <div className="pt-10">
      <table className="table-auto min-w-full">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              CFOP
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              NCM
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              Descricao do produto
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              Aliq
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              Qtde
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              Valor Produto
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              2424213
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              099082
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              joao@example.com
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              12
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              120
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              90
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              Maria
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              25
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              maria@example.com
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              12
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              120
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              90
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
