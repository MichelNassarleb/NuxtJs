export default defineEventHandler(async () => {

    // handle query params
    // const { name } = getQuery(event)
  
    // handle post data
    // const { age } = await readBody(event)
  
    // return {
    //   message: `Hello, ${name}! You are ${age} years old.`
    // }
  
    // api call with private key
    const {currencyKey } = useRuntimeConfig();
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apiKey=${currencyKey}`)
  
    return data
  })