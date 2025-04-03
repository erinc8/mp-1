// components/ArtworkDetails.tsx
'use client'

import { useState, useEffect } from 'react'

export default function ArtworkDetails({ id }: { id: string }) {
    const [artwork, setArtwork] = useState<Artwork | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const response = await fetch(
                    `https://api.harvardartmuseums.org/object/${id}?apikey=${process.env.NEXT_PUBLIC_HARVARD_API_KEY}`
                )

                if (!response.ok) {
                    throw new Error(
                        response.status === 404
                            ? 'Artwork not found'
                            : 'Failed to load artwork'
                    )
                }

                const data = await response.json()
                setArtwork(data)
            } catch (err: any) {
                setError(err.message)
            }
        }

        fetchArtwork()
    }, [id])

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                Error: {error}
            </div>
        )
    }

    if (!artwork) {
        return (
            <div className="p-4 bg-gray-50 text-gray-600 rounded-lg">
                Loading artwork details...
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{artwork.title}</h1>
            {artwork.primaryimageurl && (
                <img
                    src={artwork.primaryimageurl}
                    alt={artwork.title}
                    className="w-full max-h-96 object-contain rounded-lg"
                />
            )}
            <div className="space-y-2">
                {artwork.people?.[0]?.name && (
                    <p className="text-lg">
                        <strong>Artist:</strong> {artwork.people[0].name}
                    </p>
                )}
                {artwork.medium && (
                    <p className="text-lg">
                        <strong>Medium:</strong> {artwork.medium}
                    </p>
                )}
                {artwork.dated && (
                    <p className="text-lg">
                        <strong>Date:</strong> {artwork.dated}
                    </p>
                )}
            </div>
        </div>
    )
}

interface Artwork {
    title: string
    primaryimageurl?: string
    medium?: string
    dated?: string
    people?: Array<{ name: string }>
}
