export function Video({ id }: { id: string }) {
    return (
        <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder={0}
                height={315}
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                width={560}
            />
        </div>
    );
}
