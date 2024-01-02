import Board from "./components/Board";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Timeline />
      <Board />
    </main>
  )
}
