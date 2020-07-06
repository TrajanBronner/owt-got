export class Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: string;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];

  constructor(args: Partial<Book>) {
    if (args == null) {
      return;
    }
    this.url = args.url || '';
    this.name = args.name || '';
    this.isbn = args.isbn || '';
    this.authors = args.authors || [];
    this.numberOfPages = args.numberOfPages || '';
    this.publisher = args.publisher || '';
    this.country = args.country || '';
    this.mediaType = args.mediaType || '';
    this.released = args.released || '';
    this.characters = args.characters || [];
    this.povCharacters = args.povCharacters || [];
  }
}
