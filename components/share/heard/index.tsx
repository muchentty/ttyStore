
import Link from "next/link"
import Image from "next/image"  
import { APP_NAME } from "@/lib/constants"
import Menu from "./menu"

const Heard=()=>{
    return <header className="w-full border-b ">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href={"/"} className="flex-start">
                <Image src="/images/logo.svg" alt={APP_NAME} width={48} height={40} priority={true}/>
                <span className="hidden text-lg font-bold ml-2 ">{APP_NAME}</span>
                </Link>
            </div>
            <div className="space-x-2">
                <Menu />
            </div>
        </div>
        
    </header>
}
export default Heard