import Particles from "@/components/magicui/particles";
import { themeState } from "@/store/atom/themeAtom";
import { useRecoilValue } from "recoil";
 
const ParticlesDemo = () => {
  const theme = useRecoilValue(themeState)
    return (
    <div className="absolute inset-0 min-h-screen">
      
      <Particles
        className="absolute inset-0  "
        quantity={100}
        ease={80}
        color= {theme === "dark" ? "#fff" : "#000"}
         
       
        refresh
      />
    </div>
  );
};

export default  ParticlesDemo;
