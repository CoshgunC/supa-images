import { Button } from "@/components/ui/button"
import { Github, Gitlab } from "lucide-react"

const AuthProvider = ({ text, icon}) => {
	return (
		<Button className="w-full" variant="outline">
			{icon}
			{text}
		</Button>
	)
}

const authProviders = [
	{
		text: 'Github',
		icon: <Github/>
	},
	{
		text: 'Gitlab',
		icon: <Gitlab/>
	},
]

const AuthProviders = () => {
  return (
	<div className="flex items-center justify-between gap-4">
		{authProviders.map((provider, index) => (
			<AuthProvider key={index} text={provider.text} icon={provider.icon}/>
		))}
	</div>
  )
}

export default AuthProviders