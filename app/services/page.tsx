'use client'

import { useState, useMemo, useEffect } from 'react'
import { ServiceCard } from '@/components/services/service-card'
import { ServiceFilters } from '@/components/services/service-filters'
import { ServiceSearch } from '@/components/services/service-search'
import { SERVICE_CATEGORIES } from '@/lib/constants'
import type { Service } from '@/lib/types'

interface ServicesPageProps {
  searchParams: { category?: string }
}

async function fetchServicesData(): Promise<Service[]> {
  try {
    const { fetchServices } = await import('@/lib/sheets')
    return await fetchServices()
  } catch {
    return []
  }
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Load services on mount
  useEffect(() => {
    fetchServicesData().then(setServices)
  }, [])


  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [services, activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4 text-balance">
            Our Services
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            Choose from our comprehensive range of premium beauty and hair care services.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-background border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ServiceSearch value={searchQuery} onChange={setSearchQuery} />
          <ServiceFilters
            categories={SERVICE_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground/70 text-lg mb-4">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
