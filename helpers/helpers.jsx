import { useSession } from 'next-auth/react';
export const imageLoader= ({src}) => {
    const { data: session } = useSession();
    return `${session?.user.image}`;
}