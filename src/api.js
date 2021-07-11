import { asyncScheduler, of } from 'rxjs'
import { take, delay, retryWhen, tap, map, filter, switchMap, throttleTime } from 'rxjs/operators'

const BASE_URL = 'https://search-api.mikexu1.repl.co/'
const getRequestUrl = (query) => {
  const params = new URLSearchParams({ query })
  return `${BASE_URL}?${params}`
}
const getResponse = async (url) => {
  // try {
  const response = await fetch(url)
  const { posts } = await response.json()
  return posts
  // } catch (e) {
  //   throw new Error('request failed')
  // }
}

// last working state without retry on error
// export const getSimilarPosts = (subject, setIsLoading) =>
//   subject.pipe(
//     filter(v => v.length > 2),
//     throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
//     map(getRequestUrl),
//     tap(() => setIsLoading(true)),
//     tap(url => { console.log('request', url) }),
//     switchMap(async (url) => await getResponse(url)),
//   )

export const getSimilarPosts = (subject, setIsLoading) =>
  subject.pipe(
    filter(v => v.length > 2),
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    map(getRequestUrl),
    tap(() => setIsLoading(true)),
    tap(url => { console.log('request', url) }),
    switchMap(async (url) => await getResponse(url)),
    retryWhen(errors => errors.pipe(delay(1000)))
  )