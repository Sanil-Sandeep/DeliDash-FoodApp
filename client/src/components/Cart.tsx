import { Minus, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"

const Cart = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
        <div className="flex justify-end">
            <Button variant="link">Clear All</Button>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Items</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Remove</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="" alt=""/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </TableCell>
                    <TableCell>Biriyani</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell>
                        <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                            <Button size={'icon'} variant={'outline'} className="rounded-full bg-gray-200"><Minus/></Button>
                            <Button size={'icon'} className="font-bold border-none" disabled variant={'outline'}>1</Button>
                            <Button size={'icon'} className="rounded-full bg-orange hover:bg-hoverOrange" variant={'outline'}><Plus/></Button>
                        </div>
                    </TableCell>
                    <TableCell>800</TableCell>
                    <TableCell className="text-right">
                        <Button size={'sm'} className="bg-orange hover:bg-hoverOrange">Remove</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="text-right">800</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    </div>
  )
}

export default Cart