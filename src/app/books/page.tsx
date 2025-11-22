export default async function Page() {
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json();
    return <code>{JSON.stringify(books)}</code>;
}