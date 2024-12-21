import { Button } from './ui/button';

export type FilterOptionsState = {
  id:string;
  label:string;
};

const filterOptions: FilterOptionsState[] = [
  {id:"burger", label:"Burger"},
  {id:"biriyani", label:"Biriyani"},
  {id:"pizza", label:"Pizza"},
  {id:"rice", label:"Rice"},
  {id:"noodles", label:"Noodles"},
];

const FilterPage = () => {
  return (
    <div className='md:w-72'>
      <div className='flex items-center justify-between'>
        <h1 className='font-medium text-lg'>Filter by cuisines</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {
        filterOptions.map((option) => (
          <div key={option.id} className='flex items-center space-x-2 my-5'>
            
          </div>
        ))
      }
    </div>
  )
}

export default FilterPage