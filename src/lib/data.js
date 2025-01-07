import prisma from "./prisma"

export async function getAllGames(){
  return await prisma.game.findMany()
} 

export async function removeGameByKey(key){
  try {
    return await prisma.game.delete({
      where: {
        key: key
      }
    })
  } catch (error) {
    return false
  }
}

export async function generateGamesToDb(){
  function generateRandomKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  let data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: generateRandomKey(),
      name: `Hra ${i + 1}`,
      url: `https://example.com/${i + 1}`,
      imgUrl: `https://example.com/${i + 1}.jpg`
    })
  }

  prisma.game.createMany({
    data: data
  }).then(() => {
    console.log("Database filled")
    return true
  }).catch((error) => {
    console.error(error)
    return false
  }) 
}