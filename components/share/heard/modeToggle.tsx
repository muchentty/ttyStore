"use client"
import { useState, useEffect } from "react"
import {useTheme} from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Laptop } from "lucide-react"
const ModeToggle= () => { 
   const [mounted,setMounted] = useState(false)
   const {theme,setTheme} = useTheme()
    useEffect(() => {
      function changeTheme(){
        setMounted(true)
      }  
      changeTheme()
    },[])   
    
    if(!mounted){
        return null
    }
    return <DropdownMenu>
                <DropdownMenuTrigger asChild> 
                    <Button variant={"ghost"} className="focus-visible:ring-0">
                     { theme === "system" ? <Sun /> : theme === "dark" ? <Moon /> : <Laptop />} 
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent  align="end">
                    <DropdownMenuLabel>外观</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked={theme === "system"} onClick={()=>{
                        setTheme("system")  
                    }}>system</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={()=>{
                        setTheme("dark")  
                    }}>dark</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={theme === "light"} onClick={()=>{
                        setTheme("light")  
                    }}>light</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>   
 } 
 export default ModeToggle