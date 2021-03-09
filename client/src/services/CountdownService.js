const baseURL = 'http://localhost:3000/api/conundrum-words/'

export default {
    getConundrumWords() {
      return fetch(baseURL)
        .then(res => res.json())
    }
}

