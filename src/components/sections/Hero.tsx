import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='text-center flex flex-col gap-4
		absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className=''>
				<h1 className="font-semibold text-6xl">Save, Edit, Share</h1>
				<p className=''>Easily save, edit, and share your favorite images with a click</p>
			</div>
			<div className='flex items-center justify-center w-full space-x-4'>
				<Link href="/gallery" className='w-1/3'>
					<Button className='w-full'>
						Gallery
					</Button>
				</Link>
				<Link href="supaimages.api" className='w-1/3'>
					<Button variant="secondary" className='w-full'>
						API Usage
					</Button>
				</Link>
			</div>
		</section>
	)
}

export default Hero