
"use client"
import { APP_NAME } from "@/lib/constants";
import Image from "next/image"  
import { Button } from "@/components/ui/button"
const notFoundPage=()=>{
    return <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src={"/images/logo.svg"} alt={`${APP_NAME}`} width={48} height={48} priority={true}/>
        <div className="p-6 w-1/3 rounded-lg shadow-md text-content">
            <h1> notFound </h1>
            <p>Can not find request page </p>
            <Button variant="outline" className="mt-2 ml-4" onClick={()=>{
                window.location.href="/"
            }}>回到首页</Button>
        </div>
    </div>
}

export default notFoundPage;