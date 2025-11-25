import { useFood } from "@/store/zustandstore"
import React from "react"
import * as htmlToImage from 'html-to-image';

const Save = ({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) => {
    const logs = useFood(state=>state.log)
    if(logs.length===0){
        return null
    }
    const handleDownload = () => {
        const node = targetRef.current 
        if(!node) return;
      htmlToImage
  .toJpeg(node)
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'food-data.png';
    link.href = dataUrl;
    link.click()
  })
  .catch((err) => {
    console.error('oops, something went wrong!', err);
  });
      }
  return (
    
<button className="text-primary hover:bg-accent active:bg-accent  border-3 border-foreground  transition duration-75  mx-auto block bg-card tracking-wide shadow-(--shadow-bg) dark:shadow-(--shadow-dark) mb-50 mt-20 rounded-2xl cursor-pointer p-3 text-3xl" onClick={handleDownload}>Download</button>
  )
}

export default Save