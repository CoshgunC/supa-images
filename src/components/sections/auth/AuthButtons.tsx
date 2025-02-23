import { Button } from "@/components/ui/button"

const AuthButtons = () => {
	return (
		<div className="flex gap-4">
			<Button variant="outline">
				Log In
			</Button>
			<Button variant="default">
				Sign Up
			</Button>
		</div>
	)
}

export default AuthButtons