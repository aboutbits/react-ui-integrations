import fs from 'fs'
import path from 'path'

export const find = (...args: string[]): string | null => {
  const rel = path.join.apply(null, [].slice.call(args))
  return findStartingWith(path.dirname(require.main?.filename || ''), rel)
}

const findStartingWith = (start: string, rel: string): string | null => {
  const file = path.join(start, rel)
  try {
    fs.statSync(file)
    return file
  } catch (err) {
    // They are equal for root dir
    if (path.dirname(start) !== start) {
      return findStartingWith(path.dirname(start), rel)
    }
    return null
  }
}
