import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type RecentProps = {
  icon: JSX.Element
  label: string
}
type AccordianNavProps = {
  AccText: string
  recents: Array<RecentProps>;
  className?: string
}
const AccordianNav = ({ AccText, recents, className }: AccordianNavProps) => {
  return (
    <Accordion type='single' collapsible className={cn("w-auto text-muted-foreground transition-all ", className)} defaultValue='item-1' >
      <AccordionItem value="item-1" >
        <AccordionTrigger className='flex justify-between w-full uppercase text-md' > {AccText}</AccordionTrigger>
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


  )
}

export default AccordianNav
