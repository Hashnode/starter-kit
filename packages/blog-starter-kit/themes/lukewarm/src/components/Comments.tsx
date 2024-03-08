'use client'
import { getTableOfContents } from '@/lib/requests';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Card } from './ui/card';
type Props = {
    id: string;
}
export default function Comments({ id }: Props) {
    const { data } = useQuery({
        queryKey: ["TableOfContents", id],
        queryFn: () => getTableOfContents(id),
    });
    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };
    const comments = data?.comments.edges;

    return (
        <div>
            <Card className='w-[300px] my-1'>
                {comments &&
                    comments.map(({ node }) => (
                        <div key={node.dateAdded} className="px-1 py-2">
                            <div className="flex gap-2 items-center mb-2">
                                <img src={node.author.profilePicture} alt={node.author.username} className="w-10 h-10 object-cover rounded-full ml-2" />
                                <p className="font-bold">{node.author.name}</p>
                            </div>
                            <p>{node.content.markdown}</p>
                            <p>{formatDate(node.dateAdded)}</p>
                        </div>
                    ))}
            </Card>
        </div>
    )
}
