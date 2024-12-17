import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import React, { useRef, useState } from "react"
import { Input } from "./ui/input";

const Profile = () => {

    const [profileData, setProfileData] = useState({
        fullname:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        country:"",
        profilePicture:"",
    })

    const imageRef = useRef<HTMLInputElement | null>(null);
    const [selectedProfilePicture, setSelecterProfilePicture] = useState<string>("");

    const fileChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setSelecterProfilePicture(result);
                setProfileData((prevData) => ({
                    ...prevData,
                    profilePicture:result
                }))
            };
            reader.readAsDataURL(file);
        }
    }

    const changeHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfileData({...profileData, [name]:value});
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
                        <Input
                            type="text"
                            name={profileData.fullname}
                            onChange={changeHandler}
                            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
                        />
                </div>
            </div>
        </form>
    )
}

export default Profile