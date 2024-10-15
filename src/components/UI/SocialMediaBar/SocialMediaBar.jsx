import { SocialMediaIcon } from "./SocialMediaIcon/SocialMediaIcon"

import Facebook from "../../../assets/images/Facebook.png"
import WhatsApp from "../../../assets/images/WhatsApp.png"
import Instagram from "../../../assets/images/Instagram.png"

export const SocialMediaBar = () => {
	return (
		<div>
			<SocialMediaIcon icon={Facebook} alt="Facebook"/>
			<SocialMediaIcon icon={WhatsApp} alt="WhatsApp"/>
			<SocialMediaIcon icon={Instagram} alt="Instagram"/>
		</div>
	)
}