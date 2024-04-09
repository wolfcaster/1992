import Image from "next/image";
import Game from "../components/game";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-0 w-screen h-screen">
      <div>
        <Game />
      </div>
    </main>
  );
}
