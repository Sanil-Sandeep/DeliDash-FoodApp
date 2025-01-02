import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react";
import { useState } from "react";

const Restaurant = () => {
  const [input, setInput] = useState({
    restaurantName:"",
    city:"",
    country:"",
    deliveryTime:0,
    cuisines:[],
    imageFile:undefined
  })
  const loading = false;
  const restaurantx = false;
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>
          <form action="">
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name */}
              <div>
                <Label>Restaurant Name</Label>
                <Input 
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>
              <div>
                <Label>City</Label>
                <Input 
                  type="text"
                  name="city"
                  placeholder="Enter your city name"
                />
              </div>
              <div>
                <Label>Country</Label>
                <Input 
                  type="text"
                  name="country"
                  placeholder="Enter your country name"
                />
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input 
                  type="text"
                  name="deliveryTime"
                  placeholder="Enter your restaurant name"
                />
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input 
                  type="text"
                  name="cuisines"
                  placeholder="Enter your cuisimes"
                />
              </div>
              <div>
                <Label>Upload Restaurant Banner</Label>
                <Input 
                  type="file"
                  accept="image/*"
                  name="image"
                />
              </div>
            </div>
            <div className="my-5 w-fit">
              {
                loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    Add Your Restaurant
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    { restaurantx ? 'Update Your Restaurant' : 'Add Your Restaurant'}
                  </Button>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Restaurant