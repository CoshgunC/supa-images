"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Dot, Plus } from "lucide-react"
import { DragDropZone } from "./DragAndDrop"
import Form from "next/form"

export default function UploadImage() {
	const [file, setFile] = useState<File | null>(null)
	const [imageTitle, setImageTitle] = useState("")

	const handleFileAccepted = (acceptedFile: File) => {
		setFile(acceptedFile)
	}

	const handleUpload = () => {
		if (file && imageTitle) {
			// Here you would typically handle the file upload
			// For example, you could use FormData to send the file to your server
			console.log("Uploading file:", file.name)
			console.log("Image title:", imageTitle)
			// Reset the state after upload
			setFile(null)
			setImageTitle("")
		}
	}

	const submitImage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const response = await fetch("/api/gallery", {
			method: "POST",
			body: formData,
		})
		console.log("Server response:", await response.json())
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<Plus className="mr-2 h-4 w-4" />
					<span>Upload Image</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Upload Image</DialogTitle>
					<DialogDescription className="flex flex-col">
						<span>Upload your image here by dragging the image to field below or choosing the image</span>
						<span>
							<b className="flex items-center text-yellow-500">
								<Dot /> Warning!
							</b>
							Uploading images more than 5MB may take more time than expected
						</span>
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Input
						id="imageTitle"
						placeholder="Image Title"
						value={imageTitle}
						onChange={(e) => setImageTitle(e.target.value)}
						className="w-full col-span-3"
					/>
					<DragDropZone onFileAccepted={handleFileAccepted} />
					{file && (
						<div className="text-sm text-gray-600">
							Selected file: {file.name} ({(file.size / 1024 ).toFixed(2)} KB)
						</div>
					)}
				</div>
				<Form method={submitImage}>
					<Button type="submit" onClick={handleUpload} disabled={!file}>
						Upload image
					</Button>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

