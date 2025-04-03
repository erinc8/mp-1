// error-boundary.tsx
'use client';

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 text-red-700 bg-red-100 rounded-lg">
            {children || 'Something went wrong. Please try again later.'}
        </div>
    );
}
