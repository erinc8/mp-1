import { fetchArtworkDetails } from '@/services/api';

export default async function ArtworkPage({
                                              params
                                          }: {
    params: { id: string }
}) {
    const artwork = await fetchArtworkDetails(params.id);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <img
                    src={artwork.primaryimageurl}
                    alt={artwork.title}
                    className="w-full h-96 object-cover"
                />
                <div>
                    <p className="text-lg mb-2">Artist: {artwork.people?.[0]?.name || 'Unknown'}</p>
                    <p className="text-lg mb-2">Date: {artwork.dated}</p>
                    <p className="text-lg mb-2">Medium: {artwork.medium}</p>
                </div>
            </div>
        </div>
    );
}
