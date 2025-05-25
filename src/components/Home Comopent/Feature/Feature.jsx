import '../../../index.css';
import { GiAmpleDress } from "react-icons/gi";
const Feature = ()=>{
    return(
        <section className="py-[80px]">
            <div className="max-w-[1460px] w-full mx-auto px-10">
                <div className="flex flex-col gap-[60px]">
                    <div className="max-w-[600px] flex flex-col gap-4 mx-auto w-full text-center">
                        <h3 className="text-warning text-[20px] leading-[30px]
                         font-medium">Our Feature</h3>
                        <h2 className="text-black 
                        text-[35px] leading-[35px] font-bold uppercase">What you provide you</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="py-[60px] px-[20px] border-2 shadow-lg flex
                         flex-col justify-center items-center border-b-4 border-b-warning bg-[#faeee1] rounded-lg gap-4">
                            <GiAmpleDress className="text-warning text-center text-[70px]"/>
                            <h3 className="text-black text-[26px] font-semibold uppercase
                             leading-[42px] border-b-3 border-warning">Unique Dress</h3>
                            <p className="text-[black] font-medium
                            text-[16px] text-center">Unique designs to beautify your home and create a cozy vibe.
                             Find your favorite piece today!</p>
                        </div>
                        <div className="py-[60px] px-[20px] border-2 shadow-lg flex
                         flex-col justify-center items-center border-b-4 border-b-warning bg-[#faeee1] rounded-lg gap-4">
                            <GiAmpleDress className="text-warning text-center text-[70px]"/>
                            <h3 className="text-black text-[26px] font-semibold uppercase
                             leading-[42px] border-b-3 border-warning">Unique Dress</h3>
                            <p className="text-[black] font-medium
                            text-[16px] text-center">Unique designs to beautify your home and create a cozy vibe.
                             Find your favorite piece today!</p>
                        </div>
                        <div className="py-[60px] px-[20px] border-2 shadow-lg flex
                         flex-col justify-center items-center border-b-4 border-b-warning bg-[#faeee1] rounded-lg gap-4">
                            <GiAmpleDress className="text-warning text-center text-[70px]"/>
                            <h3 className="text-black text-[26px] font-semibold uppercase
                             leading-[42px] border-b-3 border-warning">Unique Dress</h3>
                            <p className="text-[black] font-medium
                            text-[16px] text-center">Unique designs to beautify your home and create a cozy vibe.
                             Find your favorite piece today!</p>
                        </div>
                        <div className="py-[60px] px-[20px] border-2 shadow-lg flex
                         flex-col justify-center items-center border-b-4 border-b-warning bg-[#faeee1] rounded-lg gap-4">
                            <GiAmpleDress className="text-warning text-center text-[70px]"/>
                            <h3 className="text-black text-[26px] font-semibold uppercase
                             leading-[42px] border-b-3 border-warning">Unique Dress</h3>
                            <p className="text-[black] font-medium
                            text-[16px] text-center">Unique designs to beautify your home and create a cozy vibe.
                             Find your favorite piece today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;