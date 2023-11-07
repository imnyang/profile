import Image from "next/image";
import Profile from "@/../public/profile.jpg";

export default function Home() {
  return (
    <main>
      <header></header>
      <div className="DivImage">
        <Image alt="Profile" src={Profile} width={80} height={80} />
      </div>
    </main>
  );
}
