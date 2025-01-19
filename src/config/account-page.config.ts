class AccountPage {
  AUTH = '/account'

  CREATE = `${this.AUTH}/create`
  LOGIN = `${this.AUTH}/login`
  VERIFY = `${this.AUTH}/verify`
  DEACTIVATE = `${this.AUTH}/deactivate`

  RECOVERY(path?: string) {
    return `${this.AUTH}/recovery/${path ? `${path}` : ''}`
  }
}

export const ACCOUNT_PAGE = new AccountPage()
