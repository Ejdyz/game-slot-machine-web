"use client"
import { useEffect, useState, useRef } from "react"
import { Dialog } from 'primereact/dialog';
import dynamic from "next/dynamic"
import crypto from "crypto"
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation"

const Wheel = dynamic(() =>
  import('react-custom-roulette').then((mod) => mod.Wheel), 
  { ssr: false }
)

const WheelFortune = ({data}) => {
  const router = useRouter()
  const [spinning, setSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);
  const spinningRef = useRef(false)

  const shuffleArray = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      const buf = crypto.randomBytes(4);
      const randomIndex = buf.readUInt32BE(0) % (i + 1);
      [data[i], data[randomIndex]] = [data[randomIndex], data[i]];
    }

    let index = 0;
    const newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      newData[i] = data[index];
      index++;
    }
    return newData;
  }

  const confettiStorm = () => {
    var end = Date.now() + (3 * 1000);
    // var colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: Math.floor(Math.random() * 10),
        angle: 60,
        spread: 55,
        zIndex:2000,
        origin: { x: 0 },
        // colors: colors
      });
      confetti({
        particleCount: Math.floor(Math.random() * 10),
        angle: 120,
        spread: 55,
        zIndex:2000,
        origin: { x: 1 },
        // colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  useEffect(() => {
    if(!rootRef.current) return;

    rootRef.current.focus();

    const handleSpinClick = (e) => {
      if(e.code !== "Space") return;

      if (!spinning && !spinningRef.current) {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setSpinning(true);
        spinningRef.current = true;
      }
    }

    const currentRef = rootRef.current;
    currentRef.addEventListener("keydown", handleSpinClick);

    return () => {
      currentRef.removeEventListener("keydown", handleSpinClick);
    };
  }, []);

  const removeGame = async (key) => {
    try {
      const response = await fetch("/api/game/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ key })
      })

      if(response.ok){
        const json = await response.json()
        if(json.success){
          console.log("Game removed")
          router.refresh()
        } else {
          console.error(json.message)
        }
      } else {
        console.error("Network error")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSpinEnd = () => {
    spinningRef.current = false;
    setSpinning(false);
    setVisible(true);
    if (data[prizeNumber].winType === "win") {
      removeGame(data[prizeNumber].key)
      confettiStorm()
    }
  }
  
  return (
    <>
      <div tabIndex={0} ref={rootRef} className="w-screen flex justify-center items-center h-[100dvh] overflow-hidden">
        <div className="scale-[170%] ">
          <Wheel
            outerBorderWidth={1}
            radiusLineWidth={1}
            innerRadius={20}
            spinDuration={1}
            mustStartSpinning={spinning}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              handleSpinEnd();
            }}
          />
        </div>
      </div>
      <Dialog header={data[prizeNumber].winType === "win"? <h1 className="text-green-500 ">🥳 Výhra!</h1> : <h1 className="text-red-500">😭 Prohra</h1>} visible={visible} style={{ width: '50vw' }} draggable={false} onHide={() => {if (!visible) return; setVisible(false); }}>
        {data[prizeNumber].winType === "win" 
          ?
          <div>
            <h1 className="text-xl">Vyhráváte hru:</h1>
            <h1 className="text-3xl text-center font-semibold">{data[prizeNumber].name}</h1>
            <h1 className="text-2xl text-center">{data[prizeNumber].key.toUpperCase()}</h1>
            <p>Klíč si <strong>vyfoťte</strong> a vložte do služby Steam.</p>
          </div>
          :(<div>Příště to určitě vyjde!</div>)
        }
      </Dialog>
    </>
  )
}
 
export default WheelFortune;