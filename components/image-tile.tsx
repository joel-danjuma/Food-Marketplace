import Image from "next/image"
import { Card, CardFooter } from "@nextui-org/react";

const imageTile = (prop : []) => {
  return (
   <section>
    {prop.map((image : string, i : number) => {
        image
    })}
   </section>
  )
}

export default imageTile
