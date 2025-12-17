import Image from "next/image"
import Loader from "@/assets/loader.gif"
/**
 * LoadingPage组件
 * 这是一个简单的加载页面组件，用于显示加载状态
 * @returns {JSX.Element} 返回一个包含"Loading"文本的React元素
 */
const LoadingPage=()=>{
    return <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
    <Image src={Loader} height={150} width={150} alt="Loading"/>
    </div >
}
export default LoadingPage