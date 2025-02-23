import { FoldersIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Folder = ({ folderName }: { folderName: string }) => {
  return (
	<Link href={`/folderName=${folderName}`} className='flex items-center gap-4 p-4 hover:bg-zinc-300/30'>
		<FoldersIcon/>
		<span className=''>
			{folderName}
		</span>
	</Link>
  )
}

export default Folder