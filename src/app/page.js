import WheelFortune from "../components/WheelFortune"
import { getAllGames } from "@/lib/data"

export default async function Page() {
  const dbData = await getAllGames()
  
  if(!dbData || dbData.length === 0){
    return <div className="w-full h-[100dvh] flex justify-center items-center">
      <h1>Všechny hry byly vyhrány!</h1>
    </div>
  }

  const data = dbData.flatMap((item) => {
    return [
      {...item, winType: "win", style: { backgroundColor:"#0ea5e9", textColor: 'white' }},
      {key:null, winType: "lose", style: { backgroundColor:"#dc2626", textColor: 'white' }},
    ]
  })

 return <WheelFortune data={data}/>
}
