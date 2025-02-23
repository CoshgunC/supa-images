import "../globals.css"
import { Metadata } from "next"
import SidebarGallery from "@/components/sections/sidebar/Sidebar"

export const metadata: Metadata = {
	title: "Gallery",
	description: "Gallery",
}
export default function GalleryLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-background text-foreground flex w-screen h-screen">
				<SidebarGallery/>
				{children}
			</body>
		</html>
	)
}