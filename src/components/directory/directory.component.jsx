import CategoryItem from "../category-items/category-item";
import './directory.styles.scss'

function Directory ({categories}){
    const renderedCategories = categories.map((category)=>{
    return(
    <CategoryItem key={category.id} category={category}/>
    )
  })

  return (
   <div className="directory-container">
   {renderedCategories}
   </div>
  );
}

export default Directory