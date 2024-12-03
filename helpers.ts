export async function getDayFile(path: string): Promise<string[]> {
  const list = await Deno.readTextFile(path)

  return list.split('\r\n')
}
