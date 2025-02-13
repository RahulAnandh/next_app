import Image from "next/image";
import Logo from "../../public/logo.svg";
import LayOut from "@/components/Layout";
export default function Home() {
  return true ? (
    <div>
      <LayOut />
    </div>
  ) : (
    <div>Login</div>
  );
}
