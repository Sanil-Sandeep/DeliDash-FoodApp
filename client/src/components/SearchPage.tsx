import { useParams } from "react-router-dom"
import FilterPage from "./FilterPage";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "@/assets/hero_pizza.png"

const SearchPage = () => {
    const params = useParams();
    const [searchQuery, setSearchQuery] = useState<string>("");
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <FilterPage />
                <div className="flex-1">
                    {/* Search Input Field */}
                    <div className="flex items-center gap-2">
                        <Input
                            type="text"
                            value={searchQuery}
                            placeholder="Search by restaurant & cuisines"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button className="bg-orange hover:bg-hoverOrange">Search</Button>
                    </div>
                    {/* Search Items display here */}
                    <div>
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
                            <h1 className="font-medium text-lg">(2) Search result found</h1>
                            <div className="flex flex-wrap gap-2 md-4 md:mb-0">
                                {
                                    ["Biriyani", "Rice", "Hoppers"].map((selectedFilter: string, idx: number) => (
                                        <div key={idx} className="relative inline-flex items-center max-w-full">
                                            <Badge className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap" variant="outline">{selectedFilter}</Badge>
                                            <X
                                                size={16}
                                                className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Resturent Cards */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative">
                                    <AspectRatio ratio={16/6}>
                                        <img src={HeroImage} className="w-full h-full object-cover"/>
                                    </AspectRatio>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchPage