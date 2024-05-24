import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./shared/mode-toggle";

const Navbar = () => {
 const location = useLocation()
    
  return (
    <div className="fixed inset-0 z-40 h-[60px] bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-end border-b">
        <div className="flex items-end ">
          <div className="flex items-center  gap-4">
             <Link to={''} className="ml-5 font-medium transition-all hover:text-blue-500 hover:underline">En</Link>
            <Link to={`/`} className={cn(
              'ml-5 font-medium transition-all hover:text-blue-500 hover:underline',
              location.pathname === `/` && 'text-blue-500'
            )}>
              ВХОД
            </Link>

            <Link to={`/signup`} className={cn(
              'font-medium transition-all hover:text-blue-500 hover:underline',
              location.pathname === `/signup` && 'text-blue-500'
            )}>
              РЕГИСТРАЦИЯ
            </Link>
          </div>
        </div>

            <div className='flex items-center ml-5'>
            <ModeToggle />
            </div>
       
      </div>

    </div>
  )
}

export default Navbar