import AuthButtons from "./auth/AuthButtons"
import { ThemeButton } from "./theme/ThemeButton"

const Header = () => {
	return (
		<header className="w-full h-32 p-4 flex items-center justify-between
	border-b-2 border-border">
			<span className="font-bold text-3xl">
				SupaImages
			</span>
			<div className="flex gap-4">
				<AuthButtons />
				<div className="seperator-y"/>
				<ThemeButton />
			</div>
		</header>
	)
}

export default Header