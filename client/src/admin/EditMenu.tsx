import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"

const EditMenu = ({ selectedMenu, editOpen, setEditOpen }: { selectedMenu: any, editOpen: boolean, setEditOpen: Dispatch<SetStateAction<boolean>> }) => {

  const [input, setInput] = useState<any>({
          name:"",
          description:"",
          price: 0,
          image: undefined
  });
  const loading = false;

  const changeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target
    setInput({...input, [name] : type == 'number' ? Number(value) : value});
  }

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    
  }

  useEffect(() => {
    setInput({
      name: selectedMenu?.name || "",
      description: selectedMenu?.description || "",
      price: selectedMenu?.price || 0,
      image: undefined,
    })
  },[selectedMenu])

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep your offerings fresh and exciting!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler} className="space-y-4">
                            <div>
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={changeEventHandler}
                                    placeholder="Enter menu name"
                                />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={changeEventHandler}
                                    placeholder="Enter menu description"
                                />
                            </div>
                            <div>
                                <Label>Price in (Rupees)</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    value={input.price}
                                    onChange={changeEventHandler}
                                    placeholder="Enter menu price"
                                />
                            </div>
                            <div>
                                <Label>Upload Menu Image</Label>
                                <Input
                                    type="file"
                                    name="image"
                                    onChange={(e) => setInput({...input, image:e.target.files?.[0] || undefined})}
                                    placeholder="Enter menu image"
                                />
                            </div>
                            <DialogFooter className="mt-5">
                                {
                                    loading ? (
                                        <Button disabled className="bg-orange hover:bg-hoverOrange">
                                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                            Please Wait
                                        </Button>
                                    ) : (
                                        <Button className="bg-orange hover:bg-hoverOrange">Submit</Button>
                                    )
                                }
                            </DialogFooter>
                        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditMenu