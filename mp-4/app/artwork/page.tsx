

import ArtworkDetails from '@/components/ArtworkDetails'

async function fetchArtwork(id: string) {
    const res = await fetch(`/api/artworks/${id}`);

    if (!res.ok) {
        throw new Error('Failed to load artwork');
    }

    return res.json();
}

export default async function ArtworkPage({ params }: { params: { id: string } }) {
    const artwork = await fetchArtwork(params.id);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>
            {artwork.primaryimageurl && (
                <img
                    src={artwork.primaryimageurl}
                    alt={artwork.title}
                    className="mb-6 rounded-lg shadow-lg"
                />
            )}
            <div className="space-y-2">
                <p><strong>Artist:</strong> {artwork.people?.[0]?.name || 'Unknown'}</p>
                <p><strong>Medium:</strong> {artwork.medium}</p>
                <p><strong>Date:</strong> {artwork.dated}</p>
            </div>
        </div>
    );
}
