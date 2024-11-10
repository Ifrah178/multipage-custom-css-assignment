import Link from "next/link";

export default function NavBar(){
    return(
        <div>
         <ul className="Nav">
         <Link className="navLink" href="/">HOME</Link>
         <Link className="navLink" href="/about">ABOUT</Link>
         <Link className="navLink" href="/contact">CONTACT</Link>
         </ul>
        </div>
    );
}