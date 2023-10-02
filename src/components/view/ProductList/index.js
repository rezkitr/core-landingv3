'use client'

import { Tab } from '@headlessui/react'

import { SectionTitle } from '@/components/others'

import './styles.scss'
import { ProductCardV1 } from '@/components/productcard'

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
      <div className="container mt-8 flex h-[500px] space-x-12">
        <Tab.Group>
          <Tab.List className="flex flex-col items-start space-y-4">
            {CATEGORIES.map((cat) => (
              <Tab
                key={cat}
                className={({ selected }) =>
                  `text-primaryBlack py-3 px-4 rounded-lg text-sm w-36 text-left outline-none ${
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
              <div className="grid grid-cols-5">{/* CONTENT GIES HERE */}</div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default ProductList
