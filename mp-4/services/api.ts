export async function fetchArtworks() {
    try {
        const res = await fetch('/api/artworks');
        if (!res.ok) throw new Error('Failed to fetch');
        return await res.json();
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return [];
    }
}

export async function fetchArtworkDetails(id: string) {
    try {
        const res = await fetch(
            `https://api.harvardartmuseums.org/object/${id}?apikey=${process.env.HARVARD_API_KEY}`
        );
        if (!res.ok) throw new Error('Failed to fetch details');
        return await res.json();
    } catch (error) {
        console.error('Error fetching artwork details:', error);
        return null;
    }
}
