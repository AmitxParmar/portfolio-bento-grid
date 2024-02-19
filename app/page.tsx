import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-10 p-8">
      <div className="col-span-9 border">
        <div className="grid h-full grid-rows-8">
          <div className="row-span-3 border">test</div>
          <div className="row-span-2 border">test123</div>
          <div className="row-span-3 border">test</div>
        </div>
      </div>
      <div className="col-span-3 rounded-3xl bg-yellow-400">
        <div className="grid h-full grid-rows-8">
          <div className="row-span-2 border">test</div>
          <div className="row-span-4 border">test123</div>
          <div className="row-span-2 border">test</div>
        </div>
      </div>
    </div>
  )
}
