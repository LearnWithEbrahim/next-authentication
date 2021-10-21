import { getSession, useSession } from "next-auth/client";

const Blog = ({ data }) => {
    const [session] = useSession();
    console.log(session);
    return (
        <div>
            <h2>Blog - {data}</h2>
        </div>
    );
};

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false,
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List Of Premium Blogs' : 'List of Free Blogs'
        }
    }
}