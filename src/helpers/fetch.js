export const browserFetch = ({
  url,
  method = 'GET',
  body,
  headers = {}
}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  }

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body)
  }

  return fetch(url, options)
}
