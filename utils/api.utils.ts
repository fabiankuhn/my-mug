const fetchPostJSON = async (url: string, data?: {}) => await fetch(url, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: JSON.stringify(data || {}),
}).then(async (res) => {
  if (!res.ok) {
    throw await res.json()
  }
  return res.json()
})

export {fetchPostJSON}
