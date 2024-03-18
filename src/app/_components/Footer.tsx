import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

export default function Footer(){
  return(
    <footer className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-6 bg-neutral-900 text-white gap-2">
      <p>© 2024 Infinite Freedom Inc. All rights reserved.</p>
      <ul className="flex gap-1">
        <li>
          <FaXTwitter size="24" />
        </li>
        <li>
          <FaGithub size="24" />
        </li>
        <li>
          <FaDiscord size="24" />
        </li>
      </ul>
    </footer>
  )
}
