'use client'

import { Tab } from '@headlessui/react'

import { SectionTitle } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

import './styles.scss'

const ProductList = () => {
  const CATEGORIES = [
    'Rekomendasi',
    'Rilis Terbaru',
    'Mobile Game',
    'PC Game',
    'Voucher Game',
    'Entertainment',
  ]

  return (
    <div className="home-product-list mt-16">
      <SectionTitle title="Temukan Game Favorit" />
      <div className="container mt-8 flex h-[500px] flex-col space-y-6 md:flex-row md:space-x-12">
        <Tab.Group>
          <Tab.List className="flex h-fit items-center overflow-x-scroll md:flex-col md:items-start md:space-y-4">
            {CATEGORIES.map((cat) => (
              <Tab
                key={cat}
                className={({ selected }) =>
                  `text-primaryBlack py-2 md:py-3 px-4 rounded-lg text-sm min-w-max md:w-36 md:text-left outline-none ${
                    selected
                      ? 'selected bg-primaryBlack text-white font-semibold'
                      : ''
                  }`
                }
              >
                {cat}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="flex-1">
            <Tab.Panel>
              <div className="grid grid-cols-5">{/* CONTENT GOES HERE */}</div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default ProductList
