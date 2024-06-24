import Link from "next/link"
import Btn from "../Shared/Btn/Btn"

const Header = () => {
  return (
    <div className="py-4 shadow-xl">
        <nav className="container px-4 md:px-0 mx-auto flex justify-between items-center">
            <Link href='/' className="text-xl md:text-3xl font-bold">Dream Job</Link>
            <div className="flex items-center gap-4"> 
               
                <Btn btnLabel={'Login'}/>
                <Btn btnLabel={'Post New Job'}/>
            </div>
        </nav>
    </div>
  )
}

export default Header