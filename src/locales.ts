export type localeType = 'uz' | 'ru'

export const locales: Array<localeType> = ['ru', 'uz']

export const getLocaleTitle = (locale: localeType) => {
  switch (locale) {
    case 'ru':
      return 'Русский язык'
    case 'uz':
      return 'Узбекский язык'

    default:
      return ''
  }
}
