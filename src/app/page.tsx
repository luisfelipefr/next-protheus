import { Header } from './components/Header'
import { Table } from './components/Table'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen-xl my-0 mx-auto ">
      <Header />
      <Table />
    </main>
  )
}
