export async function Table() {
  const response = await fetch('http://localhost:3000/products')
  const data = await response.json()

  return (
    <div className="pt-5">
      <select className="block border-b-2 border-gray-200 h-10 text-gray-600 px-1 mb-5 cursor-pointer focus:outline-none focus:border-label-primary hover:border-label-primary">
        <option value="demo">Demonstrativo da produção</option>
        <option value="diversify">Demonstrativo diversos</option>
        <option value="Total">Total</option>
      </select>
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
            <th className="px-5 py-3 border-b-2 border-label-primary bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              Valor Produto
            </th>
            <th className="px-5 py-3 border-b-2 border-label-primary bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              BASE Calc
            </th>
            <th className="px-5 py-3 border-b-2 border-label-primary bg-gray-100 text-left text-xs font-semibold text-label-primary uppercase tracking-wider">
              ICMS-Normal
            </th>
          </tr>
        </thead>

        {data.map((item: any) => (
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.CFOP}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.NCM}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.DESC}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.ALIQ}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.QTDE}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.VLOR}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.BASE}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {item.ICMS}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
