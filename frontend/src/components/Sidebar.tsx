import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {  Computer, Flame, Hammer, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  const items = [
    {
      icon: <Home className="h-4 w-4" />,
      label: "Home",
    },
    {
      icon: <Flame className="h-4 w-4" />,
      label: "Popular",
    },
  ]
  const recents = [
    {
      icon: <Hammer className="h-4 w-4" />,
      label: "Engineering Books",
    },
    {
      icon: <Computer className="h-4 w-4" />,
      label: "IT Papers ",
    },
  ]

  return (
    <div className="hidden  md:block h-full w-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start  text-xl font-medium ">
            {items.map((item) => (
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/90"
                key={item.label}
              >
                {item.icon} {item.label}
              </Link>
            ))}
            <Accordion type='single' collapsible  className="w-auto text-muted-foreground transition-all mt-3" defaultValue='item-1' >
              <AccordionItem value="item-1" >
                <AccordionTrigger className='flex justify-between w-full uppercase text-md' > Recent</AccordionTrigger>
                <AccordionContent>
                  {recents.map((recent) => (
                    
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-lg text-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/90"
                      key={recent.label}
                    >
                      {recent.icon} {recent.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar
