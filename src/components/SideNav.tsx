import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function SideNav() {
    const session = useSession()
    const user = session.data?.user
  return (
    <nav className="stick top-0 items-start self-start px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
              {user != null && (
                  <li>
                  <Link href={`/profiles/${user.id}`}>Profile</Link>
              </li>
              )}
              {user == null ? 
              <li>
                  <button onClick={() => void signIn()}>Log In</button>
              </li>
             : <li>
                  <button onClick={() => void signOut()}>Log Out</button>
              </li>}
      </ul>
      </nav>
  )
}
