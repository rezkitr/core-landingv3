'use client'
import { RiSearch2Line } from 'react-icons/ri'

const NavBarSearch = () => {
  return (
    <div className="relative text-alternativeGray10">
      <RiSearch2Line className="absolute inset-y-0 left-3 my-auto" />
      <input
        type="text"
        name="keyword"
        id="keyword"
        placeholder="Cari ..."
        className="h-[34px] w-full rounded-3xl bg-[#F6F6F6] pl-10 text-alternativeGray focus:outline-none xl:w-[170px]"
      />
    </div>
  )
}

export default NavBarSearch
