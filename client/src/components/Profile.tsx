import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useRef, useState } from "react"

const Profile = () => {

    const imageRef = useRef<HTMLInputElement | null>(null);
    const [selectedProfilePicture, setSelecterProfilePicture] = useState<string>("");

    const fileChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setSelecterProfilePicture(result)
            }
        }
    }
    return (
        <form className="max-w-7xl mx-auto my-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
                        <AvatarImage />
                        <AvatarFallback>CN</AvatarFallback>
                        <input ref={imageRef} className="hidden" type="file" accept="image/*" onChange={fileChangeHandler}/>
                        <div onClick={() => imageRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer">
                            <Plus className="text-white w-8 h-8" />
                        </div>
                        </Avatar>
                </div>
            </div>
        </form>
    )
}

export default Profile