import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Mail } from "lucide-react"
import AuthProviders from "./AuthProviders"

const SignUpForm = () => {
	return (
		<div className="relative w-full h-[calc(100vh-8rem)]">
			<Card className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<span className="text-sm text-muted-foreground">Create your account for free</span>
				</CardHeader>
				<CardContent>
					<form className="space-y-4">
						<AuthProviders />
						<div className="flex items-center justify-center w-full gap-2">
							<div className="seperator-x" />
							<span className="text-sm text-muted-foreground">or</span>
							<div className="seperator-x" />
						</div>
						<div className="relative">
							<Input type="email" placeholder="example@gmail.com" />
							<Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
						</div>
						<div className="relative">
							<Input type="password" placeholder="password" />
							<Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
						</div>
						<Button type="submit" className="w-full">
							Sign Up
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default SignUpForm

