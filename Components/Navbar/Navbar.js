import React from 'react';
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
const Navbar = () => {

    const [session, loading] = useSession();
    // console.log(session, loading);
    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            {/* ${!session && loading ? 'loading' : 'loaded'} */}
            <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                {!session && !loading &&
                    <li>
                        <Link href="/api/auth/signin">
                            <a onClick={e => {
                                e.preventDefault()
                                signIn("github");
                            }}> SignIn  </a>
                        </Link>
                    </li>
                }
                {session &&
                    <li>
                        <Link href="/api/auth/signout">
                            <a onClick={e => {
                                e.preventDefault()
                                signOut();
                            }}> SignOut  </a>
                        </Link>
                    </li>
                }
            </ul>
        </nav >
    );
};

export default Navbar;