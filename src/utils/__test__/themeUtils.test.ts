import { mergeThemes } from '../themeUtils'

test('should merge two tailwind themes', () => {
  const defaultTheme = {
    button: {
      button: {
        base: 'px-4 py-3 bg-gray-500',
      },
    },
    section: {
      header: {
        base: 'p-7',
      },
    },
  }
  const theme = {
    button: {
      button: {
        base: 'p-10 m-3',
      },
    },
  }

  const result = mergeThemes(defaultTheme, theme)

  expect(result).toEqual({
    button: {
      button: {
        base: 'bg-gray-500 p-10 m-3',
      },
    },
    section: {
      header: {
        base: 'p-7',
      },
    },
  })
})
