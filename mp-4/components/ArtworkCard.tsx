import React from 'react';

type ArtworkProps = {
    artwork: {
        id: string;
        title: string;
        primaryimageurl?: string;
        dated?: string;
        people?: { name: string }[];
    };
};

const ArtworkCard: React.FC<ArtworkProps> = ({ artwork }) => {
    return (
        <div className="border rounded-lg shadow-md p-4">
            <img
                src={artwork.primaryimageurl || '/placeholder.jpg'}
                alt={artwork.title || 'Untitled'}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">
                {artwork.title || 'Untitled'}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
                {artwork.dated ? `Date: ${artwork.dated}` : 'Date unknown'}
            </p>
            <p className="text-sm text-gray-600">
                {artwork.people?.[0]?.name ? `Artist: ${artwork.people[0].name}` : 'Artist unknown'}
            </p>
        </div>
    );
};

export default ArtworkCard;
