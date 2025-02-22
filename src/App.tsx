
// Pages:
import Home from './pages/home/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blogs from './pages/blogs'

// Components:
import Navbar from './components/navbar'
import Footer from './components/footer'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Typescript:
export interface RouterPathsType {
routerPaths: {
  index?: boolean
  path?: string
}[]
}

const MainLayout = ({routerPaths}: RouterPathsType) => <>
  <Navbar routerPaths={routerPaths} />
  <Outlet />
  <Footer routerPaths={routerPaths} />
</>

function App() {
  // Constants:
  const routerPaths = [
    {
      index: true,
      element:<Home />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ]
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout routerPaths={routerPaths}/>,
      errorElement: <h3 className='my-[35px]'>Error: Page Not Found</h3>,
      children: routerPaths
    }
  ])

  return ( 
    <>
      <div className='mx-[auto] px-[20px] xl:max-w-[1250px] 2xl:max-w-[1350px] min-h-screen w-full'>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
