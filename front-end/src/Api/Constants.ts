export const FETCH_BOOKS_API = "https://gutendex.com/books/";

type formatesType = {
    "image/jpeg": string,
}
export type BookType = {
    id: number, 
    title: string,
    authors: [{name: string, birth_year: string, death_year: string}],
    translators: [],
    subjects: [],
    bookshelves: [],
    languages: [],
    copyright: boolean,
    media_type: string,
    formats: formatesType,
    download_count: number,
}

export type BooksResponse = {
    count: number,
    next: string,
    previous: string,
    results: BookType[],
}