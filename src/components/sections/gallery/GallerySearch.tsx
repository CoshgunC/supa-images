"use client"
import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UploadImage from "./UploadImage"

export default function GallerySearch() {
  const [query, setQuery] = useState("")

  return (
    <div className="flex items-center gap-2 p-2 border-b border-border">
      <div className="flex items-center justify-between border border-gray-300 rounded-md">
        <Input
          type="text"
          placeholder="Search images..."
          className="flex-1 rounded-md border-none px-3 py-2 text-sm max-w-[300px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="ghost"
          className="w-10 h-10"
          disabled={query.length === 0}
        >
          <Search/>
        </Button>
      </div>
      <UploadImage/>
    </div>
  )
}

