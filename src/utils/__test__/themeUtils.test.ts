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
    listItem: {
      base: 'min-h-[3.5rem] min-w-[50%] w-100',
    },
  },
}

const newTheme = {
  button: {
    button: {
      base: 'p-10 m-3',
    },
  },
  section: {
    listItem: {
      base: 'min-h-0 min-w-0',
    },
  },
}

jest.mock('@aboutbits/react-ui', () => ({
  defaultTheme,
}))

import {
  getTheme,
  getThemeAsJson,
  mergeTheme,
  overrideTheme,
} from '../themeUtils'

test('should merge two tailwind themes', () => {
  const result = mergeTheme(defaultTheme, newTheme)

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
      listItem: {
        base: 'w-100 min-h-0 min-w-0',
      },
    },
  })
})

test('should override a tailwind theme', () => {
  const result = overrideTheme(defaultTheme, newTheme)

  expect(result).toEqual({
    button: {
      button: {
        base: 'p-10 m-3',
      },
    },
    section: {
      header: {
        base: 'p-7',
      },
      listItem: {
        base: 'min-h-0 min-w-0',
      },
    },
  })
})

test('should apply the react-ui config to the default theme', () => {
  const config = {
    theme: {
      override: {
        button: newTheme.button,
      },
      merge: {
        section: newTheme.section,
      },
    },
  }

  const expectedResult = {
    button: {
      button: {
        base: 'p-10 m-3',
      },
    },
    section: {
      header: {
        base: 'p-7',
      },
      listItem: {
        base: 'w-100 min-h-0 min-w-0',
      },
    },
  }

  const result = getTheme(config)
  const jsonResult = getThemeAsJson(config)

  expect(result).toEqual(expectedResult)
  expect(jsonResult).toEqual(JSON.stringify(expectedResult))
})
