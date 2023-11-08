import Image from "next/image";
import Profile from "@/../public/profile.jpg";

export default function Home() {
  return (
    <main>
      <header>
        <div className="DivImage">
          <Image alt="Profile" src={Profile} width={85} height={85} />
        </div>
      </header>
    </main>
  );
}
