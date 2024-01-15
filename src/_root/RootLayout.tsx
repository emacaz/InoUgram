import LeftSidebar from '@/components/ui/shared/LeftSidebar'
import { Outlet } from 'react-router-dom'
import Bottombar from '@/components/ui/shared/Bottombar'
import TopBar from '@/components/ui/shared/Topbar'

const RootLayout = () => {
  return (
    <div className='w-full md:flex '>
      <TopBar />
      <LeftSidebar />

      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout