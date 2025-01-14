class PublicPage {
  HOME = '/'

  STREAMS = '/streams'

  STREAMS_SEARCH_TERM(searchTerm: string) {
    return `/streams?searchTerm=${searchTerm}`
  }
}

export const PUBLIC_PAGE = new PublicPage()
