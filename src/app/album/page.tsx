export default async function AlbumPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) { throw new Error("Failed to fetch data"); }
    const albums: [{userId: number, id: number, title: string}] = await response.json();

    return <ul>
        {
            albums.map((album) => <li key={album.id} className="border">
                <p>userId: {album.userId}</p>
                <p>title: {album.title}</p>
            </li>)
        }
    </ul>
}