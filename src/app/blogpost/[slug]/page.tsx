export default function Page({ params }: { params: { slug: string } }) 
{
    return (
        <div className="min-h-screen">
            <h1>Blog Post: {params.slug}</h1>
        </div>
    );
}