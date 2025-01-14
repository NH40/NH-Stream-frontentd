class PublicPage {
  HOME = '/'

  STREAMS = '/streams'

  CHANEL(username: string) {
    return `/${username}`
  }

  STREAMS_SEARCH_TERM(searchTerm: string) {
    return `/streams?searchTerm=${searchTerm}`
  }
}

export const PUBLIC_PAGE = new PublicPage()
