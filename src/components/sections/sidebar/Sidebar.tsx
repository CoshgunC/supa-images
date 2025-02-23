import { baseFolders } from "@/lib/constants"
import Folder from "./Folder"

export default async function SidebarGallery() {
	return (
		<aside className="min-w-[250px] max-w-[350px] w-full h-screen
		flex flex-col border-r border-border">
			{baseFolders.map((folder, index) => (
				<Folder key={index} folderName={folder.text} />
			))}
		</aside>
	)
}