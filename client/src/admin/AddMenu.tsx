import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react"

const AddMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between">
            <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">Available Menus</h1>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button className="bg-orange hover:bg-hoverOrange">
                    <Plus className="mr-2"/>
                    Add Menus 
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add A New Menu</DialogTitle>
                    <DialogDescription>
                        Create a menu that will make your restaurant stand out.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter menu name"
                        />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter menu description"
                        />
                    </div>
                    <div>
                        <Label>Price in (Rupees)</Label>
                        <Input
                            type="text"
                            name="price"
                            placeholder="Enter menu price"
                        />
                    </div>
                    <div>
                        <Label>Upload Menu Image</Label>
                        <Input
                            type="file"
                            name="image"
                            placeholder="Enter menu image"
                        />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddMenu