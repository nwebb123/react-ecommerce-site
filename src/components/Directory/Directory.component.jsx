//using .. below in pathing to move 2 directories up from current file. Very useful.    
import CategoryItem from '../Category-Item/Category-Item.component';
import './directory.styles.scss';

const Directory = ({categories}) => {

    return (
        <div className='directory-container' >
            {categories.map((category) => (

                <CategoryItem key={category.id} category={category} />

            ))}

        </div>
    );
};

export default Directory;
