import { Card } from '@/components/ui/card'
import { Clock, IndianRupee } from 'lucide-react'
import type { Service } from '@/lib/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group h-full flex flex-col">
      {service.image && (
        <div className="w-full h-48 bg-muted overflow-hidden relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {service.category}
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-poppins font-bold text-lg mb-2 text-foreground">
          {service.name}
        </h3>
        
        <p className="text-foreground/70 text-sm mb-4 leading-relaxed flex-grow">
          {service.description}
        </p>

        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground/70 text-sm">
              <IndianRupee size={16} />
              <span>Price</span>
            </div>
            <span className="font-poppins font-bold text-accent text-lg">
              ₹{service.price}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground/70 text-sm">
              <Clock size={16} />
              <span>Duration</span>
            </div>
            <span className="font-poppins font-semibold text-foreground">
              {service.duration} min
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
