'use client';

export default function ErrorMessage({ error }: { error?: string }) {
    return (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            {error || 'An error occurred while fetching data'}
        </div>
    );
}
