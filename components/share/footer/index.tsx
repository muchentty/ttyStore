import { APP_NAME } from "@/lib/constants"
const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return <footer className="w-full border-t mt-10">
        <div className="wrapper py-4 text-center text-sm text-muted-foreground">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
        </div>
    </footer>
}
export default Footer