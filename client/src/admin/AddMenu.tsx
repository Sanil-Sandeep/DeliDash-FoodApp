import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddMenu