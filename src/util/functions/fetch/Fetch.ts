
export const Fetch = async (value: string): Promise<any> => {
  const api = await fetch(value)
  const json = await api.json()

   return json
} 